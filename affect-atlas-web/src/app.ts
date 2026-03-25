/**
 * App shell -- builds the DOM layout and subscribes to store changes.
 * Layout:
 *   No selection: preview area (55%) + wheel (45%)
 *   With advisory: header bar + scrollable advisory + wheel (30%)
 *   Without advisory: preview area (55%) + wheel (45%)
 */

import type { PrimaryEmotionType } from '@/types/emotion';
import { emotionStore } from '@/store/emotionStore';
import { settingsStore } from '@/store/settingsStore';
import { getEmotionThemeOrFallback } from '@/constants/designTokens';
import { getEmotionWordsOrFallback, getEmotionFeelOrFallback } from '@/constants/emotionWords';
import { isExtraEmotion, getExtraEmotion } from '@/constants/extraEmotions';
import { applyTheme, applyDefaultTheme } from '@/ui/background';
import { mountWheel } from '@/ui/wheel';
import { openExport } from '@/ui/exportPanel';
import { renderAdvisory } from '@/ui/advisoryPanel';
import { getAdvisory, type EmotionAdvisory } from '@/constants/advisoryData';
import { createSettingsToggle } from '@/ui/settingsToggle';
import { mountChipTray, updateChips, hideChips, refreshChipActive } from '@/ui/extraChips';
import { el } from '@/utils/dom';

// Import advisory data (self-registers on import)
import '@/constants/trustAdvisory';
import '@/constants/joyAdvisory';
import '@/constants/fearAdvisory';
import '@/constants/angerAdvisory';
import '@/constants/sadnessAdvisory';
import '@/constants/surpriseAdvisory';
import '@/constants/disgustAdvisory';
import '@/constants/confusionAdvisory';
import '@/constants/anticipationAdvisory';
import '@/constants/contentmentAdvisory';
import '@/constants/appalledAdvisory';
import '@/constants/guiltAdvisory';
import '@/constants/aweAdvisory';
import '@/constants/inspirationAdvisory';
import '@/constants/embarrassmentAdvisory';
import '@/constants/depressionAdvisory';
import '@/constants/lonelinessAdvisory';
import '@/constants/jealousyAdvisory';
import '@/constants/frightAdvisory';
import '@/constants/frustrationAdvisory';
import '@/constants/prideAdvisory';
import '@/constants/loveAdvisory';
import '@/constants/submissionAdvisory';
import '@/constants/alarmAdvisory';
import '@/constants/disappointmentAdvisory';
import '@/constants/remorseAdvisory';
import '@/constants/contemptAdvisory';
import '@/constants/aggressivenessAdvisory';
import '@/constants/optimismAdvisory';

let previewArea: HTMLElement;
let emotionLabel: HTMLElement;
let intensityLabel: HTMLElement;
let feelText: HTMLElement;
let wordCloud: HTMLElement;
let paletteStrip: HTMLElement;
let wheelContainer: HTMLElement;
let advisoryScroll: HTMLElement;
let headerBar: HTMLElement;
let headerLabel: HTMLElement;

let currentMode: 'default' | 'preview' | 'advisory' = 'default';

// Variant selection -- local UI state, not persisted
let currentVariantIndex = -1;  // -1 = base, 0+ = variant index
let currentAdvisoryEmotion: string | null = null;

function buildLayout(): void {
  const app = document.getElementById('app')!;
  app.innerHTML = '';

  // Header bar (hidden by default, shown in advisory mode)
  headerLabel = el('div', { className: 'header-label' }, 'AffectAtlas');
  const exportBtn = el('button', { className: 'header-export-btn' }, 'Export');
  exportBtn.addEventListener('click', openExport);
  const settingsBtn = createSettingsToggle();
  const headerRight = el('div', { className: 'header-right' }, settingsBtn, exportBtn);
  headerBar = el('div', { className: 'header-bar header-bar-hidden' }, headerLabel, headerRight);

  // Preview area (default + non-advisory mode)
  emotionLabel = el('div', { className: 'emotion-label' }, 'AffectAtlas');
  intensityLabel = el('div', { className: 'intensity-label' }, 'rotate the wheel to select');
  feelText = el('div', { className: 'feel-text' });
  wordCloud = el('div', { className: 'word-cloud' });
  paletteStrip = el('div', { className: 'palette-strip' });

  const oldExportBtn = el('button', { className: 'export-btn' }, 'Export');
  oldExportBtn.addEventListener('click', openExport);
  const previewSettingsBtn = createSettingsToggle();

  previewArea = el('div', {
    className: 'preview-area',
  }, oldExportBtn, previewSettingsBtn, emotionLabel, intensityLabel, feelText, wordCloud, paletteStrip);

  // Advisory scroll area (hidden by default)
  advisoryScroll = el('div', { className: 'advisory-scroll advisory-scroll-hidden' });

  // Wheel container
  wheelContainer = el('div', {
    className: 'wheel-container',
    id: 'wheel-container',
  });

  app.appendChild(headerBar);
  app.appendChild(previewArea);
  app.appendChild(advisoryScroll);
  app.appendChild(wheelContainer);
}

function setMode(mode: 'default' | 'preview' | 'advisory'): void {
  if (mode === currentMode) return;
  currentMode = mode;

  if (mode === 'advisory') {
    headerBar.classList.remove('header-bar-hidden');
    previewArea.classList.add('preview-area-hidden');
    advisoryScroll.classList.remove('advisory-scroll-hidden');
    wheelContainer.classList.add('wheel-container-small');
  } else {
    headerBar.classList.add('header-bar-hidden');
    previewArea.classList.remove('preview-area-hidden');
    advisoryScroll.classList.add('advisory-scroll-hidden');
    wheelContainer.classList.remove('wheel-container-small');
  }
}

function renderWordCloud(words: string[], font: string): void {
  wordCloud.innerHTML = '';
  const sizes = [1.4, 1.1, 0.95, 1.25, 0.85, 1.15, 0.9, 1.0];
  const opacities = [1, 0.8, 0.65, 0.9, 0.55, 0.75, 0.6, 0.7];

  words.forEach((word, i) => {
    const span = el('span', {
      className: 'word-cloud-item',
      style: `font-size:${sizes[i % sizes.length]}rem;opacity:${opacities[i % opacities.length]};font-family:'${font}',sans-serif;`,
    }, word);
    wordCloud.appendChild(span);
  });
}

function renderPalette(palette: [string, string, string, string, string]): void {
  paletteStrip.innerHTML = '';
  for (const color of palette) {
    const swatch = el('div', {
      className: 'palette-swatch',
      style: `background-color:${color};`,
    });
    paletteStrip.appendChild(swatch);
  }
}

/**
 * Determine which primary emotion to show chips for.
 * If the selected emotion is an extra, use its parent primary.
 * If it's a primary emotion itself, use it directly.
 * If it's a dyad, return null (no chips for dyads).
 */
function getChipPrimary(emotion: string): PrimaryEmotionType | null {
  if (isExtraEmotion(emotion)) {
    const extra = getExtraEmotion(emotion);
    return extra?.parent ?? null;
  }
  const primaries: PrimaryEmotionType[] = [
    'joy', 'trust', 'fear', 'surprise',
    'sadness', 'disgust', 'anger', 'anticipation',
  ];
  if (primaries.includes(emotion as PrimaryEmotionType)) {
    return emotion as PrimaryEmotionType;
  }
  return null; // dyad -- no chips
}

function renderAdvisoryWithVariants(advisory: EmotionAdvisory): void {
  const variants = advisory.variants ?? [];
  const hasVariantOptions = variants.length > 0;

  const activeAdvisory = currentVariantIndex >= 0 && currentVariantIndex < variants.length
    ? variants[currentVariantIndex].advisory
    : advisory;

  advisoryScroll.innerHTML = '';

  if (hasVariantOptions) {
    const tray = el('div', { className: 'variant-chips-tray' });

    // Base chip
    const baseChip = el('button', {
      className: `variant-chip${currentVariantIndex === -1 ? ' variant-chip-active' : ''}`,
    }, advisory.label);
    baseChip.addEventListener('click', () => {
      currentVariantIndex = -1;
      renderAdvisoryWithVariants(advisory);
      advisoryScroll.scrollTop = 0;
    });
    tray.appendChild(baseChip);

    // Variant chips
    for (let i = 0; i < variants.length; i++) {
      const chip = el('button', {
        className: `variant-chip${currentVariantIndex === i ? ' variant-chip-active' : ''}`,
      }, variants[i].variantLabel);
      chip.addEventListener('click', () => {
        currentVariantIndex = i;
        renderAdvisoryWithVariants(advisory);
        advisoryScroll.scrollTop = 0;
      });
      tray.appendChild(chip);
    }

    advisoryScroll.appendChild(tray);

    // Staggered entrance animation
    const chips = tray.querySelectorAll('.variant-chip');
    chips.forEach((c, idx) => {
      setTimeout(() => c.classList.add('variant-chip-visible'), 50 + idx * 60);
    });
  }

  advisoryScroll.appendChild(renderAdvisory(activeAdvisory));
}

function onStoreChange(): void {
  const { primaryEmotion, intensity } = emotionStore.get();
  const displayMode = settingsStore.get().extraDisplayMode;

  if (!primaryEmotion) {
    applyDefaultTheme();
    setMode('default');
    emotionLabel.textContent = 'AffectAtlas';
    intensityLabel.textContent = 'rotate the wheel to select';
    feelText.textContent = '';
    wordCloud.innerHTML = '';
    paletteStrip.innerHTML = '';
    advisoryScroll.innerHTML = '';
    hideChips();
    return;
  }

  const theme = getEmotionThemeOrFallback(primaryEmotion, intensity);
  const words = getEmotionWordsOrFallback(primaryEmotion);
  const feel = getEmotionFeelOrFallback(primaryEmotion);
  const advisory = getAdvisory(primaryEmotion);

  const labelText = primaryEmotion.charAt(0).toUpperCase() + primaryEmotion.slice(1);
  applyTheme(theme);

  // Update chips
  if (displayMode === 'chips') {
    const chipPrimary = getChipPrimary(primaryEmotion);
    updateChips(chipPrimary);
    refreshChipActive();
  } else {
    hideChips();
  }

  if (advisory && advisory.deepened) {
    // Advisory mode: show scrollable advisory
    setMode('advisory');
    headerLabel.textContent = labelText;

    // Reset variant when switching emotions
    if (currentAdvisoryEmotion !== primaryEmotion) {
      currentVariantIndex = -1;
      currentAdvisoryEmotion = primaryEmotion;
    }

    renderAdvisoryWithVariants(advisory);
    advisoryScroll.scrollTop = 0;
  } else {
    // Preview mode: show basic info
    setMode('preview');
    emotionLabel.textContent = labelText;
    intensityLabel.textContent = intensity;
    feelText.textContent = feel;
    renderWordCloud(words, theme.typography.headlineFont);
    renderPalette(theme.colors.palette);
    advisoryScroll.innerHTML = '';
  }
}

export function initApp(): void {
  buildLayout();

  // Mount chip tray between advisory/preview and wheel
  mountChipTray(document.getElementById('app')!);

  emotionStore.subscribe(onStoreChange);
  settingsStore.subscribe(onStoreChange);

  // Mount the emotion wheel
  mountWheel(wheelContainer);

  // Apply initial state
  onStoreChange();

  // Expose store to console for testing
  (window as unknown as Record<string, unknown>)['store'] = emotionStore;
}

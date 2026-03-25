/**
 * Horizontal row of pill chips for extra emotions.
 * Shows extras related to the currently selected primary emotion.
 * Positioned between the preview/advisory area and the wheel.
 */

import type { PrimaryEmotionType } from '@/types/emotion';
import { getExtrasForPrimary, getExtraEmotion, isExtraEmotion } from '@/constants/extraEmotions';
import { emotionStore } from '@/store/emotionStore';
import { el } from '@/utils/dom';

let trayEl: HTMLElement | null = null;
let currentPrimary: PrimaryEmotionType | null = null;

/**
 * Create and mount the chip tray into the given container.
 */
export function mountChipTray(container: HTMLElement): void {
  trayEl = el('div', { className: 'extra-chips-tray extra-chips-tray-hidden' });
  container.appendChild(trayEl);
}

/**
 * Update the chip tray for the given primary emotion.
 * Pass null to hide the tray.
 */
export function updateChips(primary: PrimaryEmotionType | null): void {
  if (!trayEl) return;

  // Same primary -- no rebuild needed
  if (primary === currentPrimary) return;
  currentPrimary = primary;

  // Clear existing chips
  trayEl.innerHTML = '';

  if (!primary) {
    trayEl.classList.add('extra-chips-tray-hidden');
    return;
  }

  const extras = getExtrasForPrimary(primary);
  if (extras.length === 0) {
    trayEl.classList.add('extra-chips-tray-hidden');
    return;
  }

  // Build chips
  const currentEmotion = emotionStore.get().primaryEmotion;

  for (let i = 0; i < extras.length; i++) {
    const extra = extras[i];
    const isActive = currentEmotion === extra.type;
    const chip = el('button', {
      className: `extra-chip ${isActive ? 'extra-chip-active' : ''}`,
    }, extra.label);

    chip.addEventListener('click', () => {
      emotionStore.setPrimaryEmotion(extra.type);
    });

    trayEl.appendChild(chip);

    // Staggered entrance animation
    setTimeout(() => {
      chip.classList.add('extra-chip-visible');
    }, 50 + i * 60);
  }

  trayEl.classList.remove('extra-chips-tray-hidden');
}

/**
 * Mark the active chip based on current store state.
 */
export function refreshChipActive(): void {
  if (!trayEl) return;
  const current = emotionStore.get().primaryEmotion;
  const chips = trayEl.querySelectorAll('.extra-chip');
  const extras = currentPrimary ? getExtrasForPrimary(currentPrimary) : [];

  chips.forEach((chip, i) => {
    if (i < extras.length && current === extras[i].type) {
      chip.classList.add('extra-chip-active');
    } else {
      chip.classList.remove('extra-chip-active');
    }
  });
}

/**
 * Hide the chip tray completely.
 */
export function hideChips(): void {
  if (!trayEl) return;
  trayEl.classList.add('extra-chips-tray-hidden');
  currentPrimary = null;
}

/**
 * Determine the parent primary for an emotion (if it's an extra).
 */
export function getParentPrimary(emotion: string): PrimaryEmotionType | null {
  if (!isExtraEmotion(emotion)) return null;
  const extra = getExtraEmotion(emotion);
  return extra?.parent ?? null;
}

/**
 * Slide-up export panel with 9 format tabs.
 * CSS / JSON / Swift / Kotlin / AI / Figma / Tailwind / SCSS / Tokens
 * Uses navigator.clipboard for copy.
 */

import { emotionStore } from '@/store/emotionStore';
import { getEmotionThemeOrFallback } from '@/constants/designTokens';
import { getDesignGuidance } from '@/constants/designGuidance';
import { generateDesignSystem, generateAIPrompt } from '@/engine/mapping/themeMapper';
import { el } from '@/utils/dom';

type ExportFormat = 'css' | 'json' | 'swift' | 'kotlin' | 'ai' | 'figma' | 'tailwind' | 'scss' | 'tokens';

let panelEl: HTMLElement | null = null;
let backdropEl: HTMLElement | null = null;
let codeEl: HTMLElement;
let copyBtn: HTMLElement;
let selectedFormat: ExportFormat = 'css';

// ─── Helpers ────────────────────────────────────────

function hexToArgb(hex: string): string {
  const h = hex.replace('#', '');
  return `0xFF${h.toUpperCase()}`;
}

function getThemeData() {
  const { primaryEmotion, intensity } = emotionStore.get();
  if (!primaryEmotion) return null;
  const theme = getEmotionThemeOrFallback(primaryEmotion, intensity);
  const guidance = getDesignGuidance(primaryEmotion, intensity);
  return { primaryEmotion, intensity, theme, guidance };
}

// ─── Export generators ──────────────────────────────

function generateCSS(): string {
  const d = getThemeData();
  if (!d) return '';
  const { primaryEmotion, intensity, theme, guidance } = d;
  const ds = generateDesignSystem(primaryEmotion, intensity);
  const { semantic, palette } = ds.colors;

  const lines: string[] = [
    ':root {',
    `  /* ${primaryEmotion} - ${intensity} */`,
    `  /* Source: ${theme.source} */`,
    '',
    '  /* Colors */',
    `  --color-primary: ${semantic.primary};`,
    `  --color-secondary: ${semantic.secondary};`,
    `  --color-accent: ${semantic.accent};`,
    `  --color-background: ${semantic.background};`,
    `  --color-surface: ${semantic.surface};`,
    `  --color-text: ${semantic.text};`,
    `  --color-text-secondary: ${semantic.textSecondary};`,
    '',
    '  /* Palette */',
  ];
  Object.entries(palette).forEach(([shade, color]) => {
    lines.push(`  --color-${shade}: ${color};`);
  });
  lines.push('');
  lines.push('  /* Typography */');
  lines.push(`  --font-headline: "${theme.typography.headlineFont}", sans-serif;`);
  lines.push(`  --font-body: "${theme.typography.bodyFont}", sans-serif;`);
  lines.push('');
  lines.push('  /* Shapes */');
  lines.push(`  --border-radius: ${theme.shapes.borderRadius}px;`);
  lines.push(`  --border-radius-lg: ${theme.shapes.borderRadiusLg}px;`);
  lines.push(`  --border-radius-xl: ${theme.shapes.borderRadiusXl}px;`);
  lines.push('}');
  if (guidance) {
    lines.push('');
    lines.push(`/* Creative North Star: "${guidance.northStar}" */`);
    lines.push(`/* ${guidance.philosophy} */`);
  }
  return lines.join('\n');
}

function generateJSON(): string {
  const d = getThemeData();
  if (!d) return '';
  const { primaryEmotion, intensity, theme, guidance } = d;
  return JSON.stringify({
    emotion: primaryEmotion,
    intensity,
    source: theme.source,
    isDark: theme.isDark,
    colors: theme.colors,
    typography: theme.typography,
    shapes: theme.shapes,
    ...(guidance ? { designGuidance: guidance } : {}),
  }, null, 2);
}

function generateSwift(): string {
  const d = getThemeData();
  if (!d) return '';
  const { primaryEmotion, intensity, theme } = d;
  const c = theme.colors;
  return [
    'import SwiftUI',
    '',
    `// ${primaryEmotion} - ${intensity}`,
    `// Source: ${theme.source}`,
    'extension Color {',
    `    static let emotionPrimary = Color(hex: "${c.primary}")`,
    `    static let emotionSecondary = Color(hex: "${c.secondary}")`,
    `    static let emotionAccent = Color(hex: "${c.accent}")`,
    `    static let emotionBackground = Color(hex: "${c.background}")`,
    `    static let emotionSurface = Color(hex: "${c.surface}")`,
    `    static let emotionText = Color(hex: "${c.text}")`,
    '}',
    '',
    'struct EmotionTypography {',
    `    static let headlineFont = "${theme.typography.headlineFont}"`,
    `    static let bodyFont = "${theme.typography.bodyFont}"`,
    '}',
    '',
    'struct EmotionShapes {',
    `    static let cornerRadius: CGFloat = ${theme.shapes.borderRadius}`,
    `    static let cornerRadiusLg: CGFloat = ${theme.shapes.borderRadiusLg}`,
    `    static let cornerRadiusXl: CGFloat = ${theme.shapes.borderRadiusXl}`,
    '}',
  ].join('\n');
}

function generateKotlin(): string {
  const d = getThemeData();
  if (!d) return '';
  const { primaryEmotion, intensity, theme } = d;
  const c = theme.colors;
  return [
    'import androidx.compose.ui.graphics.Color',
    'import androidx.compose.foundation.shape.RoundedCornerShape',
    'import androidx.compose.ui.unit.dp',
    '',
    `// ${primaryEmotion} - ${intensity}`,
    `// Source: ${theme.source}`,
    '',
    'object EmotionColors {',
    `    val Primary = Color(${hexToArgb(c.primary)})`,
    `    val Secondary = Color(${hexToArgb(c.secondary)})`,
    `    val Accent = Color(${hexToArgb(c.accent)})`,
    `    val Background = Color(${hexToArgb(c.background)})`,
    `    val Surface = Color(${hexToArgb(c.surface)})`,
    `    val Text = Color(${hexToArgb(c.text)})`,
    `    val TextSecondary = Color(${hexToArgb(c.textSecondary)})`,
    '}',
    '',
    'object EmotionTypography {',
    `    const val headlineFont = "${theme.typography.headlineFont}"`,
    `    const val bodyFont = "${theme.typography.bodyFont}"`,
    '}',
    '',
    'object EmotionShapes {',
    `    val cornerRadius = RoundedCornerShape(${theme.shapes.borderRadius}.dp)`,
    `    val cornerRadiusLg = RoundedCornerShape(${theme.shapes.borderRadiusLg}.dp)`,
    `    val cornerRadiusXl = RoundedCornerShape(${theme.shapes.borderRadiusXl}.dp)`,
    '}',
  ].join('\n');
}

function generateAI(): string {
  const { primaryEmotion, intensity } = emotionStore.get();
  if (!primaryEmotion) return '';
  return generateAIPrompt(primaryEmotion, intensity);
}

function generateFigma(): string {
  const d = getThemeData();
  if (!d) return '';
  const { primaryEmotion, intensity, theme, guidance } = d;
  const c = theme.colors;

  const tokens: Record<string, unknown> = {
    color: {
      primary: { value: c.primary, type: 'color' },
      secondary: { value: c.secondary, type: 'color' },
      accent: { value: c.accent, type: 'color' },
      background: { value: c.background, type: 'color' },
      surface: { value: c.surface, type: 'color' },
      text: { value: c.text, type: 'color' },
      textSecondary: { value: c.textSecondary, type: 'color' },
    },
    palette: {} as Record<string, { value: string; type: string }>,
    fontFamilies: {
      headline: { value: theme.typography.headlineFont, type: 'fontFamilies' },
      body: { value: theme.typography.bodyFont, type: 'fontFamilies' },
    },
    borderRadius: {
      base: { value: `${theme.shapes.borderRadius}px`, type: 'borderRadius' },
      lg: { value: `${theme.shapes.borderRadiusLg}px`, type: 'borderRadius' },
      xl: { value: `${theme.shapes.borderRadiusXl}px`, type: 'borderRadius' },
    },
  };

  // Add palette colors
  const paletteTokens = tokens.palette as Record<string, { value: string; type: string }>;
  c.palette.forEach((color: string, i: number) => {
    paletteTokens[`swatch-${i + 1}`] = { value: color, type: 'color' };
  });

  const output: Record<string, unknown> = {
    [`${primaryEmotion}-${intensity}`]: tokens,
  };

  if (guidance) {
    (output as Record<string, unknown>)['_metadata'] = {
      northStar: guidance.northStar,
      philosophy: guidance.philosophy,
    };
  }

  return JSON.stringify(output, null, 2);
}

function generateTailwind(): string {
  const d = getThemeData();
  if (!d) return '';
  const { primaryEmotion, intensity, theme, guidance } = d;
  const c = theme.colors;

  const lines: string[] = [
    `// ${primaryEmotion} - ${intensity}`,
    `// Source: ${theme.source}`,
  ];
  if (guidance) {
    lines.push(`// Creative North Star: "${guidance.northStar}"`);
  }
  lines.push(
    '',
    'module.exports = {',
    '  theme: {',
    '    extend: {',
    '      colors: {',
    `        primary: '${c.primary}',`,
    `        secondary: '${c.secondary}',`,
    `        accent: '${c.accent}',`,
    `        background: '${c.background}',`,
    `        surface: '${c.surface}',`,
    `        text: '${c.text}',`,
    `        'text-secondary': '${c.textSecondary}',`,
    '      },',
    '      fontFamily: {',
    `        headline: ['"${theme.typography.headlineFont}"', 'sans-serif'],`,
    `        body: ['"${theme.typography.bodyFont}"', 'sans-serif'],`,
    '      },',
    '      borderRadius: {',
    `        DEFAULT: '${theme.shapes.borderRadius}px',`,
    `        lg: '${theme.shapes.borderRadiusLg}px',`,
    `        xl: '${theme.shapes.borderRadiusXl}px',`,
    '      },',
    '    },',
    '  },',
    '}',
  );
  return lines.join('\n');
}

function generateSCSS(): string {
  const d = getThemeData();
  if (!d) return '';
  const { primaryEmotion, intensity, theme, guidance } = d;
  const c = theme.colors;

  const lines: string[] = [
    `// ${primaryEmotion} - ${intensity}`,
    `// Source: ${theme.source}`,
  ];
  if (guidance) {
    lines.push(`// Creative North Star: "${guidance.northStar}"`);
  }
  lines.push(
    '',
    '// Colors',
    `$color-primary: ${c.primary};`,
    `$color-secondary: ${c.secondary};`,
    `$color-accent: ${c.accent};`,
    `$color-background: ${c.background};`,
    `$color-surface: ${c.surface};`,
    `$color-text: ${c.text};`,
    `$color-text-secondary: ${c.textSecondary};`,
    '',
    '// Palette',
  );
  c.palette.forEach((color: string, i: number) => {
    lines.push(`$palette-${i + 1}: ${color};`);
  });
  lines.push(
    '',
    '// Typography',
    `$font-headline: "${theme.typography.headlineFont}", sans-serif;`,
    `$font-body: "${theme.typography.bodyFont}", sans-serif;`,
    '',
    '// Shapes',
    `$border-radius: ${theme.shapes.borderRadius}px;`,
    `$border-radius-lg: ${theme.shapes.borderRadiusLg}px;`,
    `$border-radius-xl: ${theme.shapes.borderRadiusXl}px;`,
    `$corner-style: "${theme.shapes.cornerStyle}";`,
    '',
    `$is-dark: ${theme.isDark};`,
  );
  return lines.join('\n');
}

function generateTokens(): string {
  const d = getThemeData();
  if (!d) return '';
  const { primaryEmotion, intensity, theme, guidance } = d;
  const c = theme.colors;

  const dtcg: Record<string, unknown> = {
    $description: `${primaryEmotion} - ${intensity} (Source: ${theme.source})`,
    color: {
      primary: { $value: c.primary, $type: 'color' },
      secondary: { $value: c.secondary, $type: 'color' },
      accent: { $value: c.accent, $type: 'color' },
      background: { $value: c.background, $type: 'color' },
      surface: { $value: c.surface, $type: 'color' },
      text: { $value: c.text, $type: 'color' },
      textSecondary: { $value: c.textSecondary, $type: 'color' },
    },
    fontFamily: {
      headline: { $value: theme.typography.headlineFont, $type: 'fontFamily' },
      body: { $value: theme.typography.bodyFont, $type: 'fontFamily' },
    },
    borderRadius: {
      base: { $value: `${theme.shapes.borderRadius}px`, $type: 'dimension' },
      lg: { $value: `${theme.shapes.borderRadiusLg}px`, $type: 'dimension' },
      xl: { $value: `${theme.shapes.borderRadiusXl}px`, $type: 'dimension' },
    },
    cornerStyle: { $value: theme.shapes.cornerStyle, $type: 'string' },
    isDark: { $value: theme.isDark, $type: 'boolean' },
  };

  if (guidance) {
    dtcg['$extensions'] = {
      'com.affectatlas': {
        northStar: guidance.northStar,
        philosophy: guidance.philosophy,
        dos: guidance.dos,
        donts: guidance.donts,
      },
    };
  }

  return JSON.stringify(dtcg, null, 2);
}

function getContent(): string {
  switch (selectedFormat) {
    case 'css': return generateCSS();
    case 'json': return generateJSON();
    case 'swift': return generateSwift();
    case 'kotlin': return generateKotlin();
    case 'ai': return generateAI();
    case 'figma': return generateFigma();
    case 'tailwind': return generateTailwind();
    case 'scss': return generateSCSS();
    case 'tokens': return generateTokens();
  }
}

// ─── Panel UI ──────────────────────────────────────

function buildPanel(): HTMLElement {
  const formats: { key: ExportFormat; label: string }[] = [
    { key: 'css', label: 'CSS' },
    { key: 'json', label: 'JSON' },
    { key: 'swift', label: 'Swift' },
    { key: 'kotlin', label: 'Kotlin' },
    { key: 'ai', label: 'AI' },
    { key: 'figma', label: 'Figma' },
    { key: 'tailwind', label: 'Tailwind' },
    { key: 'scss', label: 'SCSS' },
    { key: 'tokens', label: 'Tokens' },
  ];

  const tabs = el('div', { className: 'export-tabs' });
  for (const fmt of formats) {
    const tab = el('button', {
      className: `export-tab ${fmt.key === selectedFormat ? 'export-tab-active' : ''}`,
      'data-format': fmt.key,
    }, fmt.label);
    tab.addEventListener('click', () => {
      selectedFormat = fmt.key;
      updateTabs();
      codeEl.textContent = getContent();
    });
    tabs.appendChild(tab);
  }

  codeEl = el('pre', { className: 'export-code' }, getContent());

  copyBtn = el('button', { className: 'export-copy-btn' }, 'Copy to clipboard');
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(getContent());
      copyBtn.textContent = 'Copied';
      setTimeout(() => {
        copyBtn.textContent = 'Copy to clipboard';
      }, 1500);
    } catch {
      copyBtn.textContent = 'Failed';
    }
  });

  const panel = el('div', { className: 'export-panel' },
    el('div', { className: 'export-header' },
      el('span', { className: 'export-title' }, 'Export'),
      (() => {
        const closeBtn = el('button', { className: 'export-close' }, 'x');
        closeBtn.addEventListener('click', closeExport);
        return closeBtn;
      })(),
    ),
    tabs,
    codeEl,
    copyBtn,
  );

  return panel;
}

function updateTabs(): void {
  if (!panelEl) return;
  const allTabs = panelEl.querySelectorAll('.export-tab');
  allTabs.forEach(tab => {
    const el = tab as HTMLElement;
    if (el.dataset.format === selectedFormat) {
      el.classList.add('export-tab-active');
    } else {
      el.classList.remove('export-tab-active');
    }
  });
}

// ─── Public API ────────────────────────────────────

export function openExport(): void {
  if (panelEl) return;

  const { primaryEmotion } = emotionStore.get();
  if (!primaryEmotion) return;

  backdropEl = el('div', { className: 'export-backdrop' });
  backdropEl.addEventListener('click', closeExport);
  document.body.appendChild(backdropEl);

  panelEl = buildPanel();
  document.body.appendChild(panelEl);

  // Trigger slide-up animation
  requestAnimationFrame(() => {
    backdropEl?.classList.add('export-backdrop-visible');
    panelEl?.classList.add('export-panel-visible');
  });
}

export function closeExport(): void {
  if (panelEl) {
    panelEl.classList.remove('export-panel-visible');
    backdropEl?.classList.remove('export-backdrop-visible');
    setTimeout(() => {
      panelEl?.remove();
      backdropEl?.remove();
      panelEl = null;
      backdropEl = null;
    }, 300);
  }
}

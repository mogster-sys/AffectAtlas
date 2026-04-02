/**
 * Slide-up export panel with 9 format tabs.
 * CSS / JSON / Swift / Kotlin / AI / Figma / Tailwind / SCSS / Tokens
 * Uses navigator.clipboard for copy.
 */

import { emotionStore } from '@/store/emotionStore';
import { getEmotionThemeOrFallback } from '@/constants/designTokens';
import { getDesignGuidance } from '@/constants/designGuidance';
import { getAdvisory } from '@/constants/advisoryData';
import { generateDesignSystem, generateAIPrompt } from '@/engine/mapping/themeMapper';
import { el } from '@/utils/dom';
import { entitlementStore } from '@/store/entitlementStore';

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
  const advisory = getAdvisory(primaryEmotion);
  return { primaryEmotion, intensity, theme, guidance, advisory };
}

// ─── Export generators ──────────────────────────────

function generateCSS(): string {
  const d = getThemeData();
  if (!d) return '';
  const { primaryEmotion, intensity, theme, guidance, advisory } = d;
  const ds = generateDesignSystem(primaryEmotion, intensity);
  const { semantic, palette } = ds.colors;

  const lines: string[] = [
    ':root {',
    `  /* ${primaryEmotion} - ${intensity} */`,
    `  /* Source: ${theme.source} */`,
    '',
    '  /* Semantic Colors */',
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
  if (advisory) {
    lines.push('');
    lines.push('  /* M3 Color Tokens */');
    for (const [key, val] of Object.entries(advisory.colors.tokens)) {
      lines.push(`  --md-${key}: ${val};`);
    }
    lines.push('');
    lines.push('  /* Spacing */');
    for (const step of advisory.spacing.scale) {
      lines.push(`  --spacing-${step.label.toLowerCase()}: ${step.value};`);
    }
    lines.push('');
    lines.push('  /* Motion */');
    lines.push(`  --motion-duration: ${advisory.motion.duration};`);
    lines.push(`  --motion-easing: cubic-bezier(${advisory.motion.bezierPoints.join(', ')});`);
  }
  lines.push('');
  lines.push('  /* Typography */');
  lines.push(`  --font-headline: "${theme.typography.headlineFont}", sans-serif;`);
  lines.push(`  --font-body: "${theme.typography.bodyFont}", sans-serif;`);
  if (advisory) {
    lines.push(`  --font-headline-weight: ${advisory.typography.scale.headline.weight};`);
    lines.push(`  --font-body-weight: ${advisory.typography.scale.body.weight};`);
    lines.push(`  --letter-spacing-headline: ${advisory.typography.letterSpacing.headline};`);
    lines.push(`  --letter-spacing-body: ${advisory.typography.letterSpacing.body};`);
    lines.push(`  --line-height-headline: ${advisory.typography.lineHeight.headline};`);
    lines.push(`  --line-height-body: ${advisory.typography.lineHeight.body};`);
  }
  lines.push('');
  lines.push('  /* Shapes */');
  lines.push(`  --border-radius: ${theme.shapes.borderRadius}px;`);
  lines.push(`  --border-radius-lg: ${theme.shapes.borderRadiusLg}px;`);
  lines.push(`  --border-radius-xl: ${theme.shapes.borderRadiusXl}px;`);
  if (advisory) {
    lines.push(`  --depth-shadow: ${advisory.depth.shadowIfNeeded};`);
    lines.push(`  --depth-ghost-border: ${advisory.depth.ghostBorder};`);
  }
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
  const { primaryEmotion, intensity, theme, guidance, advisory } = d;
  const obj: Record<string, unknown> = {
    emotion: primaryEmotion,
    intensity,
    source: theme.source,
    isDark: theme.isDark,
    colors: {
      ...theme.colors,
      ...(advisory ? { m3Tokens: advisory.colors.tokens } : {}),
    },
    typography: {
      ...theme.typography,
      ...(advisory ? {
        scale: advisory.typography.scale,
        letterSpacing: advisory.typography.letterSpacing,
        lineHeight: advisory.typography.lineHeight,
      } : {}),
    },
    shapes: theme.shapes,
    ...(advisory ? {
      spacing: advisory.spacing.scale,
      motion: {
        duration: advisory.motion.duration,
        easing: `cubic-bezier(${advisory.motion.bezierPoints.join(', ')})`,
        character: advisory.motion.character,
      },
      depth: {
        approach: advisory.depth.approach,
        shadow: advisory.depth.shadowIfNeeded,
        ghostBorder: advisory.depth.ghostBorder,
      },
    } : {}),
    ...(guidance ? { designGuidance: guidance } : {}),
  };
  return JSON.stringify(obj, null, 2);
}

function generateSwift(): string {
  const d = getThemeData();
  if (!d) return '';
  const { primaryEmotion, intensity, theme, advisory } = d;
  const c = theme.colors;
  const lines: string[] = [
    'import SwiftUI',
    '',
    `// ${primaryEmotion} - ${intensity}`,
    `// Source: ${theme.source}`,
    '',
    '// MARK: - Semantic Colors',
    'extension Color {',
    `    static let emotionPrimary = Color(hex: "${c.primary}")`,
    `    static let emotionSecondary = Color(hex: "${c.secondary}")`,
    `    static let emotionAccent = Color(hex: "${c.accent}")`,
    `    static let emotionBackground = Color(hex: "${c.background}")`,
    `    static let emotionSurface = Color(hex: "${c.surface}")`,
    `    static let emotionText = Color(hex: "${c.text}")`,
  ];
  if (advisory) {
    lines.push('');
    lines.push('    // MARK: M3 Token Colors');
    for (const [key, val] of Object.entries(advisory.colors.tokens)) {
      const name = key.replace(/-([a-z])/g, (_, ch) => ch.toUpperCase());
      lines.push(`    static let ${name} = Color(hex: "${val}")`);
    }
  }
  lines.push('}');
  lines.push('');
  lines.push('struct EmotionTypography {');
  lines.push(`    static let headlineFont = "${theme.typography.headlineFont}"`);
  lines.push(`    static let bodyFont = "${theme.typography.bodyFont}"`);
  if (advisory) {
    lines.push(`    static let headlineWeight: Font.Weight = .init(rawValue: CGFloat(${advisory.typography.scale.headline.weight}))`);
    lines.push(`    static let bodyWeight: Font.Weight = .init(rawValue: CGFloat(${advisory.typography.scale.body.weight}))`);
  }
  lines.push('}');
  lines.push('');
  lines.push('struct EmotionShapes {');
  lines.push(`    static let cornerRadius: CGFloat = ${theme.shapes.borderRadius}`);
  lines.push(`    static let cornerRadiusLg: CGFloat = ${theme.shapes.borderRadiusLg}`);
  lines.push(`    static let cornerRadiusXl: CGFloat = ${theme.shapes.borderRadiusXl}`);
  lines.push('}');
  if (advisory) {
    lines.push('');
    lines.push('struct EmotionMotion {');
    lines.push(`    static let duration: TimeInterval = ${parseFloat(advisory.motion.duration) / 1000}`);
    lines.push(`    static let controlPoints: (CGFloat, CGFloat, CGFloat, CGFloat) = (${advisory.motion.bezierPoints.join(', ')})`);
    lines.push('}');
  }
  return lines.join('\n');
}

function generateKotlin(): string {
  const d = getThemeData();
  if (!d) return '';
  const { primaryEmotion, intensity, theme, advisory } = d;
  const c = theme.colors;
  const lines: string[] = [
    'import androidx.compose.ui.graphics.Color',
    'import androidx.compose.foundation.shape.RoundedCornerShape',
    'import androidx.compose.ui.unit.dp',
    'import androidx.compose.animation.core.CubicBezierEasing',
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
  ];
  if (advisory) {
    lines.push('');
    lines.push('    // M3 Token Colors');
    for (const [key, val] of Object.entries(advisory.colors.tokens)) {
      const name = key.replace(/-([a-z])/g, (_, ch: string) => ch.toUpperCase())
                      .replace(/^([a-z])/, (_, ch: string) => ch.toUpperCase());
      lines.push(`    val ${name} = Color(${hexToArgb(val)})`);
    }
  }
  lines.push('}');
  lines.push('');
  lines.push('object EmotionTypography {');
  lines.push(`    const val headlineFont = "${theme.typography.headlineFont}"`);
  lines.push(`    const val bodyFont = "${theme.typography.bodyFont}"`);
  lines.push('}');
  lines.push('');
  lines.push('object EmotionShapes {');
  lines.push(`    val cornerRadius = RoundedCornerShape(${theme.shapes.borderRadius}.dp)`);
  lines.push(`    val cornerRadiusLg = RoundedCornerShape(${theme.shapes.borderRadiusLg}.dp)`);
  lines.push(`    val cornerRadiusXl = RoundedCornerShape(${theme.shapes.borderRadiusXl}.dp)`);
  lines.push('}');
  if (advisory) {
    const bp = advisory.motion.bezierPoints;
    lines.push('');
    lines.push('object EmotionMotion {');
    lines.push(`    const val durationMs = ${parseInt(advisory.motion.duration, 10)}`);
    lines.push(`    val easing = CubicBezierEasing(${bp[0]}f, ${bp[1]}f, ${bp[2]}f, ${bp[3]}f)`);
    lines.push('}');
  }
  return lines.join('\n');
}

function generateAI(): string {
  const { primaryEmotion, intensity } = emotionStore.get();
  if (!primaryEmotion) return '';
  return generateAIPrompt(primaryEmotion, intensity);
}

function generateFigma(): string {
  const d = getThemeData();
  if (!d) return '';
  const { primaryEmotion, intensity, theme, guidance, advisory } = d;
  const c = theme.colors;

  const colorTokens: Record<string, { value: string; type: string }> = {
    primary: { value: c.primary, type: 'color' },
    secondary: { value: c.secondary, type: 'color' },
    accent: { value: c.accent, type: 'color' },
    background: { value: c.background, type: 'color' },
    surface: { value: c.surface, type: 'color' },
    text: { value: c.text, type: 'color' },
    textSecondary: { value: c.textSecondary, type: 'color' },
  };

  if (advisory) {
    for (const [key, val] of Object.entries(advisory.colors.tokens)) {
      colorTokens[key] = { value: val, type: 'color' };
    }
  }

  const tokens: Record<string, unknown> = {
    color: colorTokens,
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

  if (advisory) {
    tokens.spacing = {} as Record<string, { value: string; type: string }>;
    const spacingTokens = tokens.spacing as Record<string, { value: string; type: string }>;
    for (const step of advisory.spacing.scale) {
      spacingTokens[step.label.toLowerCase()] = { value: step.value, type: 'spacing' };
    }
    tokens.motion = {
      duration: { value: advisory.motion.duration, type: 'duration' },
      easing: { value: `cubic-bezier(${advisory.motion.bezierPoints.join(', ')})`, type: 'cubicBezier' },
    };
  }

  const paletteTokens = tokens.palette as Record<string, { value: string; type: string }>;
  c.palette.forEach((color: string, i: number) => {
    paletteTokens[`swatch-${i + 1}`] = { value: color, type: 'color' };
  });

  const output: Record<string, unknown> = {
    [`${primaryEmotion}-${intensity}`]: tokens,
  };

  if (guidance) {
    output['_metadata'] = {
      northStar: guidance.northStar,
      philosophy: guidance.philosophy,
    };
  }

  return JSON.stringify(output, null, 2);
}

function generateTailwind(): string {
  const d = getThemeData();
  if (!d) return '';
  const { primaryEmotion, intensity, theme, guidance, advisory } = d;
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
  );
  if (advisory) {
    for (const [key, val] of Object.entries(advisory.colors.tokens)) {
      if (!['primary', 'secondary', 'surface', 'background', 'error'].includes(key)) {
        lines.push(`        '${key}': '${val}',`);
      }
    }
  }
  lines.push(
    '      },',
    '      fontFamily: {',
    `        headline: ['"${theme.typography.headlineFont}"', 'sans-serif'],`,
    `        body: ['"${theme.typography.bodyFont}"', 'sans-serif'],`,
    '      },',
    '      borderRadius: {',
    `        DEFAULT: '${theme.shapes.borderRadius}px',`,
    `        lg: '${theme.shapes.borderRadiusLg}px',`,
    `        xl: '${theme.shapes.borderRadiusXl}px',`,
  );
  if (advisory) {
    for (const step of advisory.shapes.radii) {
      if (!['base', 'lg', 'xl'].includes(step.label.toLowerCase())) {
        lines.push(`        '${step.label.toLowerCase()}': '${step.value}',`);
      }
    }
  }
  lines.push('      },');
  if (advisory) {
    lines.push('      spacing: {');
    for (const step of advisory.spacing.scale) {
      lines.push(`        '${step.label.toLowerCase()}': '${step.value}',`);
    }
    lines.push('      },');
    lines.push('      transitionDuration: {');
    lines.push(`        emotion: '${advisory.motion.duration}',`);
    lines.push('      },');
    lines.push('      transitionTimingFunction: {');
    lines.push(`        emotion: 'cubic-bezier(${advisory.motion.bezierPoints.join(', ')})',`);
    lines.push('      },');
  }
  lines.push(
    '    },',
    '  },',
    '}',
  );
  return lines.join('\n');
}

function generateSCSS(): string {
  const d = getThemeData();
  if (!d) return '';
  const { primaryEmotion, intensity, theme, guidance, advisory } = d;
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
    '// Semantic Colors',
    `$color-primary: ${c.primary};`,
    `$color-secondary: ${c.secondary};`,
    `$color-accent: ${c.accent};`,
    `$color-background: ${c.background};`,
    `$color-surface: ${c.surface};`,
    `$color-text: ${c.text};`,
    `$color-text-secondary: ${c.textSecondary};`,
  );
  if (advisory) {
    lines.push('');
    lines.push('// M3 Color Tokens');
    for (const [key, val] of Object.entries(advisory.colors.tokens)) {
      lines.push(`$md-${key}: ${val};`);
    }
  }
  lines.push('', '// Palette');
  c.palette.forEach((color: string, i: number) => {
    lines.push(`$palette-${i + 1}: ${color};`);
  });
  lines.push(
    '',
    '// Typography',
    `$font-headline: "${theme.typography.headlineFont}", sans-serif;`,
    `$font-body: "${theme.typography.bodyFont}", sans-serif;`,
  );
  if (advisory) {
    lines.push(`$font-headline-weight: ${advisory.typography.scale.headline.weight};`);
    lines.push(`$font-body-weight: ${advisory.typography.scale.body.weight};`);
    lines.push(`$letter-spacing-headline: ${advisory.typography.letterSpacing.headline};`);
    lines.push(`$letter-spacing-body: ${advisory.typography.letterSpacing.body};`);
    lines.push(`$line-height-headline: ${advisory.typography.lineHeight.headline};`);
    lines.push(`$line-height-body: ${advisory.typography.lineHeight.body};`);
  }
  lines.push(
    '',
    '// Shapes',
    `$border-radius: ${theme.shapes.borderRadius}px;`,
    `$border-radius-lg: ${theme.shapes.borderRadiusLg}px;`,
    `$border-radius-xl: ${theme.shapes.borderRadiusXl}px;`,
    `$corner-style: "${theme.shapes.cornerStyle}";`,
  );
  if (advisory) {
    lines.push('');
    lines.push('// Spacing');
    for (const step of advisory.spacing.scale) {
      lines.push(`$spacing-${step.label.toLowerCase()}: ${step.value};`);
    }
    lines.push('');
    lines.push('// Motion');
    lines.push(`$motion-duration: ${advisory.motion.duration};`);
    lines.push(`$motion-easing: cubic-bezier(${advisory.motion.bezierPoints.join(', ')});`);
    lines.push('');
    lines.push('// Depth');
    lines.push(`$depth-shadow: ${advisory.depth.shadowIfNeeded};`);
    lines.push(`$depth-ghost-border: ${advisory.depth.ghostBorder};`);
  }
  lines.push('', `$is-dark: ${theme.isDark};`);
  return lines.join('\n');
}

function generateTokens(): string {
  const d = getThemeData();
  if (!d) return '';
  const { primaryEmotion, intensity, theme, guidance, advisory } = d;
  const c = theme.colors;

  const colorTokens: Record<string, { $value: string; $type: string }> = {
    primary: { $value: c.primary, $type: 'color' },
    secondary: { $value: c.secondary, $type: 'color' },
    accent: { $value: c.accent, $type: 'color' },
    background: { $value: c.background, $type: 'color' },
    surface: { $value: c.surface, $type: 'color' },
    text: { $value: c.text, $type: 'color' },
    textSecondary: { $value: c.textSecondary, $type: 'color' },
  };

  if (advisory) {
    for (const [key, val] of Object.entries(advisory.colors.tokens)) {
      colorTokens[key] = { $value: val, $type: 'color' };
    }
  }

  const dtcg: Record<string, unknown> = {
    $description: `${primaryEmotion} - ${intensity} (Source: ${theme.source})`,
    color: colorTokens,
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

  if (advisory) {
    dtcg.typography = {
      headlineWeight: { $value: advisory.typography.scale.headline.weight, $type: 'fontWeight' },
      bodyWeight: { $value: advisory.typography.scale.body.weight, $type: 'fontWeight' },
      letterSpacing: {
        headline: { $value: advisory.typography.letterSpacing.headline, $type: 'dimension' },
        body: { $value: advisory.typography.letterSpacing.body, $type: 'dimension' },
      },
      lineHeight: {
        headline: { $value: advisory.typography.lineHeight.headline, $type: 'number' },
        body: { $value: advisory.typography.lineHeight.body, $type: 'number' },
      },
    };
    dtcg.spacing = {} as Record<string, unknown>;
    const spacingTokens = dtcg.spacing as Record<string, unknown>;
    for (const step of advisory.spacing.scale) {
      spacingTokens[step.label.toLowerCase()] = { $value: step.value, $type: 'dimension' };
    }
    dtcg.motion = {
      duration: { $value: advisory.motion.duration, $type: 'duration' },
      easing: { $value: advisory.motion.bezierPoints, $type: 'cubicBezier' },
      character: { $value: advisory.motion.character, $type: 'string' },
    };
    dtcg.depth = {
      approach: { $value: advisory.depth.approach, $type: 'string' },
      shadow: { $value: advisory.depth.shadowIfNeeded, $type: 'shadow' },
      ghostBorder: { $value: advisory.depth.ghostBorder, $type: 'string' },
    };
  }

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
      setTimeout(() => {
        copyBtn.textContent = 'Copy to clipboard';
      }, 1500);
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

/** Open the export panel directly (bypasses entitlement gate). */
export function openExportPanel(): void {
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

/** Public entry point -- checks entitlement before opening. */
export function openExport(): void {
  if (entitlementStore.get().isProUnlocked) {
    openExportPanel();
  } else {
    import('@/ui/upgradeSheet').then(({ openUpgradeSheet }) => openUpgradeSheet());
  }
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

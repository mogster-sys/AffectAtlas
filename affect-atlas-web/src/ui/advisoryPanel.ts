/**
 * Scrollable advisory panel -- renders all design dimensions for an emotion.
 * The panel itself uses the emotion's own tokens so the UI IS the demo.
 */

import type { EmotionAdvisory } from '@/constants/advisoryData';
import { el } from '@/utils/dom';

// ── Helpers ──────────────────────────────────────────

function sectionHeader(num: string, title: string, advisory: EmotionAdvisory): HTMLElement {
  const numSpan = el('span', {
    className: 'adv-section-num',
    style: `color:${advisory.colors.tokens['primary'] || 'currentColor'}`,
  }, num);
  const heading = el('h2', { className: 'adv-section-title' }, title);
  return el('div', { className: 'adv-section-header' }, numSpan, heading);
}

function rationale(text: string): HTMLElement {
  return el('p', { className: 'adv-rationale' }, text);
}

function label(text: string): HTMLElement {
  return el('span', { className: 'adv-label' }, text);
}

function card(...children: (HTMLElement | string)[]): HTMLElement {
  return el('div', { className: 'adv-card' }, ...children);
}

// ── Section renderers ────────────────────────────────

function renderPhilosophy(a: EmotionAdvisory): HTMLElement {
  const quote = el('p', {
    className: 'adv-quote',
    style: `font-family:'${a.typography.headlineFont}',${a.typography.headlineFallback}`,
  }, `"${a.philosophy.brief}"`);
  const desc = el('p', { className: 'adv-body' }, a.philosophy.rationale);
  return el('section', { className: 'adv-section' },
    sectionHeader('01 /', 'Philosophy', a),
    card(quote, desc),
  );
}

function renderColor(a: EmotionAdvisory): HTMLElement {
  // Palette strip
  const paletteRow = el('div', { className: 'adv-palette-row' });
  for (const hex of a.colors.palette) {
    const swatch = el('div', { className: 'adv-color-swatch' });
    swatch.style.backgroundColor = hex;
    const hexLabel = el('span', { className: 'adv-swatch-label' }, hex);
    const col = el('div', { className: 'adv-swatch-col' }, swatch, hexLabel);
    paletteRow.appendChild(col);
  }

  // Semantic grid -- show key tokens
  const semanticKeys = [
    'primary', 'on-primary', 'secondary',
    'surface', 'surface-container', 'on-surface',
    'outline', 'outline-variant', 'tertiary',
    'primary-container', 'surface-dim', 'surface-bright',
  ];
  const grid = el('div', { className: 'adv-color-grid' });
  for (const key of semanticKeys) {
    const hex = a.colors.tokens[key];
    if (!hex) continue;
    const sq = el('div', { className: 'adv-color-grid-item' });
    sq.style.backgroundColor = hex;
    // dark text on light backgrounds, light text on dark
    const isLight = isLightColor(hex);
    const lbl = el('span', {
      className: 'adv-color-grid-label',
      style: `color:${isLight ? '#191c1d' : '#ffffff'}`,
    }, key);
    const hexLbl = el('span', {
      className: 'adv-color-grid-hex',
      style: `color:${isLight ? '#42474b' : '#c2c7cc'}`,
    }, hex);
    sq.appendChild(lbl);
    sq.appendChild(hexLbl);
    grid.appendChild(sq);
  }

  // Mild to intense strip
  const mtiStrip = el('div', { className: 'adv-mti-strip' });
  for (const hex of a.colors.mildToIntense) {
    const step = el('div', { className: 'adv-mti-step' });
    step.style.backgroundColor = hex;
    mtiStrip.appendChild(step);
  }
  const mtiLabels = el('div', { className: 'adv-mti-labels' },
    label('Mild'),
    label('Intense'),
  );

  return el('section', { className: 'adv-section' },
    sectionHeader('02 /', 'Color', a),
    card(paletteRow),
    card(grid),
    card(mtiStrip, mtiLabels),
    rationale(a.colors.rationale),
  );
}

function renderTypography(a: EmotionAdvisory): HTMLElement {
  const headlineFont = `'${a.typography.headlineFont}',${a.typography.headlineFallback}`;
  const bodyFont = `'${a.typography.bodyFont}',${a.typography.bodyFallback}`;

  // Font specimens
  const headSpec = el('div', { className: 'adv-type-specimen' },
    el('span', { className: 'adv-type-label' }, 'Headline'),
    el('div', {
      className: 'adv-type-sample',
      style: `font-family:${headlineFont};font-size:3rem;font-weight:500;letter-spacing:${a.typography.letterSpacing.headline}`,
    }, 'Aa'),
    el('span', { className: 'adv-type-name' }, a.typography.headlineFont),
  );
  const bodySpec = el('div', { className: 'adv-type-specimen' },
    el('span', { className: 'adv-type-label' }, 'Body'),
    el('div', {
      className: 'adv-type-sample',
      style: `font-family:${bodyFont};font-size:3rem;font-weight:300`,
    }, 'Aa'),
    el('span', { className: 'adv-type-name' }, a.typography.bodyFont),
  );

  // Type scale
  const scaleItems = el('div', { className: 'adv-type-scale' });
  const entries = Object.entries(a.typography.scale) as [string, typeof a.typography.scale.display][];
  for (const [level, spec] of entries) {
    const font = spec.font === 'headline' ? headlineFont : bodyFont;
    const style = [
      `font-family:${font}`,
      `font-size:${spec.size}`,
      `font-weight:${spec.weight}`,
      spec.tracking ? `letter-spacing:${spec.tracking}` : '',
      spec.transform ? `text-transform:${spec.transform}` : '',
    ].filter(Boolean).join(';');

    const row = el('div', { className: 'adv-type-scale-row' },
      el('span', { className: 'adv-type-scale-label' }, level),
      el('span', { className: 'adv-type-scale-text', style }, spec.text),
    );
    scaleItems.appendChild(row);
  }

  // Key values
  const kvs = el('div', { className: 'adv-kv-grid' },
    kvPair('Letter-spacing headline', a.typography.letterSpacing.headline),
    kvPair('Letter-spacing body', a.typography.letterSpacing.body),
    kvPair('Letter-spacing label', a.typography.letterSpacing.label),
    kvPair('Line-height headline', String(a.typography.lineHeight.headline)),
    kvPair('Line-height body', String(a.typography.lineHeight.body)),
  );

  return el('section', { className: 'adv-section' },
    sectionHeader('03 /', 'Typography', a),
    card(
      el('div', { className: 'adv-type-specimens' }, headSpec, bodySpec),
    ),
    card(scaleItems),
    card(kvs),
    el('p', { className: 'adv-mti-desc' }, a.typography.mildToIntense),
    rationale(a.typography.rationale),
  );
}

function renderSpacing(a: EmotionAdvisory): HTMLElement {
  const bars = el('div', { className: 'adv-spacing-bars' });
  for (const step of a.spacing.scale) {
    const px = parseInt(step.value, 10);
    const bar = el('div', { className: 'adv-spacing-bar' });
    bar.style.width = `${px}px`;
    bar.style.backgroundColor = a.colors.tokens['primary'] || '#002434';
    const row = el('div', { className: 'adv-spacing-row' },
      bar,
      el('span', { className: 'adv-spacing-label' }, `${step.value} (${step.label})`),
    );
    bars.appendChild(row);
  }

  const densityEl = el('div', { className: 'adv-kv-inline' },
    el('span', { className: 'adv-kv-key' }, 'Density'),
    el('span', { className: 'adv-kv-val' }, a.spacing.density),
  );

  return el('section', { className: 'adv-section' },
    sectionHeader('04 /', 'Spacing', a),
    card(bars, densityEl),
    el('p', { className: 'adv-mti-desc' }, a.spacing.mildToIntense),
    rationale(a.spacing.rationale),
  );
}

function renderMotion(a: EmotionAdvisory): HTMLElement {
  const kvRow = el('div', { className: 'adv-kv-grid' },
    kvPair('Duration', a.motion.duration),
    kvPair('Easing', a.motion.easing),
    kvPair('Character', a.motion.character),
  );

  // SVG bezier curve
  const [x1, y1, x2, y2] = a.motion.bezierPoints;
  const svgNs = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNs, 'svg');
  svg.setAttribute('viewBox', '0 0 100 40');
  svg.setAttribute('class', 'adv-bezier-svg');
  const primary = a.colors.tokens['primary'] || '#002434';
  // Grid lines
  for (let i = 0; i <= 4; i++) {
    const line = document.createElementNS(svgNs, 'line');
    line.setAttribute('x1', '0');
    line.setAttribute('y1', String(i * 10));
    line.setAttribute('x2', '100');
    line.setAttribute('y2', String(i * 10));
    line.setAttribute('stroke', '#e0e0e0');
    line.setAttribute('stroke-width', '0.3');
    svg.appendChild(line);
  }
  const path = document.createElementNS(svgNs, 'path');
  path.setAttribute('d', `M 0 40 C ${x1 * 100} ${40 - y1 * 40}, ${x2 * 100} ${40 - y2 * 40}, 100 0`);
  path.setAttribute('stroke', primary);
  path.setAttribute('stroke-width', '1.5');
  path.setAttribute('fill', 'none');
  svg.appendChild(path);

  // Animated dot on the bezier curve
  const dot = document.createElementNS(svgNs, 'circle');
  dot.setAttribute('r', '3');
  dot.setAttribute('cx', '0');
  dot.setAttribute('cy', '40');
  dot.setAttribute('fill', primary);
  dot.setAttribute('class', 'adv-bezier-dot');
  dot.style.opacity = '0';
  svg.appendChild(dot);

  let dotAnimating = false;
  function animateDot(): void {
    if (dotAnimating) return;
    dotAnimating = true;
    dot.style.opacity = '1';
    const dur = parseFloat(a.motion.duration) || 350;
    const startTime = performance.now();
    function frame(now: number): void {
      const t = Math.min((now - startTime) / dur, 1);
      const t2 = t * t;
      const t3 = t2 * t;
      const mt = 1 - t;
      const mt2 = mt * mt;
      const cx = (3 * mt2 * t * x1 + 3 * mt * t2 * x2 + t3) * 100;
      const cy = 40 - (3 * mt2 * t * y1 + 3 * mt * t2 * y2 + t3) * 40;
      dot.setAttribute('cx', String(cx));
      dot.setAttribute('cy', String(cy));
      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        setTimeout(() => { dot.style.opacity = '0'; dotAnimating = false; }, 400);
      }
    }
    requestAnimationFrame(frame);
  }

  // Interactive sample card
  const sampleCard = el('div', { className: 'adv-motion-sample' }, 'Tap to feel the motion');
  sampleCard.style.transition = `all ${a.motion.duration} ${a.motion.easing}`;
  sampleCard.style.backgroundColor = a.colors.tokens['surface-container'] || '#dbf1fe';
  sampleCard.style.color = a.colors.tokens['primary'] || '#002434';
  const ch = a.motion.character;
  const pressScale =
    // Original 8
    ch === 'bouncy' ? 'scale(1.05)'
    : ch === 'explosive' ? 'scale(0.92)'
    : ch === 'snappy' ? 'scale(1.08)'
    : ch === 'oozing' ? 'scaleX(1.04) scaleY(0.96)'
    : ch === 'wavering' ? 'scale(1.03) translateX(2px)'
    : ch === 'drifting' ? 'translateY(4px) scale(0.98)'
    : ch === 'gathering' ? 'scale(0.96) translateX(3px)'
    : ch === 'settling' ? 'translateY(2px) scale(0.95)'
    // Trust, Fear, Love
    : ch === 'restrained' ? 'scale(0.99)'
    : ch === 'tense' ? 'scale(0.94) translateY(-2px)'
    : ch === 'embracing' ? 'scale(1.03) translateY(-1px)'
    // Alarm, Passion, Lust
    : ch === 'pulsing' ? 'scale(0.94)'
    : ch === 'electric' ? 'scale(1.06) translateX(1px)'
    : ch === 'smoldering' ? 'scale(1.02)'
    // Disappointment, Remorse, Depression
    : ch === 'deflating' ? 'scale(0.93) translateY(3px)'
    : ch === 'sinking' ? 'translateY(5px) scale(0.94)'
    : ch === 'exhausted' ? 'translateY(2px) scale(0.97)'
    // Contempt, Aggressiveness, Frustration
    : ch === 'dismissive' ? 'scale(0.97) translateX(4px)'
    : ch === 'striking' ? 'scale(0.88) translateX(-3px)'
    : ch === 'halting' ? 'scale(0.93)'
    // Submission, Embarrassment, Guilt
    : ch === 'yielding' ? 'scale(0.92) translateY(3px)'
    : ch === 'flushing' ? 'scale(0.95) translateX(3px)'
    : ch === 'reluctant' ? 'scale(0.95) translateY(2px)'
    // Loneliness, Jealousy, Appalled
    : ch === 'isolated' ? 'scale(0.96) translateY(2px)'
    : ch === 'fixating' ? 'scale(1.02) translateX(-2px)'
    : ch === 'recoiling' ? 'scale(0.90) translateX(-4px)'
    // Fright, Awe, Inspiration
    : ch === 'startling' ? 'scale(0.88)'
    : ch === 'expansive' ? 'scale(1.06) translateY(-2px)'
    : ch === 'uplifting' ? 'scale(1.05) translateY(-4px)'
    // Pride, Optimism
    : ch === 'ceremonial' ? 'scale(1.03) translateY(-2px)'
    : ch === 'buoyant' ? 'scale(1.04) translateY(-3px)'
    : 'scale(0.98)';
  const restBg = a.colors.tokens['surface-container'] || '#dbf1fe';
  const restColor = a.colors.tokens['primary'] || '#002434';
  const pressBg = a.colors.tokens['primary'] || '#002434';
  const pressColor = a.colors.tokens['on-primary'] || '#ffffff';

  sampleCard.addEventListener('pointerdown', () => {
    sampleCard.style.transform = pressScale;
    sampleCard.style.opacity = (ch === 'drifting' || ch === 'exhausted' || ch === 'sinking' || ch === 'deflating') ? '0.6' : '1';
    sampleCard.style.backgroundColor = pressBg;
    sampleCard.style.color = pressColor;
    animateDot();
  });
  sampleCard.addEventListener('pointerup', () => {
    sampleCard.style.transform = 'scale(1)';
    sampleCard.style.opacity = '1';
    sampleCard.style.backgroundColor = restBg;
    sampleCard.style.color = restColor;
  });
  sampleCard.addEventListener('pointerleave', () => {
    sampleCard.style.transform = 'scale(1)';
    sampleCard.style.opacity = '1';
    sampleCard.style.backgroundColor = restBg;
    sampleCard.style.color = restColor;
  });

  const svgWrapper = el('div', { className: 'adv-bezier-wrap' });
  svgWrapper.appendChild(svg);

  return el('section', { className: 'adv-section' },
    sectionHeader('05 /', 'Motion', a),
    card(kvRow),
    card(svgWrapper),
    card(sampleCard),
    el('p', { className: 'adv-mti-desc' }, a.motion.mildToIntense),
    rationale(a.motion.rationale),
  );
}

function renderDepth(a: EmotionAdvisory): HTMLElement {
  const levels = el('div', { className: 'adv-depth-levels' });
  for (const level of a.depth.levels) {
    const lev = el('div', { className: 'adv-depth-card' },
      el('span', { className: 'adv-depth-label' }, level.label),
      el('span', { className: 'adv-depth-desc' }, level.description),
    );
    lev.style.backgroundColor = level.background;
    levels.appendChild(lev);
  }

  const shadowNote = el('div', { className: 'adv-kv-grid' },
    kvPair('Shadow (if needed)', a.depth.shadowIfNeeded),
    kvPair('Ghost border', a.depth.ghostBorder),
  );

  return el('section', { className: 'adv-section' },
    sectionHeader('06 /', 'Depth', a),
    card(levels),
    card(shadowNote),
    rationale(a.depth.rationale),
  );
}

function renderShapes(a: EmotionAdvisory): HTMLElement {
  const samples = el('div', { className: 'adv-shapes-grid' });
  for (const r of a.shapes.radii) {
    const px = parseInt(r.value, 10);
    const sample = el('div', { className: 'adv-shape-sample' },
      el('span', { className: 'adv-shape-value' }, r.value),
    );
    sample.style.borderRadius = `${px}px`;
    sample.style.backgroundColor = a.colors.tokens['on-surface'] || '#191c1d';
    if (r.recommended) {
      const badge = el('span', { className: 'adv-shape-badge' }, r.label + '*');
      sample.appendChild(badge);
    } else {
      const lbl = el('span', { className: 'adv-shape-name' }, r.label);
      sample.appendChild(lbl);
    }
    samples.appendChild(sample);
  }

  const styleEl = el('div', { className: 'adv-kv-inline' },
    el('span', { className: 'adv-kv-key' }, 'Corner style'),
    el('span', { className: 'adv-kv-val' }, a.shapes.cornerStyle),
  );

  return el('section', { className: 'adv-section' },
    sectionHeader('07 /', 'Shapes', a),
    card(samples, styleEl),
    el('p', { className: 'adv-mti-desc' }, a.shapes.mildToIntense),
    rationale(a.shapes.rationale),
  );
}

function renderLayout(a: EmotionAdvisory): HTMLElement {
  // Simple wireframe using CSS grid
  const wireframe = el('div', { className: 'adv-layout-wireframe' });
  const primary = a.colors.tokens['primary'] || '#002434';
  const blocks = [
    { col: '1 / 4', row: '1 / 3', opacity: 0.2 },
    { col: '4 / 5', row: '1 / 5', opacity: 0.35 },
    { col: '1 / 3', row: '3 / 6', opacity: 0.12 },
    { col: '3 / 4', row: '3 / 5', opacity: 0.25 },
    { col: '1 / 5', row: '6 / 7', opacity: 0.18 },
  ];
  for (const b of blocks) {
    const block = el('div', { className: 'adv-layout-block' });
    block.style.gridColumn = b.col;
    block.style.gridRow = b.row;
    block.style.backgroundColor = primary;
    block.style.opacity = String(b.opacity);
    wireframe.appendChild(block);
  }

  const kvs = el('div', { className: 'adv-kv-grid' },
    kvPair('Alignment', a.layout.alignment),
    kvPair('Density', a.layout.density),
  );

  return el('section', { className: 'adv-section' },
    sectionHeader('08 /', 'Layout', a),
    card(wireframe, kvs),
    rationale(a.layout.rationale),
  );
}

function renderIconography(a: EmotionAdvisory): HTMLElement {
  const row = el('div', { className: 'adv-icon-row' });
  for (const icon of a.iconography.icons) {
    const iconEl = el('span', {
      className: 'material-symbols-outlined adv-icon-glyph',
    }, icon.name);
    iconEl.style.color = a.colors.tokens['primary'] || '#002434';
    const iconLabel = el('span', { className: 'adv-icon-label' }, icon.label);
    const col = el('div', { className: 'adv-icon-col' }, iconEl, iconLabel);
    row.appendChild(col);
  }

  const styleNote = el('p', { className: 'adv-body' }, a.iconography.style);

  return el('section', { className: 'adv-section' },
    sectionHeader('09 /', 'Iconography', a),
    card(row),
    card(styleNote),
    rationale(a.iconography.rationale),
  );
}

function renderRules(a: EmotionAdvisory): HTMLElement {
  const dosCol = el('div', { className: 'adv-rules-col' },
    el('span', { className: 'adv-rules-heading adv-rules-do' }, 'Do'),
  );
  for (const d of a.rules.dos) {
    dosCol.appendChild(el('p', { className: 'adv-rules-item' }, d));
  }

  const dontsCol = el('div', { className: 'adv-rules-col' },
    el('span', { className: 'adv-rules-heading adv-rules-dont' }, 'Avoid'),
  );
  for (const d of a.rules.donts) {
    dontsCol.appendChild(el('p', { className: 'adv-rules-item' }, d));
  }

  return el('section', { className: 'adv-section' },
    sectionHeader('10 /', 'Rules', a),
    card(el('div', { className: 'adv-rules-grid' }, dosCol, dontsCol)),
  );
}

function renderWords(a: EmotionAdvisory): HTMLElement {
  const cloud = el('div', { className: 'adv-word-cloud' });
  const sizes = [2.5, 1.5, 3, 2, 1.25, 2.5, 1.5, 3];
  const opacities = [0.9, 0.7, 1, 0.8, 0.6, 0.85, 0.65, 0.95];
  const headlineFont = `'${a.typography.headlineFont}',${a.typography.headlineFallback}`;

  for (let i = 0; i < a.words.words.length; i++) {
    const word = el('span', {
      className: 'adv-word-item',
      style: [
        `font-family:${headlineFont}`,
        `font-size:${sizes[i % sizes.length]}rem`,
        `opacity:${opacities[i % opacities.length]}`,
        `font-style:italic`,
      ].join(';'),
    }, a.words.words[i]);
    cloud.appendChild(word);
  }

  const feel = el('p', { className: 'adv-body' }, a.words.feel);

  return el('section', { className: 'adv-section' },
    sectionHeader('11 /', 'Words', a),
    card(cloud, feel),
  );
}

// ── Key-value pair helper ────────────────────────────

function kvPair(key: string, value: string): HTMLElement {
  return el('div', { className: 'adv-kv-pair' },
    el('span', { className: 'adv-kv-key' }, key),
    el('span', { className: 'adv-kv-val' }, value),
  );
}

// ── Color lightness check ────────────────────────────

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}

// ── Hero section (first viewport) ────────────────────

function renderHero(a: EmotionAdvisory): HTMLElement {
  const headlineFont = `'${a.typography.headlineFont}',${a.typography.headlineFallback}`;
  const bodyFont = `'${a.typography.bodyFont}',${a.typography.bodyFallback}`;

  // Massive emotion name
  const title = el('h1', {
    className: 'adv-hero-title',
    style: `font-family:${headlineFont}`,
  }, a.label);

  // North star subtitle
  const subtitle = el('div', {
    className: 'adv-hero-subtitle',
    style: `font-family:${bodyFont}`,
  }, a.northStar);

  // Philosophy quote
  const quote = el('p', {
    className: 'adv-hero-quote',
    style: `font-family:${headlineFont}`,
  }, `"${a.philosophy.brief}"`);

  // Word cloud
  const cloud = el('div', { className: 'adv-hero-words' });
  const sizes = [1.6, 1.1, 2.0, 1.3, 0.9, 1.5, 1.0, 1.8];
  const opacities = [0.8, 0.5, 0.9, 0.65, 0.4, 0.75, 0.45, 0.85];
  for (let i = 0; i < a.words.words.length; i++) {
    const word = el('span', {
      className: 'adv-hero-word',
      style: [
        `font-family:${headlineFont}`,
        `font-size:${sizes[i % sizes.length]}rem`,
        `opacity:${opacities[i % opacities.length]}`,
        `font-style:italic`,
      ].join(';'),
    }, a.words.words[i]);
    cloud.appendChild(word);
  }

  return el('section', { className: 'adv-hero' },
    title,
    subtitle,
    quote,
    cloud,
  );
}

// ── Public: render full advisory ─────────────────────

export function renderAdvisory(advisory: EmotionAdvisory): HTMLElement {
  // Load Material Symbols for iconography
  loadMaterialSymbols();

  // Detect dark-themed advisory for card contrast fixes
  const bg = advisory.colors.tokens['background'] || '#ffffff';
  const isDarkAdvisory = !isLightColor(bg);

  const container = el('div', { className: 'adv-container' });
  if (isDarkAdvisory) {
    container.classList.add('adv-dark');
    // Set CSS custom properties for dark-theme card readability
    const surfaceContainer = advisory.colors.tokens['surface-container-high']
      || advisory.colors.tokens['surface-container'] || '#2a2a2a';
    const onSurface = advisory.colors.tokens['on-surface'] || '#e0e0e0';
    const onSurfaceVariant = advisory.colors.tokens['on-surface-variant'] || '#b0b0b0';
    const outlineVariant = advisory.colors.tokens['outline-variant'] || '#444444';
    container.style.setProperty('--adv-card-bg', surfaceContainer);
    container.style.setProperty('--adv-card-text', onSurface);
    container.style.setProperty('--adv-card-text-secondary', onSurfaceVariant);
    container.style.setProperty('--adv-card-border', outlineVariant);
  }

  // Hero section -- fills first viewport
  container.appendChild(renderHero(advisory));

  // Emotional context -- comparative section (if present)
  if (advisory.emotionalContext) {
    const primary = advisory.colors.tokens['primary'] || '#002434';
    const ctxCard = el('div', { className: 'adv-card adv-context-card' });
    ctxCard.style.borderLeft = `3px solid ${primary}`;
    const ctxLabel = el('span', { className: 'adv-label' }, 'What makes this emotion different');
    ctxCard.appendChild(ctxLabel);
    const ctxText = el('p', { className: 'adv-body' }, advisory.emotionalContext);
    ctxCard.appendChild(ctxText);
    container.appendChild(el('section', { className: 'adv-section' }, ctxCard));
  }

  container.appendChild(renderPhilosophy(advisory));
  container.appendChild(renderColor(advisory));
  container.appendChild(renderTypography(advisory));
  container.appendChild(renderSpacing(advisory));
  container.appendChild(renderMotion(advisory));
  container.appendChild(renderDepth(advisory));
  container.appendChild(renderShapes(advisory));
  container.appendChild(renderLayout(advisory));
  container.appendChild(renderIconography(advisory));
  container.appendChild(renderRules(advisory));
  container.appendChild(renderWords(advisory));

  // Footer
  const footer = el('div', { className: 'adv-footer' },
    el('span', { className: 'adv-footer-brand' }, 'AffectAtlas'),
    el('span', { className: 'adv-footer-sub' }, 'Design advisory extracted from emotion research and Stitch screen analysis'),
  );
  container.appendChild(footer);

  return container;
}

// ── Material Symbols loader ──────────────────────────

let symbolsLoaded = false;

function loadMaterialSymbols(): void {
  if (symbolsLoaded) return;
  symbolsLoaded = true;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@300,0..1&display=swap';
  document.head.appendChild(link);

  // Set icon font-variation-settings
  const style = document.createElement('style');
  style.textContent = `.material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 300,'GRAD' 0,'opsz' 24}`;
  document.head.appendChild(style);
}

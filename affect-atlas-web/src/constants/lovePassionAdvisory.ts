/**
 * Love: Passion variant advisory -- extracted from The design output.
 * Source: stitch-exports/love-advisory/passion.html + DESIGN-passion.md
 * Values reflect what The design ACTUALLY produced.
 *
 * NOTE: This is a variant of Love, not an independent emotion.
 * It does NOT self-register -- loveAdvisory.ts attaches it as a variant.
 *
 * The design faithfully loaded Noto Serif + Be Vietnam Pro (matching prompt).
 * Primary #ffb3b4 (warm rose) and surface #1e0f16 (deep wine) match.
 * Glass panels: rgba(66, 47, 56, 0.4) with 12px backdrop-blur.
 * "No-Line" rule: boundaries via tonal shifts only, no 1px dividers.
 * Signature Gradient: from #ffb3b4 to #f95866 at 135deg (flame-glow).
 */

import type { EmotionAdvisory } from './advisoryData';

export const LOVE_PASSION_ADVISORY: EmotionAdvisory = {
  emotion: 'love',
  label: 'Passion',
  northStar: 'The Living Hearth',
  philosophy: {
    brief:
      'A fire that begins with a soft, flickering candle and grows into a deep, smoldering coal. The UI feels warm, immersive, and intentional -- organic asymmetry where elements overlap like stacked stationery.',
    rationale:
      'Passion moves away from sterile "app-like" interfaces toward a high-end editorial experience that feels tactile and alive. We reject the rigid grid in favor of organic asymmetry. Typography carries the weight of a prestige literary journal. Deep wine backgrounds create a "private room" feeling -- the firelight of a hearth in an empty room, where everything is close and nothing is casual. The design rendered this as a dark-mode editorial with glass panels, ambient radiance, and signature gradients that mimic the uneven glow of a flame.',
  },
  deepened: true,
  source: 'stitch:love_passion_advisory',

  emotionalContext:
    'Passion is Love with the volume turned up. Where base Love is candlelit intimacy on blush-cream (#fdf6f2) -- quiet, grown-up, a shared blanket -- Passion flips to deep wine (#1e0f16) darkness where every rose-tinted glow burns brighter by contrast. The same warm rose (#ffb3b4) that whispered on light surfaces now radiates against darkness like embers.\n\nBase Love uses 360ms embracing easing. Passion drops to 280ms -- still smooth, but faster, more responsive. A body leaning forward rather than settling in. The typography shifts from Crimson Pro to Noto Serif -- both literary serifs, but Noto Serif has more editorial weight, more authority. Be Vietnam Pro replaces Rubik for body text, trading rounded warmth for sharper Vietnamese-Latin clarity.\n\nThe glass panel treatment (rgba backdrop-blur) and "No-Line" rule (boundaries through tonal shifts, never 1px borders) create depth without edges -- everything melts into everything else, like firelight on skin.',

  colors: {
    tokens: {
      'primary': '#ffb3b4',
      'on-primary': '#680016',
      'primary-container': '#f95866',
      'on-primary-container': '#5b0012',
      'secondary': '#ffb2ba',
      'on-secondary': '#571c26',
      'secondary-container': '#76343e',
      'on-secondary-container': '#f9a0aa',
      'tertiary': '#feb2bb',
      'on-tertiary': '#512128',
      'tertiary-container': '#c27e86',
      'on-tertiary-container': '#491a22',
      'surface': '#1e0f16',
      'surface-dim': '#1e0f16',
      'surface-bright': '#47343c',
      'surface-container-lowest': '#180a11',
      'surface-container-low': '#27171e',
      'surface-container': '#2b1b22',
      'surface-container-high': '#37252d',
      'surface-container-highest': '#422f38',
      'surface-tint': '#ffb3b4',
      'surface-variant': '#422f38',
      'on-surface': '#f8dbe6',
      'on-surface-variant': '#e1bebe',
      'outline': '#a88989',
      'outline-variant': '#594041',
      'inverse-surface': '#f8dbe6',
      'inverse-primary': '#b42439',
      'inverse-on-surface': '#3d2b33',
      'background': '#1e0f16',
      'on-background': '#f8dbe6',
      'error': '#ffb4ab',
      'on-error': '#690005',
      'error-container': '#93000a',
      'on-error-container': '#ffdad6',
    },
    palette: ['#1e0f16', '#ffb3b4', '#d84050', '#76343e', '#37252d'],
    mildToIntense: [
      '#e1bebe',
      '#ffb3b4',
      '#f95866',
      '#d84050',
      '#b42439',
      '#920224',
      '#680016',
    ],
    rationale:
      'The design rendered four prominent color swatches: #680016 Deep Wine, #D84050 Passion Rose, #FFB3B4 Tender Blush, and #180A11 Midnight Void. The palette inverts base Love -- instead of warm rose on light cream, it places warm rose on deep wine darkness. Primary #ffb3b4 glows as luminous blush against the #1e0f16 surface. Secondary-container #76343e provides the "Ember Chip" tone. The Signature Gradient (from #ffb3b4 to #f95866 at 135deg) mimics the uneven glow of a flame -- used on primary CTAs and navigation active states.',
  },

  typography: {
    headlineFont: 'Noto Serif',
    headlineFallback: 'serif',
    bodyFont: 'Be Vietnam Pro',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Passion',
        size: '3rem',
        weight: 700,
        font: 'headline',
        tracking: '-0.02em',
      },
      headline: {
        text: 'The Ember',
        size: '1.5rem',
        weight: 700,
        font: 'headline',
      },
      title: {
        text: 'A fire that refuses',
        size: '1.25rem',
        weight: 400,
        font: 'headline',
      },
      body: {
        text: 'Every letter must feel intentional.',
        size: '1rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'DESIGN ADVISORY',
        size: '0.75rem',
        weight: 700,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.2em',
      },
      caption: {
        text: 'Display Serif / Noto Serif',
        size: '0.625rem',
        weight: 400,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.15em',
      },
    },
    letterSpacing: {
      headline: '-0.02em',
      body: '0em',
      label: '0.2em',
    },
    lineHeight: {
      headline: 1.0,
      body: 1.6,
    },
    mildToIntense:
      'Mild: Noto Serif at 400 italic with loose leading -- literary warmth, gentle editorial presence. Moderate: 700 with tight tracking (-0.02em) and line-height 1.0 -- authoritative, heavy, the weight of a prestige journal. Intense: 700 italic, even tighter, with on-surface (#f8dbe6) against deep wine -- maximum contrast, maximum presence.',
    rationale:
      'The design loaded Noto Serif at wght 400+700, italic variants. Display headline "Passionate Love" rendered at text-5xl (3rem) font-serif italic tracking-tighter. Section headers at text-2xl italic. Body text in Be Vietnam Pro at text-sm/text-lg with leading-relaxed. Label text in Be Vietnam Pro at text-xs uppercase with tracking-widest (0.2em). Both fonts matched the prompt exactly -- a rare win. Noto Serif carries more editorial authority than base Love\'s Crimson Pro, matching Passion\'s intensified voice.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '16px' },
      { label: 'LG', value: '24px' },
      { label: 'XL', value: '40px' },
    ],
    density: 'normal',
    mildToIntense:
      'Mild: LG at 32px, gentle warmth with breathing room. Moderate: LG at 24px, pressing closer -- intimate urgency. Intense: LG at 16px, elements pulled together, almost overlapping -- the closeness of bodies.',
    rationale:
      'The design rendered "Pressing Spacing" with the note "Closer proximity for intimacy." Section margins at mb-16/mb-20 (64-80px) between major sections, p-8 (32px) inside cards. The spacing is tighter than base Love -- elements press closer together, creating a sense of being drawn in. Where Love is comfortable proximity, Passion is magnetic pull.',
  },

  motion: {
    duration: '280ms',
    easing: 'cubic-bezier(0.25, 0.1, 0.3, 1)',
    character: 'smoldering',
    bezierPoints: [0.25, 0.1, 0.3, 1],
    mildToIntense:
      'Mild: 360ms, nearly identical to base Love -- slow, embracing, settling in. Moderate: 280ms fast-twitch response -- still smooth but quicker, like a body leaning forward. Intense: 200ms with a rose color flash on state change -- urgent, immediate, the sudden heat of eye contact.',
    rationale:
      'The design rendered "Responsive Easing" at "280ms fast-twitch response" alongside a bolt icon (filled). Transitions use duration-300 and active:scale-90 for navigation items. The 280ms is 80ms faster than base Love\'s 360ms -- the same smooth deceleration but with more urgency. Elements respond faster because passion is more alert, more responsive to touch.',
  },

  depth: {
    approach: 'glow',
    levels: [
      {
        label: 'Ambient Warmth',
        description: 'Soft rose glow at the edges -- the warmth of a nearby hearth',
        background: '#27171e',
      },
      {
        label: 'Active Radiance',
        description: 'Deeper rose bloom, warm and present -- firelight on skin',
        background: '#37252d',
      },
      {
        label: 'Full Immersion',
        description: 'Enveloping rose-tinted glow -- inside the hearth itself',
        background: '#422f38',
      },
    ],
    shadowIfNeeded: '0 8px 20px rgba(216, 64, 80, 0.3)',
    ghostBorder: '1px solid rgba(89, 64, 65, 0.15)',
    rationale:
      'The design rendered "Ambient Radiance" with the note "Shadows in the Passion mode are never black. They are deep, warm rosy glows that imply a light source just out of reach -- the hearth." Glass panels use rgba(66, 47, 56, 0.4) with 12px backdrop-blur. Hero shadow: 0 20px 50px rgba(64,0,10,0.5). Section deep shadow: 0 32px 64px rgba(64,0,10,0.6). Active navigation glow: 0 0 15px rgba(216,64,80,0.4). All shadow colors derive from the wine/rose palette -- never grey, never black.',
  },

  shapes: {
    radii: [
      { label: 'SM', value: '4px' },
      { label: 'MD', value: '8px' },
      { label: 'LG', value: '18px', recommended: true },
      { label: 'XL', value: '24px' },
    ],
    cornerStyle: 'rounded',
    mildToIntense:
      'Mild: 24px, maximum softness -- total warmth, all edges dissolve. Moderate: 18px, the standard -- generously rounded, every card feels like it curves toward you. Intense: 12px, slightly more defined -- still clearly soft but with more presence.',
    rationale:
      'The design used rounded-[1.125rem] (18px) for all section cards and rounded-[1.5rem] (24px) for the hero image container. Tailwind config sets DEFAULT to 0.25rem (4px), lg to 0.5rem (8px), xl to 0.75rem (12px). But The design consistently overrode these with custom 18px -- matching the base Love recommended radius. The "No-Line" rule means corners are the primary boundary indicator, so they must be soft enough to feel like transitions rather than edges.',
  },

  layout: {
    alignment: 'asymmetric',
    density: 'normal',
    rationale:
      'DESIGN-passion.md specifies "Intentional Asymmetry -- offset images by spacing-8 from the text alignment to break the Bootstrap grid feel." The design rendered a mostly centered composition but with the grid-cols-2 spacing/motion section creating intentional asymmetry. Elements overlap like stacked stationery. The layout breathes (spacing-16 = 5.5rem between sections) but with asymmetric offsets that feel organic, not mechanical.',
  },

  iconography: {
    icons: [
      { name: 'flare', label: 'The Hearth' },
      { name: 'favorite', label: 'Devotion' },
      { name: 'bolt', label: 'Intensity' },
      { name: 'auto_awesome', label: 'Spark' },
      { name: 'local_fire_department', label: 'The Fire' },
      { name: 'nights_stay', label: 'Intimacy' },
    ],
    style:
      'Filled (FILL 1), rounded terminals, warm rose (#ffb3b4) against wine darkness. Icons reference fire, devotion, and intimate energy. At filled weight they feel solid and present -- not sketches but glowing embers.',
    weight: 400,
    fill: true,
    rationale:
      'The design rendered icons with font-variation-settings FILL 1 (filled) at weight 400. Content icons: flare (branded header icon), favorite (philosophy divider), bolt (motion intensity). The fill treatment contrasts with base Love\'s 300-weight outlined icons -- Passion fills its icons completely, like a coal that has been fully ignited. Rose primary color against wine backgrounds creates warm, glowing icon presence.',
  },

  rules: {
    dos: [
      'Use deep saturated wine backgrounds for "private room" atmosphere',
      'Apply glass panels (backdrop-blur 12px) for floating elements',
      'Use the Signature Gradient (primary to primary-container at 135deg)',
      'Keep corners generously rounded (18px standard)',
      'Let warm rose glow against darkness (never grey shadows)',
      'Embrace negative space (5.5rem between major sections)',
      'Layer with purpose: serif text over semi-transparent glass',
      'Use intentional asymmetry to break rigid grid feel',
    ],
    donts: [
      'Pure white or pure black (every neutral must be wine/rose tinted)',
      'Hard corners or sharp edges (breaks the "Warm Embrace" metaphor)',
      '1px borders or dividers (use tonal shifts for boundaries)',
      'Muted, desaturated pinks or airy whites (dilutes intensity)',
      'Flat, uniform surfaces (depth comes from tonal layering)',
      'Mechanical grid layouts (organic asymmetry, not Bootstrap)',
      'Cool or clinical palettes (everything must feel warm)',
      'Aggressive, snappy motion (smooth and smoldering, not electric)',
    ],
  },

  words: {
    words: [
      'Passionate',
      'Intense',
      'Devoted',
      'Consuming',
      'Eternal',
      'Smoldering',
      'Ardent',
      'Magnetic',
    ],
    feel: 'The steady, agonizing heat of a coal that refuses to go cold. Not the flash of infatuation but the weight of a gaze, the gravity of presence, the quiet roar of a heart fully committed. Everything glows from within -- wine-dark surfaces lit by warm rose embers, glass panels that melt into each other like firelight on skin.',
  },
};

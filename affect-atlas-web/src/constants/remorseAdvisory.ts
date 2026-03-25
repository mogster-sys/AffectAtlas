/**
 * Remorse advisory -- extracted from Stitch output.
 * Source: stitch-exports/remorse-advisory/code.html
 * Values reflect what Stitch ACTUALLY produced, not what was requested.
 *
 * NOTE: Stitch used Work Sans instead of Albert Sans for body font.
 * Primary shifted to #b1cadc (lighter); our #587080 placed as
 * primary-container. Limited Tailwind config (~12 colors vs full set).
 * .sinking-easing bezier, .wound-glow crimson shadow, and heavy
 * downward shadows are faithfully captured.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const REMORSE_ADVISORY: EmotionAdvisory = {
  emotion: 'remorse' as any,
  label: 'Remorse',
  northStar: 'The Heavy Reckoning',
  philosophy: {
    brief:
      'Sitting alone with what you did -- heavy charcoal, muted steel blue, and the full-body weight of "I did that, and I cannot take it back."',
    rationale:
      'Remorse in visual design comes from weight, gravity, and earned heaviness. Deep blue-grey charcoal surfaces (#141618) create the atmosphere of late evening when you cannot sleep -- cool, weighted, holding you accountable. Soft old-style serif type (Fraunces) with slightly irregular proportions carries something unresolved within its structure -- letterforms that are organic and imperfect. Heavy downward shadows pull elements into their surfaces rather than lifting them up. One small wound of dark crimson (#803040) appears sparingly where the regret lives. The most effective remorse is not theatrical -- it is the quiet weight of sitting with what you did. A heavy reckoning, not a public confession.',
  },
  deepened: true,
  source: 'stitch:remorse_advisory',

  emotionalContext:
    'Remorse and Sadness both inhabit dark, heavy palettes with downward energy, but the source of weight is different. Sadness is loss from outside -- thin Lora type drifting on dark surfaces, 350ms slow-drift motion, fragile editorial spacing. Sadness grieves what happened TO you. Remorse is weight from inside -- Fraunces\' irregular soft serifs sinking on deep charcoal, 380ms sinking motion, heavy downward shadows. Remorse carries what you DID.\n\nRemorse also contrasts with Guilt, which shares the cognitive recognition of wrongdoing. Guilt\'s Spectral type is thin and reluctant at 300ms, pulling away from its own content. Remorse\'s Fraunces is weighted and settling at 380ms, pressing into its own content. Guilt avoids looking. Remorse cannot stop looking.\n\nAmong all emotions, Remorse is the most GRAVITATIONAL. Its shadows are the heaviest and most downward-pulling of any emotion (0 10px 28px at 40% opacity). Its motion sinks past the intended resting point. Its wound-glow crimson appears sparingly -- a single stain that marks where the regret lives. Everything communicates earned heaviness -- not punishment from outside but the internal weight of accountability. The design should feel like staring at your own hands.',

  colors: {
    tokens: {
      'primary': '#587080',
      'on-primary': '#d8e0e4',
      'primary-container': '#283438',
      'on-primary-container': '#90a8b0',
      'secondary': '#6a5848',
      'on-secondary': '#e0d8d0',
      'secondary-container': '#302820',
      'on-secondary-container': '#a89880',
      'tertiary': '#803040',
      'on-tertiary': '#e8d0d4',
      'tertiary-container': '#381820',
      'on-tertiary-container': '#c07080',
      'surface': '#141618',
      'surface-dim': '#0e1012',
      'surface-bright': '#1a1c20',
      'surface-container-lowest': '#0a0c0e',
      'surface-container-low': '#121416',
      'surface-container': '#181a1e',
      'surface-container-high': '#1e2024',
      'surface-container-highest': '#24262a',
      'surface-tint': '#587080',
      'surface-variant': '#1e2024',
      'on-surface': '#b8bcc0',
      'on-surface-variant': '#808488',
      'outline': '#4c5058',
      'outline-variant': '#2a2e32',
      'inverse-surface': '#b8bcc0',
      'inverse-primary': '#3a4850',
      'inverse-on-surface': '#141618',
      'background': '#141618',
      'on-background': '#b8bcc0',
      'error': '#804848',
      'on-error': '#e8d0d0',
      'error-container': '#381818',
      'on-error-container': '#c08888',
    },
    palette: ['#141618', '#587080', '#6a5848', '#803040', '#b8bcc0'],
    mildToIntense: [
      '#708898',
      '#887868',
      '#a05060',
      '#587080',
      '#6a5848',
      '#384858',
      '#601828',
    ],
    rationale:
      'Stitch rendered the palette as five smooth columns: #141618, #587080, #6a5848, #803040 (with wound-glow), and #b8bcc0. Primary shifted to #b1cadc (lighter blue) with #587080 placed as primary-container. The advisory uses the prompt\'s researched values. Primary #587080 is muted steel blue -- the color of heavy reflection, late-night introspection. Secondary #6a5848 is deep muted brown -- earth, aftermath, surfaces that show the marks of what happened. Tertiary #803040 is dark crimson -- the wound, appearing sparingly where guilt concentrates. A stain that cannot be washed out.',
  },

  typography: {
    headlineFont: 'Fraunces',
    headlineFallback: 'serif',
    bodyFont: 'Albert Sans',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Remorse',
        size: '1.875rem',
        weight: 600,
        font: 'headline',
        tracking: '0em',
      },
      headline: {
        text: 'The Heavy Reckoning',
        size: '1.5rem',
        weight: 500,
        font: 'headline',
      },
      title: {
        text: 'Earned heaviness',
        size: '1.1875rem',
        weight: 400,
        font: 'headline',
      },
      body: {
        text: 'I did that, and I cannot take it back.',
        size: '0.9375rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'weighted reckoning',
        size: '0.8125rem',
        weight: 500,
        font: 'body',
        tracking: '0.01em',
      },
      caption: {
        text: 'Designed for the weight of accountability',
        size: '0.6875rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '0em',
      body: '0.01em',
      label: '0.01em',
    },
    lineHeight: {
      headline: 1.15,
      body: 1.6,
    },
    mildToIntense:
      'Mild: Fraunces at weight 300-400 with more line height (1.2), Albert Sans at 300 -- the weight is present but you can carry it. A wistful looking back. Moderate: Fraunces 500-600 with line-height 1.15 -- weighted, settling, organic irregularity visible. Intense: Fraunces 600-700, slightly tighter -- words feel heavy in the mouth. The full weight presses down.',
    rationale:
      'Stitch rendered Fraunces at text-[30px] font-semibold for the specimen and showed a weight ramp from 300 through 600. Body uses Work Sans (Stitch substituted for Albert Sans) at text-[15px] with leading-relaxed. The advisory uses the prompt\'s researched body font (Albert Sans). Fraunces\' soft old-style serif with slightly irregular "wonky" proportions carries something unresolved within its structure -- letterforms that are organic and imperfect. Albert Sans provides honest, clear body text for the straightforward accounting of what happened.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '5px' },
      { label: 'SM', value: '10px' },
      { label: 'MD', value: '18px' },
      { label: 'LG', value: '30px' },
      { label: 'XL', value: '44px' },
    ],
    density: 'normal',
    mildToIntense:
      'Mild: lg at 36px, more room, more breath, slightly more distance from the weight. Moderate: lg at 30px, reflective weighted spacing -- adequate room, but the stillness itself feels heavy. Intense: lg at 24px, the weight closes in, less room to breathe, more inescapable.',
    rationale:
      'Stitch used space-y-8 between philosophy elements and py-20 for section padding with space-y-12 between major elements. Density labeled "Normal." The spacing creates room for reflection -- not so tight it creates pressure (remorse is not fighting) and not so generous it suggests peace (remorse has not found peace). The space between elements is the silence between sentences when someone is telling a hard truth.',
  },

  motion: {
    duration: '380ms',
    easing: 'cubic-bezier(0.4, 0.1, 0.3, 0.8)',
    character: 'sinking',
    bezierPoints: [0.4, 0.1, 0.3, 0.8],
    mildToIntense:
      'Mild: 320ms, less pronounced sinking. The weight is there but manageable. Moderate: 380ms with sinking easing, elements settle downward past their intended resting point. Intense: 440ms, deeper sinking, more visible downward settling. Elements visibly struggle under their own weight.',
    rationale:
      'Stitch created a .sinking-easing class with transition-timing-function: cubic-bezier(0.4, 0.1, 0.3, 0.8) and an SVG bezier visualization labeled "380ms Easing." The "Press to Settle" button uses active:translate-y-1 with transition-transform sinking-easing shadow-lg -- a pressing down, a sinking under weight. The 380ms is unhurried but not dramatic -- things take time because they are heavy, not because they are ceremonial. Elements arrive at their destination and then sink a fraction further.',
  },

  depth: {
    approach: 'shadows',
    levels: [
      {
        label: 'Light Recession',
        description: 'Heavy neutral shadow pulling element gently downward into its surface',
        background: '#1e2024',
      },
      {
        label: 'Medium Settle',
        description: 'Deeper downward shadow -- element visibly weighted into position',
        background: '#1e2024',
      },
      {
        label: 'Heavy Weight',
        description: 'Maximum gravitational shadow -- element pressed deeply into its surface',
        background: '#1e2024',
      },
    ],
    shadowIfNeeded: '0 6px 16px rgba(20, 22, 24, 0.3)',
    ghostBorder: '1px solid rgba(255, 255, 255, 0.05)',
    rationale:
      'Stitch rendered three shadow levels: Light Recession (shadow-lg), Medium Settle (0 12px 24px rgba(0,0,0,0.5)), and Heavy Weight (0 24px 48px rgba(0,0,0,0.7)). All cards use surface-container-high background with border-white/5. The .wound-glow class adds 0 10px 40px -10px rgba(128, 48, 64, 0.4) -- a dark crimson glow on the tertiary swatch. Remorse shadows are the heaviest of any emotion -- deep, dark, gravitational. Unlike most shadow systems that suggest elevation, remorse shadows suggest weight, pulling elements down rather than lifting them up.',
  },

  shapes: {
    radii: [
      { label: 'SM', value: '6px' },
      { label: 'MD', value: '8px' },
      { label: 'LG', value: '10px', recommended: true },
      { label: 'XL', value: '14px' },
    ],
    cornerStyle: 'smooth',
    mildToIntense:
      'Mild: 12-14px, a small softening, a small compassion. Moderate: 10px, smooth but constrained -- neither sharp (too aggressive for reflection) nor rounded (too comforting for guilt). Intense: 6-8px, more constrained, more closed off, heavier walls.',
    rationale:
      'Stitch rendered four shapes in a 2x2 grid: 6px, 8px, 10px (highlighted with border-2 border-primary/40 and bold "10px Anchor" label), and 14px. The Tailwind config sets DEFAULT to 10px. Section titled "Geometric Softening." Remorse shapes are constrained shapes that have turned inward -- contained, closed, holding their weight within their own boundaries. The moderate 10px radius avoids both the hostility of sharp corners and the warmth of rounded ones. Not inviting, not pushing away. Just sitting with what is inside.',
  },

  layout: {
    alignment: 'center',
    density: 'normal',
    rationale:
      'Stitch created a centered, bottom-weighted composition titled "The Sinking Weight." The wireframe shows elements settling toward the bottom of their container: a narrow element at top, heavy elements at bottom, and a radial gradient from top (transparent) to bottom (dark) creating visual gravity. The centering is not formal or grand -- it is the center of someone who has stopped moving and is sitting with the weight. Visual mass accumulates downward like sediment settling.',
  },

  iconography: {
    icons: [
      { name: 'undo', label: 'Take back' },
      { name: 'sentiment_very_dissatisfied', label: 'Regret' },
      { name: 'dark_mode', label: 'Weight' },
      { name: 'water_drop', label: 'Tears' },
      { name: 'history', label: 'Replaying' },
      { name: 'remove', label: 'Loss' },
    ],
    style:
      'Thin weight (300), Grade -25, weighted atmosphere. Icons reference undoing, regret, darkness, tears, time going back, and removal. At 300 weight with -25 grade they feel like marks made under pressure -- thin but heavy, as if the hand drawing them was weighed down.',
    weight: 300,
    fill: false,
    rationale:
      'Stitch rendered Material Symbols at text-4xl in text-primary with font-variation-settings confirming weight 300 and FILL 0. Icons in a 3x2 grid: undo (wishing you could take it back), sentiment_very_dissatisfied (the face of "what did I do"), dark_mode (the weight of conscience), water_drop (the physical expression), history (replaying the moment), remove (what was lost). All six icons match the prompt exactly. The thin weight creates marks that feel scratched with effort, not drawn with confidence.',
  },

  rules: {
    dos: [
      'Use deep, heavy, cool charcoal surfaces (#141618)',
      'Keep typography weighted and slightly irregular (Fraunces)',
      'Apply heavy downward shadows that suggest gravity',
      'Use one small wound of dark crimson (#803040) sparingly',
      'Create bottom-weighted, sinking compositions',
      'Keep motion slow and settling downward (380ms)',
      'Let generous space create room for reflection',
      'Make elements feel heavy in their containers',
    ],
    donts: [
      'Warm, comforting color palettes',
      'Light, thin, delicate typography',
      'Upward or floating elevation (standard shadows)',
      'Bright or saturated accent colors',
      'Bouncy, playful, or energetic motion',
      'Dense, busy, information-heavy layouts',
      'Sharp, aggressive corners (too angry for remorse)',
      'Rounded, friendly corners (too comforting for remorse)',
    ],
  },

  words: {
    words: [
      'Heavy',
      'Weighted',
      'Aftermath',
      'Conscience',
      'Inescapable',
      'Reckoning',
      'Bruised',
      'Sinking',
    ],
    feel: 'Sitting alone with what you did. The design system creates a sense of earned heaviness -- not punishment from outside but the internal weight of accountability. Everything is heavy. Everything settles downward. One small wound of crimson marks where the regret lives.',
  },
};

// Self-register on import
registerAdvisory(REMORSE_ADVISORY);

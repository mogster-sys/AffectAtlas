/**
 * Surprise advisory -- extracted from The design output.
 * Source: stitch-exports/surprise-advisory/code.html
 * Values reflect what The design ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const SURPRISE_ADVISORY: EmotionAdvisory = {
  emotion: 'surprise',
  label: 'Surprise',
  northStar: 'The Sudden Flash',
  philosophy: {
    brief:
      'Electric disruption -- a camera flash in a dark room. Not chaos, but controlled bursts of the unexpected. The afterimage stays with you.',
    rationale:
      'Surprise in visual design comes from breaking expectations in a controlled way. The key insight is that surprise requires a pattern to break -- you cannot surprise someone in chaos, only in order. The deep indigo background establishes calm. The neon magenta and cyan DISRUPT that calm in precise, targeted moments. High contrast pairings (magenta on indigo, cyan on black), unexpected scale shifts, and non-linear motion that overshoots its target create the visual equivalent of a double-take. The best surprises are rare, well-timed, and tied to user action -- not random decoration.',
  },
  deepened: true,
  source: 'stitch:surprise-advisory',

  emotionalContext:
    'Surprise is the only emotion where INCONSISTENCY is the design principle. Every other emotion in AffectAtlas has a consistent visual language -- Trust is always precise, Anger is always crushing, Sadness is always quiet. Surprise deliberately breaks its own rules. Mixed corner radii. Variable spacing. One element that is dramatically different from its neighbors. The pattern exists so it can be interrupted.\n\nSurprise and Joy both use bright, energetic palettes, but for different purposes. Joy\'s warm ambers create sustained warmth -- you bask in it. Surprise\'s neon magenta and cyan create sudden flashes -- you startle at them. Joy\'s bouncy motion is predictable and delightful. Surprise\'s motion overshoots and catches you off guard.\n\nSurprise and Anger both use bold, high-contrast visuals, but in opposite registers. Anger is loud and relentless -- every element demands attention at maximum intensity. Surprise is selective -- long stretches of calm dark space punctuated by single brilliant flashes. Anger\'s 0px corners are aggressive. Surprise mixes 0px AND 32px corners because the inconsistency itself is the surprise.\n\nAmong all eight emotions, Surprise is the only one where the design system should feel like it might do something unexpected. Not chaotic (that would be exhausting), but unpredictable in small, delightful ways. A flash of neon where you expected a muted tone. An oversized element where you expected uniformity. The visual equivalent of \'wait -- what?\'',

  colors: {
    tokens: {
      'primary': '#ff7cf5',
      'on-primary': '#580058',
      'primary-container': '#ef6ee6',
      'on-primary-container': '#440044',
      'primary-dim': '#ef6ee6',
      'primary-fixed': '#ff7cf5',
      'primary-fixed-dim': '#ef6ee6',
      'on-primary-fixed': '#2c002c',
      'on-primary-fixed-variant': '#670066',
      'secondary': '#53e4fc',
      'on-secondary': '#004f5a',
      'secondary-container': '#006876',
      'on-secondary-container': '#e9fbff',
      'secondary-dim': '#3fd5ed',
      'secondary-fixed': '#53e4fc',
      'secondary-fixed-dim': '#3fd5ed',
      'on-secondary-fixed': '#003a43',
      'on-secondary-fixed-variant': '#005965',
      'tertiary': '#d4c3ff',
      'on-tertiary': '#4a397a',
      'tertiary-container': '#c7b3fe',
      'on-tertiary-container': '#402f70',
      'tertiary-dim': '#b9a5ef',
      'tertiary-fixed': '#c7b3fe',
      'tertiary-fixed-dim': '#b9a5ef',
      'on-tertiary-fixed': '#2b1859',
      'on-tertiary-fixed-variant': '#493879',
      'surface': '#0f0434',
      'surface-dim': '#0f0434',
      'surface-bright': '#2e1e67',
      'surface-container-lowest': '#000000',
      'surface-container-low': '#15083e',
      'surface-container': '#1b0e48',
      'surface-container-high': '#211352',
      'surface-container-highest': '#28195d',
      'surface-tint': '#ff7cf5',
      'surface-variant': '#28195d',
      'on-surface': '#e9e1ff',
      'on-surface-variant': '#ccc2f0',
      'outline': '#9a8ec4',
      'outline-variant': '#5e5490',
      'inverse-primary': '#a1259e',
      'inverse-surface': '#fdf8ff',
      'inverse-on-surface': '#574e7f',
      'background': '#0f0434',
      'on-background': '#e9e1ff',
      'error': '#ff6e84',
      'on-error': '#490013',
      'error-dim': '#d73357',
      'error-container': '#a70138',
      'on-error-container': '#ffb2b9',
    },
    palette: ['#ff7cf5', '#53e4fc', '#d4c3ff', '#0f0434', '#1b0e48'],
    mildToIntense: [
      '#F0D0E8',
      '#D0E8F0',
      '#FCF4FC',
      '#ff7cf5',
      '#53e4fc',
      '#0f0434',
      '#000000',
    ],
    rationale:
      'Neon on dark creates visual \'pops\' that register as electric and surprising. The magenta-cyan pairing is deliberately unusual -- warm pink against cool cyan creates color tension that feels slightly wrong in the best way. Unlike Joy\'s harmonious warm palette or Trust\'s restrained neutrals, Surprise uses complementary tension. The deep indigo background (#0f0434) is not quite black -- it has enough blue to feel cosmic, like deep night sky, creating the darkness that makes every bright accent feel like a flash.',
  },

  typography: {
    headlineFont: 'Space Grotesk',
    headlineFallback: 'sans-serif',
    bodyFont: 'Manrope',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Surprise',
        size: '4rem',
        weight: 700,
        font: 'headline',
        tracking: '-0.02em',
        transform: 'uppercase',
      },
      headline: {
        text: 'Flash',
        size: '2.5rem',
        weight: 600,
        font: 'headline',
        tracking: '-0.01em',
        transform: 'uppercase',
      },
      title: {
        text: 'Disruption',
        size: '1.25rem',
        weight: 500,
        font: 'headline',
      },
      body: {
        text: 'sudden, electric, disorienting',
        size: '1rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'UNEXPECTED',
        size: '0.75rem',
        weight: 600,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.15em',
      },
      caption: {
        text: 'wait -- what?',
        size: '0.625rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '0.02em',
      body: '0em',
      label: '0.15em',
    },
    lineHeight: {
      headline: 1.1,
      body: 1.5,
    },
    mildToIntense:
      'Mild: Space Grotesk at weight 400 with generous spacing -- a gentle double-take. Moderate: weight 600 with tighter spacing and one dramatically oversized element -- the sudden flash. Intense: weight 700 at extreme scale with overlapping elements -- a controlled explosion of type.',
    rationale:
      'Space Grotesk is geometric and precise -- the kind of typeface that feels measured and predictable. This predictability is exactly what makes disruptions surprising. When one word suddenly appears at 5x the expected size, or in a dramatically different weight, the geometric precision of the base makes the break more striking. Manrope as body text is clean and rounded, providing reliable readability that lets the display moments shine. Unlike Anger\'s condensed Oswald that shouts constantly, Space Grotesk is calm until it decides not to be.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '16px' },
      { label: 'LG', value: '24px' },
      { label: 'XL', value: '40px' },
      { label: 'XXL', value: '64px' },
    ],
    density: 'variable',
    mildToIntense:
      'Mild: 24px between sections with consistent rhythm -- calm, regular, with one gentle disruption. Moderate: mixed 16px and 32px spacing -- rhythm starts breaking down. Intense: wildly variable, 8px to 64px -- you never know how much space comes next.',
    rationale:
      'Surprise is the only emotion that deliberately varies its spacing rhythm. Trust uses precise consistent spacing. Anger uses consistently tight spacing. Joy uses consistently generous spacing. Surprise uses INCONSISTENT spacing because predictable rhythm is the enemy of surprise. The human eye naturally finds patterns -- when a pattern breaks, you notice. That noticing is the surprise.',
  },

  motion: {
    duration: '250ms',
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    character: 'snappy',
    bezierPoints: [0.34, 1.56, 0.64, 1],
    mildToIntense:
      'Mild: 350ms with slight overshoot (1.2) -- a gentle \'oh!\'. Moderate: 250ms with pronounced overshoot (1.56) -- the double-take. Intense: 150ms with dramatic overshoot (2.0) and color flash -- the startle reflex.',
    rationale:
      'Surprise motion is defined by OVERSHOOT -- the element goes past its target and then settles back, exactly like a physical startle reflex (flinch past, then relax). At 250ms, Surprise is faster than Sadness (600ms) and Trust (300ms) but slower than Anger (150ms). It needs enough time for the overshoot to register. Where Fear\'s motion tenses, Joy\'s bounces, and Anger\'s snaps, Surprise\'s motion pops -- a quick burst that overshoots and catches you off guard.',
  },

  depth: {
    approach: 'glow',
    levels: [
      {
        label: 'Glow',
        description: 'Subtle neon halo',
        background: '#1b0e48',
      },
      {
        label: 'Flash',
        description: 'Dual-color neon burst',
        background: '#211352',
      },
      {
        label: 'Burst',
        description: 'Maximum radiance',
        background: '#2e1e67',
      },
    ],
    shadowIfNeeded: '0 0 20px rgba(255, 124, 245, 0.3)',
    ghostBorder: '1px solid rgba(74, 65, 113, 0.15)',
    rationale:
      'Surprise uses COLORED shadows -- never neutral gray or black. Shadows glow with magenta, cyan, or purple, creating a neon halo effect. This is the afterglow of the flash. Unlike Fear\'s creeping black shadows or Sadness\'s absent shadows, Surprise shadows emit light. They are the lingering visual echo of something brilliant. Standard gray shadows feel architectural (Trust) or oppressive (Anger). Surprise shadows glow with the primary palette, creating a sense of emitted light rather than blocked light.',
  },

  shapes: {
    radii: [
      { label: 'Sharp', value: '0px' },
      { label: 'Small', value: '4px' },
      { label: 'Medium', value: '16px', recommended: true },
      { label: 'Pill', value: '32px' },
    ],
    cornerStyle: 'mixed',
    mildToIntense:
      'Mild: mostly 8-16px with one 0px element for gentle contrast. Moderate: mixed 4px and 32px on the same screen -- noticeable variety. Intense: 0px and 48px together -- maximum contrast between sharp and round.',
    rationale:
      'Surprise is the only emotion that uses MIXED corner radii as a deliberate design choice. Trust uses consistent 4px. Joy uses consistent 24px. Fear uses consistent 0px. Anger uses consistent 0px. Sadness uses consistent 4px. Surprise breaks the rule by having no consistent rule. A sharp-cornered card next to a pill-shaped button creates visual tension -- your eye expects consistency and gets disruption. That disruption is the surprise.',
  },

  layout: {
    alignment: 'asymmetric',
    density: 'variable',
    rationale:
      'Exaggerated scale creates surprise because it violates spatial expectations. When everything is similar-sized, one oversized element creates a focal point that feels like an exclamation mark. Unlike Anger\'s uniformly dense layouts or Joy\'s uniformly spacious ones, Surprise layouts use contrast between tight and open areas to create visual rhythm breaks. The layout should feel like music with an unexpected key change.',
  },

  iconography: {
    icons: [
      { name: 'flash_on', label: 'Camera flash' },
      { name: 'auto_awesome', label: 'Sparkle' },
      { name: 'bolt', label: 'Lightning' },
      { name: 'new_releases', label: 'Burst' },
      { name: 'flare', label: 'Lens flare' },
      { name: 'visibility', label: 'Seeing' },
    ],
    style:
      'Standard stroke (400 weight), geometric, clean. Outlined style. Not as heavy as Anger\'s 600 weight (too aggressive), not as thin as Sadness\'s 200 weight (too fragile). Surprise icons are crisp and precise -- the precision makes disruptions more impactful.',
    weight: 400,
    fill: false,
    rationale:
      'Surprise icons reference light (flash, flare, bolt), discovery (visibility, auto_awesome), and disruption (new_releases). They represent the moment of realization -- the flash, the spark, the \'aha\'. Unlike Sadness\'s weather-and-time metaphors or Anger\'s force-and-impact metaphors, Surprise icons are about sudden perception -- seeing something you didn\'t expect.',
  },

  rules: {
    dos: [
      'Deep dark backgrounds with neon accents',
      'Mix corner radii deliberately (0px next to 32px)',
      'One dramatically oversized element per section',
      'Non-linear motion with overshoot easing',
      'Colored shadows (magenta/cyan glow, never gray)',
      'Variable spacing rhythm (break the pattern)',
      'High-contrast color pairings (magenta on indigo)',
      'Tie surprises to user actions, not random timing',
    ],
    donts: [
      'Consistent corner radii (that is every other emotion)',
      'Uniform element sizes (too predictable)',
      'Even spacing throughout (rhythm should break)',
      'Neutral gray shadows (too architectural)',
      'Warm palettes (Joy\'s territory)',
      'Constant animation (surprise requires stillness first)',
      'Heavy condensed type (Anger\'s language)',
      'Random chaos (surprise needs order to break)',
    ],
  },

  words: {
    words: [
      'Astonishment',
      'Amazement',
      'Wonder',
      'Shock',
      'Disbelief',
      'Awe',
      'Startle',
      'Bewilderment',
    ],
    feel: 'sudden, electric, disorienting -- like a camera flash going off',
  },
};

// Self-register on import
registerAdvisory(SURPRISE_ADVISORY);

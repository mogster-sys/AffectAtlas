/**
 * Fear advisory -- extracted from Stitch output.
 * Source: stitch-exports/fear-advisory/stitch/fear_design_advisory/code.html
 * Values reflect what Stitch ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const FEAR_ADVISORY: EmotionAdvisory = {
  emotion: 'fear',
  label: 'Fear',
  northStar: 'The Clinical Void',
  philosophy: {
    brief:
      'A fog rolling over a violet landscape, where something is holding its breath. The design does not seek to scare, but to observe.',
    rationale:
      'Fear in visual design comes from constriction, darkness, and controlled uncertainty. Dark, low-key palettes with heavy blacks and cold violets create obscurity and danger. Sharp forms feel unsafe. Claustrophobic spacing amplifies dread. But the most effective fear is not aggressive -- it is the quiet unease of something being subtly wrong. A corridor that is slightly too narrow. Type that is slightly too close together. The absence of the warmth you expected.',
  },
  deepened: true,
  source: 'stitch:fear_design_advisory',

  emotionalContext:
    'Fear is the inversion of Joy. Where Joy expands -- generous whitespace, rounded pebbles, warm golds, bouncy spring physics -- Fear constricts. Tight spacing, sharp edges, cold violets on near-black, harsh ease-in motion that pulls into darkness. Where Joy\'s shadows glow warmly like sunlight, Fear uses vignettes: darkness creeping inward from the edges.\n\nFear also contrasts with Trust. Trust is restrained but confident -- institutional authority, measured precision. Fear\'s restraint is different: it is the restraint of something holding its breath. Trust\'s tight spacing says "precision." Fear\'s tight spacing says "the walls are closing in."\n\nAmong all eight primary emotions, Fear is the only one where the design system should feel subtly WRONG. Compressed line-height, negative letter-spacing, elements slightly too close together. Not ugly -- beautiful in a way that makes you uneasy. The uncanny valley of design systems.',

  colors: {
    tokens: {
      'primary': '#d3bee9',
      'on-primary': '#49395c',
      'primary-container': '#504063',
      'on-primary-container': '#ddc8f3',
      'primary-dim': '#c5b1db',
      'primary-fixed': '#eedbff',
      'primary-fixed-dim': '#e1ccf8',
      'on-primary-fixed': '#48385b',
      'on-primary-fixed-variant': '#655479',
      'secondary': '#aa96be',
      'on-secondary': '#28193a',
      'secondary-container': '#443557',
      'on-secondary-container': '#ccb7e1',
      'secondary-dim': '#aa96be',
      'secondary-fixed': '#eedbff',
      'secondary-fixed-dim': '#e2ccf7',
      'on-secondary-fixed': '#48385b',
      'on-secondary-fixed-variant': '#655479',
      'tertiary': '#f1ebff',
      'on-tertiary': '#595571',
      'tertiary-container': '#e2dbfd',
      'on-tertiary-container': '#514d68',
      'tertiary-dim': '#d4cdee',
      'tertiary-fixed': '#e2dbfd',
      'tertiary-fixed-dim': '#d4cdee',
      'on-tertiary-fixed': '#3e3a54',
      'on-tertiary-fixed-variant': '#5b5672',
      'surface': '#0e0e0e',
      'surface-dim': '#0e0e0e',
      'surface-bright': '#2c2c2c',
      'surface-container-lowest': '#000000',
      'surface-container-low': '#131313',
      'surface-container': '#191a1a',
      'surface-container-high': '#1f2020',
      'surface-container-highest': '#252626',
      'surface-tint': '#d3bee9',
      'surface-variant': '#252626',
      'on-surface': '#e7e5e4',
      'on-surface-variant': '#acabaa',
      'outline': '#767575',
      'outline-variant': '#484848',
      'inverse-primary': '#69587d',
      'inverse-surface': '#fcf9f8',
      'inverse-on-surface': '#565555',
      'background': '#0e0e0e',
      'on-background': '#e7e5e4',
      'error': '#ec7c8a',
      'on-error': '#490013',
      'error-dim': '#b95463',
      'error-container': '#7f2737',
      'on-error-container': '#ff97a3',
    },
    palette: ['#d3bee9', '#504063', '#ebb2ff', '#0e0e0e', '#131313'],
    mildToIntense: [
      '#2a2030',
      '#3d2d4a',
      '#6a5a7a',
      '#504063',
      '#131313',
      '#050505',
      '#000000',
    ],
    rationale:
      'Dark, low-key palettes with heavy blacks, cold violets, and desaturated tones create obscurity and danger. The near-absence of color is itself threatening -- what you cannot see is what frightens you. Violet accents feel otherworldly and unsettling, neither warm nor fully cold.',
  },

  typography: {
    headlineFont: 'Epilogue',
    headlineFallback: 'sans-serif',
    bodyFont: 'Inter',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Fear',
        size: '3.5rem',
        weight: 200,
        font: 'headline',
        tracking: '-0.05em',
      },
      headline: {
        text: 'Twilight',
        size: '2rem',
        weight: 300,
        font: 'headline',
        tracking: '-0.05em',
      },
      title: {
        text: 'Vigilance',
        size: '1.25rem',
        weight: 500,
        font: 'body',
      },
      body: {
        text: 'Constricted, dark, vigilant',
        size: '1rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'ALERT',
        size: '0.75rem',
        weight: 600,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.15em',
      },
      caption: {
        text: 'Threat analysis',
        size: '0.625rem',
        weight: 400,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '-0.05em',
      body: '-0.01em',
      label: '0.15em',
    },
    lineHeight: {
      headline: 0.9,
      body: 1.4,
    },
    mildToIntense:
      'Mild: Epilogue at weight 300 with line-height 1.2, uneasy but readable. Intense: weight 200 with line-height 0.85 and letter-spacing -0.1em -- text collapsing in on itself.',
    rationale:
      'Fear typography is compressed and suffocating. Epilogue\'s geometric, condensed forms feel clinical and slightly mechanical -- a system designed by something that does not fully understand human warmth. Ultra-thin weights (200) suggest vulnerability and fragility. The tight line-height (0.9) is deliberately uncomfortable -- text presses together like walls closing in.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '2px' },
      { label: 'SM', value: '4px' },
      { label: 'MD', value: '8px' },
      { label: 'LG', value: '16px' },
      { label: 'XL', value: '24px' },
    ],
    density: 'tight',
    mildToIntense:
      'Mild: 16px between sections, uneasy but functional. Intense: 4px maximum constriction -- elements nearly touching, walls closing in.',
    rationale:
      'Confining compositions -- tight crops, cramped spacing, narrow gaps -- suggest entrapment and heighten fear. Vast empty dark space around a small subject creates isolation and anticipatory dread. Fear spacing alternates between these two poles: suffocating clusters and terrifying voids. There is no comfortable middle ground.',
  },

  motion: {
    duration: '200ms',
    easing: 'cubic-bezier(0.4, 0, 1, 1)',
    character: 'tense',
    bezierPoints: [0.4, 0, 1, 1],
    mildToIntense:
      'Mild: 400ms ease-in-out, cautious and deliberate. Moderate: 200ms ease-in, slightly too fast, things snapping away. Intense: 100ms linear, instantaneous and mechanical -- pure reflex.',
    rationale:
      'Fear motion is never bouncy or playful. It is either painfully slow (building dread) or disturbingly sudden (startle). The ease-in curve means things accelerate INTO darkness rather than decelerating into safety. Spring physics are forbidden -- nothing in fear bounces back.',
  },

  depth: {
    approach: 'mixed',
    levels: [
      {
        label: 'Ambient',
        description: 'Faint cold presence',
        background: '#1f2020',
      },
      {
        label: 'Dread',
        description: 'Vignette inner glow -- violet tint',
        background: '#252626',
      },
      {
        label: 'Void',
        description: 'Gradient into total darkness',
        background: '#050505',
      },
    ],
    shadowIfNeeded: '0 0 24px rgba(80, 64, 99, 0.08)',
    ghostBorder: '1px solid rgba(72, 72, 72, 0.15)',
    rationale:
      'Fear shadows are not decorative depth cues -- they are the encroaching dark itself. Vignette gradients replicate peripheral vision narrowing under stress. Heavy black shadows with minimal blur feel like the absence of light. The signature vignette effect uses inset box-shadow: 0 0 100px rgba(80, 64, 99, 0.3) to push darkness inward from all edges.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px', recommended: true },
      { label: 'SM', value: '2px' },
      { label: 'MD', value: '4px' },
      { label: 'LG', value: '8px' },
    ],
    cornerStyle: 'sharp',
    mildToIntense:
      'Mild: 4px for controlled unease. Intense: 0px for maximum clinical sharpness -- forms that feel like they could cut you.',
    rationale:
      'Sharp corners signal danger. Angular forms are implicitly associated with threat in visual perception studies. Rounded shapes feel safe and friendly, which is exactly what fear must avoid. Even 12px radius would undercut the tension. Think: broken glass, not smooth pebbles.',
  },

  layout: {
    alignment: 'asymmetric',
    density: 'dense',
    rationale:
      'Off-balance compositions and hard-to-read layouts evoke disorientation and loss of control. Clustered objects on one side with dark emptiness on the other feels like encroaching threat versus vulnerable space. Fear layouts either crowd you or abandon you in the dark.',
  },

  iconography: {
    icons: [
      { name: 'visibility_off', label: 'Hidden threat' },
      { name: 'warning', label: 'Danger' },
      { name: 'shield', label: 'Protection' },
      { name: 'emergency', label: 'Crisis' },
      { name: 'lock', label: 'Entrapment' },
      { name: 'dark_mode', label: 'Darkness' },
    ],
    style:
      'Thin stroke (200 weight), angular, clinical. Outlined only -- never filled. Filled icons feel solid and safe. Outlined icons feel hollow and exposed.',
    weight: 200,
    fill: false,
    rationale:
      'Fear icons reference warning systems, emergency signage, and surveillance. Ultra-thin strokes feel delicate and fragile -- the opposite of Joy\'s warm solid icons. Outlined forms feel transparent and exposed, like looking through rather than at.',
  },

  rules: {
    dos: [
      'Dark backgrounds (90%+ dark surface range)',
      'Sharp corners (0-4px maximum)',
      'Compressed line-height (0.85-1.2)',
      'Negative letter-spacing on headlines',
      'Thin font weights (200-300) for vulnerability',
      'Vignette gradients from edges inward',
      'Dense clusters alternating with dark voids',
      'Cold violet accents, never warm',
    ],
    donts: [
      'Rounded corners above 8px',
      'Warm colors (ambers, golds, oranges)',
      'Bouncy or spring animations',
      'Generous whitespace (comfort kills tension)',
      'Filled icons (too solid, too safe)',
      'Grey shadows (too neutral -- use black)',
    ],
  },

  words: {
    words: [
      'Dread',
      'Terror',
      'Anxiety',
      'Apprehension',
      'Panic',
      'Unease',
      'Trepidation',
      'Foreboding',
    ],
    feel: 'constricted, dark, vigilant -- like hearing footsteps behind you',
  },
};

// Self-register on import
registerAdvisory(FEAR_ADVISORY);

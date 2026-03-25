/**
 * Anticipation advisory -- extracted from Stitch output.
 * Source: stitch-exports/anticipation-advisory/stitch/anticipation_design_advisory/code.html
 * Values reflect what Stitch ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const ANTICIPATION_ADVISORY: EmotionAdvisory = {
  emotion: 'anticipation',
  label: 'Anticipation',
  northStar: 'The Forward Lean',
  philosophy: {
    brief:
      'The incomplete is the engine of the soul -- anticipation lives in the gap between now and next.',
    rationale:
      'Anticipation in visual design is expressed through directional energy, forward-leaning composition, and warm golden tones that suggest imminent arrival. Everything points toward what is about to happen. Asymmetric layouts cascade diagonally. Motion gathers slowly then snaps forward. The palette is sunlit amber and cream -- the split second before sunrise. The system rejects rigid symmetry in favor of intentional asymmetry that creates a sense of upward, forward motion.',
  },
  deepened: true,
  source: 'stitch:anticipation_design_advisory',

  emotionalContext:
    'Anticipation is the only primary emotion that is fundamentally directional. While Joy sits in the present moment and Trust anchors to the past, Anticipation leans entirely into the future. It shares Fear\'s elevated heart rate but replaces dread with hope. It mirrors Anger\'s focused intensity but redirects from resistance to readiness.\n\nVisually this means every design choice must imply forward motion. Where Trust uses tonal depth to suggest stacking and foundation, Anticipation uses tonal gradients to suggest transition from now to soon. Where Sadness drifts downward and inward, Anticipation pushes upward and outward.\n\nThe warm amber palette distinguishes Anticipation from every other emotion on the wheel. No other emotion uses golden-hour warmth as its foundation -- Joy is brighter and more saturated, Trust is cool and oceanic, Fear is clinical. Anticipation alone occupies the sunlit threshold.',

  colors: {
    tokens: {
      'primary': '#835000',
      'on-primary': '#ffffff',
      'primary-container': '#a4670c',
      'on-primary-container': '#fffbff',
      'primary-fixed': '#ffddb9',
      'primary-fixed-dim': '#ffb964',
      'on-primary-fixed': '#2b1700',
      'on-primary-fixed-variant': '#663e00',
      'secondary': '#745a37',
      'on-secondary': '#ffffff',
      'secondary-container': '#fedaae',
      'on-secondary-container': '#785e3b',
      'secondary-fixed': '#ffddb5',
      'secondary-fixed-dim': '#e3c197',
      'on-secondary-fixed': '#2a1800',
      'on-secondary-fixed-variant': '#5a4222',
      'tertiary': '#96441e',
      'on-tertiary': '#ffffff',
      'tertiary-container': '#b55c33',
      'on-tertiary-container': '#fffbff',
      'tertiary-fixed': '#ffdbcd',
      'tertiary-fixed-dim': '#ffb597',
      'on-tertiary-fixed': '#360f00',
      'on-tertiary-fixed-variant': '#7a3009',
      'surface': '#fff8f1',
      'surface-dim': '#dfd9d1',
      'surface-bright': '#fff8f1',
      'surface-container-lowest': '#ffffff',
      'surface-container-low': '#f9f3eb',
      'surface-container': '#f4ede5',
      'surface-container-high': '#eee7df',
      'surface-container-highest': '#e8e1da',
      'surface-tint': '#875300',
      'surface-variant': '#e8e1da',
      'on-surface': '#1e1b17',
      'on-surface-variant': '#524437',
      'outline': '#847465',
      'outline-variant': '#d6c3b1',
      'inverse-surface': '#33302b',
      'inverse-primary': '#ffb964',
      'inverse-on-surface': '#f7f0e8',
      'background': '#fff8f1',
      'on-background': '#1e1b17',
      'error': '#ba1a1a',
      'on-error': '#ffffff',
      'error-container': '#ffdad6',
      'on-error-container': '#93000a',
    },
    palette: ['#835000', '#a4670c', '#745a37', '#fff8f1', '#f9f3eb'],
    mildToIntense: [
      '#ffddb9',
      '#ffb964',
      '#a4670c',
      '#835000',
      '#663e00',
      '#2b1700',
    ],
    rationale:
      'Golden amber and sunlit cream create the visual equivalent of golden hour -- warm, expectant, and transitional. The palette moves from light cream (now) through deepening amber (soon) to rich brown (imminent). Cool tones are absent because anticipation is inherently warm and optimistic.',
  },

  typography: {
    headlineFont: 'Urbanist',
    headlineFallback: 'sans-serif',
    bodyFont: 'Nunito Sans',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Sunlight',
        size: '3.5rem',
        weight: 800,
        font: 'headline',
        tracking: '-0.02em',
      },
      headline: {
        text: 'Gathering Energy',
        size: '1.5rem',
        weight: 700,
        font: 'headline',
        tracking: '-0.01em',
      },
      title: {
        text: 'The Horizon',
        size: '1.125rem',
        weight: 700,
        font: 'body',
      },
      body: {
        text: 'Leaning into the next.',
        size: '1rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'ACTIVE STATE',
        size: '0.875rem',
        weight: 500,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.05em',
      },
      caption: {
        text: 'Forward-leaning design advisory',
        size: '0.75rem',
        weight: 400,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '-0.02em',
      body: '0em',
      label: '0.05em',
    },
    lineHeight: {
      headline: 1.1,
      body: 1.6,
    },
    mildToIntense:
      'Mild: Urbanist at weight 400 with generous line-height 1.4, relaxed and editorial. Intense: Urbanist at weight 800 with tight tracking -0.03em, compressed and urgent -- the letters lean forward.',
    rationale:
      'Urbanist is a geometric sans with narrow, architectural proportions that naturally draw the eye upward and forward. Its tight tracking at heavy weights creates visual velocity. Nunito Sans provides warm, rounded body text that balances the headline precision with human approachability.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'S', value: '12px' },
      { label: 'M', value: '24px' },
      { label: 'L', value: '40px' },
      { label: 'XXL', value: '64px' },
    ],
    density: 'generous',
    mildToIntense:
      'Mild: even more generous (M: 32px, L: 48px), maximum breathing room -- a distant horizon. Intense: tighter (M: 16px, L: 28px), elements closing in as the anticipated moment draws near.',
    rationale:
      'Generous spacing creates the feeling of a vast horizon ahead -- room to lean into. White space is used as a structural element, not decoration. The editorial rhythm of wide margins and asymmetric offsets makes the layout feel like a premium magazine spread rather than a functional interface.',
  },

  motion: {
    duration: '280ms',
    easing: 'cubic-bezier(0.35, 0, 0, 1)',
    character: 'gathering',
    bezierPoints: [0.35, 0, 0, 1],
    mildToIntense:
      'Mild: 380ms with softer deceleration, a gentle forward lean. Moderate: 280ms with signature gathering curve -- slow start, fast arrival. Intense: 180ms with sharper snap, the moment is imminent.',
    rationale:
      'The cubic-bezier(0.35, 0, 0, 1) curve is the heart of anticipation motion. It starts slowly -- gathering energy -- then accelerates sharply into the final position, like a sprinter leaving the blocks. This "slow then fast" rhythm is the opposite of ease-out (which decelerates). Everything arrives with momentum rather than settling gently.',
  },

  depth: {
    approach: 'tonal',
    levels: [
      {
        label: 'Dawn',
        description: 'Tonal shift, no shadow',
        background: '#f9f3eb',
      },
      {
        label: 'Afternoon',
        description: 'Soft warm ambient shadow',
        background: '#fff8f1',
      },
      {
        label: 'Golden Hour',
        description: 'Layered amber-tinted shadow',
        background: '#ffffff',
      },
    ],
    shadowIfNeeded: '0 20px 40px rgba(131, 80, 0, 0.08)',
    ghostBorder: '1px solid rgba(214, 195, 177, 0.15)',
    rationale:
      'Traditional shadows are too heavy for a sunlit theme. Depth is achieved through light, not darkness -- tonal surface shifts create natural layering like light hitting handmade paper at different angles. When a shadow is needed, it is tinted with the primary amber to simulate warm ambient light bouncing off surfaces.',
  },

  shapes: {
    radii: [
      { label: 'Subtle', value: '4px' },
      { label: 'Standard', value: '8px' },
      { label: 'Soft', value: '12px', recommended: true },
      { label: 'Open', value: '24px' },
    ],
    cornerStyle: 'smooth',
    mildToIntense:
      'Mild: rounder (16-24px), open and inviting -- like a wide doorway. Intense: tighter (4-8px), more architectural and focused, energy contained and ready to release.',
    rationale:
      'Smooth corners at 12px create warm, approachable surfaces without tipping into playful territory. The asymmetric card style (rounded-tl-xl + rounded-br-xl with standard on other corners) creates a "leaning" visual rhythm unique to anticipation -- shapes that look like they are moving forward.',
  },

  layout: {
    alignment: 'asymmetric',
    density: 'normal',
    rationale:
      'Intentional asymmetry is the defining layout principle. Headers offset left, body text shifted right, diagonal cascades that draw the eye forward and downward. This editorial rhythm breaks template rigidity and creates the feeling that the layout itself is in motion -- leaning toward what comes next.',
  },

  iconography: {
    icons: [
      { name: 'arrow_forward', label: 'Direction' },
      { name: 'trending_up', label: 'Momentum' },
      { name: 'schedule', label: 'Timing' },
      { name: 'bolt', label: 'Energy' },
      { name: 'explore', label: 'Discovery' },
      { name: 'arrow_outward', label: 'Expansion' },
    ],
    style:
      'Medium weight (500), directional and forward-facing. Icons should all suggest movement, timing, or energy. Filled variants acceptable for primary actions to add visual weight.',
    weight: 500,
    fill: false,
    rationale:
      'Every icon points forward, upward, or outward. Arrows, clocks, bolts, and compasses all share the quality of directional energy. The 500 weight is balanced -- substantial enough to carry visual momentum without feeling heavy or static.',
  },

  rules: {
    dos: [
      'Use tonal shifts for hierarchy',
      'Asymmetric margins and offsets',
      'Forward-leaning motion (slow start, fast arrival)',
      'White space as structural element',
      'Warm amber gradients for CTAs',
      'Asymmetric card corners (rounded-tl + rounded-br)',
      'Editorial offset between header and body text',
      'Glass header with backdrop blur',
    ],
    donts: [
      'Pure black text (use on-surface #1e1b17)',
      '1px dividing lines between sections',
      'Static, centered grid layouts',
      'Sharp 0px corners',
      'Cool or blue-tinted grays',
      'Ease-out motion (things must arrive with energy)',
    ],
  },

  words: {
    words: [
      'expectation',
      'eagerness',
      'excitement',
      'hope',
      'curiosity',
      'readiness',
      'vigilance',
      'longing',
    ],
    feel: 'warm, directional, leaning forward -- like the split second before sunrise',
  },
};

// Self-register on import
registerAdvisory(ANTICIPATION_ADVISORY);

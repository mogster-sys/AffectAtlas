/**
 * Joy advisory -- extracted from The design output.
 * Source: stitch-exports/joy-advisory/stitch/affectatlas_joy_design_advisory/code.html
 * Values reflect what The design ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const JOY_ADVISORY: EmotionAdvisory = {
  emotion: 'joy',
  label: 'Joy',
  northStar: 'The Radiant Conservatory',
  philosophy: {
    brief:
      'Design for Joy is the art of capturing the warmth of morning light. Openness, optimism, and the rejection of rigid boundaries in favor of a fluid, expansive canvas.',
    rationale:
      'Joy in visual design comes from warmth, openness, and generosity. Bright yellows and ambers signal optimism. Rounded forms feel safe and friendly. Generous whitespace lets elements breathe. Every design choice should feel like a gift -- spacious, inviting, never cramped. The experience should feel like flipping through a premium lifestyle magazine where white space is as vital as the prose.',
  },
  deepened: true,
  source: 'stitch:affectatlas_joy_design_advisory',

  emotionalContext:
    'Joy is the most expansive emotion on Plutchik\'s wheel -- it radiates outward in every dimension. Where Trust compresses into measured precision and Fear constricts into claustrophobic darkness, Joy opens up. Generous whitespace, rounded forms, warm amber palette, bouncy spring physics. The design breathes.\n\nThe contrast with Fear is almost a perfect inversion. Joy\'s 24px rounded corners vs Fear\'s 0px razor edges. Joy\'s warm brown shadows vs Fear\'s cold black vignettes. Joy\'s cubic-bezier spring that overshoots past 1.0 vs Fear\'s harsh ease-in that accelerates into darkness. Joy\'s generous spacing says "float in sunlight." Fear\'s tight spacing says "the walls are closing in."\n\nAmong all eight emotions, Joy is unique in being the only one where more is more. More whitespace, more rounding, more warmth, more bounce. Every other emotion exercises some form of restraint. Joy\'s design philosophy is generosity itself -- if you think there is enough padding, add 20% more.',

  colors: {
    tokens: {
      'primary': '#5c3e00',
      'on-primary': '#ffffff',
      'primary-container': '#7b5400',
      'on-primary-container': '#ffcc7a',
      'primary-fixed': '#ffdead',
      'primary-fixed-dim': '#f3be67',
      'on-primary-fixed': '#281900',
      'on-primary-fixed-variant': '#604100',
      'secondary': '#9f4123',
      'on-secondary': '#ffffff',
      'secondary-container': '#fd8864',
      'on-secondary-container': '#732104',
      'secondary-fixed': '#ffdbd0',
      'secondary-fixed-dim': '#ffb59f',
      'on-secondary-fixed': '#3a0a00',
      'on-secondary-fixed-variant': '#7f2a0d',
      'tertiary': '#6f5d04',
      'on-tertiary': '#ffffff',
      'tertiary-container': '#c1aa50',
      'on-tertiary-container': '#4c3e00',
      'tertiary-fixed': '#fbe281',
      'tertiary-fixed-dim': '#dec668',
      'on-tertiary-fixed': '#221b00',
      'on-tertiary-fixed-variant': '#544600',
      'surface': '#fff9ea',
      'surface-dim': '#e0dac4',
      'surface-bright': '#fff9ea',
      'surface-container-lowest': '#ffffff',
      'surface-container-low': '#faf4dd',
      'surface-container': '#f5eed7',
      'surface-container-high': '#efe8d1',
      'surface-container-highest': '#e9e2cc',
      'surface-tint': '#7e5703',
      'surface-variant': '#e9e2cc',
      'on-surface': '#1e1c0e',
      'on-surface-variant': '#4f4537',
      'outline': '#817566',
      'outline-variant': '#d3c4b2',
      'inverse-primary': '#f3be67',
      'inverse-surface': '#333121',
      'inverse-on-surface': '#f8f1da',
      'background': '#fff9ea',
      'on-background': '#1e1c0e',
      'error': '#ba1a1a',
      'on-error': '#ffffff',
      'error-container': '#ffdad6',
      'on-error-container': '#93000a',
    },
    palette: ['#ffd709', '#7b5400', '#9f4123', '#fdf6df', '#fff8e8'],
    mildToIntense: [
      '#fff9ea',
      '#faf4dd',
      '#f5eed7',
      '#ffd709',
      '#7b5400',
      '#5c3e00',
      '#281900',
    ],
    rationale:
      'Warm hues -- saturated yellows, ambers, and coral accents -- signal optimism, enthusiasm, and playfulness. Apply the 60-30-10 rule: 60% warm neutral base (#fff8e8), 30% hero warm color (#ffd709), 10% intense contrast (#7b5400). Heavy darks dampen the mood.',
  },

  typography: {
    headlineFont: 'Plus Jakarta Sans',
    headlineFallback: 'sans-serif',
    bodyFont: 'Be Vietnam Pro',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Joy',
        size: '3.5rem',
        weight: 800,
        font: 'headline',
        tracking: '-0.02em',
      },
      headline: {
        text: 'Bouncy Clarity',
        size: '2rem',
        weight: 700,
        font: 'headline',
        tracking: '-0.02em',
      },
      title: {
        text: 'Radiance',
        size: '1.25rem',
        weight: 600,
        font: 'body',
      },
      body: {
        text: 'Warm, light, expansive',
        size: '1rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'CELEBRATE',
        size: '0.75rem',
        weight: 600,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.05em',
      },
      caption: {
        text: 'From color psychology research',
        size: '0.625rem',
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
      headline: 1.3,
      body: 1.6,
    },
    mildToIntense:
      'Mild: Plus Jakarta Sans at weight 300 with generous line-height 1.8. Intense: weight 800 with tight line-height 1.1 and increased letter-spacing 0.04em.',
    rationale:
      'Humanist and rounded sans-serifs with softer terminals feel approachable and cheerful. Light to medium weights with larger sizes feel relaxed and optimistic. Rigid condensed typefaces feel tense, not joyful. The bouncy geometry of Plus Jakarta Sans mirrors the buoyancy of joy itself.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '16px' },
      { label: 'LG', value: '24px' },
      { label: 'XL', value: '32px' },
    ],
    density: 'generous',
    mildToIntense:
      'Mild: 48px between sections for maximum openness. Intense: 24px but never cramped -- joy never squeezes.',
    rationale:
      'If you think there is enough padding, add 20% more. Generous whitespace creates a pleasurable, low-friction experience. Content should feel like it is floating in a pool of sunlight. Crowded layouts kill joy -- breathing room IS the design.',
  },

  motion: {
    duration: '350ms',
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    character: 'bouncy',
    bezierPoints: [0.34, 1.56, 0.64, 1],
    mildToIntense:
      'Mild: 500ms ease-out, gentle and unhurried. Moderate: 350ms with slight spring overshoot. Intense: 200ms with exaggerated spring bounce -- confetti energy, celebration physics.',
    rationale:
      'Joy movements are bouncy, playful, and organic. They overshoot slightly then settle -- like a ball bouncing. Micro-animations on success states (checkmarks popping, subtle confetti) reliably evoke happiness. Linear and mechanical easing is forbidden -- joy is alive.',
  },

  depth: {
    approach: 'shadows',
    levels: [
      {
        label: 'Soft',
        description: 'Ambient warmth -- barely there',
        background: '#ffffff',
      },
      {
        label: 'Medium',
        description: 'Lifted card -- warm ambient occlusion',
        background: '#ffffff',
      },
      {
        label: 'Glow',
        description: 'Celebratory emphasis -- primary tint',
        background: '#fff9ea',
      },
    ],
    shadowIfNeeded: '0 8px 32px rgba(65, 41, 35, 0.05)',
    ghostBorder: '1px solid rgba(211, 196, 178, 0.15)',
    rationale:
      'Warm shadows in amber/brown tones feel organic and inviting, like real sunlight casting soft ambient shadows. Grey shadows feel institutional and cold. High blur with low opacity creates atmospheric depth without heaviness. Use on-surface (#412923) tint at 5-8% for soft/medium, primary tint (#7e5703) at 12-15% for glow.',
  },

  shapes: {
    radii: [
      { label: 'SM', value: '8px' },
      { label: 'LG', value: '20px' },
      { label: 'XL', value: '24px', recommended: true },
      { label: 'Pill', value: '9999px' },
    ],
    cornerStyle: 'rounded',
    mildToIntense:
      'Mild: LG (20px) for friendly warmth. Intense: XL (24px) or Pill for maximum bubbly playfulness.',
    rationale:
      'Rounded shapes -- circles, soft pills, and curves -- are strongly associated with positive, non-threatening feelings. Sharp angles subconsciously hint at danger or tension which undercuts joy. Even the smallest checkbox must have generous rounding. Think: smooth pebbles, not cut stones.',
  },

  layout: {
    alignment: 'asymmetric',
    density: 'sparse',
    rationale:
      'Rigid grid-based layouts feel like software tools. Asymmetry with generous white space creates an editorial, lifestyle feel. Elements should float like they are suspended in warm light. Break the grid intentionally -- joy is not systematic, it is organic.',
  },

  iconography: {
    icons: [
      { name: 'favorite', label: 'Love' },
      { name: 'star', label: 'Delight' },
      { name: 'sunny', label: 'Warmth' },
      { name: 'celebration', label: 'Joy' },
      { name: 'mood', label: 'Happiness' },
      { name: 'emoji_nature', label: 'Organic' },
    ],
    style:
      'Rounded weight (400), organic, friendly. Prefer filled or rounded icons over outlined. Icons should feel warm and approachable, never sharp or technical.',
    weight: 400,
    fill: false,
    rationale:
      'Joy icons use rounded, filled forms that feel warm and friendly. Stars, suns, and hearts are universal symbols of happiness. Thin outlined icons feel too clinical -- joy wants substance and warmth.',
  },

  rules: {
    dos: [
      'Generous white space everywhere',
      'Round all corners to at least 8px',
      'Radiant warm amber/gold palette',
      'Plus Jakarta Sans for headlines',
      'Asymmetric editorial compositions',
      'Micro-animation on success actions',
      'Warm brown shadows, never grey',
      '60-30-10 warm color balance',
    ],
    donts: [
      'Pure black (#000000)',
      '1px solid borders (No-Line Rule)',
      'Sharp or angular corners',
      'Grey shadows -- warm tints only',
      'Rigid repetitive grid layouts',
      'Heavy dark backgrounds',
    ],
  },

  words: {
    words: [
      'Elation',
      'Delight',
      'Bliss',
      'Radiance',
      'Warmth',
      'Serenity',
      'Optimism',
      'Clarity',
    ],
    feel: 'warm, light, expansive -- like laughing on a sunny day',
  },
};

// Self-register on import
registerAdvisory(JOY_ADVISORY);

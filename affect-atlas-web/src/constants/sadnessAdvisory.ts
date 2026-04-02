/**
 * Sadness advisory -- extracted from The design output.
 * Source: stitch-exports/sadness-advisory/code.html
 * Values reflect what The design ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const SADNESS_ADVISORY: EmotionAdvisory = {
  emotion: 'sadness',
  label: 'Sadness',
  northStar: 'The Fragile Editorial',
  philosophy: {
    brief:
      'Contemplative stillness -- staring through rain that blurs the world. Not crying, just quiet. The absence of what was.',
    rationale:
      'Sadness in visual design comes from absence, weight, and desaturation. Pale, overcast palettes with cool blue-grays drain the world of vibrancy. Light serif typography at thin weights suggests fragility and impermanence. Vast negative space creates isolation -- not the threatening isolation of Fear (darkness surrounding you), but the melancholic isolation of solitude (everyone has left and the room is very quiet). The most effective sadness is not dramatic. It is the stillness after something has ended.',
  },
  deepened: true,
  source: 'stitch:sadness_advisory',

  emotionalContext:
    'Sadness is the only negative emotion with a LIGHT palette. Fear and Anger both retreat into darkness -- Fear into cold violet-black, Anger into hot crimson-black. Sadness does not hide in the dark. It stands in pale overcast light where everything is visible but nothing feels vivid. The desaturated blue-grays of an overcast sky. Color that has been drained, not hidden.\n\nBoth Sadness and Joy use generous whitespace, but for opposite reasons. Joy\'s whitespace is a gift -- room to breathe, to expand, to feel generous. Sadness\'s whitespace is an absence -- the empty chair, the silence where a voice used to be. Joy\'s warm ambers fill a room with light. Sadness\'s cool blue-grays fill a room with distance.\n\nSadness and Fear both use cool palettes and thin typography, but Sadness is gentle where Fear is clinical. Fear\'s tight spacing says "walls closing in." Sadness\'s generous spacing says "everyone has left." Fear\'s sharp 0px corners feel dangerous. Sadness\'s soft 4px corners feel resigned.\n\nAmong all eight emotions, Sadness is the only one where the design system should feel like it is slowly fading. Not broken, not aggressive, not hiding -- just gradually becoming less. Lighter weights, lower contrast, more space between things. The visual equivalent of a long exhale.',

  colors: {
    tokens: {
      'primary': '#48626e',
      'on-primary': '#f0f9ff',
      'primary-container': '#cbe7f5',
      'on-primary-container': '#3b5561',
      'primary-dim': '#3c5662',
      'primary-fixed': '#cbe7f5',
      'primary-fixed-dim': '#bdd9e7',
      'on-primary-fixed': '#29434e',
      'on-primary-fixed-variant': '#455f6b',
      'secondary': '#5c6062',
      'on-secondary': '#f6f9fc',
      'secondary-container': '#e0e3e6',
      'on-secondary-container': '#4e5255',
      'secondary-dim': '#505456',
      'secondary-fixed': '#e0e3e6',
      'secondary-fixed-dim': '#d1d5d8',
      'on-secondary-fixed': '#3c4042',
      'on-secondary-fixed-variant': '#585c5f',
      'tertiary': '#5a6064',
      'on-tertiary': '#f5f9ff',
      'tertiary-container': '#eff4f9',
      'on-tertiary-container': '#575c61',
      'tertiary-dim': '#4e5458',
      'tertiary-fixed': '#eff4f9',
      'tertiary-fixed-dim': '#e1e6eb',
      'on-tertiary-fixed': '#454a4f',
      'on-tertiary-fixed-variant': '#61676b',
      'surface': '#f2fbff',
      'surface-dim': '#bde0ec',
      'surface-bright': '#f2fbff',
      'surface-container-lowest': '#ffffff',
      'surface-container-low': '#e8f6fb',
      'surface-container': '#def1f8',
      'surface-container-high': '#d5ecf5',
      'surface-container-highest': '#cae7f2',
      'surface-tint': '#48626e',
      'surface-variant': '#cae7f2',
      'on-surface': '#1b363e',
      'on-surface-variant': '#48636c',
      'outline': '#647f88',
      'outline-variant': '#9ab6c1',
      'inverse-primary': '#d3effe',
      'inverse-surface': '#070f12',
      'inverse-on-surface': '#959ea2',
      'background': '#f2fbff',
      'on-background': '#1b363e',
      'error': '#9f403d',
      'on-error': '#fff7f6',
      'error-dim': '#4e0309',
      'error-container': '#fe8983',
      'on-error-container': '#752121',
    },
    palette: ['#48626e', '#cbe7f5', '#B0A9C4', '#f2fbff', '#bde0ec'],
    mildToIntense: [
      '#f2fbff',
      '#e8f6fb',
      '#def1f8',
      '#bde0ec',
      '#9ab6c1',
      '#647f88',
      '#1b363e',
    ],
    rationale:
      'Desaturated blues, blue-grays, and cool tones convey the "drained" quality of sadness. Unlike Fear\'s dramatic violet-on-black or Anger\'s saturated crimson, Sadness uses the palette of an overcast day -- nothing is completely dark, nothing is bright, everything is muted. The cool blue undertone in every neutral ensures nothing feels warm or inviting.',
  },

  typography: {
    headlineFont: 'Cormorant Garamond',
    headlineFallback: 'serif',
    bodyFont: 'Newsreader',
    bodyFallback: 'serif',
    scale: {
      display: {
        text: 'Sadness',
        size: '4rem',
        weight: 300,
        font: 'headline',
      },
      headline: {
        text: 'Solitude',
        size: '2.5rem',
        weight: 400,
        font: 'headline',
      },
      title: {
        text: 'Absence',
        size: '1.25rem',
        weight: 400,
        font: 'body',
      },
      body: {
        text: 'Quiet, heavy, empty',
        size: '1rem',
        weight: 300,
        font: 'body',
      },
      label: {
        text: 'whisper',
        size: '0.75rem',
        weight: 400,
        font: 'body',
        tracking: '0.1em',
      },
      caption: {
        text: 'what remains',
        size: '0.625rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '0em',
      body: '0.01em',
      label: '0.1em',
    },
    lineHeight: {
      headline: 1.2,
      body: 1.7,
    },
    mildToIntense:
      'Mild: Cormorant Garamond at weight 300 with line-height 1.4 -- barely there, drifting. Moderate: weight 400 with line-height 1.3, slightly more present. Intense: weight 600 with line-height 1.1 -- monumental weight pressing down, the typography of gravestones.',
    rationale:
      'Sadness uses two serifs -- uniquely among all emotions. Cormorant Garamond\'s delicate thin strokes suggest fragility and impermanence at light weights, monumental gravity at heavy weights. Newsreader as body text adds editorial contemplation. Where Anger shouts in condensed Oswald uppercase, Sadness speaks in Cormorant Garamond lowercase. Where Fear compresses with tight line-height (0.85), Sadness opens with generous line-height (1.7) -- the space between lines is the silence between thoughts.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '16px' },
      { label: 'LG', value: '32px' },
      { label: 'XL', value: '48px' },
      { label: 'XXL', value: '64px' },
    ],
    density: 'generous',
    mildToIntense:
      'Mild: 48px between sections -- elements drifting apart, barely connected. Moderate: 32px, still spacious but with more deliberate structure. Intense: 16px, elements settling closer with the weight of stone.',
    rationale:
      'Spacious layouts with significant negative space convey emptiness and isolation. This is the opposite of Anger\'s crushing density and Fear\'s claustrophobic compression. In sadness, the empty space is not threatening (Fear) or generous (Joy) -- it is what remains when everything else has been taken away. The space is the sadness.',
  },

  motion: {
    duration: '600ms',
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    character: 'drifting',
    bezierPoints: [0.22, 1, 0.36, 1],
    mildToIntense:
      'Mild: 800ms ease-out, barely perceptible -- things drift like fog. Moderate: 600ms, deliberate but unhurried -- a slow exhale. Intense: 400ms ease-in, heavier and more final -- things settle with weight and finality.',
    rationale:
      'Sadness motion is the slowest of all eight emotions. Where Anger snaps in 150ms and Fear pulls into darkness at 200ms, Sadness drifts at 600ms. Nothing is urgent. Nothing demands attention. Elements fade in gently, settle downward slightly, and come to rest -- never with bounce (Joy), never with impact (Anger), never with tension (Fear).',
  },

  depth: {
    approach: 'tonal',
    levels: [
      {
        label: 'Mist',
        description: 'Level 0: Surface container',
        background: '#def1f8',
      },
      {
        label: 'Overcast',
        description: 'Level 1: Surface container high',
        background: '#d5ecf5',
      },
      {
        label: 'Stone',
        description: 'Level 2: Surface dim',
        background: '#bde0ec',
      },
    ],
    shadowIfNeeded: '0 20px 40px rgba(27, 54, 62, 0.04)',
    ghostBorder: '1px solid rgba(154, 182, 193, 0.15)',
    rationale:
      'Shadows imply that light exists -- strong directional light casting shapes. In sadness, the light is overcast and diffuse. No directional shadows. No dramatic depth. Things exist on the surface, flat and present, but drained of the energy required to cast a shadow. Joy\'s warm shadows glow with sunlight. Fear\'s black vignettes creep inward. Anger\'s crushing shadows press down. Sadness has no shadows at all -- just the quiet absence of light.',
  },

  shapes: {
    radii: [
      { label: 'Subtle', value: '2px' },
      { label: 'Standard', value: '4px', recommended: true },
      { label: 'Gentle', value: '8px' },
      { label: 'Soft', value: '12px' },
    ],
    cornerStyle: 'smooth',
    mildToIntense:
      'Mild: 8px (gentle, drifting). Moderate: 4px (standard, weathered). Intense: 2px (tightening, stone-like).',
    rationale:
      'Sadness occupies the middle ground of corner radius. Fear\'s 0px feels dangerous. Joy\'s 24px feels friendly. Trust\'s 4px feels precise. Sadness\'s 4px feels resigned -- corners gently smoothed by time and erosion, like river stones. Not sharp enough to threaten, not round enough to comfort.',
  },

  layout: {
    alignment: 'asymmetric',
    density: 'sparse',
    rationale:
      'Isolated focal points surrounded by negative space evoke loneliness. Bottom-heavy compositions suggest settling, sinking, the pull of gravity on something too tired to resist. Unlike Joy\'s balanced generosity or Anger\'s compressed force, Sadness layouts are defined by what is NOT there.',
  },

  iconography: {
    icons: [
      { name: 'water_drop', label: 'Tears' },
      { name: 'cloud', label: 'Overcast' },
      { name: 'nightlight', label: 'Dim light' },
      { name: 'favorite', label: 'Hollow heart' },
      { name: 'hourglass_empty', label: 'Passing time' },
      { name: 'wb_twilight', label: 'Fading day' },
    ],
    style:
      'Thin stroke (200 weight), soft, minimal. Outlined only -- never filled. Sadness icons should feel like they might fade away. The thin weight matches Fear\'s fragility but without Fear\'s clinical precision -- these icons are gentle, not sharp.',
    weight: 200,
    fill: false,
    rationale:
      'Sadness icons reference weather (overcast, twilight), time (hourglass), and emotion (tears, hollow heart). Ultra-thin stroke weight makes icons feel ephemeral and impermanent. Unlike Anger\'s heavy 600-weight icons that demand attention, Sadness icons exist quietly at the edge of perception.',
  },

  rules: {
    dos: [
      'Light overcast backgrounds (pale blue-gray)',
      'Thin font weights (200-400) for fragility',
      'Generous line-height (1.5-1.7) for breathing',
      'Large negative space between elements',
      'Tonal depth only -- no drop shadows',
      'Soft smooth corners (2-8px)',
      'Slow drifting motion (600ms+)',
      'Desaturated cool palette throughout',
    ],
    donts: [
      'Dark backgrounds (that is Fear and Anger)',
      'Heavy or bold font weights (too forceful)',
      'Tight line-height (too compressed)',
      'Dense layouts (density is Anger\'s territory)',
      'Drop shadows of any kind',
      'Sharp 0px corners (too aggressive)',
      'Snappy animations (too energetic)',
      'Saturated or warm colors',
    ],
  },

  words: {
    words: [
      'Melancholy',
      'Sorrow',
      'Grief',
      'Loneliness',
      'Despair',
      'Wistfulness',
      'Heartache',
      'Yearning',
    ],
    feel: 'quiet, heavy, empty -- like staring out a rain-streaked window',
  },
};

// Self-register on import
registerAdvisory(SADNESS_ADVISORY);

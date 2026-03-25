/**
 * Loneliness advisory -- extracted from Stitch output.
 * Source: stitch-exports/loneliness-advisory/code.html
 * Values reflect what Stitch ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const LONELINESS_ADVISORY: EmotionAdvisory = {
  emotion: 'loneliness' as any,
  label: 'Loneliness',
  northStar: 'The Empty Room',
  philosophy: {
    brief:
      'Isolation is the physical state -- loneliness is the architectural experience. We design for the quiet disconnection that allows a single thought to drift across a room without hitting an obstacle.',
    rationale:
      'Loneliness in visual design comes from emptiness, distance, and the quiet ache of disconnection. Cool blue-black backgrounds create the atmosphere of deep night -- not dramatic midnight but the specific cold darkness of being the only person awake. Vast negative space dwarfs content, making each element feel small and isolated. Thin fragile typography (Josefin Sans at weight 300 with 0.06em letter-spacing) reaches upward into void -- even the characters are alone. The most effective loneliness is not dramatic. It is the persistent awareness that something is missing. A single chair in an empty house.',
  },
  deepened: true,
  source: 'stitch:loneliness_advisory',

  emotionalContext:
    'Loneliness and Depression share dark palettes and low energy, but the SPACE is different. Depression is flat -- grey surfaces barely differentiated, default spacing, mechanical indifference (Space Grotesk at weight 400, 6px default corners, 500ms drag). Loneliness is vast -- cool blue-black with pools of cold light, enormous negative space, elements dwarfed by their containers (Josefin Sans at weight 300, 8px smooth corners, 450ms drift). Depression is a grey wall. Loneliness is an empty room.\n\nLoneliness also inverts Joy\'s spatial strategy. Joy fills space generously with warm energy -- elements bounce close together, corners are soft and inviting, everything connects. Loneliness empties space with cold distance -- elements float far apart, corners are smooth but closed-off, nothing connects. Joy says there is room for everyone. Loneliness says there is room, but no one else is here.\n\nAmong all emotions, Loneliness makes the most use of NEGATIVE SPACE. Sadness drifts in formless space. Depression sits in default space. But Loneliness uses emptiness as its primary design element -- the void between sections IS the loneliness. Each element is a small island of content surrounded by a sea of dark blue-black. Josefin Sans at weight 300 with wide letter-spacing physically separates each letter from its neighbors. Even the characters are alone.',

  colors: {
    tokens: {
      'primary': '#a2caf6',
      'on-primary': '#003355',
      'primary-container': '#5078a0',
      'on-primary-container': '#fefcff',
      'secondary': '#cdc3d5',
      'on-secondary': '#342e3c',
      'secondary-container': '#4b4453',
      'on-secondary-container': '#bbb1c3',
      'tertiary': '#d7c3b1',
      'on-tertiary': '#3a2e21',
      'tertiary-container': '#827262',
      'on-tertiary-container': '#fffcff',
      'surface': '#111317',
      'surface-dim': '#111317',
      'surface-bright': '#37393e',
      'surface-container-lowest': '#0c0e12',
      'surface-container-low': '#1a1c20',
      'surface-container': '#1e2024',
      'surface-container-high': '#282a2e',
      'surface-container-highest': '#333539',
      'surface-tint': '#a2caf6',
      'surface-variant': '#333539',
      'on-surface': '#e2e2e8',
      'on-surface-variant': '#c2c7cf',
      'outline': '#8c9199',
      'outline-variant': '#42474e',
      'inverse-surface': '#e2e2e8',
      'inverse-primary': '#386188',
      'inverse-on-surface': '#2f3035',
      'background': '#111317',
      'on-background': '#e2e2e8',
      'error': '#ffb4ab',
      'on-error': '#690005',
      'error-container': '#93000a',
      'on-error-container': '#ffdad6',
    },
    palette: ['#121418', '#5078a0', '#706878', '#887868', '#b8bcc8'],
    mildToIntense: [
      '#7098b8',
      '#888090',
      '#a09888',
      '#5078a0',
      '#706878',
      '#304868',
      '#504858',
    ],
    rationale:
      'Stitch shifted the primary from the requested muted steel blue (#5078a0) to a brighter sky blue (#a2caf6) in the MD3 system, placing the original request as primary-container. The palette swatches in the visual layout faithfully show the requested values: #121418 (vast dark), #5078A0 (distant blue), #706878 (twilight lavender), #887868 (faded memory), #B8BCC8 (dim light). Each swatch is rendered as an isolated circle with gap-20 (80px) between them -- each color is an island. On cool blue-black (#111317, not Depression\'s neutral #161618 -- specifically cool and blue like the sky long after sunset), the palette reads as a window at night reflecting your own face.',
  },

  typography: {
    headlineFont: 'Josefin Sans',
    headlineFallback: 'sans-serif',
    bodyFont: 'Cabin',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Loneliness',
        size: '1.625rem',
        weight: 300,
        font: 'headline',
        tracking: '0.06em',
      },
      headline: {
        text: 'Josefin Sans',
        size: '1.5rem',
        weight: 300,
        font: 'headline',
      },
      title: {
        text: 'Distance',
        size: '1.125rem',
        weight: 400,
        font: 'headline',
      },
      body: {
        text: 'The quiet ache of disconnection.',
        size: '0.875rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'SINGULAR',
        size: '0.6rem',
        weight: 500,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.2em',
      },
      caption: {
        text: 'No one would notice',
        size: '0.6rem',
        weight: 400,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '0.06em',
      body: '0.02em',
      label: '0.2em',
    },
    lineHeight: {
      headline: 1.15,
      body: 1.8,
    },
    mildToIntense:
      'Mild: weight 300-400, tracking 0.06em -- thin but present. Alone but visible. Moderate: weight 300, tracking 0.08em -- letters drifting apart. Intense: weight 300, tracking 0.1em -- letters dissolving into the void between them. Each character barely acknowledges the next.',
    rationale:
      'Stitch rendered Josefin Sans at weight 300 (font-light) for the header and all major headings with the .letter-spaced class (0.06em). The weight ramp shows Light 300 at text-4xl, Regular 400 at text-3xl, Bold 700 at text-2xl -- the lightest weight gets the largest size, emphasizing the thin fragility. The "The Empty Room" philosophy heading is text-2xl font-light. Cabin appears as body text at text-sm font-light with opacity-60 and leading-relaxed (1.8) -- a modest human presence. The wide letter-spacing physically separates each letter from its neighbors. This is the opposite of Anger\'s condensed -0.03em (characters forced together). Even the CHARACTERS are alone.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '6px' },
      { label: 'SM', value: '14px' },
      { label: 'MD', value: '28px' },
      { label: 'LG', value: '48px' },
      { label: 'XL', value: '72px' },
    ],
    density: 'generous',
    mildToIntense:
      'Mild: lg 36px -- alone with the walls closer. Still distant but contained. Moderate: lg 48px -- each element an island, standard loneliness. Intense: lg 64px -- elements barely visible in the vastness. The distance becomes the dominant visual feature.',
    rationale:
      'Stitch used mb-[12rem] to mb-[14rem] (192-224px) between sections -- by far the largest gaps of any advisory. Content is constrained to max-w-xs (~320px) within the 393px viewport, with enormous px-6 padding and pt-32 top offset. The spacing ruler shows 6/14/28/48/72px with space-y-12 (48px) between ruler entries -- even the spacing demonstration is sparse. The color palette uses gap-20 (80px) between individual swatches. This is NOT Contentment\'s generous spacing (which feels full and satisfied) -- this is the aching spacing of absence. Something should be here. No one came.',
  },

  motion: {
    duration: '450ms',
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    character: 'isolated',
    bezierPoints: [0.25, 0.1, 0.25, 1],
    mildToIntense:
      'Mild: 380ms, slightly more responsive -- still alone but still responding to contact. Moderate: 450ms, drifting -- unhurried because there is no one to hurry for. Intense: 550ms, slower, with deeper opacity drop -- elements barely acknowledge interaction. Touch and the element fades.',
    rationale:
      'Stitch created a .slow-transition class with the exact 450ms cubic-bezier(0.25, 0.1, 0.25, 1) easing and a .sink-hover class (translateY(4px)) that makes elements SINK away from touch -- reach out and things pull away. The "Reach" button combines both: sink on hover, slow transition timing. The bottom nav links use the same 450ms timing. Unlike Awe\'s 450ms (which drifts with cathedral curves and slow reverence), Loneliness\'s 450ms is unhurried because there is no one to hurry for. The standard ease-out is unremarkable -- nothing about the motion demands attention.',
  },

  depth: {
    approach: 'shadows',
    levels: [
      {
        label: 'Glimmer',
        description: 'Faint cold spotlight, barely visible pool of blue light',
        background: '#1a1c20',
      },
      {
        label: 'Pool',
        description: 'Standard cold spotlight, element in a dim pool of illumination',
        background: '#1a1c20',
      },
      {
        label: 'Island',
        description: 'Full cold spotlight, a solitary island of cold blue light',
        background: '#1a1c20',
      },
    ],
    shadowIfNeeded: '0 20px 40px rgba(80, 120, 160, 0.08)',
    ghostBorder: '1px solid rgba(66, 71, 78, 0.1)',
    rationale:
      'Stitch created a .empty-room-shadow class (0 20px 40px rgba(80, 120, 160, 0.08)) -- cold blue-tinted with a very wide blur radius (40px) relative to the small offset (20px), creating diffuse, distant light like streetlight through a window at 3am. All three depth cards (Glimmer, Pool, Island) use the same shadow with icons at primary/40 opacity. The header also uses this shadow. Unlike Depression\'s flat tonal depth (no shadows at all), Loneliness has a faint cold light. It is not warm (Pride\'s gold spotlight) or atmospheric (Fear\'s ethereal vignette) -- it is the specific cold blue of a single lamp in an empty room.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px' },
      { label: 'SM', value: '4px' },
      { label: 'MD', value: '8px', recommended: true },
      { label: 'LG', value: '12px' },
    ],
    cornerStyle: 'smooth',
    mildToIntense:
      'Mild: 10-12px (a small softening, a small hope). Moderate: 8px (contained standard). Intense: 6px (shapes withdrawing into themselves, edges tightening).',
    rationale:
      'Stitch set DEFAULT to 4px, lg to 8px, and xl to 12px. The shapes grid highlights lg (8px) as the recommended radius with a primary-colored outline. Shapes are smooth enough to avoid hostility but contained enough to avoid warmth. Each element is clearly bounded -- a discrete unit surrounded by emptiness. Compare to Contentment\'s 16px (inviting, open) and Embarrassment\'s 14px (defensive, curling inward). Loneliness\'s 8px is closed-off: not hostile, not welcoming. Just self-contained.',
  },

  layout: {
    alignment: 'center',
    density: 'sparse',
    rationale:
      'Stitch created a center-aligned layout with max-w-xs constraining content to ~320px within the 393px viewport. The wireframe section is a 400px-tall container with a single 4x4px blurred primary element centered within it -- the ultimate demonstration of loneliness: one tiny thing, surrounded by nothing. Content blocks are narrow and isolated. The centering is not Pride\'s ceremonial centering (important, spotlit). Loneliness\'s centering is the single object in a room -- centered because you are the ONLY thing.',
  },

  iconography: {
    icons: [
      { name: 'person', label: 'Singular' },
      { name: 'chair', label: 'Empty' },
      { name: 'nights_stay', label: 'Night' },
      { name: 'water', label: 'Still' },
      { name: 'brightness_1', label: 'Point' },
      { name: 'wb_twilight', label: 'Dusk' },
    ],
    style:
      'Extremely thin (200 weight, GRAD 0) -- the thinnest icon weight in the system. Ghostly line drawings that might fade entirely. Each icon is a singular object: one person, one chair, one star. Everything is alone.',
    weight: 200,
    fill: false,
    rationale:
      'Stitch rendered icons at weight 200 (confirmed in font-variation-settings) -- thinner than Depression\'s 300, thinner than Guilt\'s 400. The icon grid uses gap-y-16 (64px) between rows and renders in on-surface-variant at 40% opacity -- extremely faint ghostly outlines. Each icon is a singular object: one person, one chair, one moon, one body of water, one point of light, one dusk. The footer nav icons also use opacity-0 on inactive labels -- they exist but their names are invisible. Loneliness\'s icons are poetic and singular -- each one a small meditation on aloneness.',
  },

  rules: {
    dos: [
      'Use vast negative space as emotional content (7rem+ section gaps)',
      'Keep elements small relative to their containers',
      'Apply cool blue tints to surfaces and shadows',
      'Use extremely thin typography (weight 300, letter-spacing 0.06em)',
      'Center elements to emphasize the surrounding void',
      'Keep motion slow and drifting (450ms, sink on interaction)',
      'Use cold spotlight shadows (blue-tinted rgba(80,120,160))',
      'Constrain content width to create emptiness on sides',
    ],
    donts: [
      '1px borders and hard grid lines',
      'High-density information clusters',
      'Fast snappy transitions (100-200ms)',
      'Vibrant warm social colors (Joy/Contentment)',
      'Multiple elements placed close together',
      'Connected or grouped compositions',
      'Warm shadows or dramatic glowing (Pride)',
      'Flat grey monotony without depth (Depression)',
    ],
  },

  words: {
    words: [
      'Isolation',
      'Distance',
      'Absence',
      'Stillness',
      'Cold',
      'Singular',
      'Quiet',
      'Drift',
    ],
    feel: 'A single light on in a dark building. The design system creates a sense of quiet ache -- not dramatic suffering, but the persistent awareness that something is missing. The empty space around each element is not restful. It is the visible shape of disconnection.',
  },
};

// Self-register on import
registerAdvisory(LONELINESS_ADVISORY);

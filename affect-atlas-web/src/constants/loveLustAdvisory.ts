/**
 * Love: Lust variant advisory -- extracted from Stitch output.
 * Source: stitch-exports/love-advisory/lust.html + DESIGN-lust.md
 * Values reflect what Stitch ACTUALLY produced.
 *
 * NOTE: This is a variant of Love, not an independent emotion.
 * It does NOT self-register -- loveAdvisory.ts attaches it as a variant.
 *
 * Stitch loaded Newsreader + Plus Jakarta Sans + Space Grotesk instead
 * of the prompt's Crimson Pro + Rubik. The advisory uses the prompt's
 * researched fonts. Neon bloom shadows (30-50px blur, 4-12% opacity)
 * replace traditional drop shadows. Sharp 8-12px corners.
 * "No-Line" rule: boundaries via surface-tier shifts, never strokes.
 * Neon glow classes: .neon-glow-primary, .neon-glow-secondary, .neon-glow-tertiary.
 */

import type { EmotionAdvisory } from './advisoryData';

export const LOVE_LUST_ADVISORY: EmotionAdvisory = {
  emotion: 'love' as any,
  label: 'Lust',
  northStar: 'The High-Voltage Pulse',
  philosophy: {
    brief:
      'Magnetic, high-contrast, and slightly dangerous. The visual language of unapologetic pull -- neon-saturated highlights punching through absolute darkness, sharp and vibrating with intent.',
    rationale:
      'Lust captures ephemeral energy of a neon-lit midnight. This is not the safe warmth of Love or the smoldering depth of Passion -- it is electric, immediate, and slightly dangerous. Elements do not sit on a screen; they glow within a void. Extreme typographic scales, intentional asymmetry, and "light-source" UI create the sensation of being magnetically drawn toward something. Stitch rendered this as a dark-mode neon editorial with violet, hot pink, and cyan accents against midnight black surfaces.',
  },
  deepened: true,
  source: 'stitch:love_lust_advisory',

  emotionalContext:
    'Lust is the electric opposite of base Love. Where Love is blush-cream warmth (#fdf6f2) and rose-tinted candlelight, Lust is midnight black (#0e0e10) and neon violet (#de8eff). Where Love uses 300-weight outlined icons and 360ms embracing motion, Lust uses filled icons and 200ms snappy motion. Love draws close. Lust pulls hard.\n\nLust also contrasts with Passion. Both are intense, but Passion is deep wine darkness with warm rose glows -- a hearth, smoldering coals, glass panels that melt. Lust is absolute black with neon highlights -- a nightclub, electric pulses, sharp edges. Passion uses rounded 18px corners. Lust uses sharp 8-12px corners. Passion is 280ms smooth. Lust is 200ms snappy. Passion says "stay." Lust says "come closer, NOW."\n\nAmong all Love variants, Lust has the highest contrast ratio, the fastest motion, the sharpest corners, and the most aggressive color saturation. It is Love stripped of patience and filled with voltage.',

  colors: {
    tokens: {
      'primary': '#de8eff',
      'on-primary': '#4f006e',
      'primary-container': '#d779ff',
      'on-primary-container': '#3d0056',
      'secondary': '#ff6b9b',
      'on-secondary': '#47001f',
      'secondary-container': '#ba005b',
      'on-secondary-container': '#fff5f6',
      'tertiary': '#c1fffe',
      'on-tertiary': '#006767',
      'tertiary-container': '#00ffff',
      'on-tertiary-container': '#005d5d',
      'surface': '#0e0e10',
      'surface-dim': '#0e0e10',
      'surface-bright': '#2c2c2f',
      'surface-container-lowest': '#000000',
      'surface-container-low': '#131315',
      'surface-container': '#19191c',
      'surface-container-high': '#1f1f22',
      'surface-container-highest': '#262528',
      'surface-tint': '#de8eff',
      'surface-variant': '#262528',
      'on-surface': '#f9f5f8',
      'on-surface-variant': '#adaaad',
      'outline': '#767577',
      'outline-variant': '#48474a',
      'inverse-surface': '#fcf8fb',
      'inverse-primary': '#9900d1',
      'inverse-on-surface': '#565457',
      'background': '#0e0e10',
      'on-background': '#f9f5f8',
      'error': '#ff6e84',
      'on-error': '#490013',
      'error-container': '#a70138',
      'on-error-container': '#ffb2b9',
    },
    palette: ['#0e0e10', '#de8eff', '#ff6b9b', '#c1fffe', '#1f1f22'],
    mildToIntense: [
      '#adaaad',
      '#d779ff',
      '#de8eff',
      '#ff6b9b',
      '#c1fffe',
      '#ba005b',
      '#4f006e',
    ],
    rationale:
      'Stitch rendered four bold color bands: Electric Violet #DE8EFF, Hot Pink #FF6B9B, Cyan Glow #C1FFFE, and Midnight Black #0E0E10. The palette is built on absolute darkness punctuated by aggressive neon-saturated highlights. Primary #de8eff (Electric Violet) is the dominant accent. Secondary #ff6b9b (Hot Pink) provides passionate heat. Tertiary #c1fffe (Cyan Glow) creates the "high-voltage" contrast -- the unexpected cold accent that makes the warm colors feel electric. Surface-container-lowest is true #000000 -- the deepest void in any advisory.',
  },

  typography: {
    headlineFont: 'Crimson Pro',
    headlineFallback: 'serif',
    bodyFont: 'Rubik',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'LUST',
        size: '3.75rem',
        weight: 400,
        font: 'headline',
        transform: 'uppercase',
      },
      headline: {
        text: 'The Neon Void',
        size: '2.25rem',
        weight: 400,
        font: 'headline',
      },
      title: {
        text: 'Make them crave it',
        size: '1.5rem',
        weight: 400,
        font: 'headline',
      },
      body: {
        text: 'Every element should feel like it is vibrating with latent energy.',
        size: '1.125rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'EMOTION ADVISORY',
        size: '0.75rem',
        weight: 700,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.2em',
      },
      caption: {
        text: 'DESIGN ADVISORY CONCLUDED',
        size: '0.625rem',
        weight: 400,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.2em',
      },
    },
    letterSpacing: {
      headline: '-0.01em',
      body: '0em',
      label: '0.2em',
    },
    lineHeight: {
      headline: 1.1,
      body: 1.6,
    },
    mildToIntense:
      'Mild: Crimson Pro at 400 with standard leading -- elegant, controlled energy. Moderate: 400-500 with tighter leading (1.1) and slight negative tracking -- dense and authoritative, words sitting close. Intense: 700 with ALL CAPS and wide tracking (0.1-0.2rem) -- technical, high-end precision, the typography of a warning label.',
    rationale:
      'Stitch loaded Newsreader + Plus Jakarta Sans + Space Grotesk instead of the prompt\'s Crimson Pro + Rubik. DESIGN-lust.md specifies "Crimson Pro / Newsreader" for Display & Headlines and "Rubik / Plus Jakarta Sans" for Body. The advisory uses the prompt\'s primary choices (Crimson Pro + Rubik) for consistency with the Love family. Stitch rendered "LUST" at text-6xl italic and section headers at text-4xl/text-5xl italic. All label text in ALL CAPS with 0.1-0.2rem letter-spacing -- DESIGN calls this "high-end precision."',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '16px' },
      { label: 'LG', value: '28px' },
      { label: 'XL', value: '48px' },
    ],
    density: 'tight',
    mildToIntense:
      'Mild: LG at 36px, slightly looser for breathing room in the void. Moderate: LG at 28px, tight and focused -- elements packed with intention. Intense: LG at 20px, maximum density -- information compressed like a high-voltage charge.',
    rationale:
      'Stitch used mb-16/mb-20 (64-80px) between sections but tight internal spacing. The grid-cols-2 philosophy bento has gap-4 (16px). The visual lexicon gallery uses gap-2 (8px). The density is higher than base Love or Passion -- Lust is about compression and urgency. DESIGN says "Embrace the Void" for large areas but with dense, intentional content clusters.',
  },

  motion: {
    duration: '200ms',
    easing: 'cubic-bezier(0.2, 0, 0.4, 1)',
    character: 'electric',
    bezierPoints: [0.2, 0, 0.4, 1],
    mildToIntense:
      'Mild: 280ms, fast but not jarring -- a current flowing under the surface. Moderate: 200ms snappy easing -- electric and immediate, the speed of attraction. Intense: 120ms with a tertiary (#c1fffe cyan) flash on state change -- the "Pulse Trigger" effect, addictive urgency.',
    rationale:
      'DESIGN specifies "200ms snappy easing for all hover states -- it should feel electric and immediate." Stitch rendered the "Pulse Trigger" button with active:scale-95 and a 200ms flash of cyan before settling. Image hover uses duration-700 for the slow-reveal zoom. The motion is the fastest in the Love family -- where Love is 360ms and Passion is 280ms, Lust is 200ms. Transitions should feel fast and precise, never bouncy or lazy.',
  },

  depth: {
    approach: 'glow',
    levels: [
      {
        label: 'Ambient Pulse',
        description: 'Subtle neon bleed at the edges -- the distant glow of the void',
        background: '#131315',
      },
      {
        label: 'Active Bloom',
        description: 'Neon bloom at 30-40px blur -- the component sits on a neon light tube',
        background: '#1f1f22',
      },
      {
        label: 'Full Neon',
        description: 'Maximum bloom with text-glow -- everything radiates electric energy',
        background: '#262528',
      },
    ],
    shadowIfNeeded: '0 0 40px rgba(222, 142, 255, 0.15)',
    ghostBorder: '1px solid rgba(72, 71, 74, 0.15)',
    rationale:
      'DESIGN specifies "Neon Blooms" instead of shadows: large, highly diffused shadows (30-50px blur) using low-opacity primary/secondary tokens (4-12%). Standard grey drop shadows are strictly forbidden. Stitch implemented three neon glow classes: .neon-glow-primary (0 0 40px rgba(222,142,255,0.15)), .neon-glow-secondary (0 0 40px rgba(255,107,155,0.15)), .neon-glow-tertiary (0 0 40px rgba(193,255,254,0.15)). Text glow: text-shadow 0 0 12px rgba(222,142,255,0.8). Bottom nav: 0 -10px 40px rgba(222,142,255,0.08). Everything emits light rather than casting shadows.',
  },

  shapes: {
    radii: [
      { label: 'SM', value: '2px' },
      { label: 'MD', value: '8px', recommended: true },
      { label: 'LG', value: '12px' },
      { label: 'XL', value: '16px' },
    ],
    cornerStyle: 'sharp',
    mildToIntense:
      'Mild: 12-16px, slightly softer for a less aggressive edge. Moderate: 8px, the standard -- sharp enough to feel dangerous and exclusive. Intense: 2-4px, near-square corners -- maximum precision, maximum edge.',
    rationale:
      'Stitch used rounded-lg (12px) for most containers. DESIGN specifies "Sharpen the Edges: Stick strictly to 8px-12px corner radius. Anything rounder kills the dangerous edge of the brand." Tailwind config: DEFAULT 0.125rem (2px), lg 0.75rem (12px), xl 1rem (16px). This is the sharpest corner system in the Love family -- base Love uses 18px rounded, Passion uses 18px rounded, Lust uses 8-12px sharp. The edges say "this is not safe."',
  },

  layout: {
    alignment: 'asymmetric',
    density: 'dense',
    rationale:
      'DESIGN specifies "Intentional asymmetry: Align text to the left but allow imagery to bleed off the right edge of the card." Stitch rendered an asymmetric visual lexicon gallery with staggered image heights and negative margins (-mt-16). The Do/Avoid section uses progressive left-padding offsets (pl-8). The layout is the densest in the Love family, with tight grid gaps (gap-2, gap-4) and overlapping imagery.',
  },

  iconography: {
    icons: [
      { name: 'electric_bolt', label: 'Voltage' },
      { name: 'bolt', label: 'The Pulse' },
      { name: 'auto_awesome', label: 'Spark' },
      { name: 'flash_on', label: 'Intensity' },
      { name: 'visibility', label: 'The Gaze' },
      { name: 'whatshot', label: 'Heat' },
    ],
    style:
      'Default weight (400), outlined terminals, neon-tinted. Icons reference electricity, magnetism, and sensory intensity. Rendered in primary violet (#de8eff) or secondary pink (#ff6b9b) against midnight black. The outlined style (FILL 0) creates a "wireframe energy" feel -- skeletal, technical, not warm.',
    weight: 400,
    fill: false,
    rationale:
      'Stitch rendered icons at font-variation-settings FILL 0, wght 400 (default outlined). Content icons: electric_bolt (philosophy bento), nest_cam_magnet_mount (attempted "magnet" for magnetic pull). Navigation active icon uses FILL 1 (auto_stories). The outlined style contrasts with Passion\'s filled icons -- Lust is less warm, more technical, more "neon wireframe." Icon colors shift between primary violet and secondary pink depending on context.',
  },

  rules: {
    dos: [
      'Use absolute blacks to let neon accents bleed and glow',
      'Stick to 8-12px sharp corners for the "dangerous" edge',
      'Use 200ms snappy easing for all interactions',
      'Reserve neon bloom shadows for active states and primary CTAs',
      'Apply neon-saturated primary/secondary/tertiary at full intensity',
      'Use intentional asymmetry with staggered imagery',
      'Keep label text ALL CAPS with wide tracking (0.1-0.2rem)',
      'Create the "Pulse Trigger" flash effect for key interactions',
    ],
    donts: [
      'Grey neutrals (use tinted surface-variant instead, never corporate grey)',
      'Soft, bouncy, or lazy motion (fast and precise only)',
      'Over-glow everything (reserve blooms for active states)',
      'Rounded corners beyond 16px (kills the dangerous edge)',
      'Warm, cozy palettes (this is electric, not intimate)',
      'Gentle serif styling (dense headlines, tight leading)',
      'Low-saturation or pastel accents (neon intensity required)',
      '1px borders for sectioning (use surface-tier shifts only)',
    ],
  },

  words: {
    words: [
      'Electric',
      'Magnetic',
      'Immediate',
      'Sharp',
      'Dangerous',
      'Addictive',
      'Pulse',
      'Craving',
    ],
    feel: 'A neon-lit midnight where everything vibrates with latent energy. The visual language of unapologetic pull -- electric violet against absolute black, sharp edges that feel dangerous and exclusive, motion that snaps rather than flows. Not the warmth of love or the depth of passion, but the high-voltage urgency of being magnetically, irresistibly drawn.',
  },
};

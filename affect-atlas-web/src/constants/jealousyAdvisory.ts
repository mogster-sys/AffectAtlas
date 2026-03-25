/**
 * Jealousy advisory -- extracted from Stitch output.
 * Source: stitch-exports/jealousy-advisory/code.html
 * Values reflect what Stitch ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const JEALOUSY_ADVISORY: EmotionAdvisory = {
  emotion: 'jealousy' as any,
  label: 'Jealousy',
  northStar: 'The Green Mirror',
  philosophy: {
    brief:
      'Observation is the first step toward ownership -- jealousy is the precise measurement of what is lacked in the presence of someone who has it.',
    rationale:
      'Jealousy in visual design comes from toxic luxury and obsessive comparison. Dark envious greens on near-black signal covetousness and status-obsession. High-contrast serifs (Bodoni Moda) feel exclusive and aspirational -- the typography of fashion magazines and luxury brands that jealousy fixates on. Tight spacing creates competition -- elements jostling for position like entries on a leaderboard. Green-tinted shadows contaminate everything with envious luminosity. The most effective jealousy is not random spite -- it is the precise, cold observation of someone who cannot stop watching. A one-way mirror, not a tantrum.',
  },
  deepened: true,
  source: 'stitch:jealousy_advisory',

  emotionalContext:
    'Jealousy and Anger share dark backgrounds and sharp corners, but the energy is opposite. Anger combusts -- heavy weights, hot crimsons, crushing density, elements SLAMMED into position (Oswald at weight 700). Jealousy watches -- status-coded serifs, toxic greens, tight but not crushing spacing, elements that observe each other across the layout (Bodoni Moda italic at weight 700). Anger releases pressure outward (boiler about to blow). Jealousy holds pressure inward (the watcher who cannot look away).\n\nJealousy also inverts Joy. Both engage with desire, but Joy\'s desire is fulfilled -- warm ambers, generous spacing, rounded corners, celebrating what you have. Jealousy\'s desire is unfulfilled -- toxic greens, tight spacing, sharp corners, fixating on what someone else has. Joy radiates. Jealousy covets.\n\nAmong all emotions, Jealousy is the most concerned with STATUS. Trust measures reliability. Sadness measures loss. Fear measures threat. But Jealousy measures RANK -- who has more, who has less, who is watching whom. Its typography is luxury fashion, its spacing is a leaderboard, its shadows glow with toxic luminosity. The green is in everything.',

  colors: {
    tokens: {
      'primary': '#488040',
      'on-primary': '#e0e8d8',
      'primary-container': '#1c3018',
      'on-primary-container': '#80b070',
      'secondary': '#8a8830',
      'on-secondary': '#e0e0c8',
      'secondary-container': '#303018',
      'on-secondary-container': '#b8b870',
      'tertiary': '#a04048',
      'on-tertiary': '#e8d0d0',
      'tertiary-container': '#401820',
      'on-tertiary-container': '#c88088',
      'surface': '#0e120c',
      'surface-dim': '#080c08',
      'surface-bright': '#161a14',
      'surface-container-lowest': '#060a06',
      'surface-container-low': '#101410',
      'surface-container': '#141a14',
      'surface-container-high': '#1a201a',
      'surface-container-highest': '#202820',
      'surface-tint': '#488040',
      'surface-variant': '#2a302a',
      'on-surface': '#c8ccc4',
      'on-surface-variant': '#889084',
      'outline': '#505850',
      'outline-variant': '#2a302a',
      'inverse-surface': '#e0e4d9',
      'inverse-primary': '#2a4828',
      'inverse-on-surface': '#2d322b',
      'background': '#0e120c',
      'on-background': '#c8ccc4',
      'error': '#a04040',
      'on-error': '#690005',
      'error-container': '#401010',
      'on-error-container': '#c88080',
    },
    palette: ['#0e120c', '#488040', '#8a8830', '#a04048', '#c8ccc4'],
    mildToIntense: [
      '#68a060',
      '#a8a850',
      '#b86068',
      '#488040',
      '#8a8830',
      '#285020',
      '#585810',
    ],
    rationale:
      'Stitch faithfully rendered the exact requested palette. Primary #488040 is dark envious green -- not bright (too hopeful) and not forest (too natural). The specific murky green of "green with envy." Near-black backgrounds carry a green undertone (#0e120c -- not neutral black, specifically the darkness of tinted glass). The palette strip shows five swatches with gap-1 (4px) between them -- even the swatches compete for space. Secondary acidic yellow-green (#8a8830) is bile: "it is eating me alive." Tertiary possessive claret (#a04048) is the heat beneath the watching -- used for error states and AVOID rules. The green undertone in the darks is critical: Anger\'s darkness is hot and charred, Jealousy\'s darkness is the cold green of something contaminated by comparison.',
  },

  typography: {
    headlineFont: 'Bodoni Moda',
    headlineFallback: 'serif',
    bodyFont: 'Archivo',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Obsession',
        size: '3rem',
        weight: 900,
        font: 'headline',
        tracking: '-0.02em',
      },
      headline: {
        text: 'Bodoni Moda',
        size: '1.5rem',
        weight: 600,
        font: 'headline',
      },
      title: {
        text: 'Toxic Comparison',
        size: '1.25rem',
        weight: 500,
        font: 'headline',
      },
      body: {
        text: 'Tracking every acquisition through a filtered lens.',
        size: '0.875rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'CONFIDENTIAL STATUS',
        size: '0.625rem',
        weight: 700,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.2em',
      },
      caption: {
        text: 'Measuring everything, always',
        size: '0.625rem',
        weight: 400,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '-0.01em',
      body: '0em',
      label: '0.2em',
    },
    lineHeight: {
      headline: 1.05,
      body: 1.5,
    },
    mildToIntense:
      'Mild: Bodoni Moda at weight 400-500 with line-height 1.15 -- sharp and status-aware, but the comparison is wistful. Moderate: weight 600, line-height 1.05 -- active watching, the fixation is clear. Intense: weight 700-900 with tracking -0.02em and line-height 1.0 -- maximum status pressure, text that dominates and excludes.',
    rationale:
      'Stitch rendered Bodoni Moda in italic throughout -- the header ("Jealousy" at 2.5rem bold italic tracking-tighter), the hero ("Obsession" at text-5xl font-black italic), and the philosophy quote (text-3xl italic). The italic creates a sense of whispered intensity, exclusive sophistication. Bodoni\'s extreme stroke contrast (thick verticals, hair-thin horizontals) creates visual hierarchy within each letter that feels exclusive and aspirational. The weight ramp shows five steps from light to black italic, with the heaviest weights most prominent. Archivo\'s cold precision in body text is the analytical comparison engine. Where Anger\'s Oswald compresses with brute force, Bodoni\'s contrast is refined cruelty: beautiful but cold, exclusive by design.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '14px' },
      { label: 'LG', value: '22px' },
      { label: 'XL', value: '34px' },
    ],
    density: 'tight',
    mildToIntense:
      'Mild: md 16px, lg 26px -- still competitive but with fractionally more room. Moderate: md 14px, lg 22px -- elements jostling for position. Intense: md 12px, lg 18px -- elements pressing against each other, maximum competitive anxiety.',
    rationale:
      'Stitch used space-y-12 (48px) between major sections but tight within: space-y-4 to space-y-6 inside cards, gap-1 (4px) between palette swatches. The spacing text explicitly says "Elements should jostle for space. We favor tight tracking and minimal margins to simulate the claustrophobia of comparison." This is not the suffocating cramping of Fright (which traps) or the crushing density of Anger (which compresses). Jealousy\'s tightness is the anxious jostling of competition: everyone packed into a space where someone will be left out.',
  },

  motion: {
    duration: '220ms',
    easing: 'cubic-bezier(0.5, 0, 0.8, 0.4)',
    character: 'fixating',
    bezierPoints: [0.5, 0, 0.8, 0.4],
    mildToIntense:
      'Mild: 280ms with smoother easing -- the fixation is there but less acute, a slow sideways glance. Moderate: 220ms with full fixating snap -- the double-take that cannot look away. Intense: 160ms with sharper catch and a visible green flash on every state change -- obsessive snapping.',
    rationale:
      'Stitch created a .fixating-snap class with the exact 220ms cubic-bezier(0.5, 0, 0.8, 0.4) easing. The Compare button uses active:scale-[1.02] -- a quick, watchful pulse. The Export button uses hover:scale-95 active:scale-90 -- shrinking under observation. The SVG bezier curve visualization shows sharp acceleration then sudden deceleration: elements snap to attention and lock on, like a sideways glance that catches and holds. Unlike Anger\'s explosive slam (which releases energy), Jealousy\'s snap is a locking-on (energy that holds). Unlike Surprise\'s rebound (which bounces with delight), Jealousy\'s motion is the unstable oscillation of fixation.',
  },

  depth: {
    approach: 'glow',
    levels: [
      {
        label: 'Glance',
        description: 'Faint toxic green glow, element barely contaminated',
        background: '#141a14',
      },
      {
        label: 'Fixation',
        description: 'Visible envious glow, element radiating toxic luminosity',
        background: '#141a14',
      },
      {
        label: 'Obsession',
        description: 'Full toxic glow, element consumed by envious radiance',
        background: '#141a14',
      },
    ],
    shadowIfNeeded: '0 10px 30px rgba(72, 128, 64, 0.12)',
    ghostBorder: '1px solid rgba(42, 48, 42, 0.15)',
    rationale:
      'Stitch created three custom shadow classes: .envious-glow-glance (0 10px 30px rgba(72,128,64,0.12)), .envious-glow-fixation (0 20px 50px rgba(72,128,64,0.18)), and .envious-glow-obsession (0 30px 80px rgba(72,128,64,0.25)). All green-tinted, emanating FROM the element rather than casting downward. On dark green-black backgrounds, the green glow makes everything look slightly sick, contaminated by comparison. Unlike Anger\'s crushing downward shadows (which press elements into the surface), Jealousy\'s glow shadows radiate from within -- the envy is inside the element. Unlike Loneliness\'s cold blue spotlights, Jealousy\'s green glow is warm-toxic, organic, like something alive and corrosive.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px' },
      { label: 'SM', value: '3px' },
      { label: 'MD', value: '6px', recommended: true },
      { label: 'LG', value: '8px' },
    ],
    cornerStyle: 'sharp',
    mildToIntense:
      'Mild: 8-10px (a small softening, slightly less competitive edge). Moderate: 6px (standard jealous sharpness -- the "Blade"). Intense: 2-3px (maximum edge, maximum exclusivity, maximum hostility).',
    rationale:
      'Stitch set DEFAULT to 6px, lg to 8px, xl to 12px. The shapes grid highlights 6px with primary coloring and the caption: "The 6px radius defines the \'Blade\' -- sharp enough to cut, soft enough to touch." Not as aggressive as Anger\'s absolute zero (which weaponizes edges) and not as industrial as Frustration\'s 4px (which blocks). Jealousy\'s 6px is the corner radius of luxury packaging -- designed to be admired but not touched.',
  },

  layout: {
    alignment: 'left',
    density: 'dense',
    rationale:
      'Stitch created a left-aligned layout with asymmetric stacking: "Weighted towards perceived lack." The wireframe shows unequal column splits (1/3 + 2/3, 3/4 + 1/4) creating an off-balance tension. Dense vertical stacking with space-y-12 between sections and tighter space-y-4 within. Unlike Joy\'s centered celebration (which radiates evenly) or Loneliness\'s centered isolation (which withdraws), Jealousy\'s left-lean is directional -- always pointing toward what someone else has.',
  },

  iconography: {
    icons: [
      { name: 'visibility', label: 'Watch' },
      { name: 'group', label: 'Rival' },
      { name: 'compare_arrows', label: 'Compare' },
      { name: 'lock', label: 'Possess' },
      { name: 'straighten', label: 'Measure' },
      { name: 'star', label: 'Status' },
    ],
    style:
      'Medium weight (500), alert, watchful. Icons reference comparison, surveillance, possession, and status. At 500 weight they are present and assertive -- not thin and fragile (jealousy is not weak) but not heavy and angry (jealousy is watchful, not explosive).',
    weight: 500,
    fill: false,
    rationale:
      'Stitch rendered icons at weight 500 (confirmed in font-variation-settings) in primary (#488040) at text-3xl -- prominent, green, watchful. The icon set references surveillance (visibility), rivalry (group), comparison (compare_arrows), possession (lock), measurement (straighten), and status (star). The shadow cards also use themed icons: visibility for Glance, target for Fixation, psychology for Obsession. The bottom nav uses compare_arrows and insights -- even navigation is about measuring. Unlike Loneliness\'s fragile 200-weight icons or Guilt\'s withdrawn 400-weight, Jealousy\'s icons are confident watchers.',
  },

  rules: {
    dos: [
      'Use dark envious greens throughout all surfaces',
      'Keep typography high-contrast and status-coded (italic Bodoni)',
      'Apply tight competitive spacing (elements jostling for position)',
      'Use green-tinted toxic glow shadows',
      'Create asymmetric tension in layouts (weighted toward the rival)',
      'Use sharp edgy corner radii (6px "Blade")',
      'Overlap containers where possible',
      'Let the green undertone contaminate everything',
    ],
    donts: [
      'Large border radii (too welcoming, too safe)',
      'Friendly greetings or warm copy',
      'Symmetrical balanced grids (too settled)',
      'Clean white backgrounds (too neutral)',
      'Generous relaxed spacing (too comfortable)',
      'Playful bouncy motion (too happy)',
      'Bright success-green (different emotion entirely)',
      'Thin delicate icon weights (jealousy is not fragile)',
    ],
  },

  words: {
    words: [
      'Toxic',
      'Obsessive',
      'Mimetic',
      'Rivalry',
      'Covet',
      'Scarcity',
      'Watchful',
      'Corrosive',
    ],
    feel: 'Standing behind one-way glass, watching someone else live the life you wanted. Sharp, green-tinged fixation -- not rage (that is anger) but the cold, corrosive awareness that someone has what you lack. The green is in everything.',
  },
};

// Self-register on import
registerAdvisory(JEALOUSY_ADVISORY);

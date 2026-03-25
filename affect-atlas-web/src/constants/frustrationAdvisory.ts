/**
 * Frustration advisory -- extracted from Stitch output.
 * Source: stitch-exports/frustration-advisory/code.html
 * Values reflect what Stitch ACTUALLY produced, not what was requested.
 *
 * NOTE: Stitch auto-generated its own MD3 tokens (shifted primary to
 * #ffb4a8 and placed our #c44030 as primary-container). The advisory
 * uses the prompt's intended palette for tokens since those are the
 * researched values. Stitch's hard offset shadows and jitter animation
 * are faithfully captured.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const FRUSTRATION_ADVISORY: EmotionAdvisory = {
  emotion: 'frustration' as any,
  label: 'Frustration',
  northStar: 'The Blocked Path',
  philosophy: {
    brief:
      'Frustration is blocked energy -- the mounting pressure before the blow. The psychological equivalent of an engine seize: mechanical, repetitive, and increasingly volatile under obstruction.',
    rationale:
      'Frustration in visual design comes from compression, obstruction, and the feeling of effort meeting resistance. Dark warm charcoal surfaces (#1a1412) create the atmosphere of contained pressure building with nowhere to go. Condensed type (Barlow Condensed at weight 800) feels squeezed into too-small a space. Cramped spacing leaves no room to move. Hard offset shadows with zero blur are industrial and stark. The most effective frustration is not chaos -- it is the precision of a dead-end corridor. Everything works but nothing flows.',
  },
  deepened: true,
  source: 'stitch:frustration_advisory',

  emotionalContext:
    'Frustration and Anger share warm dark palettes and sharp corners, but the energy is fundamentally different. Anger combusts outward -- explosive 150ms slams, crushing density, maximum weight. The boiler has blown. Frustration is the pressure BEFORE the blow -- halting 180ms stops where elements hit a wall and go nowhere, condensed type that fights its own spacing, hard shadows without blur that feel industrial rather than crushing. Anger releases. Frustration is stuck.\n\nFrustration also shares tight spacing with Jealousy, but where Jealousy\'s crowding is competitive (a leaderboard where everyone jostles for rank), Frustration\'s crowding is obstructive (a corridor where there is simply nowhere to move). Jealousy watches. Frustration pushes and fails.\n\nAmong all emotions, Frustration is the one most concerned with OBSTRUCTION. Its typography is condensed (squeezed), its spacing is cramped (no room), its motion is halting (blocked), its shadows are hard-edged (industrial). Everything communicates effort meeting resistance. The design should feel like it almost works but never quite does.',

  colors: {
    tokens: {
      'primary': '#c44030',
      'on-primary': '#1a1412',
      'primary-container': '#4a1a14',
      'on-primary-container': '#e8a090',
      'secondary': '#8a5a30',
      'on-secondary': '#1a1412',
      'secondary-container': '#3a2818',
      'on-secondary-container': '#d0a880',
      'tertiary': '#c48820',
      'on-tertiary': '#1a1412',
      'tertiary-container': '#4a3410',
      'on-tertiary-container': '#e8c870',
      'surface': '#1a1412',
      'surface-dim': '#141010',
      'surface-bright': '#241c18',
      'surface-container-lowest': '#100c0a',
      'surface-container-low': '#1e1614',
      'surface-container': '#22191a',
      'surface-container-high': '#2a2020',
      'surface-container-highest': '#302624',
      'surface-tint': '#c44030',
      'surface-variant': '#3a2e28',
      'on-surface': '#e8dcd0',
      'on-surface-variant': '#a89888',
      'outline': '#685848',
      'outline-variant': '#3a2e28',
      'inverse-surface': '#e8dcd0',
      'inverse-primary': '#8a2a20',
      'inverse-on-surface': '#1a1412',
      'background': '#1a1412',
      'on-background': '#e8dcd0',
      'error': '#e05040',
      'on-error': '#690005',
      'error-container': '#401818',
      'on-error-container': '#c89080',
    },
    palette: ['#1a1412', '#c44030', '#8a5a30', '#c48820', '#e8dcd0'],
    mildToIntense: [
      '#a07060',
      '#907858',
      '#a89050',
      '#c44030',
      '#8a5a30',
      '#e83020',
      '#704018',
    ],
    rationale:
      'Stitch rendered the palette as five tight squares with 4px radius and hex labels: #1A1412 (Heated Dark), #C44030 (Blocked Red), #8A5A30 (Friction Brown), #C48820 (Urgent Amber), #E8DCD0 (Strained White). The intensity gradient runs from simmering to boiling over. Stitch shifted the primary in its MD3 system to #ffb4a8 (a lighter peach-red) and placed our #c44030 as primary-container, but the visual palette strip faithfully renders the requested values. Primary #c44030 is the specific red of access denied and operation failed. Secondary burnt umber (#8a5a30) is rust and friction. Tertiary amber (#c48820) is the warning before the block.',
  },

  typography: {
    headlineFont: 'Barlow Condensed',
    headlineFallback: 'sans-serif',
    bodyFont: 'IBM Plex Sans',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'BLOCKED',
        size: '2.25rem',
        weight: 800,
        font: 'headline',
        tracking: '0.04em',
      },
      headline: {
        text: 'DEAD END',
        size: '1.625rem',
        weight: 700,
        font: 'headline',
      },
      title: {
        text: 'CONTAINMENT FAILURE',
        size: '1.25rem',
        weight: 600,
        font: 'headline',
      },
      body: {
        text: 'Everything works but nothing flows.',
        size: '0.9375rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'OBSTRUCTION',
        size: '0.75rem',
        weight: 600,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.1em',
      },
      caption: {
        text: 'Access denied -- try again',
        size: '0.625rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '0.04em',
      body: '0.005em',
      label: '0.1em',
    },
    lineHeight: {
      headline: 1.0,
      body: 1.45,
    },
    mildToIntense:
      'Mild: Barlow Condensed at weight 400-500 with line-height 1.1 -- still compressed, still under pressure, but the block is simmering not boiling. Moderate: weight 600-700 with line-height 1.0, uppercase throughout. Intense: weight 800 with line-height 0.95, full uppercase, letter-spacing 0.06em -- maximum compression.',
    rationale:
      'Stitch rendered Barlow Condensed at font-extrabold (800) for the header "FRUSTRATION" at 2.5rem with tracking 0.04em and leading 0.9 -- condensed type fighting its own wide spacing. The type scale shows "BLOCKED" at text-3xl font-black, "DEAD END" at text-xl font-bold, and "CONTAINMENT FAILURE" at text-xs font-bold tracking-tighter. Each specimen has a 2px left border in #c44030 -- a structural accent line. IBM Plex Sans appears as body text ("Utility & Precision") and in all labels at 10px bold uppercase with 0.2em tracking. The condensed form at heavy weights looks like text under pressure, squeezed into too-small a space.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '3px' },
      { label: 'SM', value: '6px' },
      { label: 'MD', value: '12px' },
      { label: 'LG', value: '20px' },
      { label: 'XL', value: '28px' },
    ],
    density: 'tight',
    mildToIntense:
      'Mild: md 14px, lg 24px -- still tighter than comfortable but with fractionally more room. Moderate: md 12px, lg 20px -- elements competing for space. Intense: md 10px, lg 16px -- severely cramped, elements almost touching.',
    rationale:
      'Stitch used mb-6 (24px) between sections and p-4 (16px) padding inside cards -- tight and cramped. The spacing ruler faithfully renders our requested values: XS 3px, SM 6px, MD 12px, LG 20px, XL 28px as horizontal bars in #c44030. This is not the anxious jostling of Jealousy (competitive crowding) or the suffocating trap of Fright (claustrophobic 2/4/8/12/24). Frustration\'s tightness is the friction of blocked movement -- things too close because there is nowhere else to go.',
  },

  motion: {
    duration: '180ms',
    easing: 'cubic-bezier(0.7, 0, 1, 0.5)',
    character: 'halting',
    bezierPoints: [0.7, 0, 1, 0.5],
    mildToIntense:
      'Mild: 220ms with slightly less abrupt easing -- still tense, but the stops are not as hard. Moderate: 180ms with full halting stop. Intense: 120ms with linear easing and hard stop, plus 2px micro-shakes on every state change.',
    rationale:
      'Stitch created an .abrupt-stop class with cubic-bezier(0.7, 0, 1, 0.5) and a .jitter-hover class that applies a 100ms infinite jitter animation (2px horizontal translateX) on hover. The RETRY button combines both: jitter on hover, abrupt-stop on transition, active:translate-y-1 with shadow removal for a punching-into-position feel. The SVG bezier visualization shows hard acceleration then dead stop. Unlike Anger\'s explosive slam (which releases energy outward), Frustration\'s halt is energy meeting a wall. Unlike Fright\'s 120ms jolt (which is too fast to process), Frustration\'s 180ms is fast enough to feel harsh but slow enough that you feel the stop.',
  },

  depth: {
    approach: 'shadows',
    levels: [
      {
        label: 'Friction',
        description: 'Hard 2x3px offset, zero blur -- slight industrial depth',
        background: '#302624',
      },
      {
        label: 'Obstruction',
        description: 'Hard 4x5px offset, zero blur -- element punched forward',
        background: '#302624',
      },
      {
        label: 'Blockade',
        description: 'Hard 6x8px offset, zero blur -- maximum harsh depth',
        background: '#302624',
      },
    ],
    shadowIfNeeded: '4px 4px 0px 0px #130d0b',
    ghostBorder: '1px solid rgba(58, 46, 40, 0.3)',
    rationale:
      'Stitch rendered hard offset shadows with ZERO blur throughout: all section cards use shadow-[4px_4px_0px_0px_#130d0b]. The three depth levels show Friction (2px 3px 0px), Obstruction (4px 5px 0px), and Blockade (6px 8px 0px) -- all in pure dark #130d0b. The header also uses shadow-[0_4px_0px_0px_#130d0b]. The RETRY button uses shadow-[0_4px_0px_0px_#8c170d] with active:shadow-none and active:translate-y-1 -- physically pushing the button into the surface. Unlike Anger\'s crushing downward shadows or Jealousy\'s toxic green glow, Frustration\'s shadows are industrial -- the stark offsets of harsh overhead lighting in a factory.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px' },
      { label: 'SM', value: '2px' },
      { label: 'MD', value: '4px', recommended: true },
      { label: 'LG', value: '6px' },
    ],
    cornerStyle: 'sharp',
    mildToIntense:
      'Mild: 6px (still hard, fractionally less aggressive). Moderate: 4px (standard frustration sharpness -- industrial). Intense: 0px (pure sharp corners, maximum severity).',
    rationale:
      'Stitch rendered four shapes: 0px, 2px, 4px (highlighted with a 2px tertiary border), and 6px. The rationale text reads: "4px is the optimal industrial radius. It maintains structural rigidness while preventing visual bleeding at high resolutions." The Tailwind config sets DEFAULT to 0.125rem (2px), lg to 0.25rem (4px). Not Anger\'s absolute zero (weaponized) but explicitly not friendly. Like metal enclosures or warning placards.',
  },

  layout: {
    alignment: 'left',
    density: 'dense',
    rationale:
      'Stitch created a left-aligned dense layout. The wireframe shows a 1/3 + 2/3 split with the right side subdivided into three stacked blocks with 1px gaps. Section label "Left-Aligned Dense Stack" appears right-aligned in small uppercase tracking-widest. Content stacking uses mb-6 (24px) between sections. Elements are stacked because they must be, not because the arrangement is elegant. The utilitarian quality is itself frustrating: it works but it does not delight.',
  },

  iconography: {
    icons: [
      { name: 'block', label: 'Block' },
      { name: 'report_problem', label: 'Warning' },
      { name: 'error', label: 'Error' },
      { name: 'close', label: 'Reject' },
      { name: 'do_not_disturb', label: 'Prohibit' },
      { name: 'dangerous', label: 'Hazard' },
    ],
    style:
      'Heavy weight (600), angular, assertive. Icons reference obstruction, warnings, errors, and stops. At 600 weight they push into the user\'s space -- bold, unavoidable warning signage. Rendered in urgent amber (#c48820) against dark surfaces.',
    weight: 600,
    fill: false,
    rationale:
      'Stitch rendered Material Symbols at weight 600 (confirmed in font-variation-settings) in #c48820 (tertiary amber). The icon grid is a tight 6-column layout with each icon in a surface-container-highest square with outline-variant border. Icons are: block (wall), report_problem (warning triangle), error (error circle), close (rejection X), do_not_disturb (prohibition), dangerous (hazard). These are obstruction icons -- immovable obstacles. Unlike Anger\'s aggressive icons (which attack), Frustration\'s icons are in the way.',
  },

  rules: {
    dos: [
      'Use cramped tight spacing throughout',
      'Keep corners sharp (2-4px radius max)',
      'Use condensed type at heavy weights (Barlow 700-800)',
      'Apply harsh warm colors for accents (blocked red, urgent amber)',
      'Create hard shadows with zero blur',
      'Use uppercase labels to add pressure',
      'Keep motion abrupt and halting (180ms hard stop)',
      'Use monochromatic dense blocks',
    ],
    donts: [
      'Generous whitespace or breathing room',
      'Soft gradients or blurred shadows',
      'Elastic bouncy motion curves (Joy, Surprise)',
      'Generous padding (Inspiration, Contentment)',
      'Rounded friendly corners (too safe)',
      'Cool calming color accents (Fear, Loneliness)',
      'Centered formally composed layouts (too elegant)',
      'Success green (different emotion entirely)',
    ],
  },

  words: {
    words: [
      'Blocked',
      'Friction',
      'Pressure',
      'Obstruct',
      'Stifle',
      'Resist',
      'Grate',
      'Cease',
    ],
    feel: 'Pushing against a door that will not open. Contained pressure -- everything works but nothing flows. Visible effort in every element, as if the interface itself is struggling.',
  },
};

// Self-register on import
registerAdvisory(FRUSTRATION_ADVISORY);

/**
 * Disappointment advisory -- extracted from Stitch output.
 * Source: stitch-exports/disappointment-advisory/code.html
 * Values reflect what Stitch ACTUALLY produced, not what was requested.
 *
 * NOTE: Stitch shifted primary to #50606f (darker blue-grey), added
 * Newsreader + Inter as font fallbacks before Vollkorn + Jost, and
 * substituted several icons. The advisory uses the prompt's researched
 * palette and icon set. Stitch's .sagging-content class (extra top
 * padding to push content below center) and .deflating-ease bezier
 * are faithfully captured.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const DISAPPOINTMENT_ADVISORY: EmotionAdvisory = {
  emotion: 'disappointment' as any,
  label: 'Disappointment',
  northStar: 'The Falling Short',
  philosophy: {
    brief:
      'Checking the results and finding out it was not what you hoped -- overcast grey, muted blue-grey, and the quiet deflation of "oh. that is all there is."',
    rationale:
      'Disappointment in visual design comes from anticlimactic adequacy and visible deflation. Flat overcast grey surfaces (#f0f0f2) create the atmosphere of a cloudy sky that was supposed to be sunny. Sober text serif (Vollkorn) is competent but never surprises -- the typographic equivalent of "it is fine." Elements sit slightly below where they should be, hierarchy is flatter than expected, colors almost have character but do not quite get there. The most effective disappointment is not dramatic -- it is the quiet realization that this is all there is. A party that is already winding down.',
  },
  deepened: true,
  source: 'stitch:disappointment_advisory',

  emotionalContext:
    'Disappointment and Sadness share muted palettes and downward-weighted compositions, but the quality is fundamentally different. Sadness is deep, personal loss -- thin Lora type drifting on dark surfaces, 350ms slow-drift motion, fragile editorial spacing. Sadness grieves what was. Disappointment is flat, impersonal deflation -- sober Vollkorn on overcast grey, 300ms deflating motion, unremarkable normal spacing. Disappointment shrugs at what is.\n\nDisappointment also contrasts with Optimism, its emotional inverse. Optimism uses warm bright white (#faf8f4), sunlight amber (#d09020), buoyant 280ms lifting motion, generous rounded 14px corners, and DM Sans headlines that feel confident and capable. Disappointment uses flat overcast grey (#f0f0f2), muted blue-grey (#687888), deflating 300ms settling motion, unremarkable 10px corners, and Vollkorn headlines that are adequate but uninspiring. Optimism lifts. Disappointment settles.\n\nAmong all emotions, Disappointment is the most ANTICLIMACTIC. Its display type is deliberately undersized (28px vs most emotions\' 30-34px). Its colors are deliberately desaturated. Its shadows are deliberately flat. Its motion deliberately undershoots. Everything communicates the gap between expectation and reality -- not the drama of grief or the heat of frustration, but the quiet, flat realization that this is less than what was promised.',

  colors: {
    tokens: {
      'primary': '#687888',
      'on-primary': '#ffffff',
      'primary-container': '#c8d0d8',
      'on-primary-container': '#283038',
      'secondary': '#808080',
      'on-secondary': '#ffffff',
      'secondary-container': '#d0d0d0',
      'on-secondary-container': '#303030',
      'tertiary': '#a09070',
      'on-tertiary': '#ffffff',
      'tertiary-container': '#e0d8c8',
      'on-tertiary-container': '#383020',
      'surface': '#f0f0f2',
      'surface-dim': '#e0e0e4',
      'surface-bright': '#f6f6f8',
      'surface-container-lowest': '#f8f8fa',
      'surface-container-low': '#ececf0',
      'surface-container': '#e6e6ea',
      'surface-container-high': '#e0e0e4',
      'surface-container-highest': '#d8d8dc',
      'surface-tint': '#687888',
      'surface-variant': '#e0e0e4',
      'on-surface': '#404040',
      'on-surface-variant': '#686868',
      'outline': '#989898',
      'outline-variant': '#c8c8c8',
      'inverse-surface': '#404040',
      'inverse-primary': '#a0b0c0',
      'inverse-on-surface': '#f0f0f2',
      'background': '#f0f0f2',
      'on-background': '#404040',
      'error': '#907070',
      'on-error': '#ffffff',
      'error-container': '#e0d0d0',
      'on-error-container': '#402828',
    },
    palette: ['#f0f0f2', '#687888', '#808080', '#a09070', '#404040'],
    mildToIntense: [
      '#889098',
      '#909090',
      '#b0a890',
      '#687888',
      '#808080',
      '#506070',
      '#806848',
    ],
    rationale:
      'Stitch rendered the palette as five rounded swatches: #50606F (shifted primary), #5F5F5F (neutral grey), #6B5D41 (faded amber), #EBEEF2 (surface container), and #F0F0F2 (background). Below, three descriptor chips read "Muted," "Weary," "Settled." The mild-to-intense gradient runs from surface-container-low through primary to error/40. The advisory uses the prompt\'s researched values. Primary #687888 is the color of an overcast sky -- not blue enough to be interesting, not grey enough to be neutral. Secondary #808080 is literal grey, the most anticlimactic color possible. Tertiary #a09070 is the ghost of something warm that did not pan out.',
  },

  typography: {
    headlineFont: 'Vollkorn',
    headlineFallback: 'serif',
    bodyFont: 'Jost',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Disappointment',
        size: '1.75rem',
        weight: 600,
        font: 'headline',
        tracking: '0.01em',
      },
      headline: {
        text: 'The Falling Short',
        size: '1.375rem',
        weight: 500,
        font: 'headline',
      },
      title: {
        text: 'Adequate, nothing more',
        size: '1.125rem',
        weight: 400,
        font: 'headline',
      },
      body: {
        text: 'It was supposed to be better than this.',
        size: '0.9375rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'undersized',
        size: '0.8125rem',
        weight: 500,
        font: 'body',
        tracking: '0.02em',
      },
      caption: {
        text: 'Designed for the shrug',
        size: '0.6875rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '0.01em',
      body: '0.02em',
      label: '0.02em',
    },
    lineHeight: {
      headline: 1.2,
      body: 1.55,
    },
    mildToIntense:
      'Mild: Vollkorn at weight 400 with generous tracking, Jost at 300 -- text barely asserts itself. The mildest let-down. Moderate: Vollkorn 500-600 with standard spacing -- present but flat, adequate but uninspired. Intense: Vollkorn 600, slightly less tracking -- a deeper "is this really all there is." Still never bold enough to command.',
    rationale:
      'Stitch rendered Vollkorn at text-[28px] font-semibold for the specimen with the label "28px / undersized." Jost appears at text-[15px] for body with "15px / adequate." The weight ramp shows Jost 300/400/600. Display at 28px is deliberately smaller than most emotions (which use 30-34px) because disappointment does not proclaim itself. Vollkorn at semibold is competent without being inspiring -- the typographic equivalent of "meets expectations."',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '5px' },
      { label: 'SM', value: '10px' },
      { label: 'MD', value: '16px' },
      { label: 'LG', value: '28px' },
      { label: 'XL', value: '40px' },
    ],
    density: 'normal',
    mildToIntense:
      'Mild: lg at 32px, a small amount of room, a small amount of resignation. Moderate: lg at 28px, adequate spacing applied once and never reconsidered. Intense: lg at 24px, less room, less hope -- the gap between expectation and reality closes, but not in a good way.',
    rationale:
      'Stitch used space-y-20 (80px) between sections and p-5 (20px) inside cards. The spacing ruler shows bars at xs, md (labeled "adequate"), lg (labeled "normal"), and 2xl. Disappointment spacing is adequate spacing -- not tight enough to create pressure, not generous enough to create comfort. It is the default: applied without intention, maintained without care. This adequacy is itself the disappointment.',
  },

  motion: {
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.7, 0.4)',
    character: 'deflating',
    bezierPoints: [0.4, 0, 0.7, 0.4],
    mildToIntense:
      'Mild: 360ms, gentler deflation -- the let-down is subtle, barely perceptible. Moderate: 300ms with deflating easing, unremarkable duration. Intense: 240ms with more visible undershooting -- elements visibly fall short of their target position.',
    rationale:
      'Stitch created a .deflating-ease class with cubic-bezier(0.25, 1, 0.5, 0.8) and an SVG visualization labeled "Fast Start" and "Premature Slow." The "Press to Settle" button uses active:scale-[0.95] focus:scale-[0.97] -- capturing the "never quite returning to full size" concept. The incomplete recovery is the physical metaphor: things that should bounce back but do not quite make it. The motion IS the disappointment: things almost arrive, then settle for less.',
  },

  depth: {
    approach: 'shadows',
    levels: [
      {
        label: 'Light',
        description: 'Barely visible flat shadow -- element rests without energy or lift',
        background: '#f8f8fa',
      },
      {
        label: 'Medium (Regret)',
        description: 'Slightly more visible but still flat -- technically elevated, barely',
        background: '#f8f8fa',
      },
      {
        label: 'Heavy (Burdened)',
        description: 'Maximum disappointment depth -- still flat, just more of it',
        background: '#f8f8fa',
      },
    ],
    shadowIfNeeded: '0 2px 8px rgba(64, 64, 64, 0.06)',
    ghostBorder: '1px solid rgba(200, 200, 200, 0.2)',
    rationale:
      'Stitch rendered three shadow levels: Light (0 2px 8px rgba(45,51,56,0.02)), Medium "Regret" (0 10px 30px rgba(45,51,56,0.05)), and Heavy "Burdened" (0 20px 40px rgba(45,51,56,0.08)). Section cards use 0 4px 12px rgba(45,51,56,0.05). Shadows are barely visible -- elements do not float above their surface because floating requires energy and expectation. Everything has settled to the lowest possible elevation. The neutral grey tint and extremely low opacity make shadows feel like afterthoughts.',
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
      'Mild: 12-14px, a small softening that offers a small comfort. Moderate: 10px, the unremarkable standard -- smooth enough to avoid hostility, not rounded enough to invite warmth. Intense: 8px, less inviting, more institutional -- more "this is what you get."',
    rationale:
      'Stitch rendered four shapes in a 2x2 grid: 6px, 8px, 10px (highlighted with primary border and "RECOMMENDED" label), and 14px. 10px is the radius of adequate design -- neither sharp (too intentional) nor rounded (too friendly). It is the default radius of someone who picked a number and moved on. Not the deliberate softness of love (18px) or the sharp intentionality of frustration (4px). It sits in the middle, uncommitted and uninspired.',
  },

  layout: {
    alignment: 'center',
    density: 'normal',
    rationale:
      'Stitch created a centered, bottom-weighted layout. The wireframe shows a dashed horizontal line at center with content elements sitting below it, and the note "Elements sit 12px below center." The .sagging-content class adds extra top padding (1.5rem) to push content fractionally below vertical center. This is not the grand formality of awe or the intimate pairing of love -- it is the default center of someone who did not consider alternatives. Elements have sagged slightly, settling lower than where they started.',
  },

  iconography: {
    icons: [
      { name: 'sentiment_dissatisfied', label: 'Let down' },
      { name: 'cloud', label: 'Overcast' },
      { name: 'hourglass_empty', label: 'Empty' },
      { name: 'trending_down', label: 'Falling' },
      { name: 'remove_circle_outline', label: 'Less' },
      { name: 'schedule', label: 'Waiting' },
    ],
    style:
      'Thin weight (300), Grade -25, fading. Icons reference unfulfilled expectations: dissatisfied expressions, overcast skies, empty hourglasses, downward trends, removal, time passing without result. At 300 weight with -25 grade they feel like they are losing substance -- icons that showed up but wished they had not bothered.',
    weight: 300,
    fill: false,
    rationale:
      'Stitch rendered Material Symbols at text-[28px] in text-primary with font-variation-settings confirming weight 300 and grade -25. Stitch substituted some icons (article, palette, architecture, low_priority, cloud, rebase_edit) but the advisory uses the prompt\'s researched set: sentiment_dissatisfied, cloud, hourglass_empty, trending_down, remove_circle_outline, schedule. These are deflation icons -- the unhappy face (not angry, just let down), clouds (overcast expectations), empty hourglasses (time invested without return), downward trends (less than hoped).',
  },

  rules: {
    dos: [
      'Use flat, desaturated, overcast grey tones',
      'Keep typography undersized and understated',
      'Apply barely-there flat shadows',
      'Use unremarkable moderate corner radii (10px)',
      'Create anticlimactic motion (deflating easing)',
      'Let elements sit slightly below vertical center',
      'Keep hierarchy flat -- avoid dramatic contrasts',
      'Make everything adequate, nothing more',
    ],
    donts: [
      'Saturated, vibrant, or warm accent colors',
      'Bold, commanding, or large typography',
      'Dramatic shadows or strong elevation',
      'Rounded, friendly, or inviting shapes (too warm)',
      'Energetic, bouncy, or snappy motion',
      'Generous, comforting spacing patterns',
      'Any element that exceeds expectations',
      'Sharp, aggressive corners (too intentional)',
    ],
  },

  words: {
    words: [
      'Deflated',
      'Flat',
      'Anticlimactic',
      'Adequate',
      'Let-down',
      'Muted',
      'Settled',
      'Unremarkable',
    ],
    feel: 'Checking the results and finding out it was not what you hoped. The design system creates a sense of quiet deflation -- not despair (too dramatic) but the flat, anticlimactic realization that this is all there is. Everything is fine. Nothing is good.',
  },
};

// Self-register on import
registerAdvisory(DISAPPOINTMENT_ADVISORY);

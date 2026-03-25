/**
 * Submission advisory -- extracted from Stitch output.
 * Source: stitch-exports/submission-advisory/code.html
 * Values reflect what Stitch ACTUALLY produced, not what was requested.
 *
 * NOTE: Stitch shifted primary to #41606f (darker teal-blue) and placed
 * our #7090a0 range in lighter fixed variants. The advisory uses the
 * prompt's researched palette for tokens. Stitch's barely-there shadows,
 * yielding motion, and bottom-weighted layout are faithfully captured.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const SUBMISSION_ADVISORY: EmotionAdvisory = {
  emotion: 'submission' as any,
  label: 'Submission',
  northStar: 'The Lowered Gaze',
  philosophy: {
    brief:
      'Holding the door open and stepping aside -- muted soft blue, gentle sage, and the quiet act of making room for something more important than yourself.',
    rationale:
      'Submission in visual design comes from yielding, deference, and voluntary restraint. Soft warm-grey surfaces (#f2f0ee) create the atmosphere of a room where someone has quietly tidied up and left. Rounded geometric type (Maven Pro) feels soft and non-imposing -- it offers its words rather than projecting them. Generous spacing signals restraint and respect. Barely-there shadows mean elements rest gently rather than asserting elevation. The most effective submission is not weakness -- it is the deliberate choice to make room. A lowered gaze, not a defeated one.',
  },
  deepened: true,
  source: 'stitch:submission_advisory',

  emotionalContext:
    'Submission and Trust share muted, reliable palettes and measured compositions, but the energy flows in opposite directions. Trust builds outward -- editorial grids, restrained 280ms motion, sturdy Newsreader serifs that establish authority. Submission yields inward -- 400ms slow deceleration, Maven Pro\'s soft curves that offer rather than declare, elements smaller than their containers. Trust says "you can rely on this." Submission says "after you."\n\nSubmission also contrasts with Contempt, its emotional inverse. Both create distance, but for opposite reasons. Contempt\'s distance is cold superiority -- sharp Prata serifs, asymmetric top-heavy layouts, acidic green sting, 340ms dismissive delay. Submission\'s distance is voluntary deference -- rounded Maven Pro, centered bottom-weighted layouts, muted soft blue, 400ms yielding ease. Contempt looks down. Submission lowers its gaze.\n\nAmong all emotions, Submission is the most YIELDING. Its typography is deliberately smaller (28px display vs most emotions\' 30-34px). Its shadows are the faintest of any emotion. Its icons are the thinnest (200 weight, -25 grade). Everything communicates voluntary restraint -- not the absence of capability but the choice to step back. The design yields space rather than filling it.',

  colors: {
    tokens: {
      'primary': '#7090a0',
      'on-primary': '#ffffff',
      'primary-container': '#d0dce4',
      'on-primary-container': '#283848',
      'secondary': '#889880',
      'on-secondary': '#ffffff',
      'secondary-container': '#d4dcd0',
      'on-secondary-container': '#303828',
      'tertiary': '#a89878',
      'on-tertiary': '#ffffff',
      'tertiary-container': '#e0d8c8',
      'on-tertiary-container': '#3a3020',
      'surface': '#f2f0ee',
      'surface-dim': '#e4e2de',
      'surface-bright': '#f8f6f4',
      'surface-container-lowest': '#fafaf8',
      'surface-container-low': '#f0ecea',
      'surface-container': '#eae8e4',
      'surface-container-high': '#e4e0dc',
      'surface-container-highest': '#dcd8d4',
      'surface-tint': '#7090a0',
      'surface-variant': '#e4e2de',
      'on-surface': '#484848',
      'on-surface-variant': '#787470',
      'outline': '#a09890',
      'outline-variant': '#d0ccc8',
      'inverse-surface': '#484848',
      'inverse-primary': '#a0c0d0',
      'inverse-on-surface': '#f2f0ee',
      'background': '#f2f0ee',
      'on-background': '#484848',
      'error': '#a06060',
      'on-error': '#ffffff',
      'error-container': '#e8d0d0',
      'on-error-container': '#402020',
    },
    palette: ['#f2f0ee', '#7090a0', '#889880', '#a89878', '#484848'],
    mildToIntense: [
      '#90a0a8',
      '#98a098',
      '#b8b098',
      '#7090a0',
      '#889880',
      '#506878',
      '#687860',
    ],
    rationale:
      'Stitch rendered the palette as five joined swatches with the section titled "Color soul." Stitch shifted primary to #41606f (a darker teal-blue) and secondary to #54634D (darker sage). The advisory uses the prompt\'s researched values: Quiet Blue (#7090a0), Gentle Sage (#889880), Soft Beige (#a89878). Primary #7090a0 is the color of sky reflected in still water -- present but not asserting itself. Secondary sage (#889880) is leaves that bend rather than break. Tertiary beige (#a89878) is the small warm touch that keeps submission from feeling cold. On-surface is #484848 (not black) for deliberately low contrast throughout.',
  },

  typography: {
    headlineFont: 'Maven Pro',
    headlineFallback: 'sans-serif',
    bodyFont: 'Lato',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Submission',
        size: '1.75rem',
        weight: 500,
        font: 'headline',
        tracking: '0.02em',
      },
      headline: {
        text: 'The Lowered Gaze',
        size: '1.375rem',
        weight: 500,
        font: 'headline',
      },
      title: {
        text: 'Quiet deference',
        size: '1.125rem',
        weight: 400,
        font: 'headline',
      },
      body: {
        text: 'It waits for attention rather than demanding it.',
        size: '0.9375rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'yielding presence',
        size: '0.8125rem',
        weight: 400,
        font: 'body',
        tracking: '0.02em',
      },
      caption: {
        text: 'designed with respectful distance',
        size: '0.6875rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '0.02em',
      body: '0.02em',
      label: '0.02em',
    },
    lineHeight: {
      headline: 1.2,
      body: 1.65,
    },
    mildToIntense:
      'Mild: Maven Pro at weight 400 with maximum openness, Lato at 300 -- text barely asserts itself. Whisper-weight typography that could fade away. Moderate: Maven Pro 500 with comfortable spacing -- present but non-imposing. Intense: Maven Pro 600, slightly more presence -- still yielding but with quiet determination. Never bold, never commanding.',
    rationale:
      'Stitch rendered Maven Pro at text-[28px] font-medium for "Display" and text-[22px] font-medium for the philosophy heading. Lato appears at text-[15px] leading-[1.65] for body text and text-[13px] for labels. The weight ramp shows Lato 300/400/700. Display at 28px is deliberately smaller than most emotions (which use 30-34px) because submission does not raise its voice. Maven Pro\'s rounded terminals curve inward rather than projecting outward -- typography that defers rather than declares.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '6px' },
      { label: 'SM', value: '12px' },
      { label: 'MD', value: '20px' },
      { label: 'LG', value: '34px' },
      { label: 'XL', value: '50px' },
    ],
    density: 'generous',
    mildToIntense:
      'Mild: lg at 40px, maximum deference -- the design yields as much space as possible. After you. Moderate: lg at 34px, restrained, respectful spacing. Intense: lg at 28px, less yielding, more present -- quiet composure rather than pure passivity.',
    rationale:
      'Stitch used space-y-5 to space-y-6 between elements and p-6 (24px) padding inside cards with mb-6 (24px) between sections. The spacing ruler shows XS 8px, MD 24px, 2XL 64px with the note "yielding quiet presence." The advisory uses the prompt\'s researched values. Submission spacing is deferential: each element takes less room than it could, leaving extra space as a gesture of respect. The white space says "after you."',
  },

  motion: {
    duration: '400ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    character: 'yielding',
    bezierPoints: [0.4, 0, 0.2, 1],
    mildToIntense:
      'Mild: 480ms, barely perceptible transitions. Elements seem to already be where they are -- maximum passivity. Moderate: 400ms with smooth yielding easing, unhurried and non-assertive. Intense: 340ms, slightly more responsive -- quiet attentiveness rather than pure passivity.',
    rationale:
      'Stitch created a .yielding-transition class with 400ms cubic-bezier(0.2, 0, 0, 1) and a bezier SVG visualization. The "Press to yield" button uses active:scale-[0.96] active:translate-y-[2px] -- a lowering gesture, a small bow. Duration-400 and ease-[cubic-bezier(0.2,0,0,1)] are applied inline. The 400ms is unhurried but not dramatic. Elements ease into position like someone sitting down quietly in a room where others are already speaking. No spring, no snap -- just a quiet return to resting position.',
  },

  depth: {
    approach: 'shadows',
    levels: [
      {
        label: 'Barely-there light',
        description: 'Extremely soft neutral shadow, almost invisible -- element rests gently',
        background: '#fafaf8',
      },
      {
        label: 'Barely-there medium',
        description: 'Soft neutral shadow, faintest suggestion of depth',
        background: '#fafaf8',
      },
      {
        label: 'Barely-there heavy',
        description: 'Lightest "heavy" shadow of any emotion -- still barely visible',
        background: '#fafaf8',
      },
    ],
    shadowIfNeeded: '0 2px 12px rgba(72, 72, 72, 0.06)',
    ghostBorder: '1px solid rgba(208, 204, 200, 0.15)',
    rationale:
      'Stitch defined a custom \'barely\' shadow in Tailwind config: 0 4px 20px -2px rgba(72,72,72,0.04). The three depth levels show: barely-there light (0 2px 10px rgba(72,72,72,0.02)), barely-there medium (the \'barely\' config value), and barely-there heavy via .lowered-gaze-shadow (0px 12px 32px rgba(72,72,72,0.06)). All use neutral grey tint at extremely low opacity. Elements do not float or rise -- they rest gently on the surface because lifting would be an assertion of importance.',
  },

  shapes: {
    radii: [
      { label: 'SM', value: '12px' },
      { label: 'MD', value: '16px' },
      { label: 'LG', value: '18px', recommended: true },
      { label: 'XL', value: '24px' },
    ],
    cornerStyle: 'rounded',
    mildToIntense:
      'Mild: 22-28px, maximum yielding -- shapes approaching circles, maximum softness that could not assert or exclude. Moderate: 18px, the yielding standard -- soft, compliant, unthreatening. Intense: 14-16px, still clearly soft but with slightly more composure.',
    rationale:
      'Stitch rendered three shapes vertically: 12px, 16px, and 18px (highlighted with ring-2 ring-primary/20 and bold "18px recommended" label). The Tailwind config sets DEFAULT to 1.125rem (18px), lg to 2rem. Section titled "Tumbled shapes." All section cards use rounded-[18px]. Sharp corners assert boundaries; rounded corners dissolve them. The generous radius creates shapes that feel like they would give way if pushed -- soft, compliant forms.',
  },

  layout: {
    alignment: 'center',
    density: 'sparse',
    rationale:
      'Stitch created a centered, bottom-weighted composition with the wireframe showing a narrow element at top, center crosshairs, and heavier elements settling at the bottom. The note reads "centered, sparse, bottom-weighted composition." Elements feel small relative to their containers -- the design yields space rather than filling it. The centering is not grand formality but the unassuming center of someone who stands where they are told.',
  },

  iconography: {
    icons: [
      { name: 'pan_tool', label: 'Offering' },
      { name: 'self_improvement', label: 'Inner quiet' },
      { name: 'spa', label: 'Care' },
      { name: 'water_drop', label: 'Flowing' },
      { name: 'nature', label: 'Yielding' },
      { name: 'mood', label: 'Attunement' },
    ],
    style:
      'Extremely thin weight (200), Grade -25, barely present. Icons reference yielding, openness, care, and gentle natural forms. At 200 weight with -25 grade they are barely visible -- present but not asserting their presence. Rendered in primary/70 against warm grey surfaces.',
    weight: 200,
    fill: false,
    rationale:
      'Stitch rendered Material Symbols at text-[32px] in text-primary/70 with the section titled "Iconography tone." Font-variation-settings confirm FILL 0, wght 200, GRAD -25, opsz 20. Icons are: pan_tool (open hand offering), self_improvement (inner quiet), spa (gentle care), water_drop (flowing to the lowest point), nature (grows without force), mood (emotional attunement). The extreme thinness makes them feel like suggestions rather than declarations -- icons that could fade away and would not resist.',
  },

  rules: {
    dos: [
      'Use muted, desaturated, low-contrast colors',
      'Keep typography small, lightweight, non-imposing',
      'Apply very generous, deferential spacing',
      'Use barely-there shadows with neutral tint',
      'Keep corners very rounded and yielding (18px)',
      'Center elements and weight toward the bottom',
      'Make motion slow, smooth, and unobtrusive (400ms)',
      'Let elements feel smaller than their containers',
    ],
    donts: [
      'Bold, heavy, commanding typography',
      'High-contrast or saturated accent colors',
      'Angular, sharp-cornered shapes',
      'Dense, assertive layouts (too dominating)',
      'Fast, snappy, or dramatic motion (too forceful)',
      'Large display sizes or full-bleed elements',
      'ALL CAPS or forceful visual hierarchy',
      'Strong shadows that assert elevation',
    ],
  },

  words: {
    words: [
      'Yielding',
      'Deferential',
      'Quiet',
      'Gentle',
      'Restrained',
      'Modest',
      'Accepting',
      'Compliant',
    ],
    feel: 'Holding the door open and stepping aside. The design system creates a sense of voluntary yielding -- not weakness, but the deliberate choice to make room. Nothing pushes forward. Everything gently recedes, offering space for something more important than itself.',
  },
};

// Self-register on import
registerAdvisory(SUBMISSION_ADVISORY);

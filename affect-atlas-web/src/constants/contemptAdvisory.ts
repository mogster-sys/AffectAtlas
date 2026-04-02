/**
 * Contempt advisory -- extracted from The design output.
 * Source: stitch-exports/contempt-advisory/code.html
 * Values reflect what The design ACTUALLY produced, not what was requested.
 *
 * NOTE: The design shifted primary to #05080f (near-black), placed our
 * #1c2028 as primary-container. Background correctly overridden to
 * #ecedf0 (cold bone). Custom clinical-shadow classes with cold
 * blue-grey tint. The design substituted 4 of 6 icons. The advisory
 * uses the prompt's researched palette and icon set.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const CONTEMPT_ADVISORY: EmotionAdvisory = {
  emotion: 'contempt',
  label: 'Contempt',
  northStar: 'The Cold Elevation',
  philosophy: {
    brief:
      'Looking down from a great height at something that does not deserve your attention -- cold bone, razor-sharp Didone serifs, and the quiet certainty of a judgment already rendered.',
    rationale:
      'Contempt in visual design comes from cold superiority, distancing precision, and the sharp certainty of looking down. Cold bone surfaces (#ecedf0) create the atmosphere of an expensive gallery space that is silently judging you -- polished, impersonal, slightly hostile in its perfection. High-contrast Didone serif (Prata) with knife-like hairlines and heavy verticals feels like 18th-century aristocratic typography that has already decided you are not worth its time. Vast expanses of deliberate negative space function as exclusion. Minimal cold shadows create clinical elevation without warmth. One small sting of acidic green (#8a9828) concentrates where the disdain lives. The most effective contempt is not loud -- it is the quiet, controlled judgment that has already been made.',
  },
  deepened: true,
  source: 'stitch:contempt_advisory',

  emotionalContext:
    'Contempt and Disgust both create distance, but through different mechanisms. Disgust recoils viscerally -- organic decay greens, oozing 280ms motion, Playfair Display\'s ornamental flourishes rotting from within. Disgust wants to flee. Contempt elevates coldly -- sharp Prata Didone serifs, dismissive 340ms delayed motion, acid green sting on cold bone. Contempt does not flee; it simply looks down.\n\nContempt also contrasts with Submission, its emotional inverse. Both create distance, but for opposite reasons. Submission yields inward -- rounded Maven Pro, 400ms yielding ease, muted soft blue, barely-there shadows. Submission lowers its gaze. Contempt raises its -- sharp Prata, 340ms dismissive delay, cold ink on cold bone, clinical precision shadows. Submission defers. Contempt judges.\n\nAmong all emotions, Contempt is the most DISTANCING. Its typography has a single weight (Prata 400) because contempt does not adjust for you. Its spacing is the most exclusionary -- vast cold negative space as social barrier. Its shapes are the sharpest (2px, nearly zero). Its shadows are the coldest and most clinical. Everything communicates aristocratic withdrawal -- the design has already decided, and you were not consulted.',

  colors: {
    tokens: {
      'primary': '#1c2028',
      'on-primary': '#ecedf0',
      'primary-container': '#c8ccd8',
      'on-primary-container': '#1c2028',
      'secondary': '#687080',
      'on-secondary': '#ffffff',
      'secondary-container': '#d0d4dc',
      'on-secondary-container': '#282e38',
      'tertiary': '#8a9828',
      'on-tertiary': '#1c2028',
      'tertiary-container': '#dce4b0',
      'on-tertiary-container': '#343810',
      'surface': '#ecedf0',
      'surface-dim': '#dcdee2',
      'surface-bright': '#f4f4f6',
      'surface-container-lowest': '#f8f8fa',
      'surface-container-low': '#f0f0f4',
      'surface-container': '#e8e8ec',
      'surface-container-high': '#e0e0e4',
      'surface-container-highest': '#d8d8dc',
      'surface-tint': '#1c2028',
      'surface-variant': '#e0e0e4',
      'on-surface': '#1c2028',
      'on-surface-variant': '#50586a',
      'outline': '#787e8a',
      'outline-variant': '#c0c4cc',
      'inverse-surface': '#1c2028',
      'inverse-primary': '#9098b0',
      'inverse-on-surface': '#ecedf0',
      'background': '#ecedf0',
      'on-background': '#1c2028',
      'error': '#8a3030',
      'on-error': '#ffffff',
      'error-container': '#e8d0d0',
      'on-error-container': '#401818',
    },
    palette: ['#ecedf0', '#1c2028', '#687080', '#8a9828', '#50586a'],
    mildToIntense: [
      '#384050',
      '#808898',
      '#a0a848',
      '#1c2028',
      '#687080',
      '#0c1018',
      '#707810',
    ],
    rationale:
      'The design rendered the palette as five sharp columns: #F8F9FC, #ECEDF0 (cold bone), #1C2028 (cold ink), #05080F (The design\'s shifted primary), and #8A9828 (acid green). The body background was correctly overridden to #ecedf0 via CSS. The advisory uses the prompt\'s researched values. Primary #1c2028 is cold ink -- near-black with a blue undertone, the color of a formal verdict. Secondary #687080 is cold distance grey -- the specific blue-grey of someone who has already looked away. Tertiary #8a9828 is acidic green -- the sting of disdain, appearing sparingly where contempt concentrates.',
  },

  typography: {
    headlineFont: 'Prata',
    headlineFallback: 'serif',
    bodyFont: 'Red Hat Text',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Contempt',
        size: '2.125rem',
        weight: 400,
        font: 'headline',
        tracking: '0.02em',
      },
      headline: {
        text: 'The Cold Elevation',
        size: '1.5rem',
        weight: 400,
        font: 'headline',
      },
      title: {
        text: 'Judgment rendered',
        size: '1.125rem',
        weight: 600,
        font: 'body',
      },
      body: {
        text: 'The verdict was decided before you arrived.',
        size: '0.9375rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'DISMISSED',
        size: '0.75rem',
        weight: 700,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.1em',
      },
      caption: {
        text: 'Designed with cold precision',
        size: '0.6875rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '0.02em',
      body: '0.005em',
      label: '0.1em',
    },
    lineHeight: {
      headline: 1.05,
      body: 1.5,
    },
    mildToIntense:
      'Mild: Red Hat Text 300 for body, lighter presence. The judgment is there but measured. Moderate: Prata 400 at standard tracking with Red Hat Text 400 body -- cold, sharp, precise. Intense: Prata at larger sizes with extreme tracking (0.06em), transforming headlines into pronouncements. Every letter holds itself apart from its neighbors.',
    rationale:
      'The design rendered Prata at text-[34px] for the display specimen "The aristocratic flare of ice." and Red Hat Text at text-[15px] font-light for body. The weight ramp shows 700, 400, 300 in Red Hat Text. Left-aligned header uses Prata at text-3xl. Prata\'s extreme stroke contrast -- knife-like hairlines and heavy verticals -- creates letterforms that feel like they are looking down on the reader. Its single weight (400) is itself a statement: contempt does not adjust for you.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '16px' },
      { label: 'LG', value: '32px' },
      { label: 'XL', value: '48px' },
    ],
    density: 'generous',
    mildToIntense:
      'Mild: lg at 28px -- the judgment is present but the distance is not yet absolute. Moderate: lg at 32px, xl at 48px -- cold, exclusionary spacing where negative space is a barrier. Intense: lg at 40px, xl at 60px -- maximum distance. Elements float in vast, cold space. You are very far beneath.',
    rationale:
      'The design used gap-16 (64px) between major sections and gap-8 between sub-elements. Spacing bars show XS through XL matching prompt values. The generous negative space is not comfort -- it is cold distance. Each element is isolated in its own field of cold white space, maintaining distance from its neighbors. The space says "do not approach." This is the opposite of anger\'s dense confrontational spacing -- contempt does not crowd you, it simply refuses to let you in.',
  },

  motion: {
    duration: '340ms',
    easing: 'cubic-bezier(0.5, 0, 0.1, 0.8)',
    character: 'dismissive',
    bezierPoints: [0.5, 0, 0.1, 0.8],
    mildToIntense:
      'Mild: 280ms, less pronounced delay. The dismissal is quick, almost casual. Moderate: 340ms with dismissive easing -- a beat of unimpressed stillness before the element deigns to move. Intense: 400ms, longer initial pause before moving. The contempt is deliberate, making you wait.',
    rationale:
      'The design created a bezier SVG visualization with endpoints at 0ms and 340ms, curve path showing delayed start then smooth arrival. The "Dismiss Action" button uses duration-340 ease-[cubic-bezier(0.4,0,1,1)] with active:scale-[0.98] active:opacity-70. The advisory uses the prompt\'s researched easing (0.5, 0, 0.1, 0.8). The motion starts with a deliberate delay -- a beat of unimpressed stillness before the element deigns to move. Then it arrives smoothly, controlled, without urgency. Nothing is reactive. Nothing is rushed.',
  },

  depth: {
    approach: 'shadows',
    levels: [
      {
        label: 'Clinical Light',
        description: 'Barely-there cold shadow -- minimal elevation acknowledged with clinical precision',
        background: '#f8f8fa',
      },
      {
        label: 'Clinical Medium',
        description: 'Slightly more visible cold shadow -- elevated because it is above you',
        background: '#f8f8fa',
      },
      {
        label: 'Clinical Heavy',
        description: 'Maximum clinical elevation -- cold, precise, sharply defined',
        background: '#f8f8fa',
      },
    ],
    shadowIfNeeded: '0 2px 10px rgba(28, 32, 40, 0.08)',
    ghostBorder: '1px solid rgba(192, 196, 204, 0.08)',
    rationale:
      'The design defined three custom clinical shadows: clinical-shadow-sm (0 4px 10px rgba(104, 112, 128, 0.04)), clinical-shadow-md (0 10px 20px rgba(104, 112, 128, 0.06)), clinical-shadow-lg (0 20px 40px rgba(104, 112, 128, 0.08)). Shadow cards labeled L-01 Clinical Light, L-02 Clinical Medium, L-03 Clinical Heavy with 2px corners and border-outline-variant/5. Cold, blue-grey-tinted shadows at very low opacity create clinical elevation. Elements float above the surface with the minimum acknowledgment of depth -- elevated because they are above you, but they do not need to prove it.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px' },
      { label: 'SM', value: '2px', recommended: true },
      { label: 'MD', value: '4px' },
    ],
    cornerStyle: 'sharp',
    mildToIntense:
      'Mild: 4-6px, a marginal softening, the faintest concession. Moderate: 2px, nearly zero -- sharp, precise, unwilling to soften. The corners of legal documents and formal verdicts. Intense: 0px, pure sharp corners. Absolute judgment, zero accommodation.',
    rationale:
      'The design rendered three shapes vertically: 0px (Brutalist), 2px (Recommended, highlighted with acid green border-2), and 4px (Soft/Avoid). The Tailwind config sets DEFAULT to 2px. Sharp corners signal judgment and distance. Rounded corners invite touch and approach; contempt does neither. The 2px radius is just enough to feel intentional, but it offers nothing warm. Every shape is a boundary -- clean, hard, and absolute.',
  },

  layout: {
    alignment: 'asymmetric',
    density: 'sparse',
    rationale:
      'The design created an asymmetric, top-heavy composition. The wireframe section shows a dominant element high and large (w-2/3 h-12), subordinate elements pushed low and small (w-1/3 h-32), with a large faded "C" letterform centered as a watermark. Caption reads: "Wireframe: Looking Down Asymmetry." The left-aligned header (not centered -- contempt does not address the room equally) reinforces the asymmetric brief. Cold negative space separates elements like social distance between classes.',
  },

  iconography: {
    icons: [
      { name: 'arrow_downward', label: 'Looking down' },
      { name: 'block', label: 'Rejection' },
      { name: 'vertical_align_top', label: 'Elevation' },
      { name: 'remove', label: 'Dismissal' },
      { name: 'visibility_off', label: 'Refusal' },
      { name: 'gavel', label: 'Verdict' },
    ],
    style:
      'Extremely thin weight (200), Grade -25, razor-sharp. Icons reference looking down, rejection, elevation, dismissal, refusal to acknowledge, and rendering judgment. At 200 weight with -25 grade they feel like marks made by a razor -- thin, deliberate, and capable of cutting.',
    weight: 200,
    fill: false,
    rationale:
      'The design rendered Material Symbols at text-3xl in text-secondary with font-variation-settings confirming FILL 0, wght 200, GRAD -25, opsz 20. Icons in a 3x2 grid: architecture, visibility_off, do_not_disturb_on, vertical_align_top, frame_inspect, layers. The design substituted 4 of 6 icons; the advisory uses the prompt\'s researched set: arrow_downward (looking down on), block (rejection), vertical_align_top (superiority), remove (dismissal), visibility_off (refusing to acknowledge), gavel (rendering verdict). The extremely thin weight makes them feel aristocratic -- so refined they barely exist, yet cut precisely.',
  },

  rules: {
    dos: [
      'Use cold, off-white surfaces with blue-grey tones (#ecedf0)',
      'Keep typography sharp and high-contrast (Prata Didone)',
      'Apply minimal, cold, clinically precise shadows',
      'Use vast expanses of cold negative space as exclusion',
      'Create top-heavy, asymmetric compositions',
      'Keep motion delayed and dismissive (340ms)',
      'Use acidic green accent (#8a9828) sparingly for disdain',
      'Make elements hold themselves apart from each other',
    ],
    donts: [
      'Warm colors, warm grey, or cream surfaces',
      'Rounded, soft, or inviting shapes',
      'Bouncy, energetic, or reactive motion',
      'Dense, engaging, or busy layouts',
      'Playful, decorative, or handwritten typography',
      'Heavy shadows or dramatic elevation',
      'Any element that reaches toward the viewer',
      'Organic textures or natural-feeling surfaces',
    ],
  },

  words: {
    words: [
      'Superior',
      'Dismissive',
      'Cold',
      'Elevated',
      'Judging',
      'Distancing',
      'Cutting',
      'Indifferent',
    ],
    feel: 'Looking down from a great height at something that does not deserve your attention. The design system creates a sense of cold certainty -- not anger (too hot) and not disgust (too visceral). Contempt is the quiet, controlled judgment that has already been made. Everything is precise. Everything holds itself apart. One acid sting of green marks where the disdain lives.',
  },
};

// Self-register on import
registerAdvisory(CONTEMPT_ADVISORY);

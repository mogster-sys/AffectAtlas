/**
 * Optimism advisory -- extracted from The design output.
 * Source: stitch-exports/optimism-advisory/code.html
 * Values reflect what The design ACTUALLY produced, not what was requested.
 *
 * NOTE: The design shifted primary to #815500 (darker amber), placed our
 * #d09020 as primary-container. Also loaded Plus Jakarta Sans + Be
 * Vietnam Pro (Joy's fonts) as fallbacks but uses font-dm/font-nunito
 * classes correctly. Custom 'buoyant' timing function matches prompt.
 * Warm amber-tinted shadows. All 6 icons match exactly.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const OPTIMISM_ADVISORY: EmotionAdvisory = {
  emotion: 'optimism',
  label: 'Optimism',
  northStar: 'The Open Horizon',
  philosophy: {
    brief:
      'Looking out at a clear morning and knowing it is going to be a good day -- sunlight amber, growth green, and the sustained warm confidence that the future is friendly.',
    rationale:
      'Optimism in visual design comes from bright confidence, warm clarity, and the sustained glow of positive expectation. Warm bright white surfaces (#faf8f4) create the atmosphere of morning light through clean windows -- bright without being harsh. Rounded geometric sans (DM Sans) with slightly rounded terminals feels confident and modern with warmth -- geometry that smiles. Generous open layouts give each element room to succeed. Warm amber-tinted diffuse shadows create friendly, natural elevation. Rounded 14px corners welcome interaction and suggest ease. The most effective optimism is not excitement -- it is the broad, reliable warmth of believing things will work out. An open road under a clear sky, not a party.',
  },
  deepened: true,
  source: 'stitch:optimism_advisory',

  emotionalContext:
    'Optimism and Joy both use warm palettes on bright surfaces, but the temporal quality is different. Joy is present-moment delight -- bouncy 200ms motion, Plus Jakarta Sans\' exuberant rounded strokes, radiant conservatory warmth. Joy celebrates what IS. Optimism is future-facing confidence -- buoyant 280ms motion, DM Sans\' confident rounded geometry, open horizon warmth. Optimism believes in what WILL BE.\n\nOptimism also contrasts with Disappointment, its emotional inverse. Disappointment uses flat overcast grey (#f0f0f2), muted blue-grey (#687888), deflating 300ms settling motion, unremarkable 10px corners, and Vollkorn headlines that are adequate but uninspiring. Optimism uses warm bright white (#faf8f4), sunlight amber (#d09020), buoyant 280ms lifting motion, generous 14px rounded corners, and DM Sans headlines that feel confident and capable. Disappointment settles. Optimism lifts.\n\nAmong all emotions, Optimism is the most BUOYANT. Its motion has the strongest upward bias (elements lift with -2px translateY on interaction). Its spacing is the most generously open (giving room to grow into). Its shadows are the warmest (amber-tinted rather than neutral or cool). Its corners are among the roundest (14px, welcoming). Everything communicates a world where things work out -- not naive cheerfulness but the quiet structural confidence of a well-made plan.',

  colors: {
    tokens: {
      'primary': '#d09020',
      'on-primary': '#1a1400',
      'primary-container': '#fff0c8',
      'on-primary-container': '#6a4800',
      'secondary': '#38885c',
      'on-secondary': '#ffffff',
      'secondary-container': '#c8f0d8',
      'on-secondary-container': '#184028',
      'tertiary': '#4888c0',
      'on-tertiary': '#ffffff',
      'tertiary-container': '#c8e0f8',
      'on-tertiary-container': '#183858',
      'surface': '#faf8f4',
      'surface-dim': '#ece8e0',
      'surface-bright': '#fffefa',
      'surface-container-lowest': '#ffffff',
      'surface-container-low': '#f6f4ee',
      'surface-container': '#f0ece6',
      'surface-container-high': '#eae6de',
      'surface-container-highest': '#e4dfd6',
      'surface-tint': '#d09020',
      'surface-variant': '#eae6de',
      'on-surface': '#282420',
      'on-surface-variant': '#686058',
      'outline': '#908880',
      'outline-variant': '#d8d0c8',
      'inverse-surface': '#282420',
      'inverse-primary': '#f0c050',
      'inverse-on-surface': '#faf8f4',
      'background': '#faf8f4',
      'on-background': '#282420',
      'error': '#b04030',
      'on-error': '#ffffff',
      'error-container': '#f0d0c8',
      'on-error-container': '#401810',
    },
    palette: ['#faf8f4', '#d09020', '#38885c', '#4888c0', '#282420'],
    mildToIntense: [
      '#e0b050',
      '#60a878',
      '#70a8d8',
      '#d09020',
      '#38885c',
      '#c07810',
      '#207040',
    ],
    rationale:
      'The design rendered five swatch strips showing The design\'s shifted palette (#815500, #D09020, #A0F1BD, #CFE5FF, #EAE8E4) with a gradient labeled "Dormant" to "Radiant." Below, three gradient columns labeled "Sunlight," "Growth," and "Sky" show primary, secondary, and tertiary depth. The advisory uses the prompt\'s researched values. Sunlight amber (#d09020) is warm morning light -- optimistic without being childish. Growth green (#38885c) is fresh leaves and forward progress. Clear sky blue (#4888c0) is the open sky on a good day. Together: "a good morning."',
  },

  typography: {
    headlineFont: 'DM Sans',
    headlineFallback: 'sans-serif',
    bodyFont: 'Nunito',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Optimism',
        size: '2.125rem',
        weight: 700,
        font: 'headline',
        tracking: '-0.01em',
      },
      headline: {
        text: 'The Open Horizon',
        size: '1.5rem',
        weight: 600,
        font: 'headline',
      },
      title: {
        text: 'Good things ahead',
        size: '1.125rem',
        weight: 500,
        font: 'headline',
      },
      body: {
        text: 'The path forward is clear, achievable, and beautiful.',
        size: '0.9375rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'growing forward',
        size: '0.8125rem',
        weight: 600,
        font: 'body',
        tracking: '0.01em',
      },
      caption: {
        text: 'Designed for the upward trajectory',
        size: '0.6875rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '-0.01em',
      body: '0.01em',
      label: '0.01em',
    },
    lineHeight: {
      headline: 1.15,
      body: 1.65,
    },
    mildToIntense:
      'Mild: DM Sans at lighter weights (300-400), more line height. Gentle, quiet confidence -- a warm suggestion. Moderate: DM Sans 600-700 at standard spacing -- bold, clear, capable. Intense: DM Sans 700 at slightly tighter tracking -- strong, declarative confidence. "This WILL work."',
    rationale:
      'The design rendered DM Sans at text-[34px] font-bold for "The Horizon" display specimen and text-[28px] font-bold for the header. Nunito at text-[15px] leading-relaxed for body text. Weight ramp shows DM Sans Light, Normal, Medium, Bold. The .optimism-card class uses 14px rounded corners and 24px padding. DM Sans\' rounded geometry creates headlines that feel like a firm handshake with a genuine smile -- confident and friendly. Nunito\'s rounded terminals make body text feel encouraging and warm.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '6px' },
      { label: 'SM', value: '12px' },
      { label: 'MD', value: '20px' },
      { label: 'LG', value: '34px' },
      { label: 'XL', value: '52px' },
    ],
    density: 'generous',
    mildToIntense:
      'Mild: lg at 40px -- maximum room, maximum openness. The horizon stretches. Moderate: lg at 34px, xl at 52px -- generous growth spacing where each element has room to succeed. Intense: lg at 28px -- more focused, more directed. Confidence becomes conviction.',
    rationale:
      'The design used space-y-6 between card sub-elements and 24px margin-bottom between cards with px-5 page padding. The spacing section shows bars at XS, MD, LG, 2XL with a "GENEROUS" pill label. The generous spacing is not emptiness (loneliness) or distance (contempt) but opportunity -- space that says "there is room for more good things." The scale supports clear hierarchy and easy scanning, making complex information feel manageable.',
  },

  motion: {
    duration: '280ms',
    easing: 'cubic-bezier(0.2, 0.8, 0.3, 1)',
    character: 'buoyant',
    bezierPoints: [0.2, 0.8, 0.3, 1],
    mildToIntense:
      'Mild: 340ms, gentler lift. A soft, almost imperceptible rising. Moderate: 280ms with buoyant easing -- brisk, responsive, elements gently lifted by a warm current. Intense: 220ms, more pronounced lift (1.06 scale, -3px translate). Confident, visible, unmistakable.',
    rationale:
      'The design defined a custom buoyant timing function in Tailwind config: cubic-bezier(0.2, 0.8, 0.3, 1) -- matching the prompt exactly. The motion section shows duration 280ms and curve values as data cards. The "Release Tension" button uses duration-280 hover:scale-[1.04] hover:-translate-y-0.5 with a forward arrow icon. The buoyant easing starts with a gentle lift then settles smoothly -- elements rise into position as if gently carried upward. No bounce (too playful), no snap (too aggressive).',
  },

  depth: {
    approach: 'shadows',
    levels: [
      {
        label: 'Subtle Light',
        description: 'Warm-tinted gentle shadow -- element floats comfortably above surface',
        background: '#ffffff',
      },
      {
        label: 'Medium Warm',
        description: 'Warm diffuse shadow -- friendly, natural-feeling elevation',
        background: '#ffffff',
      },
      {
        label: 'Deep Radiant',
        description: 'Maximum warm elevation -- element lifts with confident, sunlit depth',
        background: '#ffffff',
      },
    ],
    shadowIfNeeded: '0 4px 16px rgba(40, 36, 32, 0.08)',
    ghostBorder: '1px solid rgba(216, 208, 200, 0.15)',
    rationale:
      'The design defined custom warm shadows: warm-md (0 10px 30px -5px rgba(129, 85, 0, 0.08)) and warm-lg (0 20px 50px -10px rgba(129, 85, 0, 0.12)). Three shadow cards: Subtle/Light (0 4px 10px rgba(129,85,0,0.04)), Medium/Warm (0 10px 30px -5px rgba(129,85,0,0.1)), Deep/Radiant (0 25px 50px -12px rgba(129,85,0,0.15)). The amber-tinted (rgba(129,85,0,...)) warm shadows create gentle, natural elevation -- elements float comfortably, supported rather than weighed down. Shadows feel like natural sunlight rather than artificial depth.',
  },

  shapes: {
    radii: [
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '12px' },
      { label: 'LG', value: '14px', recommended: true },
      { label: 'XL', value: '20px' },
    ],
    cornerStyle: 'rounded',
    mildToIntense:
      'Mild: 18-22px, more rounded, softer, more welcoming. Moderate: 14px, distinctly rounded -- friendly, approachable, safe. Every container says "come in, this will be good." Intense: 10-12px, still friendly but more structured, more decisive. Confidence that has made a plan.',
    rationale:
      'The design rendered four shapes in a 2x2 grid: 8px, 12px, 14px (highlighted with primary border-2 and bold "14px (Rec.)" label), and 20px. The Tailwind config sets DEFAULT to 1rem (16px) and card to 14px. The .optimism-card CSS class uses border-radius: 14px. Rounded corners are the shape language of optimism -- safety, approachability, friendliness. The 14px radius is warm without being playful, soft without being vague.',
  },

  layout: {
    alignment: 'center',
    density: 'normal',
    rationale:
      'The design created a centered, generous, upward-weighted composition. The wireframe section is labeled "Upward Weighting" and shows content elements positioned in the upper portion of the container with a floating primary-colored FAB at the bottom. The centered axis is not formal (as in awe) but inclusive -- it addresses the viewer directly and says "this is for you." Elements sit fractionally above vertical center, suggesting growth and positive momentum.',
  },

  iconography: {
    icons: [
      { name: 'wb_sunny', label: 'Radiate' },
      { name: 'trending_up', label: 'Rise' },
      { name: 'check_circle', label: 'Confirm' },
      { name: 'thumb_up', label: 'Agree' },
      { name: 'lightbulb', label: 'Enlighten' },
      { name: 'rocket_launch', label: 'Launch' },
    ],
    style:
      'Medium weight (400), Grade 0, balanced and clear. Icons reference warmth, growth, success, affirmation, ideas, and forward motion. At 400 weight they feel solid and capable without being heavy or aggressive. These are icons that believe in you.',
    weight: 400,
    fill: false,
    rationale:
      'The design rendered Material Symbols at text-4xl in text-primary with font-variation-settings confirming FILL 0, wght 400, GRAD 0, opsz 24. Icons in a 3x2 grid with lowercase labels: wb_sunny (Radiate), trending_up (Rise), check_circle (Confirm), thumb_up (Agree), lightbulb (Enlighten), rocket_launch (Launch). ALL SIX icons match the prompt exactly -- the best icon fidelity of any The design run. Balanced weight makes them dependable -- icons you can trust.',
  },

  rules: {
    dos: [
      'Use warm bright white surfaces (#faf8f4)',
      'Keep typography rounded, clear, and confident (DM Sans)',
      'Apply warm, diffuse, amber-tinted shadows',
      'Use generous rounded corners (14px default)',
      'Create upward-weighted, breathing compositions',
      'Keep motion buoyant and lifting (280ms)',
      'Use sunlight amber (#d09020) for primary warmth',
      'Use growth green (#38885c) for progress and success',
    ],
    donts: [
      'Dark, heavy, or muted color palettes',
      'Sharp, angular, or aggressive shapes',
      'Dense, compressed, or crowded spacing',
      'Slow, sinking, or heavy motion',
      'Cold, sterile, or impersonal surfaces',
      'Condensed, rigid, or hostile typography',
      'Dramatic shadows or harsh elevation',
      'Any element that suggests difficulty or failure',
    ],
  },

  words: {
    words: [
      'Bright',
      'Confident',
      'Warm',
      'Open',
      'Growing',
      'Capable',
      'Clear',
      'Forward',
    ],
    feel: 'Looking out at a clear morning and knowing it is going to be a good day. The design system creates a sense of sustained warm confidence -- not the excitement of anticipation (too focused) and not the delight of joy (too momentary). Optimism is the broad, reliable warmth of believing things will work out. Everything is clear. Everything is growing. Everything lifts gently upward.',
  },
};

// Self-register on import
registerAdvisory(OPTIMISM_ADVISORY);

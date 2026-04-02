/**
 * Embarrassment advisory -- extracted from The design output.
 * Source: stitch-exports/embarrassment-advisory/code.html
 * Values reflect what The design ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const EMBARRASSMENT_ADVISORY: EmotionAdvisory = {
  emotion: 'embarrassment',
  label: 'Embarrassment',
  northStar: 'The Exposed Nerve',
  philosophy: {
    brief:
      'To disappear is a luxury the user cannot afford -- to be seen is a burden the interface must soften.',
    rationale:
      'Embarrassment in visual design is the art of the exposed nerve. The palette is thin-skinned pink on blush-white -- warm enough to feel human, flushed enough to feel involuntary. Surfaces bleed into each other through tonal shifts rather than hard lines. Typography stays small and quiet (Quicksand at text-lg max, never Display-Large). The 4px awkward-offset on headings creates deliberate misalignment -- the visual equivalent of not knowing where to put your hands. Elements either cluster together (hiding) or stand painfully alone (exposed). The most effective embarrassment is not cruelty -- it is the design equivalent of being caught mid-thought. The beauty of the mistake.',
  },
  deepened: true,
  source: 'stitch:embarrassment_advisory',

  emotionalContext:
    'Embarrassment and Fear share self-consciousness, but the threat is different. Fear anticipates danger from the world (clinical void, cold violets, sharp 150ms panic). Embarrassment has already been seen -- the danger is social, not physical (warm blush, soft pinks, hesitant 260ms flush). Fear wants to escape. Embarrassment wants to disappear.\n\nEmbarrassment also diverges from Guilt. Both involve self-awareness of wrongdoing, but Guilt is a private moral reckoning (dark maroon, literary serifs, pressing inset shadows). Embarrassment is a PUBLIC exposure (light blush pink, soft rounded sans-serif, blush-tinted shadows). Guilt sits alone in a room. Embarrassment was just caught in front of everyone.\n\nAmong all emotions, Embarrassment is the most SOMATIC. Joy radiates. Anger explodes. Sadness sinks. But Embarrassment flushes -- it is felt in the body before the mind processes it. Its design reflects this physicality: the blush-shadow (pink-tinted rgba(196, 88, 120, 0.08)), the flushing transition timing, the "exposed nerve" progress bar, and the two spatial states that mirror the physical response -- clustering tight (hiding) or standing alone (exposed).',

  colors: {
    tokens: {
      'primary': '#9c3958',
      'on-primary': '#ffffff',
      'primary-container': '#bb5171',
      'on-primary-container': '#fffbff',
      'secondary': '#755565',
      'on-secondary': '#ffffff',
      'secondary-container': '#ffd4e7',
      'on-secondary-container': '#7a5969',
      'surface': '#fff8f8',
      'on-surface': '#201a1d',
      'surface-variant': '#ecdfe3',
      'on-surface-variant': '#554246',
      'outline': '#887176',
      'outline-variant': '#dac0c5',
      'background': '#fff8f8',
      'on-background': '#201a1d',
      'surface-container-lowest': '#ffffff',
      'surface-container-low': '#fdf0f4',
      'surface-container': '#f7ebef',
      'surface-container-high': '#f2e5e9',
      'surface-container-highest': '#ecdfe3',
      'surface-tint': '#9c3958',
      'inverse-surface': '#201a1d',
      'inverse-primary': '#ffb1c3',
      'inverse-on-surface': '#fff8f8',
      'error': '#ba1a1a',
      'on-error': '#ffffff',
      'error-container': '#ffdad6',
      'on-error-container': '#93000a',
    },
    palette: ['#fff8f8', '#9c3958', '#755565', '#fdf0f4', '#201a1d'],
    mildToIntense: [
      '#fdf0f4',
      '#ffb1c3',
      '#bb5171',
      '#9c3958',
      '#755565',
      '#554246',
      '#201a1d',
    ],
    rationale:
      'The design shifted the primary from the requested #c45878 to a deeper #9c3958 in the Tailwind config -- darker and more restrained, like a flush that has been held back. The surface is #fff8f8 (warm pink-white, not pure white) with body bg at #fdf0f4 (blush). The primary-container (#bb5171) is brighter than the primary, creating the effect of the flush intensifying. The secondary (#755565) is a muted mauve-gray that reads as "looking away." The entire palette operates in a narrow warm-pink band -- no cool tones, no dramatic contrast. Unlike Anger\'s aggressive crimson or Joy\'s celebratory gold, Embarrassment\'s pink is involuntary and exposed.',
  },

  typography: {
    headlineFont: 'Quicksand',
    headlineFallback: 'sans-serif',
    bodyFont: 'Mulish',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'A sudden heat behind the eyes.',
        size: '1.5rem',
        weight: 600,
        font: 'headline',
        tracking: '-0.01em',
      },
      headline: {
        text: 'Quicksand',
        size: '1rem',
        weight: 600,
        font: 'headline',
      },
      title: {
        text: 'The Exposed Nerve',
        size: '0.875rem',
        weight: 600,
        font: 'headline',
      },
      body: {
        text: 'The interface should mimic the somatic response of a flush.',
        size: '0.875rem',
        weight: 300,
        font: 'body',
      },
      label: {
        text: 'STATE 01',
        size: '0.65rem',
        weight: 700,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.15em',
      },
      caption: {
        text: 'The Withdrawn Vulnerability',
        size: '0.7rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '-0.01em',
      body: '0em',
      label: '0.15em',
    },
    lineHeight: {
      headline: 1.2,
      body: 1.6,
    },
    mildToIntense:
      'Mild: weight 300, size stays small -- a whisper, barely there. Moderate: weight 400-500, slightly larger -- the voice finds itself but stays quiet. Intense: weight 600-700, still capped at text-lg maximum -- embarrassment NEVER shouts, even at full intensity it is forced to be listened to.',
    rationale:
      'The design rendered Quicksand at semibold (600) for headings, capped at text-2xl for the hero and text-base for section headers -- deliberately small. The rules section explicitly states: "No Display-Large type. Keep the voice small, forced to be listened to." Mulish appears as body text at font-light (300) with italic for philosophy quotes, creating a whispered confessional quality. Plus Jakarta Sans and Manrope are loaded as fallbacks but not prominently used. The .awkward-offset class (translateX(4px)) on all headings creates a deliberate misalignment -- text that cannot quite look you in the eye.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '16px' },
      { label: 'LG', value: '24px' },
      { label: 'XL', value: '40px' },
    ],
    density: 'variable',
    mildToIntense:
      'Mild: generous spacing throughout -- comfortable distance, the blush has not arrived yet. Moderate: mixed -- some clustering begins as self-consciousness increases. Intense: full duality -- elements either cluster tight (gap-1, the hiding state) or stand painfully isolated (py-24, 6rem of empty space around a single exposed element).',
    rationale:
      'The design created a brilliant spacing duality. The "Hiding State" uses gap-1 (4px) in a tight cluster of boxes huddled together -- the spatial equivalent of crossing your arms. The "Exposed" state uses py-24 (96px) of isolation around a single 8px dot -- painfully alone. Sections alternate between px-6/py-10 (comfortable) and px-8/pt-12 (extra air in the hero). Unlike Guilt\'s uniform compression or Inspiration\'s uniform generosity, Embarrassment\'s spacing is BIMODAL: hide or be seen.',
  },

  motion: {
    duration: '260ms',
    easing: 'cubic-bezier(0.4, 0.2, 0.6, 0.8)',
    character: 'flushing',
    bezierPoints: [0.4, 0.2, 0.6, 0.8],
    mildToIntense:
      'Mild: 320ms, smoother easing -- a gentle warm feeling, barely noticeable. Moderate: 260ms, standard flushing bezier -- the heat rises visibly. Intense: 200ms, more abrupt -- the flush arrives before you can stop it.',
    rationale:
      'The design created a dedicated .flushing-transition class with the exact 260ms cubic-bezier(0.4, 0.2, 0.6, 0.8) easing and a Tailwind timing function token "flushing." The Export button uses hover:scale-95 active:scale-90 -- SHRINKING on interaction, the opposite of confidence (Inspiration rises, Embarrassment retreats). The hero image uses group-hover:scale-105 with flushing-transition -- a slow, involuntary expansion. The nerve progress bar glows with rgba(156,57,88,0.4) -- the flush spreading. Unlike Anger\'s explosive snap or Joy\'s bouncy overshoot, Embarrassment\'s motion is hesitant and withdrawing.',
  },

  depth: {
    approach: 'tonal',
    levels: [
      {
        label: 'Whisper',
        description: 'Minimal tonal shift, surface blends into background',
        background: '#fdf0f4',
      },
      {
        label: 'Blush',
        description: 'Soft pink-tinted shadow, element gently present',
        background: '#f7ebef',
      },
      {
        label: 'Flush',
        description: 'Full blush shadow with warm glow, unavoidably visible',
        background: '#ffffff',
      },
    ],
    shadowIfNeeded: '0 4px 20px rgba(196, 88, 120, 0.08)',
    ghostBorder: '1px solid rgba(218, 192, 197, 0.2)',
    rationale:
      'The design created a custom .blush-shadow class (0 4px 20px rgba(196, 88, 120, 0.08)) -- pink-tinted, warm, and diffuse. Every card uses this same soft blush shadow with a ghost border (outline-variant at 20% opacity). The header and bottom nav both use the same pink shadow formula with directional variants (upward for nav). The nerve progress bar has an inner glow (0 0 8px rgba(156, 57, 88, 0.4)) -- the flush made visible as light. Unlike Guilt\'s pressing inset shadows or Anger\'s crushing weight, Embarrassment\'s shadows are warm and involuntary -- a blush you cannot hide.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '14px', recommended: true },
      { label: 'Full', value: '9999px' },
    ],
    cornerStyle: 'rounded',
    mildToIntense:
      'Mild: 14px throughout (uniform defensive curling). Moderate: 14px with some pill shapes (full radius for word chips). Intense: all 14px with tighter clustering -- corners curl inward as the hiding instinct intensifies.',
    rationale:
      'The design set DEFAULT, lg, AND xl all to 14px -- every shape in the system uses the same defensive radius. The rules explicitly state: "14px defensive radii. All corners must curl inward." This uniformity is deliberate: embarrassment does not have the confidence for variety. Pills (rounded-full) appear only for word chips and the Export button. Unlike Anger\'s razor 0px or Joy\'s playful range (8px to 24px), Embarrassment has one radius and it is protective.',
  },

  layout: {
    alignment: 'center',
    density: 'variable',
    rationale:
      'The design created a center-aligned hero with the .awkward-offset (translateX(4px)) creating deliberate misalignment -- centered but not quite, like someone trying to stand straight but fidgeting. The bento grid (2-column) for color and typography creates intimate, contained spaces. The spacing duality (hiding clusters vs exposed isolation) drives the layout rhythm. The bottom nav uses rounded-t-[14px] with the same blush shadow. Unlike Inspiration\'s confident asymmetry or Pride\'s ceremonial center, Embarrassment\'s layout is self-conscious -- trying to be centered but never quite managing it.',
  },

  iconography: {
    icons: [
      { name: 'visibility_off', label: 'Hiding' },
      { name: 'auto_awesome', label: 'Philosophy' },
      { name: 'close', label: 'Prohibition' },
      { name: 'done', label: 'Permission' },
      { name: 'texture', label: 'Patterns' },
      { name: 'speed', label: 'Motion' },
    ],
    style:
      'Light weight (300) with -25 grade -- thinner and more withdrawn than standard. Icons at 20px feel small and recessive, matching the "keep the voice small" typography rule.',
    weight: 300,
    fill: false,
    rationale:
      'The design rendered icons at weight 300 with GRAD -25 (confirmed in font-variation-settings) at only 20px -- the smallest and lightest icon treatment of any advisory. The visibility_off icon anchors the hero and bottom nav, making "not being seen" the central metaphor. Icons in the rules section use close (x) for prohibitions and done (checkmark) for permissions at text-sm -- even smaller. Unlike Inspiration\'s confident 30px primary-colored icons or Anger\'s heavy 600-weight symbols, Embarrassment\'s icons whisper.',
  },

  rules: {
    dos: [
      'Use 14px defensive radii on all corners (curl inward)',
      'Let surfaces bleed into each other through tonal shifts',
      'Keep typography small and quiet (never Display-Large)',
      'Apply the awkward-offset (4px translateX) to headings',
      'Use the hiding/exposed spacing duality',
      'Tint shadows with blush pink (warm, involuntary)',
      'Make interactions shrink (scale-95) not grow',
      'Keep the overall tone fragile, intimate, unpolished',
    ],
    donts: [
      'Hard 1px borders between sections',
      'Display-Large or hero-scale typography',
      'Bold saturated colors (the blush is involuntary, not chosen)',
      'Sharp angular corners (those are hostile, not vulnerable)',
      'Explosive or bouncy motion (embarrassment hesitates)',
      'Pure white backgrounds (use blush-tinted warm whites)',
      'Confident centered compositions without offset',
      'Heavy drop shadows (use pink-tinted diffuse blush only)',
    ],
  },

  words: {
    words: [
      'Fragile',
      'Intimate',
      'Naive',
      'Unpolished',
      'Exposed',
      'Hesitation',
      'Flush',
      'Withdrawn',
    ],
    feel: 'A sudden heat behind the eyes. The somatic response of being seen before you are ready -- not shame (which is moral) but the pure physical involuntary flush of social exposure. The beauty of the mistake.',
  },
};

// Self-register on import
registerAdvisory(EMBARRASSMENT_ADVISORY);

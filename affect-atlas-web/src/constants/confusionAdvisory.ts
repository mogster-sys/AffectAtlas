/**
 * Confusion advisory data -- extracted from The design output.
 */

import type { EmotionAdvisory } from '@/constants/advisoryData';
import { registerAdvisory } from '@/constants/advisoryData';

export const CONFUSION_ADVISORY: EmotionAdvisory = {
  emotion: 'confusion',
  label: 'Confusion',
  northStar: 'The Shifting Ground',
  philosophy: {
    brief:
      'Productive Ambiguity -- subtle misalignment and near-harmony that makes you pause, look twice, and question what you assumed.',
    rationale:
      'Confusion in visual design comes from broken consistency rather than broken aesthetics. Unlike Disgust (violated cleanliness) or Fear (violated safety), Confusion violates PREDICTABILITY -- the expectation that a system will follow its own rules. Near-neighbor hues that almost harmonize but don\'t settle, fonts that should match but subtly differ, spacing that changes without clear reason. The key insight is that confusion requires a BASELINE OF ORDER to break -- a perfectly chaotic system isn\'t confusing, it\'s just noise.',
  },
  deepened: true,
  source: 'stitch:confusion_design_advisory',

  emotionalContext:
    'Confusion and Surprise share the element of the unexpected, but Surprise resolves instantly -- a single sharp flash of recognition with high-contrast palette and snappy 250ms motion. Confusion LINGERS -- an ongoing uncertainty with low-contrast palette and wavering 350ms motion that overshoots its target. Confusion and Fear both create discomfort, but Fear is about THREAT (cold, clinical, precise) while Confusion is about UNCERTAINTY (nothing is threatening, but nothing makes sense). Among all emotions, Confusion is the only one where the design system should feel INCONSISTENT WITH ITSELF -- not broken, not contaminated, not aggressive, but genuinely uncertain about its own rules.',

  colors: {
    tokens: {
      'primary': '#625676',
      'on-primary': '#ffffff',
      'primary-container': '#7b6f90',
      'on-primary-container': '#fffbff',
      'primary-fixed': '#ebdcff',
      'primary-fixed-dim': '#cfc0e5',
      'on-primary-fixed': '#201632',
      'on-primary-fixed-variant': '#4d4160',
      'secondary': '#655d56',
      'on-secondary': '#ffffff',
      'secondary-container': '#ede0d7',
      'on-secondary-container': '#6b635c',
      'secondary-fixed': '#ede0d7',
      'secondary-fixed-dim': '#d0c4bc',
      'on-secondary-fixed': '#201b15',
      'on-secondary-fixed-variant': '#4d453f',
      'tertiary': '#45615f',
      'on-tertiary': '#ffffff',
      'tertiary-container': '#5d7a78',
      'on-tertiary-container': '#f3fffd',
      'tertiary-fixed': '#cae9e6',
      'tertiary-fixed-dim': '#aeccca',
      'on-tertiary-fixed': '#02201f',
      'on-tertiary-fixed-variant': '#304c4a',
      'surface': '#fff8f4',
      'surface-dim': '#e1d8d2',
      'surface-bright': '#fff8f4',
      'surface-container-lowest': '#ffffff',
      'surface-container-low': '#fbf2eb',
      'surface-container': '#f5ece5',
      'surface-container-high': '#f0e7df',
      'surface-container-highest': '#eae1da',
      'surface-tint': '#655979',
      'surface-variant': '#eae1da',
      'on-surface': '#1f1b17',
      'on-surface-variant': '#49454d',
      'outline': '#7a757d',
      'outline-variant': '#cbc4cd',
      'inverse-primary': '#cfc0e5',
      'inverse-surface': '#34302b',
      'inverse-on-surface': '#f8efe8',
      'background': '#fff8f4',
      'on-background': '#1f1b17',
      'error': '#ba1a1a',
      'on-error': '#ffffff',
      'error-container': '#ffdad6',
      'on-error-container': '#93000a',
    },
    palette: ['#625676', '#655d56', '#45615f', '#fff8f4', '#f5ece5'],
    mildToIntense: [
      '#f5f0eb',
      '#d8d0e0',
      '#b8aec8',
      '#8b7ea0',
      '#7b6f90',
      '#625676',
      '#4d4160',
    ],
    rationale:
      'Confusion\'s palette is built on near-neighbors -- colors that almost harmonize but never quite settle. Deep muted lavender (#625676), warm gray-brown (#655d56), and dark teal (#45615f) create a three-way tension where no single hue dominates. The design deepened all three accents from our suggestions, making the palette moodier and more sophisticated. The lowered text contrast (warm near-black #1f1b17 on warm off-white #fff8f4) creates cognitive friction that mirrors the experience.',
  },

  typography: {
    headlineFont: 'Outfit',
    headlineFallback: 'system-ui, sans-serif',
    bodyFont: 'DM Sans',
    bodyFallback: 'system-ui, sans-serif',
    scale: {
      display: {
        text: 'CONFUSION',
        size: '3rem',
        weight: 600,
        font: 'headline',
        transform: 'uppercase',
        tracking: '-0.02em',
      },
      headline: {
        text: 'Ambiguity',
        size: '2.25rem',
        weight: 600,
        font: 'headline',
      },
      title: {
        text: 'Near-Match',
        size: '1.25rem',
        weight: 500,
        font: 'headline',
      },
      body: {
        text: 'almost clear, almost certain',
        size: '1rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'UNCERTAIN',
        size: '0.75rem',
        weight: 500,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.06em',
      },
      caption: {
        text: 'or maybe not',
        size: '0.625rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '0.01em',
      body: '0em',
      label: '0.2em',
    },
    lineHeight: {
      headline: 1.2,
      body: 1.5,
    },
    mildToIntense:
      'Mild: Outfit at weight 400 with standard line-height -- almost normal, something subtly off. Moderate: weights vary within the same visual level, inconsistency becomes noticeable. Intense: mismatched weights, slight tracking variations -- typography actively undermines expectation of consistency.',
    rationale:
      'Outfit and DM Sans are both geometric sans-serifs that feel like they should be interchangeable but aren\'t. Outfit\'s slightly unusual width proportions and softened terminals create micro-dissonance when paired with DM Sans\'s more conventional geometry. This is the typographic equivalent of confusion -- not jarring wrongness but a persistent \'something doesn\'t match\' feeling.',
  },

  spacing: {
    scale: [
      { label: 'xs', value: '6px' },
      { label: 'sm', value: '12px' },
      { label: 'md', value: '16px' },
      { label: 'lg', value: '24px' },
      { label: 'xl', value: '32px' },
      { label: 'xxl', value: '48px' },
    ],
    density: 'variable',
    mildToIntense:
      'Mild: near-normal spacing with occasional odd gaps. Moderate: clearly inconsistent spacing, no discernible pattern. Intense: actively contradictory spacing -- headings crowded while body text floats.',
    rationale:
      'Confusion spacing deliberately breaks consistency. Variable density -- generous in some areas, cramped in others -- prevents settling into a comfortable scanning rhythm. The irregularity forces constant recalibration, the spatial equivalent of cognitive dissonance.',
  },

  motion: {
    duration: '350ms',
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)',
    character: 'wavering',
    bezierPoints: [0.25, 0.1, 0.25, 1.4],
    mildToIntense:
      'Mild: 400ms ease-out with barely perceptible overshoot. Moderate: 350ms with clear overshoot -- elements visibly wobble past target. Intense: 300ms with pronounced overshoot and slight rotation.',
    rationale:
      'Confusion motion is defined by OVERSHOOT and HESITATION. Elements move past their intended position and settle back, creating a visual double-take. The overshoot feels ACCIDENTAL -- the system isn\'t confident about where things should land. The 350ms duration is deliberately in-between: not fast enough to feel decisive, not slow enough to feel purposeful.',
  },

  depth: {
    approach: 'mixed',
    levels: [
      {
        label: 'Faint',
        description: 'Barely there -- you squint to confirm it',
        background: '#ffffff',
      },
      {
        label: 'Soft',
        description: 'Present but edges blur into the surface',
        background: '#f5ece5',
      },
      {
        label: 'Hazy',
        description: 'Diffuse with uncertain edges, is it a shadow or a tinted background?',
        background: '#f0e7df',
      },
    ],
    shadowIfNeeded:
      '0 32px 48px -4px rgba(31, 27, 23, 0.08)',
    ghostBorder: '1px solid rgba(203, 196, 205, 0.2)',
    rationale:
      'Confusion shadows are SOFT and UNCERTAIN -- 32-48px blur radius with negative spread, making edges bleed into surfaces. You can\'t tell exactly where the elevation change happens. The design used much larger blur radii than typical, creating shadows that feel like suggestions rather than declarations.',
  },

  shapes: {
    radii: [
      { label: 'none', value: '0px' },
      { label: 'utility', value: '8px' },
      { label: 'container', value: '12px' },
      { label: 'soft', value: '24px', recommended: true },
    ],
    cornerStyle: 'mixed',
    mildToIntense:
      'Mild: consistent 8px everywhere. Moderate: 8px on some, 12px on others -- subtle inconsistency. Intense: 8px, 12px, and 24px mixed freely -- the system arguing with itself.',
    rationale:
      'Confusion shapes reflect broken consistency. The design mixed 8px (utility), 12px (sections), and 24px (containers) within the same page. The intentional mismatch creates the visual equivalent of a typo -- small enough to miss consciously, enough to prevent comfortable certainty.',
  },

  layout: {
    alignment: 'left',
    density: 'variable',
    rationale:
      'Confusion layout is ALMOST consistent with occasional deviations. The design used varying left margins (ml-2, ml-4, ml-8) and right margins (mr-4, mr-6) on different sections, creating a layout that drifts. Elements float toward edges of their containers. Not wild asymmetry -- a grid that seems to have shifted slightly.',
  },

  iconography: {
    icons: [
      { name: 'help', label: 'help' },
      { name: 'question_mark', label: 'question' },
      { name: 'explore', label: 'explore' },
      { name: 'shuffle', label: 'shuffle' },
      { name: 'visibility_off', label: 'hidden' },
      { name: 'psychology', label: 'mind' },
    ],
    style:
      'Standard weight (400), outlined. Neither thin nor heavy -- deliberately unremarkable. The standard weight contributes to the overall feeling of nothing is wrong but nothing feels right.',
    weight: 400,
    fill: false,
    rationale:
      'Confusion icons represent states of uncertainty and searching: question marks, hidden visibility, shuffled order, psychological processing. They describe the PROCESS of not knowing rather than a clear emotional response.',
  },

  rules: {
    dos: [
      'Near-neighbor hues with low-moderate contrast',
      'Slightly mismatched font pairings (same category)',
      'Variable spacing between similar elements',
      'Motion with subtle overshoot (wavering)',
      'Warm off-white backgrounds with muddied contrast',
      'Mixed corner radii (8-12-24px range, inconsistent)',
      'Occasional misalignment in a mostly consistent grid',
      'Ghost borders at 15-20% opacity instead of solid lines',
    ],
    donts: [
      'High contrast black on white (too clear/decisive)',
      'Perfectly consistent spacing (that is Trust)',
      'Single unified color temperature (too harmonious)',
      'Fast decisive motion (that is Surprise or Anger)',
      'Dark backgrounds (that is Fear/Anger/Disgust)',
      'Sharp 0px corners everywhere (too intentional)',
      'Saturated vivid colors (too certain)',
      '100% opaque borders or dividers',
    ],
  },

  words: {
    words: [
      'bewilderment',
      'disorientation',
      'uncertainty',
      'perplexity',
      'ambiguity',
      'muddle',
      'puzzle',
      'haze',
    ],
    feel: 'uncertain, searching, almost-clear-but-not-quite -- like reading a map where the labels keep shifting',
  },
};

registerAdvisory(CONFUSION_ADVISORY);

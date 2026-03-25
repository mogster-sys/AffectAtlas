/**
 * Disgust advisory -- extracted from Stitch output.
 * Source: stitch-exports/disgust-advisory/stitch/disgust_advisory_screen/code.html
 * Values reflect what Stitch ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const DISGUST_ADVISORY: EmotionAdvisory = {
  emotion: 'disgust',
  label: 'Disgust',
  northStar: 'The Organic Ruin',
  philosophy: {
    brief:
      'Organic Brutalism -- deliberately visceral, damp, claustrophobic un-design celebrating the uncomfortable.',
    rationale:
      'Disgust in visual design comes from contamination, organic wrongness, and violated expectations. Sickly yellow-greens and murky brown-olives on warm dark backgrounds create the palette of rot, mold, and spoiled food. Tight asymmetric layouts with elements crowding each other mimic biological overgrowth. Slow, sluggish motion suggests organic decay -- things oozing rather than moving. The key insight is that disgust requires violated CLEANLINESS -- you need the expectation of order to make contamination disturbing. A design system that starts from order and introduces wrongness is more effective than one that is simply ugly.',
  },
  deepened: true,
  source: 'stitch:disgust_advisory_screen',

  emotionalContext:
    'Disgust and Fear both use dark palettes and produce discomfort, but the discomfort is fundamentally different. Fear is COLD -- violet-black backgrounds, clinical precision, walls closing in around you. Disgust is WARM-WRONG -- olive-black backgrounds, organic contamination, things growing where they should not. Fear threatens from the outside. Disgust repels from within. Fear\'s thin Epilogue typography whispers clinical dread. Disgust\'s Syne typography has a slightly irregular, organic quality -- the typography of a label on something spoiled.\n\nDisgust and Anger both use dark, intense palettes but in completely different registers. Anger is HOT -- crimson-on-black, compressed density, explosive force. Everything is maximum. Disgust is HUMID -- olive-green on dark brown, organic density, slowly spreading contamination. Anger demands confrontation. Disgust demands avoidance. Anger\'s 0px corners are blades. Disgust\'s 6px corners are soft from rot.\n\nDisgust and Sadness are near-opposites. Sadness is drained, pale, and quiet -- an overcast sky where color has faded. Disgust is saturated in a dirty way -- murky greens and browns where color has been corrupted, not removed. Sadness\'s generous spacing represents absence (\'everyone has left\'). Disgust\'s tight spacing represents contamination (\'too many things growing too close together\').\n\nAmong all eight emotions, Disgust is the only one where the design system should feel CONTAMINATED -- not broken (Fear), not aggressive (Anger), not absent (Sadness), not chaotic (Surprise), but genuinely unclean. Surfaces that feel slightly damp. Elements too close together. Colors that are almost right but somehow wrong -- greens that should be fresh but read as sickly, browns that should be warm but read as decayed. The visual equivalent of touching something and pulling your hand away.',

  colors: {
    tokens: {
      'primary': '#dfec6b',
      'on-primary': '#2f3300',
      'primary-container': '#c3cf52',
      'on-primary-container': '#505700',
      'primary-dim': '#c3cf52',
      'primary-fixed': '#dfeb6b',
      'primary-fixed-dim': '#c3cf52',
      'on-primary-fixed': '#1a1d00',
      'on-primary-fixed-variant': '#444b00',
      'secondary': '#d2c6a2',
      'on-secondary': '#373016',
      'secondary-container': '#51492d',
      'on-secondary-container': '#c4b894',
      'secondary-dim': '#d2c6a2',
      'secondary-fixed': '#efe2bc',
      'secondary-fixed-dim': '#d2c6a2',
      'on-secondary-fixed': '#211b04',
      'on-secondary-fixed-variant': '#4e462b',
      'tertiary': '#f4e1bc',
      'on-tertiary': '#3a2f16',
      'tertiary-container': '#d7c5a2',
      'on-tertiary-container': '#5e5136',
      'tertiary-dim': '#d7c4a2',
      'tertiary-fixed': '#f4e0bc',
      'tertiary-fixed-dim': '#d7c4a2',
      'on-tertiary-fixed': '#241a04',
      'on-tertiary-fixed-variant': '#52452b',
      'surface': '#141408',
      'surface-dim': '#141408',
      'surface-bright': '#3a3a2b',
      'surface-container-lowest': '#0f0f04',
      'surface-container-low': '#1c1c10',
      'surface-container': '#202013',
      'surface-container-high': '#2b2b1d',
      'surface-container-highest': '#363527',
      'surface-tint': '#c3cf52',
      'surface-variant': '#363527',
      'on-surface': '#e6e3ce',
      'on-surface-variant': '#c8c8b2',
      'outline': '#92927e',
      'outline-variant': '#474837',
      'inverse-primary': '#5b6300',
      'inverse-surface': '#e6e3ce',
      'inverse-on-surface': '#313123',
      'background': '#141408',
      'on-background': '#e6e3ce',
      'error': '#ffb4ab',
      'on-error': '#690005',
      'error-dim': '#93000a',
      'error-container': '#93000a',
      'on-error-container': '#ffdad6',
    },
    palette: ['#dfec6b', '#c3cf52', '#d2c6a2', '#141408', '#202013'],
    mildToIntense: [
      '#d2c6a2',
      '#c8c8b2',
      '#a09070',
      '#c3cf52',
      '#dfec6b',
      '#444b00',
      '#1a1d00',
    ],
    rationale:
      'Yellow-green is the most reliably \'disgusting\' hue in cross-cultural color-emotion research -- linked to vomit, mucus, mold, and illness. Stitch pushed the primary even brighter (#dfec6b) than requested, creating a more vivid toxic glow against the warm olive-black background (#141408). The warm undertone in every dark surface is critical: Fear\'s darkness is cold and alien, Anger\'s is hot and burning, but Disgust\'s darkness is the warm dampness of organic matter decomposing from within.',
  },

  typography: {
    headlineFont: 'Syne',
    headlineFallback: 'sans-serif',
    bodyFont: 'Work Sans',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'DISGUST',
        size: '3.5rem',
        weight: 800,
        font: 'headline',
        tracking: '-0.02em',
        transform: 'uppercase',
      },
      headline: {
        text: 'GROWTH',
        size: '2rem',
        weight: 700,
        font: 'headline',
        tracking: '-0.02em',
        transform: 'uppercase',
      },
      title: {
        text: 'Organic Decay',
        size: '1.25rem',
        weight: 600,
        font: 'headline',
      },
      body: {
        text: 'humid, crowded, uncomfortable',
        size: '1rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'CONTAMINATED',
        size: '0.75rem',
        weight: 500,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.15em',
      },
      caption: {
        text: 'something is wrong',
        size: '0.625rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '-0.02em',
      body: '0em',
      label: '0.15em',
    },
    lineHeight: {
      headline: 1.0,
      body: 1.4,
    },
    mildToIntense:
      'Mild: Syne at weight 500 with line-height 1.2 -- slightly uncomfortable, something is off. Moderate: weight 600 with line-height 1.0, uppercase titles -- labeling contaminated specimens. Intense: weight 800 with line-height 0.9, aggressive tracking -- typography compressed by biological pressure, organisms crowding into every available space.',
    rationale:
      'Syne is geometric but with subtle irregularities in its letterforms -- the kind of typeface that looks almost normal but feels slightly wrong on extended viewing. Its quirky proportions create the typographic equivalent of uncanny valley -- orderly enough to set up expectations, irregular enough to violate them. Work Sans as body text is deliberately impersonal -- the functional type of specimen labels and warning signs, not editorial warmth (Sadness) or authoritative precision (Trust). Stitch used the pairing as "biological voice" (Syne) versus "lab report" (Work Sans) -- the clinical detachment observing the organic mutation.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '12px' },
      { label: 'LG', value: '16px' },
      { label: 'XL', value: '24px' },
      { label: 'XXL', value: '32px' },
    ],
    density: 'tight',
    mildToIntense:
      'Mild: 16px between sections -- slightly too close, like sitting next to a stranger. Moderate: 8-12px, overcrowded -- elements pushing into each other\'s space like organisms competing. Intense: 4px, suffocating -- visual overgrowth, no breathing room, contamination everywhere.',
    rationale:
      'Disgust spacing creates discomfort through proximity -- too many things too close together, like biological overgrowth. But unlike Anger\'s uniform compression (every element under equal pressure), Disgust spacing is IRREGULAR -- some elements nearly touching while others have small gaps, like mold that grows in patches. Stitch used 4px section gaps (space-y-4) throughout, tighter than any other emotion\'s advisory. The overcrowded layout mirrors the research finding that \'clusters of small repeated elements\' and \'visual overgrowth\' are core disgust triggers.',
  },

  motion: {
    duration: '500ms',
    easing: 'cubic-bezier(0.4, 0, 0.6, 1)',
    character: 'oozing',
    bezierPoints: [0.4, 0, 0.6, 1],
    mildToIntense:
      'Mild: 600ms ease-out with subtle scale -- sluggish, slightly delayed response, like touching something damp. Moderate: 500ms ease-in-out with squash -- sticky, resistant, the interaction has viscosity. Intense: 400ms with pronounced squash and color spread -- oozing, the contamination responding to your touch and spreading.',
    rationale:
      'Disgust motion is defined by VISCOSITY -- the sluggish, sticky quality of organic material. Where Anger snaps (150ms), Fear tenses (200ms), and Surprise pops (250ms with overshoot), Disgust oozes (500ms). The ease-in-out curve means elements resist movement at both ends -- they stick before they move and stick when they arrive. Stitch implemented the squash deformation (scaleX 1.04, scaleY 0.96) on press, suggesting softness and biological compliance -- things that yield when pressed, like touching something rotten.',
  },

  depth: {
    approach: 'mixed',
    levels: [
      {
        label: 'Damp',
        description: 'Heavy olive-tinted shadow',
        background: '#202013',
      },
      {
        label: 'Stained',
        description: 'Inset green-tinted contamination',
        background: '#2b2b1d',
      },
      {
        label: 'Infected',
        description: 'Sickly green outer glow',
        background: '#363527',
      },
    ],
    shadowIfNeeded: '0 10px 30px rgba(20, 20, 8, 0.8)',
    ghostBorder: '1px solid rgba(71, 72, 55, 0.1)',
    rationale:
      'Stitch used three distinct shadow approaches for Disgust: heavy olive-tinted drop shadows (Damp: 0 10px 30px rgba(20,20,8,0.8)), inset green-tinted shadows (Stained: inset 0 2px 10px rgba(195,207,82,0.1)), and outer green glows (Infected: 0 0 20px rgba(195,207,82,0.15)). This mixed approach creates the feeling of contamination spreading -- shadows are not architectural (Trust) or crushing (Anger) but SPREADING like stains. The DESIGN.md calls this "Ambient Dampness" and describes shadows as "damp stains on the layer beneath."',
  },

  shapes: {
    radii: [
      { label: 'Rotten', value: '6px', recommended: true },
      { label: 'Rotten', value: '6px' },
      { label: 'Rotten', value: '6px' },
      { label: 'Rotten', value: '6px' },
    ],
    cornerStyle: 'smooth',
    mildToIntense:
      'All intensities: 6px. Stitch called it "The Rotten Corner" -- neither sharp nor soft. A structural failure of geometry. Unlike Anger\'s absolute 0px (blades) or Joy\'s generous 24px (friendly), Disgust has exactly ONE radius that never changes. The 6px corner is organic -- like something that was once sharper but has been softened by humidity and decay.',
    rationale:
      'Stitch enforced 6px everywhere with zero variation -- borderRadius DEFAULT, lg, and xl all set to 6px. The DESIGN.md explicitly forbids both 0px corners ("too sharp, too manufactured") and 20px corners ("too friendly"). The 6px "Rotten Corner" occupies the uncomfortable middle ground: soft enough to feel organic but not soft enough to feel inviting. It is the corner radius of something found in nature -- a mushroom cap, a swollen edge, a surface softened by moisture.',
  },

  layout: {
    alignment: 'asymmetric',
    density: 'dense',
    rationale:
      'Stitch implemented the "Anti-Grid Layout" described in its DESIGN.md -- cards offset by small amounts, elements rotated 2-3 degrees, overlapping containers. The wireframe section shows three cards at different rotations (-2, 3, -1 degrees) with overlapping positions. Unlike Anger\'s confrontational asymmetry (force and pressure) or Sadness\'s drifting asymmetry (exhaustion), Disgust\'s asymmetry is ORGANIC -- things growing in irregular patterns, competing for space, encroaching on each other\'s territory. The DESIGN.md calls this "the Petri dish layout."',
  },

  iconography: {
    icons: [
      { name: 'bug_report', label: 'Infestation' },
      { name: 'science', label: 'Clinical' },
      { name: 'water_damage', label: 'Dampness' },
      { name: 'warning', label: 'Irritant' },
      { name: 'pest_control', label: 'Taint' },
      { name: 'skull', label: 'Expiry' },
    ],
    style:
      'Slightly thin stroke (300 weight), outlined only. Not as heavy as Anger\'s 600-weight icons (too forceful) and not as thin as Sadness\'s 200-weight icons (too fragile). Disgust icons are eroding -- they hold their shape but feel like they might not for long.',
    weight: 300,
    fill: false,
    rationale:
      'Disgust icons reference contamination (water_damage), biological threat (science, skull, bug_report, pest_control), and warning (corrupted alerts). Stitch relabeled them with evocative names: "Infestation," "Clinical," "Dampness," "Irritant," "Taint," "Expiry" -- each suggesting a stage or aspect of contamination rather than a neutral description. The 300-weight outlined style creates icons that feel like they are losing definition, eroding at the edges.',
  },

  rules: {
    dos: [
      'Overlap containers -- elements growing over each other',
      'Tint every neutral with olive or yellow -- pure grays are forbidden',
      'Use viscous 500ms ease-in-out easing on all interactions',
      'Density over void -- pack elements together like biological overgrowth',
      'Use 6px "Rotten Corner" radius everywhere -- no exceptions',
      'Warm olive-black backgrounds (#141408) with sickly yellow-green accents',
      'Irregular spacing (mix 4-32px gaps) for organic rhythm',
      'Tonal boundaries instead of borders -- "No-Line Rule"',
    ],
    donts: [
      'Symmetrical grids (too organized, too clean)',
      'Cool white space (too comfortable -- that is Sadness\'s territory)',
      'Pure grays (every neutral must carry olive/yellow tint)',
      'Snap animations (too energetic and clean -- that is Anger)',
      'Sharp 0px corners (too manufactured -- that is Anger/Fear)',
      'Round 20px+ corners (too friendly -- that is Joy)',
      'Clean 1px borders (use tonal shifts instead)',
      'Vibrant "happy" colors (even primary must feel sickly, not fresh)',
    ],
  },

  words: {
    words: [
      'Revulsion',
      'Loathing',
      'Nausea',
      'Taint',
      'Ferment',
      'Aversion',
      'Repugnance',
      'Abhorrence',
    ],
    feel: 'visceral, recoiling, uncomfortable -- like touching something spoiled',
  },
};

// Self-register on import
registerAdvisory(DISGUST_ADVISORY);

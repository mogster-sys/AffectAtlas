/**
 * Appalled advisory -- extracted from The design output.
 * Source: stitch-exports/appalled-advisory/code.html
 * Values reflect what The design ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const APPALLED_ADVISORY: EmotionAdvisory = {
  emotion: 'appalled',
  label: 'Appalled',
  northStar: 'The Contaminated Surface',
  philosophy: {
    brief:
      'Visual hygiene is abandoned. Boundaries bleed into one another through murky tonal shifts. Spacing is erratic, mimicking the growth of an infection.',
    rationale:
      'Appalled is high-arousal disgust combined with shock and moral violation. This design advisory embodies visceral wrongness: every color is contamination, every surface feels dirty, every combination clashes. The advisory IS the demonstration -- you should feel the recoil. The "No-Line Rule" means boundaries are not drawn but emerge from tonal proximity, like the spreading edge of a stain.',
  },
  deepened: true,
  source: 'stitch:affectatlas_appalled_advisory',

  emotionalContext:
    'Appalled is what happens when Disgust meets Shock. Regular Disgust is controlled revulsion -- the calm recognition that something is unclean. Appalled is Disgust at maximum arousal: the visceral, physical recoil from encountering something that violates what should be possible. Where Disgust turns away slowly, Appalled flinches.\n\nThe design difference is in the DISRUPTION. Disgust uses a controlled palette -- murky but consistent. Appalled\'s palette deliberately CLASHES: bile yellow-green next to raw magenta, a combination that feels wrong at a color-theory level. Disgust\'s spacing is consistently uncomfortable. Appalled\'s spacing is INCONSISTENTLY uncomfortable -- tight here, gapped there, never settling into a pattern you can predict.\n\nAppalled also diverges from Anger. Both are high-arousal and share warm dark surfaces, but Anger\'s response is force (compress, slam, shout). Appalled\'s response is recoil (pull back, flinch, contaminate). Anger at 150ms hits with power. Appalled at 200ms with a negative easing value pulls AWAY -- elements flinch from what they are about to touch.\n\nAmong all emotions, Appalled is the one most concerned with CONTAMINATION. Its colors are bile and dirt. Its surfaces feel dirty. Its shadows leak like stains. Its radii are inconsistent like a broken system. Everything communicates that something has gone wrong at a physical, material level.',

  colors: {
    tokens: {
      'primary': '#c5ce59',
      'on-primary': '#2f3300',
      'primary-container': '#8f9727',
      'on-primary-container': '#292c00',
      'primary-fixed': '#e1ea72',
      'primary-fixed-dim': '#c5ce59',
      'on-primary-fixed': '#1b1d00',
      'on-primary-fixed-variant': '#454a00',
      'secondary': '#e1c0ac',
      'on-secondary': '#402c1e',
      'secondary-container': '#594233',
      'on-secondary-container': '#ceaf9b',
      'secondary-fixed': '#fedcc7',
      'secondary-fixed-dim': '#e1c0ac',
      'on-secondary-fixed': '#29180b',
      'on-secondary-fixed-variant': '#594233',
      'tertiary': '#ffb1c4',
      'on-tertiary': '#65002e',
      'tertiary-container': '#e6658e',
      'on-tertiary-container': '#590028',
      'tertiary-fixed': '#ffd9e1',
      'tertiary-fixed-dim': '#ffb1c4',
      'on-tertiary-fixed': '#3f001a',
      'on-tertiary-fixed-variant': '#861a44',
      'surface': '#151311',
      'surface-dim': '#151311',
      'surface-bright': '#3c3936',
      'surface-container-lowest': '#100e0c',
      'surface-container-low': '#1d1b19',
      'surface-container': '#211f1d',
      'surface-container-high': '#2c2927',
      'surface-container-highest': '#373432',
      'surface-tint': '#c5ce59',
      'surface-variant': '#373432',
      'on-surface': '#e8e1dd',
      'on-surface-variant': '#c8c8b2',
      'outline': '#92927e',
      'outline-variant': '#474837',
      'inverse-surface': '#e8e1dd',
      'inverse-primary': '#5d6300',
      'inverse-on-surface': '#33302d',
      'background': '#151311',
      'on-background': '#e8e1dd',
      'error': '#ffb4ab',
      'on-error': '#690005',
      'error-container': '#93000a',
      'on-error-container': '#ffdad6',
    },
    palette: ['#151311', '#c5ce59', '#e1c0ac', '#ffb1c4', '#e8e1dd'],
    mildToIntense: [
      '#e1c0ac',
      '#c8c8b2',
      '#a89878',
      '#c5ce59',
      '#8f9727',
      '#454a00',
      '#1b1d00',
    ],
    rationale:
      'The design pushed the bile yellow-green brighter than requested (#c5ce59 vs #889020), creating a more vivid toxic glow. The clashing magenta tertiary (#ffb1c4) sits in deliberate disharmony next to the bile primary -- the color-theory violation that triggers the appalled response. Secondary (#e1c0ac) is dusty peach-brown, like something once clean now oxidized. Surface (#151311) is warm dark brown-black, dirtier than Fear\'s cold charcoal or Anger\'s hot crimson-black. Together the palette reads as "something has contaminated this surface" -- bile, dirt, wrong-pink, and warm darkness.',
  },

  typography: {
    headlineFont: 'Chakra Petch',
    headlineFallback: 'sans-serif',
    bodyFont: 'Overpass',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'WRONG',
        size: '3rem',
        weight: 700,
        font: 'headline',
        tracking: '-0.04em',
        transform: 'uppercase',
      },
      headline: {
        text: 'CONTAMINATED',
        size: '1.875rem',
        weight: 500,
        font: 'headline',
        tracking: '-0.02em',
        transform: 'uppercase',
      },
      title: {
        text: 'Visceral Recoil',
        size: '1.25rem',
        weight: 300,
        font: 'body',
      },
      body: {
        text: 'The machine is failing. The record is clinical. The reaction is total.',
        size: '0.75rem',
        weight: 600,
        font: 'body',
      },
      label: {
        text: 'BIOHAZARD',
        size: '0.625rem',
        weight: 500,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.2em',
      },
      caption: {
        text: 'Material compromised',
        size: '0.5rem',
        weight: 400,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '-0.04em',
      body: '0em',
      label: '0.2em',
    },
    lineHeight: {
      headline: 1.0,
      body: 1.5,
    },
    mildToIntense:
      'Mild: weight 300-400 with line-height 1.15 -- angular but less aggressive. Moderate: weight 500-600 with line-height 1.05 -- active cognitive friction. Intense: weight 700 with line-height 1.0, uppercase, tighter tracking -- maximum abrasiveness, text that feels mechanically wrong.',
    rationale:
      'The design rendered Chakra Petch\'s angular geometry at display scale as "WRONG" -- a single word that demonstrates the font\'s capacity for cognitive friction. The angular terminals and geometric hardness create the typographic uncanny valley: text you can read but that does not feel right. Unlike Anger\'s condensed Oswald (which compresses with force), Appalled\'s Chakra Petch is angular and off-kilter (wrong rather than powerful). Overpass adds utilitarian detachment: highway gothic describing violations in flat, institutional language. The design used very tight tracking (-0.04em) on display text, pushing letters uncomfortably close.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '7px' },
      { label: 'MD', value: '12px' },
      { label: 'LG', value: '20px' },
      { label: 'XL', value: '30px' },
    ],
    density: 'variable',
    mildToIntense:
      'Mild: md 14px, more consistent gaps -- still uncomfortable but predictable. Moderate: md 12px with intentionally uneven spacing. Intense: md 8px in crowded areas with sudden 20px gaps elsewhere -- maximum disruption, the spatial signature of contamination spreading unevenly.',
    rationale:
      'Appalled spacing is inconsistent spacing. The design implemented intentionally uneven gaps -- some bars at 4px, some with extra margins, the ruler itself is disrupted. The alternation between too-tight (invasive) and too-loose (recoiling) is the spatial signature of visceral disgust. This is not Frustration\'s uniform tightness or Awe\'s uniform generosity. Appalled is a broken rhythm -- spacing that cannot settle because everything it touches feels contaminated.',
  },

  motion: {
    duration: '200ms',
    easing: 'cubic-bezier(0.6, -0.1, 0.7, 0.2)',
    character: 'recoiling',
    bezierPoints: [0.6, -0.1, 0.7, 0.2],
    mildToIntense:
      'Mild: 260ms, scale 0.96, rotation -0.5deg -- controlled pull-back, a measured withdrawal. Moderate: 200ms, scale 0.93, rotation -1.5deg -- visible flinch, the body reacting before the mind. Intense: 140ms, scale 0.88, rotation -3deg with bile-green flash -- violent recoil, the design system physically rejecting contact.',
    rationale:
      'The design implemented the recoiling easing with the -0.1 y1 control point, creating physical pull-back: elements briefly move BACKWARD before progressing. The flinch-transition class applies scale(0.93) rotate(-1.5deg) on active -- a twisting withdrawal. Unlike Anger\'s explosive slam (force outward), Appalled pulls AWAY. Unlike Fear\'s slow 400ms creep, Appalled is fast and reactive at 200ms -- immediate physical revulsion. The rotation adds wrongness, a slight twist that makes the recoil feel organic rather than mechanical.',
  },

  depth: {
    approach: 'glow',
    levels: [
      {
        label: 'Residue',
        description: 'Faint bile-tinted shadow leaking beneath',
        background: '#1d1b19',
      },
      {
        label: 'Stain',
        description: 'Magenta-tinted contamination spreading sideways',
        background: '#211f1d',
      },
      {
        label: 'Contamination',
        description: 'Dual bile-green and brown stain, spreading from contact point',
        background: '#2c2927',
      },
    ],
    shadowIfNeeded: '0 20px 50px rgba(136, 144, 32, 0.15)',
    ghostBorder: '1px solid rgba(71, 72, 55, 0.1)',
    rationale:
      'The design used contaminated shadows throughout -- bile-green tinted rgba(136,144,32) at low opacity creating the feeling of something leaking beneath elements. The header shadow (0 20px 50px rgba(136,144,32,0.15)) sets the tone: a wide, warm, sickly glow. The "Stain" card uses magenta-tinted shadow (rgba(192,72,112,0.15)), introducing the second contamination color. The "Contamination" card uses an even wider spread (0 30px 60px) at higher opacity. Unlike Anger\'s crushing downward shadows, Appalled\'s shadows seep and spread like actual stains.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px' },
      { label: 'SM', value: '3px' },
      { label: 'MD', value: '5px', recommended: true },
      { label: 'LG', value: '8px' },
    ],
    cornerStyle: 'mixed',
    mildToIntense:
      'Mild: 6-8px consistently -- predictable but still awkward. Moderate: 5px with slight variation card-to-card (3px, 5px, 6px adjacent). Intense: deliberately mismatched radii (0px, 3px, 5px, 8px on adjacent elements) -- maximum visual dissonance, the system breaking down.',
    rationale:
      'The design enforced inconsistent radii across the page: 5px on most cards, 3px on some containers, rounded-none on shape demos, and rounded-full (0.75rem) defined in config. This inconsistency IS the design -- clean consistent shapes feel hygienic, while inconsistent shapes feel contaminated. The 5px "recommended" radius sits in an uncomfortable middle ground: not sharp enough to be deliberate (like Anger\'s 0px), not rounded enough to be friendly (like Joy\'s 24px), just off -- the radius of a system that has been degraded by exposure.',
  },

  layout: {
    alignment: 'left',
    density: 'variable',
    rationale:
      'The design created a disrupted left-aligned layout with intentional inconsistencies. The shadow cards (section 6) use different offsets -- "Stain" has ml-4, "Contamination" has -mr-2 -- creating an asymmetric cascade. The spacing section uses a border-left anchor with uneven gap progression. The layout wireframe shows blocks at different widths and offsets, never aligning to a clean grid. This is not Anger\'s forceful asymmetry (deliberate power) -- it is the broken alignment of something that was supposed to be correct but has been contaminated. The grid has degraded.',
  },

  iconography: {
    icons: [
      { name: 'pest_control', label: 'Infestation' },
      { name: 'warning', label: 'Contamination' },
      { name: 'delete_forever', label: 'Removal' },
      { name: 'dangerous', label: 'Hazard' },
      { name: 'report', label: 'Violation' },
      { name: 'thumb_down', label: 'Rejection' },
    ],
    style:
      'Medium weight (400) with -25 grade -- slightly thinner than they should be, as if the icons themselves are degrading. Functional in the way biohazard labels are functional: present because legally required, not because anyone wants to look at them.',
    weight: 400,
    fill: false,
    rationale:
      'The design used contamination-themed Material Symbols: pest_control (infestation), warning (danger), delete_forever (irreversible removal), dangerous (hazard), report (violation), thumb_down (rejection). Rendered in tertiary magenta, primary bile-green, and on-surface white across a 3-column grid. The -25 grade makes icons look slightly eroded -- present but degrading. Unlike Anger\'s heavy 600-weight icons (which SHOUT), Appalled\'s are standard-weight but degraded (worn down by exposure).',
  },

  rules: {
    dos: [
      'Use sickly bile yellow-green and murky brown as core palette',
      'Keep surfaces dirty-tinted with brown undertones',
      'Apply angular, uncomfortable typography (Chakra Petch)',
      'Use crowded spacing with sudden gaps -- inconsistency is key',
      'Create contaminated shadows (warm bile-tinted, spreading)',
      'Add small inconsistencies in radii and alignment',
      'Use clashing accent (bile green + raw magenta together)',
      'Let elements touch or overlap slightly',
    ],
    donts: [
      'Clean, polished surfaces (too hygienic)',
      'Harmonious color combinations (too pleasant)',
      'Rounded, friendly shapes (too comfortable)',
      'Consistent, predictable spacing (too orderly)',
      'Cool, clinical aesthetics (that is Fear\'s territory)',
      'Thin, delicate typography (that is Sadness)',
      'Symmetrical, balanced compositions (too calm)',
      'Bright success-green (entirely different emotion)',
    ],
  },

  words: {
    words: [
      'Contaminated',
      'Visceral',
      'Revolting',
      'Toxic',
      'Violated',
      'Rotten',
      'Wrong',
      'Recoil',
    ],
    feel: 'Opening a pristine box to find something decaying inside. Visceral wrongness -- not anger (too clean, too powerful) and not fear (too dark, too atmospheric) but the specific physical revulsion of encountering something that should not be there.',
  },
};

// Self-register on import
registerAdvisory(APPALLED_ADVISORY);

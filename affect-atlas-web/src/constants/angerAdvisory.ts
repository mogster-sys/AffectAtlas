/**
 * Anger advisory -- extracted from Stitch output.
 * Source: stitch-exports/anger-advisory/stitch/affectatlas_anger_advisory/code.html
 * Values reflect what Stitch ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const ANGER_ADVISORY: EmotionAdvisory = {
  emotion: 'anger',
  label: 'Anger',
  northStar: 'The Kinetic Furnace',
  philosophy: {
    brief:
      'Engine at combustion -- clenched jaw, smoldering coals, absolute precision of high-pressure containment.',
    rationale:
      'Anger in visual design comes from pressure, heat, and controlled intensity. Saturated warm reds and deep crimsons on near-black signal danger and force. Sharp angular forms feel aggressive and hostile. Crushing density communicates that every element is under compression -- nothing floats, nothing drifts, nothing breathes easily. But the most effective anger is not chaos -- it is the terrifying precision of contained rage. A blast furnace is not random. It is engineered to hold maximum pressure.',
  },
  deepened: true,
  source: 'stitch:affectatlas_anger_advisory',

  emotionalContext:
    'Anger and Fear share sharp corners and dark backgrounds, but the energy is opposite. Fear holds its breath -- thin weights, cold violets, quiet dread. Anger combusts -- heavy weights, hot crimsons, maximum force. Fear\'s thin Epilogue at weight 200 whispers vulnerability. Anger\'s Oswald at weight 700 shouts authority. Fear constricts inward (walls closing in). Anger pressurizes outward (boiler about to blow).\n\nAnger also inverts Joy. Both are high-energy emotions, but Joy\'s energy is generous and expansive -- warm ambers, 24px rounded corners, bouncy springs, generous whitespace. Anger\'s energy is compressed and hostile -- hot crimsons, 0px razor edges, snapping transitions, suffocating density. Joy gives space as a gift. Anger takes it away.\n\nAmong all eight emotions, Anger is the only one that is genuinely LOUD. Trust whispers authority. Fear whispers dread. Sadness whispers loss. Even Joy, at its most exuberant, is generous rather than forceful. Anger is the clenched fist, the slammed door, the all-caps demand. Its restraint is not aesthetic choice -- it is the containment that barely holds the explosion. The pressurized crucible.',

  colors: {
    tokens: {
      'primary': '#ffb4ad',
      'on-primary': '#611211',
      'primary-container': '#ff8a80',
      'on-primary-container': '#76221e',
      'primary-dim': '#e07068',
      'primary-fixed': '#ffdad6',
      'primary-fixed-dim': '#ffb4ac',
      'on-primary-fixed': '#410003',
      'on-primary-fixed-variant': '#7f2924',
      'secondary': '#ffb3ad',
      'on-secondary': '#680009',
      'secondary-container': '#930012',
      'on-secondary-container': '#ff9992',
      'secondary-dim': '#c9a39c',
      'secondary-fixed': '#ffdad7',
      'secondary-fixed-dim': '#ffb3ad',
      'on-secondary-fixed': '#410004',
      'on-secondary-fixed-variant': '#930012',
      'tertiary': '#d9c2bf',
      'on-tertiary': '#3b2d2b',
      'tertiary-container': '#bca7a4',
      'on-tertiary-container': '#4c3c3a',
      'tertiary-dim': '#bea676',
      'tertiary-fixed': '#f5ddda',
      'tertiary-fixed-dim': '#d8c1be',
      'on-tertiary-fixed': '#251817',
      'on-tertiary-fixed-variant': '#534341',
      'surface': '#1d100e',
      'surface-dim': '#1d100e',
      'surface-bright': '#453533',
      'surface-container-lowest': '#170b09',
      'surface-container-low': '#251816',
      'surface-container': '#2a1c1a',
      'surface-container-high': '#352624',
      'surface-container-highest': '#41312f',
      'surface-tint': '#ffb4ac',
      'surface-variant': '#41312f',
      'on-surface': '#f6ddd9',
      'on-surface-variant': '#dcc0bd',
      'outline': '#a48b88',
      'outline-variant': '#564240',
      'inverse-primary': '#9e4039',
      'inverse-surface': '#f6ddd9',
      'inverse-on-surface': '#3c2d2a',
      'background': '#1d100e',
      'on-background': '#f6ddd9',
      'error': '#ffb4ab',
      'on-error': '#690005',
      'error-dim': '#93000a',
      'error-container': '#93000a',
      'on-error-container': '#ffdad6',
    },
    palette: ['#c00010', '#930012', '#ff8a80', '#1d100e', '#2a1c1a'],
    mildToIntense: [
      '#41312f',
      '#564240',
      '#a48b88',
      '#930012',
      '#c00010',
      '#ff8a80',
      '#690005',
    ],
    rationale:
      'Saturated red is the universal signal of danger, urgency, and aggression. Paired with near-black backgrounds that carry a warm undertone (#1d100e -- not neutral black, not cool violet -- specifically the darkness of charred wood), the palette communicates contained heat. The warm undertone in the darks is critical: Fear\'s darkness is cold and alien, but Anger\'s darkness is the heat of something burning from within.',
  },

  typography: {
    headlineFont: 'Oswald',
    headlineFallback: 'sans-serif',
    bodyFont: 'Inter',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'ANGER',
        size: '3.5rem',
        weight: 700,
        font: 'headline',
        tracking: '-0.03em',
        transform: 'uppercase',
      },
      headline: {
        text: 'COMBUSTION',
        size: '2rem',
        weight: 700,
        font: 'headline',
        tracking: '-0.02em',
        transform: 'uppercase',
      },
      title: {
        text: 'Containment',
        size: '1.25rem',
        weight: 700,
        font: 'body',
      },
      body: {
        text: 'Pressurized, dense, unyielding',
        size: '1rem',
        weight: 500,
        font: 'body',
      },
      label: {
        text: 'CRITICAL',
        size: '0.75rem',
        weight: 800,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.15em',
      },
      caption: {
        text: 'Threat level: maximum',
        size: '0.625rem',
        weight: 500,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '-0.03em',
      body: '0em',
      label: '0.15em',
    },
    lineHeight: {
      headline: 0.9,
      body: 1.35,
    },
    mildToIntense:
      'Mild: Oswald at weight 500 with line-height 1.1 -- tense but controlled. Moderate: weight 600, line-height 0.95, uppercase only. Intense: weight 700, line-height 0.85, letter-spacing -0.05em -- characters forced together under maximum compression.',
    rationale:
      'Anger typography is heavy, condensed, and forceful. Oswald\'s tall condensed proportions create the vertical pressure of a hydraulic press -- text squeezed from the sides. Heavy weights (600-700) communicate mass and force. Where Fear uses thin weights for vulnerability, Anger uses heavy weights for domination. Uppercase is mandatory for headlines and labels -- mixed case is too conversational, too friendly. Anger does not ask. It demands.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '16px' },
      { label: 'XL', value: '32px' },
    ],
    density: 'tight',
    mildToIntense:
      'Mild: 16px between sections, simmering but structured. Moderate: 8px, pressurized -- elements pushing against each other. Intense: 4px, maximum compression -- elements nearly fused together by the heat.',
    rationale:
      'Crowded elements, overlapping shapes, compressed spacing -- the visual equivalent of a pressure cooker. In anger, there is no comfortable distance. Elements invade each other\'s space. The density is not an aesthetic choice -- it IS the anger. Unlike Fear, which alternates between suffocating clusters and isolating voids, Anger is relentlessly dense everywhere. There are no voids. There is no escape.',
  },

  motion: {
    duration: '150ms',
    easing: 'cubic-bezier(0.2, 0, 0, 1)',
    character: 'explosive',
    bezierPoints: [0.2, 0, 0, 1],
    mildToIntense:
      'Mild: 250ms ease-out, abrupt but recoverable. Moderate: 150ms with sharp ease -- things snap with authority. Intense: 80ms linear, instantaneous and violent. Optional 30ms shake on destructive actions.',
    rationale:
      'Anger motion is never graceful or flowing. It is sudden, forceful, and final. Elements snap into place like a steel trap. The fast-attack easing means things arrive with impact -- not the gradual pull-into-darkness of Fear, but the immediate SLAM of force. Spring physics are forbidden (too playful). Shake animations at intense levels convey the trembling of barely-contained rage.',
  },

  depth: {
    approach: 'shadows',
    levels: [
      {
        label: 'Ember',
        description: 'Level 0: Base resistance',
        background: '#1d100e',
      },
      {
        label: 'Forge',
        description: 'Level 1: Increased displacement',
        background: '#352624',
      },
      {
        label: 'Crucible',
        description: 'Level 2: Maximum compression',
        background: '#ff8a80',
      },
    ],
    shadowIfNeeded: '0 12px 0 0 rgba(0, 0, 0, 0.7)',
    ghostBorder: '1px solid rgba(86, 66, 64, 0.2)',
    rationale:
      'Anger shadows communicate weight and force, not depth or mystery. Heavy, close-range shadows with high opacity and ZERO blur create the sense that elements are being PRESSED into the surface. The crushing shadow (0 12px 0 0) is a hard offset -- no diffusion, pure displacement. Everything has mass. Nothing floats.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px', recommended: true },
      { label: 'None', value: '0px' },
      { label: 'None', value: '0px' },
      { label: 'Absolute max', value: '0px' },
    ],
    cornerStyle: 'sharp',
    mildToIntense:
      'Mild: 0px. Moderate: 0px. Intense: 0px. Anger has ONE radius: zero. No exceptions.',
    rationale:
      'Anger rejects rounded corners more absolutely than any other emotion. Fear allows up to 8px. Trust recommends 4px. Even Sadness permits some softness. Anger permits NOTHING. Zero radius is not a design choice -- it is the only option. Angular forms communicate hostility, danger, and aggression. Every corner is a blade.',
  },

  layout: {
    alignment: 'asymmetric',
    density: 'dense',
    rationale:
      'Symmetry implies calm and balance -- the opposite of anger. Asymmetric layouts with extreme scale contrast (massive headline, tiny body) create visual hierarchy through force, not finesse. The layout does not guide -- it shoves. Elements are compressed into position by pressure. The absence of whitespace is not a design oversight -- it is the design.',
  },

  iconography: {
    icons: [
      { name: 'warning', label: 'Danger' },
      { name: 'bolt', label: 'Force' },
      { name: 'local_fire_department', label: 'Combustion' },
      { name: 'gavel', label: 'Authority' },
      { name: 'priority_high', label: 'Urgency' },
      { name: 'dangerous', label: 'Threat' },
    ],
    style:
      'Heavy stroke (600 weight), angular, forceful. Filled OR outlined -- anger has the mass and confidence for both. Unlike Fear\'s fragile thin icons (200 weight), anger icons are heavy and imposing. They do not observe -- they warn.',
    weight: 600,
    fill: false,
    rationale:
      'Anger icons reference hazard systems, warning signage, industrial danger, and authority. Heavy strokes communicate force and urgency -- the opposite of Fear\'s delicate thin icons. Fire, lightning, and exclamation marks are the universal visual language of "back off." Icons should feel like they carry physical weight.',
  },

  rules: {
    dos: [
      'Zero border-radius everywhere -- no exceptions',
      'Heavy font weights (600-800) for headlines',
      'Uppercase for all labels and headlines',
      'Saturated reds on warm near-black backgrounds',
      'Crushing density -- no generous whitespace',
      'Heavy shadows with high opacity and zero blur',
      'Aggressive asymmetry -- nothing centered',
      'Snapping 150ms transitions -- no gentle easing',
    ],
    donts: [
      'Rounded corners of any size',
      'Thin font weights (too fragile -- that is Fear)',
      'Cool colors (blues, violets, greens)',
      'Bouncy or spring animations (too playful)',
      'Generous whitespace (too comfortable)',
      'Gentle easing curves (too soft)',
      'Centered or balanced layouts (too calm)',
      'Mixed-case body text in headlines (too friendly)',
    ],
  },

  words: {
    words: [
      'Fury',
      'Rage',
      'Wrath',
      'Outrage',
      'Hostility',
      'Indignation',
      'Resentment',
      'Aggression',
    ],
    feel: 'pressurized, intense, explosive -- like a clenched jaw',
  },
};

// Self-register on import
registerAdvisory(ANGER_ADVISORY);

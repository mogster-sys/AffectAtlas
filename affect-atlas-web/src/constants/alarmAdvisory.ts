/**
 * Alarm advisory -- extracted from The design output.
 * Source: stitch-exports/alarm-advisory/code.html
 * Values reflect what The design ACTUALLY produced, not what was requested.
 *
 * NOTE: The design used the prompt's full MD3 token set directly this time --
 * no shifts. Font-family keys are "exo-2" / "fira-sans" (hyphenated)
 * instead of "headline" / "body". Red alarm glow shadows, pulse-red
 * animation, and 150ms pulsing motion are faithfully captured.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const ALARM_ADVISORY: EmotionAdvisory = {
  emotion: 'alarm',
  label: 'Alarm',
  northStar: 'The Red Signal',
  philosophy: {
    brief:
      'An emergency control panel at 3am -- alarm red, warning amber, and the immediate visceral demand for action RIGHT NOW.',
    rationale:
      'Alarm in visual design comes from urgency, signal density, and the immediate demand for attention. Near-black control-room surfaces (#0c0a0e) create the darkness against which red signals burn brightest. Geometric broadcast-grade type (Exo 2) at heavy weights feels like instrument panel readouts engineered for maximum clarity under pressure. Dense spacing packs maximum signal into minimum space. Red-tinted alarm glow shadows make every element feel like a signal source emitting urgency. The most effective alarm is not chaos -- it is controlled emergency. The precision of an emergency control panel, not the randomness of panic.',
  },
  deepened: true,
  source: 'stitch:alarm_advisory',

  emotionalContext:
    'Alarm and Anger both use red on dark backgrounds with sharp corners, but the energy is fundamentally different. Anger combusts -- crushing density, maximum compression, elements PRESSED into position by force. Anger\'s red is the heat of burning at 150ms explosive slams. Alarm signals -- dense efficiency, pulsing urgency, elements that FLASH into existence demanding attention. Alarm\'s red is the red of emergency lighting, not combustion. Anger slams. Alarm pulses.\n\nAlarm also shares urgency with Fear, but where Fear withdraws (thin type, isolating voids, cold clinical surfaces), Alarm advances (bold type, dense packing, hot signal surfaces). Fear says "something is coming." Alarm says "it is HERE -- act NOW." Fear\'s 400ms slow creep is the opposite of Alarm\'s 150ms snap.\n\nAmong all emotions, Alarm is the one most concerned with SIGNAL. Its typography is broadcast-grade (Exo 2 at 800 weight, wide tracking), its spacing is emergency-dense, its shadows glow red like alarm lights, its motion pulses with a single urgent heartbeat. Every element is not just visible -- it is a demand. The design should feel like an emergency broadcast breaking into regular programming.',

  colors: {
    tokens: {
      'primary': '#d03020',
      'on-primary': '#ffffff',
      'primary-container': '#501410',
      'on-primary-container': '#f08070',
      'secondary': '#d89020',
      'on-secondary': '#0c0a0e',
      'secondary-container': '#4a3010',
      'on-secondary-container': '#f0c060',
      'tertiary': '#e8e0d8',
      'on-tertiary': '#0c0a0e',
      'tertiary-container': '#484038',
      'on-tertiary-container': '#f0ece8',
      'surface': '#0c0a0e',
      'surface-dim': '#080608',
      'surface-bright': '#141014',
      'surface-container-lowest': '#040406',
      'surface-container-low': '#100e12',
      'surface-container': '#161218',
      'surface-container-high': '#1c181e',
      'surface-container-highest': '#221e24',
      'surface-tint': '#d03020',
      'surface-variant': '#302830',
      'on-surface': '#e8e0d8',
      'on-surface-variant': '#a09898',
      'outline': '#585050',
      'outline-variant': '#302830',
      'inverse-surface': '#e8e0d8',
      'inverse-primary': '#a02018',
      'inverse-on-surface': '#0c0a0e',
      'background': '#0c0a0e',
      'on-background': '#e8e0d8',
      'error': '#e04040',
      'on-error': '#400010',
      'error-container': '#401010',
      'on-error-container': '#c88080',
    },
    palette: ['#0c0a0e', '#d03020', '#d89020', '#e8e0d8', '#501410'],
    mildToIntense: [
      '#b85048',
      '#c0a048',
      '#d0c8c0',
      '#d03020',
      '#d89020',
      '#f02010',
      '#f0a010',
    ],
    rationale:
      'The design rendered the palette as five sharp columns: Primary (#d03020), Primary Container (#501410), Secondary (#d89020), Surface Highest (#221e24), and Surface Lowest (#040406) with abbreviated labels (PRI, CTR, SEC, SRF, LST). The zebra-striped token list shows PRIMARY_SIGNAL #D03020, SURFACE_BASE #0C0A0E, and WARNING_AMBER #D89020. The mild-to-intense gradient strip runs from dark zinc through primary red to white. Alarm red (#d03020) is the universal emergency signal -- the specific saturated red of sirens and stop signs. Warning amber (#d89020) is the pre-alarm signal: hazard tape, caution lights. Surface (#0c0a0e) is control-room darkness -- warm enough to feel heated (alarm is hot, not cold) and dark enough for maximum contrast.',
  },

  typography: {
    headlineFont: 'Exo 2',
    headlineFallback: 'sans-serif',
    bodyFont: 'Fira Sans',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'ALARM',
        size: '2.25rem',
        weight: 800,
        font: 'headline',
        tracking: '0.04em',
      },
      headline: {
        text: 'RED SIGNAL',
        size: '1.625rem',
        weight: 700,
        font: 'headline',
      },
      title: {
        text: 'CRITICAL ALERT',
        size: '1.25rem',
        weight: 600,
        font: 'headline',
      },
      body: {
        text: 'Every element is a signal. Every signal demands action.',
        size: '1rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'PRIORITY',
        size: '0.75rem',
        weight: 600,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.1em',
      },
      caption: {
        text: 'Signal active -- respond now',
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
      'Mild: Exo 2 at weight 500-600 with line-height 1.1 -- alert but not shouting, like an amber warning state. Moderate: weight 700 with line-height 1.0, uppercase throughout. Intense: weight 800 with line-height 0.95, letter-spacing 0.06em -- maximum broadcast volume. Every word is a signal.',
    rationale:
      'The design rendered Exo 2 at text-5xl font-extrabold uppercase italic for the specimen "URGENCY" and Fira Sans at text-2xl font-light for "Tactical data deployment." The weight ramp shows 6 bars of increasing height in primary red. Section headers use font-exo-2 text-xl font-extrabold uppercase tracking-widest throughout. Exo 2\'s geometric precision makes headlines feel like instrument panel readouts -- engineered for maximum clarity under pressure. At 800 weight with wide tracking, text feels like it is being broadcast.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '3px' },
      { label: 'SM', value: '6px' },
      { label: 'MD', value: '12px' },
      { label: 'LG', value: '20px' },
      { label: 'XL', value: '30px' },
    ],
    density: 'tight',
    mildToIntense:
      'Mild: md 14px, lg 24px -- still dense but with fractionally more scanning room. Alert readiness. Moderate: md 12px, lg 20px -- standard alarm density. Intense: md 10px, lg 16px -- maximum information density, zero wasted space. Every pixel carries signal.',
    rationale:
      'The design used gap-16 (64px) between major sections but tight internal spacing: gap-1 for color grids, gap-px for rules. The spacing ruler shows XS through XL as proportionally sized red squares. The quote reads: "Dense information layouts maximize signal over noise. Use compressed padding for primary telemetry data." Alarm spacing is emergency spacing -- elements packed close because alarm communicates everything at once. Unlike Frustration\'s cramped obstruction, Alarm\'s density is the efficient compression of emergency systems that prioritize signal over comfort.',
  },

  motion: {
    duration: '150ms',
    easing: 'cubic-bezier(0.7, 0, 0.9, 0.3)',
    character: 'pulsing',
    bezierPoints: [0.7, 0, 0.9, 0.3],
    mildToIntense:
      'Mild: 200ms with less aggressive pulse (scale 1.03). Alert but not jarring. Moderate: 150ms with full pulse (scale 1.05) and red glow. Intense: 100ms with visible red flash on every state change -- full alarm mode. Every interaction is a siren.',
    rationale:
      'The design created a .pulse-red animation with 1.5s infinite cubic-bezier(0.7, 0, 0.9, 0.3) that expands a red box-shadow from 0 to 10px then fades. The ACTIVATE button combines this pulse animation with active:scale-95 and transition-all duration-150. The SVG bezier visualization shows hard acceleration then sharp stop. The alarm-ease timing function is defined in Tailwind config: cubic-bezier(0.7, 0, 0.9, 0.3). Unlike Anger\'s explosive slam (energy released outward) and Fear\'s slow 400ms creep, Alarm\'s 150ms is a pulse -- a throb of urgency demanding attention.',
  },

  depth: {
    approach: 'glow',
    levels: [
      {
        label: 'Alert',
        description: 'Faint red glow, element is a low-priority signal source',
        background: '#1c181e',
      },
      {
        label: 'Active',
        description: 'Medium red glow, element actively demands attention',
        background: '#1c181e',
      },
      {
        label: 'Critical',
        description: 'Strong red glow with pulse, element is a critical alarm beacon',
        background: '#1c181e',
      },
    ],
    shadowIfNeeded: '0 0 16px rgba(208, 48, 32, 0.15)',
    ghostBorder: '1px solid rgba(208, 48, 32, 0.2)',
    rationale:
      'The design defined three custom alarm shadows in Tailwind config: alarm-sm (0 0 8px rgba(208,48,32,0.1)), alarm-md (0 0 16px rgba(208,48,32,0.15)), alarm-lg (0 0 28px rgba(208,48,32,0.2)). The three depth cards show Alert Level Low/Active/Critical with increasing red glow intensity and border opacity (10%/20%/40%). Critical level includes animate-pulse. Alarm shadows are not traditional drop shadows -- they are red-tinted radial glows that make elements feel like alarm lights. Each card is a signal source emitting urgency. Unlike Anger\'s crushing downward shadows, Alarm\'s glow radiates outward.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px' },
      { label: 'SM', value: '2px' },
      { label: 'MD', value: '4px', recommended: true },
      { label: 'LG', value: '8px' },
    ],
    cornerStyle: 'sharp',
    mildToIntense:
      'Mild: 6-8px (still hard, fractionally less aggressive). Moderate: 4px (standard alarm sharpness -- tactical). Intense: 0-2px (maximum emergency aesthetic, pure industrial).',
    rationale:
      'The design rendered four shapes in a 2x2 grid: 0px (Industrial), 2px (Machine), 4px (Tactical), and 8px (marked "PROHIBITED" in error color). The Tailwind config defines alarm radius as 4px. Section titled "GEOMETRY." Sharp corners signal seriousness -- rounded corners feel safe, and alarm is not safe. 4px is the radius of emergency signage: functional urgency, not weaponized aggression.',
  },

  layout: {
    alignment: 'center',
    density: 'dense',
    rationale:
      'The design created a centered, dense layout titled "CENTRIC STRUCTURE." The wireframe shows a full-width header bar, a central pulsing element (animate-ping in a circle), a 3-column grid with primary red center, and baseline rules below. A radial gradient overlay from primary radiates from center. The centered axis says "look HERE" -- authoritative. Unlike Frustration\'s left-aligned utility, Alarm\'s centering is a single focal point demanding attention. The dense stacking means the eye moves rapidly down through sections scanning for the most critical signal.',
  },

  iconography: {
    icons: [
      { name: 'warning', label: 'Danger' },
      { name: 'notifications_active', label: 'Active' },
      { name: 'crisis_alert', label: 'Crisis' },
      { name: 'error', label: 'Error' },
      { name: 'campaign', label: 'Broadcast' },
      { name: 'flash_on', label: 'Flash' },
    ],
    style:
      'Heavy weight (600), bold, impossible to miss. Icons reference danger, warnings, alerts, and urgency -- visual shouts that push into the user\'s field of attention. Rendered in primary alarm red (#d03020) against dark surfaces. Each icon is a miniature siren.',
    weight: 600,
    fill: false,
    rationale:
      'The design rendered Material Symbols at text-3xl in text-primary with font-variation-settings confirming weight 600. Icons are in a 3x2 grid with mono-spaced uppercase labels: WARNING, NOTIF_ACT, CRISIS, ERROR, CAMPAIGN, FLASH. All icons are warning/alert/emergency signals. Heavy weight at 600 makes them feel like they are forcing their way into awareness. Unlike Fear\'s fragile thin icons (200 weight) which barely dare to appear, Alarm\'s icons SHOUT.',
  },

  rules: {
    dos: [
      'Use alarm red as the dominant accent color',
      'Keep typography bold, geometric, and uppercase (Exo 2 700-800)',
      'Apply tight, dense spacing throughout',
      'Create red-tinted alarm glow shadows',
      'Use sharp, angular corners (2-4px)',
      'Center layouts for authoritative focal hierarchy',
      'Keep motion fast and pulsing (150ms)',
      'Use warning amber as secondary urgency signal',
    ],
    donts: [
      'Muted, desaturated, or gentle colors (too calm)',
      'Rounded, soft, or friendly shapes (too safe)',
      'Slow, gentle, or easing motion (too relaxed)',
      'Generous, breathing spacing (too comfortable)',
      'Thin, delicate icon weights (too fragile)',
      'Decorative or ornamental elements (too casual)',
      'Subtle, low-contrast surface differences',
      'Cool or cold colors (alarm is hot, not cold)',
    ],
  },

  words: {
    words: [
      'Urgent',
      'Critical',
      'Immediate',
      'Danger',
      'Alert',
      'Pulse',
      'Signal',
      'Emergency',
    ],
    feel: 'The siren just went off. You have seconds, not minutes. Immediate, unignorable urgency -- not background anxiety but the sharp, physical demand for action RIGHT NOW. The design system is an emergency broadcast breaking into regular programming.',
  },
};

// Self-register on import
registerAdvisory(ALARM_ADVISORY);

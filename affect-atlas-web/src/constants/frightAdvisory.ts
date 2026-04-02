/**
 * Fright advisory -- extracted from The design output.
 * Source: stitch-exports/fright-advisory/code.html
 * Values reflect what The design ACTUALLY produced, not what was requested.
 *
 * NOTE: The design rendered a minimal Tailwind config (only 5 color tokens)
 * rather than the full MD3 set. Missing MD3 tokens are taken from the
 * prompt's requested palette since The design didn't override them.
 * Shadows are SOLID crimson offsets (0px blur) -- very different from
 * other advisories. Icons were inline SVGs, not Material Symbols.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const FRIGHT_ADVISORY: EmotionAdvisory = {
  emotion: 'fright',
  label: 'Fright',
  northStar: 'The Sudden Dark',
  philosophy: {
    brief:
      'Fright is not Fear. Fear lingers. Fright is the FASTEST emotion -- a physiological jolt that resets the nervous system before logic can intervene.',
    rationale:
      'Fright in visual design comes from compression, darkness, and the physical jolt of being startled. Cold near-black backgrounds create the atmosphere of the moment the lights go out. Condensed type (Saira Condensed at weight 800) feels squeezed -- text trapped in too-small a space. Claustrophobic spacing leaves no room to escape. Harsh directional flashlight shadows are beams cutting through void. The most effective fright is not sustained dread -- it is the sharp, frozen moment of immediate threat. A held breath. A jolt.',
  },
  deepened: true,
  source: 'stitch:fright_advisory',

  emotionalContext:
    'Fright and Fear share dark palettes and threat awareness, but the TIMING is different. Fear is sustained dread -- Epilogue\'s thin serifs whisper, cold violets creep, 400ms transitions build atmosphere over time. Fright is INSTANT -- Saira Condensed\'s extrabold weight screams, alarm crimson flashes, 120ms transitions jolt before you can react. Fear is the horror movie. Fright is the jump scare.\n\nFright also shares high arousal with Anger, but the body response is opposite. Anger fights (explosive outward force, 0px corners, crushing density). Fright freezes (suffocating inward compression, 3px sharp corners, claustrophobic tight spacing). Anger\'s Oswald at weight 700 is aggressive. Fright\'s Saira Condensed at weight 800 is trapped -- text squeezed by invisible walls.\n\nAmong all emotions, Fright is the FASTEST. Its 120ms transitions are the shortest in the entire system (Anger is 150ms, Surprise is 180ms). Things happen before you can process them. The hard-stop easing means elements slam into position without deceleration -- there is no gentle landing, no smooth settle, just sudden THERE. Combined with the condensed type and claustrophobic spacing, the entire page feels like a held breath in a dark room.',

  colors: {
    tokens: {
      'primary': '#a82830',
      'on-primary': '#f0d0d0',
      'primary-container': '#401418',
      'on-primary-container': '#d06068',
      'secondary': '#384858',
      'on-secondary': '#c8d0d8',
      'secondary-container': '#1a2430',
      'on-secondary-container': '#8090a0',
      'tertiary': '#c09020',
      'on-tertiary': '#0a0c10',
      'tertiary-container': '#483810',
      'on-tertiary-container': '#e0c060',
      'surface': '#0a0c10',
      'surface-dim': '#060810',
      'surface-bright': '#101418',
      'surface-container-lowest': '#040608',
      'surface-container-low': '#0c1018',
      'surface-container': '#101420',
      'surface-container-high': '#161a24',
      'surface-container-highest': '#1c2028',
      'surface-tint': '#a82830',
      'surface-variant': '#1c2028',
      'on-surface': '#c8c8d0',
      'on-surface-variant': '#787880',
      'outline': '#404048',
      'outline-variant': '#242830',
      'inverse-surface': '#d0d0d8',
      'inverse-primary': '#681820',
      'inverse-on-surface': '#0a0c10',
      'background': '#0a0c10',
      'on-background': '#c8c8d0',
      'error': '#c03030',
      'on-error': '#f0d0d0',
      'error-container': '#401010',
      'on-error-container': '#d08080',
    },
    palette: ['#0a0c10', '#a82830', '#384858', '#c09020', '#c8c8d0'],
    mildToIntense: [
      '#c05058',
      '#506878',
      '#d0a840',
      '#a82830',
      '#384858',
      '#801820',
      '#202830',
    ],
    rationale:
      'The design rendered the palette as five equal-width rectangles: Void Black (#0a0c10), Alarm Crimson (#a82830), Cold Steel (#384858), Hazard Yellow (#c09020), and Stark Light (#c8c8d0). Only these five colors appeared in the Tailwind config -- The design stripped the full MD3 set down to essentials, as if fright reduces the palette to what you can see in a flashlight beam. The intensity gradient shows a linear ramp from surface through primary to pure white. Alarm crimson is the universal threat signal at its most visceral -- not warm red (too comfortable) and not orange-red (too energetic). The flat cold black (#0a0c10) is specifically the darkness of a room with the lights out.',
  },

  typography: {
    headlineFont: 'Saira Condensed',
    headlineFallback: 'sans-serif',
    bodyFont: 'Libre Franklin',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'SHOCK',
        size: '3rem',
        weight: 800,
        font: 'headline',
        tracking: '-0.05em',
      },
      headline: {
        text: 'ALARM',
        size: '1.875rem',
        weight: 800,
        font: 'headline',
      },
      title: {
        text: 'JOLT',
        size: '1.25rem',
        weight: 800,
        font: 'headline',
      },
      body: {
        text: 'High legibility in low light conditions.',
        size: '0.75rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'SAIRA CONDENSED 800',
        size: '0.875rem',
        weight: 800,
        font: 'headline',
        transform: 'uppercase',
        tracking: '0.1em',
      },
      caption: {
        text: 'Threat detected',
        size: '0.625rem',
        weight: 400,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '-0.05em',
      body: '0em',
      label: '0.1em',
    },
    lineHeight: {
      headline: 1.0,
      body: 1.45,
    },
    mildToIntense:
      'Mild: weights 400-500, line-height 1.15 -- alert but not suffocating. Type is compressed but readable. Moderate: weights 600-700, line-height 1.05 -- condensed and urgent, uppercase mandatory. Intense: weight 800, line-height 0.95, full uppercase -- maximum compression. Text being crushed by invisible walls.',
    rationale:
      'The design rendered Saira Condensed at weight 800 throughout: "SHOCK" at text-5xl (3rem), "ALARM" at text-3xl, "JOLT" at text-xl -- all uppercase, all tracking-tighter. The font-family key was "header" (not "headline") reflecting the emergency-signage quality. Only weights 700 and 800 were loaded -- The design stripped the weight ramp down to heavy and heavier. Libre Franklin at weight 400 appears only in the body specimen block: "High legibility in low light conditions." The condensed form at extrabold looks like text being crushed by pressure -- narrow letterforms trapped in too-small a space.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '2px' },
      { label: 'SM', value: '4px' },
      { label: 'MD', value: '8px' },
      { label: 'LG', value: '12px' },
      { label: 'XL', value: '24px' },
    ],
    density: 'tight',
    mildToIntense:
      'Mild: md 12px, lg 22px -- still tight, but you can breathe. Alert, not suffocating. Moderate: md 8px, lg 12px -- claustrophobic standard. Tight padding, thin margins. Intense: md 6px, lg 10px -- elements almost on top of each other. Suffocating. No room.',
    rationale:
      'The design produced an even MORE compressed spacing scale than requested: XS 2px, SM 4px, MD 8px, LG 12px, XL 24px (requested was 3/6/10/18/26). The .section-spacing class applies margin-bottom 24px and padding 14px. The text reads: "Claustrophobic density is preferred. No breathing room. The UI should feel like it is pressing against the glass." This is the most compressed spacing of any advisory -- tighter than Anger (4/8/14/24/40), tighter than Jealousy (4/8/14/22/34). Fright collapses space because when the walls close in, space disappears first.',
  },

  motion: {
    duration: '120ms',
    easing: 'cubic-bezier(0.8, 0, 1, 0.3)',
    character: 'startling',
    bezierPoints: [0.8, 0, 1, 0.3],
    mildToIntense:
      'Mild: 180ms, slightly less abrupt -- still startling, with a fraction more warning. Moderate: 120ms, hard stop -- things happen before you process them. Intense: 80ms with a flash of primary crimson on state change -- pure jump scare. The animation is over before you see it start.',
    rationale:
      'The design created a .jolt-active class: active state scales to 0.95 with instant white flash (background #fff, color #000) and transition:none -- the press is INSTANTANEOUS with zero animation. The release uses the 120ms jolt timing. The Tailwind config has transitionDuration "jolt-ms": "120ms" and transitionTimingFunction "jolt": "cubic-bezier(0.8, 0, 1, 0.3)". The SVG bezier visualization shows hard acceleration with a dead stop -- no deceleration, no ease-out. 120ms is the FASTEST duration in the entire system. The "TEST JOLT" button resets text to "SYSTEM RESET..." for 120ms then snaps back. Unlike Anger\'s explosive slam (which hits with power), Fright\'s jolt is about SPEED -- the threat arrives before you can prepare.',
  },

  depth: {
    approach: 'shadows',
    levels: [
      {
        label: 'Flash',
        description: 'Hard 2px crimson offset, zero blur -- a sharp slit of light',
        background: '#101420',
      },
      {
        label: 'Beam',
        description: 'Hard 4px crimson offset, zero blur -- a flashlight from one direction',
        background: '#101420',
      },
      {
        label: 'Flood',
        description: 'Hard 6px crimson offset with bleed -- alarm light flooding from the side',
        background: '#101420',
      },
    ],
    shadowIfNeeded: '2px 2px 0px #a82830',
    ghostBorder: '1px solid rgba(56, 72, 88, 0.3)',
    rationale:
      'The design rendered SOLID crimson offset shadows with ZERO blur: Flash (2px 2px 0px #a82830), Beam (4px 4px 0px #a82830), Flood (6px 6px 0px #a82830 with "Crimson Bleed" label). This diverges from all other advisories which use blurred shadows. The .flashlight-shadow class combines: 3px 3px 2px 0 rgba(168,40,48,0.4), 4px 4px 0 0 rgba(0,0,0,1) -- a dual shadow with near-solid crimson plus absolute black. The zero-blur creates extremely harsh directional lighting: one sharp beam cutting through darkness, hard edges casting hard shadows. Unlike Fear\'s ethereal vignettes or Anger\'s crushing downward weight, Fright\'s shadows come from a single sharp point -- a flashlight in a dark room.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px' },
      { label: 'SM', value: '3px', recommended: true },
      { label: 'MD', value: '6px' },
    ],
    cornerStyle: 'sharp',
    mildToIntense:
      'Mild: 5-6px (fractionally less hostile, still hard). Moderate: 3px (the minimum to avoid looking unfinished while maintaining maximum hardness). Intense: 0px (pure sharp corners -- maximum danger).',
    rationale:
      'The design defined a single custom radius "fright": 3px in the Tailwind config. The shapes section shows three options: 0px, 3px (STD, highlighted with primary coloring and italic bold label), and 6px. The note reads: "Sharpness conveys danger. Avoid rounds." Only three radii vs the usual four -- The design stripped even the shape options to a minimum. Compare to Fear\'s clinical 6px (precise but not hostile) and Anger\'s absolute 0px (weaponized). Fright\'s 3px sits between: sharp enough to feel dangerous, present enough to feel like a warning sign or emergency panel.',
  },

  layout: {
    alignment: 'left',
    density: 'dense',
    rationale:
      'The design created a left-aligned, dense, edge-heavy layout. The wireframe section shows a 2/3 + 1/3 column split with the right side subdivided into three tight stacked blocks. Elements are pressed toward edges: "VOID HEADER" at the top, "DENSE STACKING" filling the main area, "EDGE-HEAVY FOOTER" at the bottom. The header is fixed and surface-colored with a crimson bottom border. Content stacking uses .section-spacing (margin-bottom 24px, padding 14px) -- deliberately tight. Unlike Anger\'s aggressive asymmetry (which fills space with force), Fright\'s edge-heavy layout AVOIDS the center -- because the center is where the threat is.',
  },

  iconography: {
    icons: [
      { name: 'warning', label: 'Warning' },
      { name: 'flash_on', label: 'Sudden' },
      { name: 'visibility_off', label: 'Blind' },
      { name: 'emergency', label: 'Crisis' },
      { name: 'lock', label: 'Trapped' },
      { name: 'dark_mode', label: 'Dark' },
    ],
    style:
      'Heavy weight (600), bold, aggressive. Warning signals, not decorations. They push into the viewer\'s space like emergency signage. Rendered in hazard yellow (#c09020) for maximum alarm visibility against void backgrounds.',
    weight: 600,
    fill: true,
    rationale:
      'Corrected The design output renders Material Symbols Outlined at text-3xl in tertiary hazard yellow (#c09020): warning (danger triangle), flash_on (sudden bolt), visibility_off (cannot see threat), emergency (crisis cross), lock (trapped), dark_mode (darkness). Each icon sits in a surface card with secondary border, labeled in 8px uppercase. The heavy weight and filled treatment make them feel like emergency signage -- grabbing attention with the urgency of a fire alarm. Unlike Loneliness\'s ghostly 200-weight line icons, Fright\'s icons are SOLID alarm symbols.',
  },

  rules: {
    dos: [
      'Tight columns with claustrophobic density',
      'Harsh contrast between void-black and alarm crimson',
      'Sudden binary state changes (safe/unsafe, on/off)',
      'Sharp edges (3px max radius)',
      'Cap all animations at 120ms',
      'Monochromatic density with minimal color variation',
      'Visual tunnel effects (narrow content, dark periphery)',
      'Hazard yellow accents sparingly for peak alarm',
      'Use condensed compressed uppercase typography (Saira 700-800)',
    ],
    donts: [
      'Padding greater than 16px',
      'Pastel colors or warm inviting backgrounds',
      'Soft blurred shadows (Joy, Contentment)',
      'Slow fades or gentle motion (Loneliness, Depression)',
      'Gradients above 10% opacity',
      'Rounded corners above 4px',
      'Ambiguous or decorative iconography',
      'Deep navigational hierarchies',
    ],
  },

  words: {
    words: [
      'Frozen',
      'Sudden',
      'Alarm',
      'Jolt',
      'Suffocating',
      'Dark',
      'Paralyzed',
      'Vigilant',
    ],
    feel: 'The lights just went out. You heard something. You cannot see it. The design system creates a sense of immediate, frozen alertness -- not sustained dread (that is Fear) but the sharp, physical jolt of being suddenly unsafe. Everything is FAST and COMPRESSED.',
  },
};

// Self-register on import
registerAdvisory(FRIGHT_ADVISORY);

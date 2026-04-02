/**
 * Aggressiveness advisory -- extracted from The design output.
 * Source: stitch-exports/aggressiveness-advisory/code.html
 * Values reflect what The design ACTUALLY produced, not what was requested.
 *
 * NOTE: The design matched primary #c82020 exactly (rare). Created a
 * .chamfer-tr clip-path class for diagonal 45-degree corner cuts.
 * Hard offset shadows with ZERO blur (4px 4px 0px 0px) are even
 * more aggressive than the prompt's blurred shadows. The design
 * substituted 3 of 6 icons. The advisory uses the prompt's
 * researched palette and icon set.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const AGGRESSIVENESS_ADVISORY: EmotionAdvisory = {
  emotion: 'aggressiveness',
  label: 'Aggressiveness',
  northStar: 'The Forward Strike',
  philosophy: {
    brief:
      'The fist is already in motion -- strike red, hazard amber, and the relentless forward momentum of something that has decided to dominate.',
    rationale:
      'Aggressiveness in visual design comes from forward-driving force, density, and the controlled violence of proactive impact. Near-black combat surfaces (#0a0a10) create the tactical darkness where only signals matter. Tall condensed display type (Teko) at heavy weights feels like stenciled military markings -- vertical blades spray-painted on armor. Dense compressed layouts pack maximum force into minimum space. Hard directional red-tinted shadows with zero blur create impact rather than elevation. Diagonal chamfered corners make every container feel like armor plating. The most effective aggressiveness is not chaos -- it is calculated kinetic intent. A fist already in motion, not a fist raised in anger.',
  },
  deepened: true,
  source: 'stitch:aggressiveness_advisory',

  emotionalContext:
    'Aggressiveness and Anger both use red on dark backgrounds with sharp corners, but the directionality is fundamentally different. Anger is reactive -- it combusts in place, crushing density, 150ms explosive slams, elements PRESSED by force that has nowhere to go. Anger\'s red is the heat of burning. Aggressiveness is proactive -- it advances forward, dense but organized, 160ms striking impacts, elements that LUNGE toward you. Aggressiveness\'s red is the red of a targeting laser, not combustion.\n\nAggressiveness also contrasts with Alarm, which shares urgency and red accents. Alarm broadcasts defensively -- centered pulsing layouts, radial glow shadows, 150ms pulsing motion that demands attention. Aggressiveness advances offensively -- left-aligned dense layouts, hard directional shadows that point forward, 160ms striking motion that HITS. Alarm says "danger is here -- react." Aggressiveness says "I AM the danger -- yield."\n\nAmong all emotions, Aggressiveness is the most FORWARD-DIRECTED. Its shadows are hard offset with zero blur -- pointing rather than radiating. Its chamfered corners create weapon-edge silhouettes. Its typography is the tallest and most condensed (Teko 700 at 0.9 line-height). Its spacing is the most compressed. Everything advances in formation -- the design equivalent of a military column that has already begun its advance.',

  colors: {
    tokens: {
      'primary': '#c82020',
      'on-primary': '#ffffff',
      'primary-container': '#481010',
      'on-primary-container': '#f08080',
      'secondary': '#d08820',
      'on-secondary': '#0a0a10',
      'secondary-container': '#483010',
      'on-secondary-container': '#f0c060',
      'tertiary': '#c0c8d0',
      'on-tertiary': '#0a0a10',
      'tertiary-container': '#303840',
      'on-tertiary-container': '#e0e8f0',
      'surface': '#0a0a10',
      'surface-dim': '#060608',
      'surface-bright': '#14141c',
      'surface-container-lowest': '#040406',
      'surface-container-low': '#0e0e14',
      'surface-container': '#141418',
      'surface-container-high': '#1a1a20',
      'surface-container-highest': '#222228',
      'surface-tint': '#c82020',
      'surface-variant': '#1a1a20',
      'on-surface': '#e0e0e8',
      'on-surface-variant': '#909098',
      'outline': '#505058',
      'outline-variant': '#282830',
      'inverse-surface': '#e0e0e8',
      'inverse-primary': '#901818',
      'inverse-on-surface': '#0a0a10',
      'background': '#0a0a10',
      'on-background': '#e0e0e8',
      'error': '#e04040',
      'on-error': '#400010',
      'error-container': '#401010',
      'on-error-container': '#c08080',
    },
    palette: ['#0a0a10', '#c82020', '#d08820', '#c0c8d0', '#481010'],
    mildToIntense: [
      '#a84848',
      '#b09848',
      '#a0a8b0',
      '#c82020',
      '#d08820',
      '#e01010',
      '#f09010',
    ],
    rationale:
      'The design rendered a red ramp swatch strip: #0A0A10, #410002, #93000A, #C82020, #FFB4AB with a mild-to-intense gradient. Primary #c82020 matched the prompt exactly (rare). The advisory uses the prompt\'s full 5-swatch palette. Strike red (#c82020) is the color of impact -- cold, purposeful, offensive. Hazard amber (#d08820) is tracer rounds and the flash before impact. Steel (#c0c8d0) is armor plating -- cold, metallic, manufactured. Surface (#0a0a10) is combat dark -- carbon fiber, gun metal, purpose-built for maximum contrast.',
  },

  typography: {
    headlineFont: 'Teko',
    headlineFallback: 'sans-serif',
    bodyFont: 'Titillium Web',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'AGGRESSIVENESS',
        size: '2.625rem',
        weight: 700,
        font: 'headline',
        tracking: '0.06em',
        transform: 'uppercase',
      },
      headline: {
        text: 'THE FORWARD STRIKE',
        size: '1.875rem',
        weight: 600,
        font: 'headline',
        transform: 'uppercase',
      },
      title: {
        text: 'TACTICAL BRIEFING',
        size: '1.375rem',
        weight: 500,
        font: 'headline',
        transform: 'uppercase',
      },
      body: {
        text: 'Every pixel must advance. Passivity is a failure state.',
        size: '0.9375rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'PRIORITY TARGET',
        size: '0.75rem',
        weight: 700,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.06em',
      },
      caption: {
        text: 'Designed for maximum kinetic impact',
        size: '0.6875rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '0.06em',
      body: '0.01em',
      label: '0.06em',
    },
    lineHeight: {
      headline: 0.9,
      body: 1.45,
    },
    mildToIntense:
      'Mild: Teko at medium weights (400-500), slightly more line height (0.95). Assertive but not shouting, force is present but controlled. Moderate: Teko 600-700, line-height 0.9, full uppercase with wide tracking -- stenciled military markings. Intense: Teko 700 at maximum tracking (0.1em), line-height 0.85, full uppercase throughout. Every word is a command.',
    rationale:
      'The design rendered Teko at text-[38px] font-bold for "COMMAND 700", text-[32px] font-medium for "TACTICAL 500", and text-[24px] font-light for "OBSERVE 300" -- all uppercase with tracking-[0.1em]. Titillium Web at text-[15px] for body, weight ramp 300/400/700. Section headings use Teko font-semibold text-[20px] uppercase tracking-widest throughout with tactical numbering ("01 //", "02 //"). Teko\'s extreme condensing creates headlines standing at attention -- tall, narrow, disciplined, ready to strike.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '3px' },
      { label: 'SM', value: '6px' },
      { label: 'MD', value: '10px' },
      { label: 'LG', value: '18px' },
      { label: 'XL', value: '28px' },
    ],
    density: 'tight',
    mildToIntense:
      'Mild: md 12px, lg 22px -- force is present but formation is looser. Moderate: md 10px, lg 18px -- advancing spacing, compressed, packed. Intense: md 8px, lg 14px -- maximum compression, elements packed shoulder-to-shoulder, advancing as one.',
    rationale:
      'The design used gap-2 (8px) between sections and p-[14px] inside cards with mb-[10px] between them -- extremely tight stacking. Spacing bars labeled SP-1 through SP-6 in rem units. Density label "COMPRESSED" in Teko bold italic. Aggressiveness spacing is advancing spacing -- elements crowd together not because they are chaotic (that is confusion) but because they are organized and advancing in formation. The tight spacing of military columns and packed ammunition.',
  },

  motion: {
    duration: '160ms',
    easing: 'cubic-bezier(0.7, 0, 0.85, 0.4)',
    character: 'striking',
    bezierPoints: [0.7, 0, 0.85, 0.4],
    mildToIntense:
      'Mild: 220ms, less pronounced lunge. Force is present but controlled. Moderate: 160ms with striking easing -- hard acceleration, impact stop. Elements slam into position. Intense: 100ms with larger forward displacement (translateX 5px) and visible overshoot. Full assault mode.',
    rationale:
      'The design created a .striking-ease class with cubic-bezier(0.2, 0, 0, 1) and an SVG bezier visualization labeled "Impact Stop: 160ms." The "TEST IMPACT" button uses active:scale-[1.04] with transition-all duration-160 striking-ease and a hard red shadow. The advisory uses the prompt\'s researched easing (0.7, 0, 0.85, 0.4). The 160ms is fast -- things arrive before you can prepare. The hard acceleration and abrupt stop create an impact quality: elements hit their mark.',
  },

  depth: {
    approach: 'shadows',
    levels: [
      {
        label: 'Light Strike',
        description: 'Hard directional shadow with red tint -- element punches slightly forward',
        background: '#1a1a20',
      },
      {
        label: 'Medium Strike',
        description: 'Stronger directional offset -- element clearly advancing from surface',
        background: '#1a1a20',
      },
      {
        label: 'Heavy Strike',
        description: 'Maximum hard offset -- element slams out of the surface with full force',
        background: '#1a1a20',
      },
    ],
    shadowIfNeeded: '0 4px 12px rgba(200, 32, 32, 0.12)',
    ghostBorder: '1px solid rgba(200, 32, 32, 0.15)',
    rationale:
      'The design created hard offset shadows with ZERO blur: Light (2px 2px 0px 0px rgba(200,32,32,0.2)), Medium (4px 4px 0px 0px rgba(200,32,32,0.4)), Heavy (8px 8px 0px 0px rgba(200,32,32,0.6)). The zero-blur hard offset is even more aggressive than the prompt\'s blurred shadows -- elements cast hard directional shadows as if lit by harsh overhead tactical lighting. The red tint makes every shadow feel hostile. Unlike alarm\'s radial glow (broadcasting outward), aggressiveness shadows point downward and rightward with hard edges.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px' },
      { label: 'SM', value: '2px', recommended: true },
      { label: 'MD', value: '4px' },
    ],
    cornerStyle: 'sharp',
    mildToIntense:
      'Mild: 4-6px, no chamfer. Hard but not weaponized. Moderate: 2px with diagonal chamfer on one corner -- armor plating aesthetic. Intense: 0px with prominent chamfers on multiple corners. Full combat-industrial aesthetic.',
    rationale:
      'The design rendered four shapes: 0px radius, 2px radius, 4px radius, and a 45-degree chamfer (using clip-path polygon). The .chamfer-tr class cuts the top-right corner at 45 degrees: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%). Every section card uses both rounded-[2px] and chamfer-tr. These are not containers -- they are impact surfaces. The diagonal chamfer adds an aggressive industrial quality: shapes designed in a weapons lab, not a design studio.',
  },

  layout: {
    alignment: 'left',
    density: 'dense',
    rationale:
      'The design created a left-aligned, dense, forward-advancing composition. The wireframe section shows an "ASYMMETRIC LEFT-HEAVY KINETIC STACK" with a vertical red bar on the left edge and tightly packed content. Main uses gap-2 (8px) and px-4 for extremely tight section stacking. Left-alignment creates the visual structure of a military briefing: rapid scanning from top-left downward, maximum information density. Unlike alarm\'s centered broadcasting, aggressiveness is left-aligned because it advances in one direction.',
  },

  iconography: {
    icons: [
      { name: 'swords', label: 'Offensive' },
      { name: 'bolt', label: 'Strike' },
      { name: 'military_tech', label: 'Force' },
      { name: 'shield', label: 'Tactical' },
      { name: 'local_fire_department', label: 'Destroy' },
      { name: 'sports_martial_arts', label: 'Dominate' },
    ],
    style:
      'Heavy weight (600), Grade 0, forceful. Icons reference weapons, force, combat, shields, fire, and martial arts. At 600 weight they have the density of military insignia -- symbols that carry authority and threat. These are not decorative; they are insignia.',
    weight: 600,
    fill: false,
    rationale:
      'The design rendered Material Symbols at text-3xl in text-primary with font-variation-settings confirming FILL 0, wght 700, GRAD 0, opsz 24. Icons in a single row: target, bolt, swords, shield, radar, warning. The design substituted 3 of 6 (target for military_tech, radar for local_fire_department, warning for sports_martial_arts). The advisory uses the prompt\'s researched set. Heavy weight makes each icon feel like a stamped metal emblem.',
  },

  rules: {
    dos: [
      'Use strike red (#c82020) as the dominant accent',
      'Keep typography tall, condensed, uppercase (Teko 600-700)',
      'Apply dense, compressed spacing throughout',
      'Create hard directional shadows with red tint and zero blur',
      'Use sharp corners with diagonal chamfers (clip-path)',
      'Left-align layouts for forward reading momentum',
      'Keep motion fast and striking (160ms)',
      'Use hazard amber (#d08820) as secondary force signal',
    ],
    donts: [
      'Muted, desaturated, or gentle colors',
      'Rounded, soft, or inviting shapes',
      'Slow, settling, or gentle motion',
      'Generous, breathing spacing',
      'Centered, symmetrical compositions',
      'Thin, delicate icon weights',
      'Organic textures or natural surfaces',
      'Any element that yields or retreats',
    ],
  },

  words: {
    words: [
      'Forceful',
      'Dominant',
      'Advancing',
      'Striking',
      'Relentless',
      'Impact',
      'Dense',
      'Tactical',
    ],
    feel: 'The fist is already in motion. The design system creates a sense of controlled, purposeful force -- not anger (too reactive) and not alarm (too defensive). Aggressiveness is the offensive push, the decision to advance and dominate. Everything is dense, everything is sharp, everything advances toward you.',
  },
};

// Self-register on import
registerAdvisory(AGGRESSIVENESS_ADVISORY);

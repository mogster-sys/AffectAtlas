/**
 * Depression advisory -- extracted from Stitch output.
 * Source: stitch-exports/depression-advisory/code.html
 * Values reflect what Stitch ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const DEPRESSION_ADVISORY: EmotionAdvisory = {
  emotion: 'depression' as any,
  label: 'Depression',
  northStar: 'The Heavy Grey',
  philosophy: {
    brief:
      'This is not minimalism -- it is exhaustion. The design does not invite interaction; it merely exists.',
    rationale:
      'Depression in visual design comes from flatness, monotony, and the total absence of chromatic energy. Grey on grey on grey -- five palette swatches that are nearly indistinguishable at a glance. Typography is undersized and mechanical (Space Grotesk at 1.75rem max, never display-scale). Spacing was applied as defaults and never refined. Shadows do not exist because shadows require energy to cast. The most effective depression design is not dramatic -- drama requires energy depression does not have. It is simply flat. An absence of palette.',
  },
  deepened: true,
  source: 'stitch:depression_advisory',

  emotionalContext:
    'Depression and Sadness share dark palettes and low energy, but the quality is different. Sadness is active grief -- Lora\'s literary serifs weep, blue-gray mist drifts, soft 16px corners round with tenderness. Sadness FEELS something intensely. Depression has stopped feeling. Space Grotesk\'s mechanical neutrality expresses nothing. 6px corners were probably the default. The spacing was set once and never adjusted. Sadness is a wound. Depression is numbness.\n\nDepression also inverts Joy more completely than any other emotion. Joy\'s Plus Jakarta Sans bounces at weight 700, warm ambers celebrate, generous 24px corners welcome. Depression\'s Space Grotesk sits at weight 400, neutral greys absorb, mechanical 6px corners exist. Joy\'s 250ms springs with energy. Depression\'s 500ms drags with exhaustion. Joy\'s palette is vivid. Depression\'s palette is not a palette -- it is the absence of one.\n\nAmong all emotions, Depression is the most FLAT. Fear is dark but atmospheric. Anger is dark but forceful. Guilt is dark but weighted. Depression is dark and nothing else. No atmosphere, no force, no weight that implies something pressing. Just grey. The design should feel like the color has been drained from the world -- not dramatically (that requires energy) but completely, as if color was never coming.',

  colors: {
    tokens: {
      'primary': '#606870',
      'on-primary': '#d0d0d4',
      'primary-container': '#383c40',
      'on-primary-container': '#a0a4a8',
      'secondary': '#585050',
      'on-secondary': '#c8c0c0',
      'secondary-container': '#302c2c',
      'on-secondary-container': '#989090',
      'tertiary': '#708090',
      'on-tertiary': '#d0d8e0',
      'tertiary-container': '#384048',
      'on-tertiary-container': '#a0a8b0',
      'surface': '#161618',
      'surface-dim': '#101012',
      'surface-bright': '#1c1c1e',
      'surface-container-lowest': '#0c0c0e',
      'surface-container-low': '#1a1a1c',
      'surface-container': '#1e1e20',
      'surface-container-high': '#242426',
      'surface-container-highest': '#2a2a2c',
      'surface-tint': '#606870',
      'surface-variant': '#2e2e30',
      'on-surface': '#b0b0b4',
      'on-surface-variant': '#808084',
      'outline': '#505054',
      'outline-variant': '#2e2e30',
      'inverse-surface': '#b0b0b4',
      'inverse-primary': '#404448',
      'inverse-on-surface': '#161618',
      'background': '#161618',
      'on-background': '#b0b0b4',
      'error': '#806060',
      'on-error': '#d0c0c0',
      'error-container': '#403030',
      'on-error-container': '#a08888',
    },
    palette: ['#161618', '#1c1c1e', '#242426', '#2e2e30', '#383c40'],
    mildToIntense: [
      '#788088',
      '#686060',
      '#8090a0',
      '#606870',
      '#585050',
      '#484c50',
      '#403838',
    ],
    rationale:
      'Stitch rendered the palette strip as five nearly indistinguishable greys: #161618, #1C1C1E, #242426, #2E2E30, #383C40. You have to look closely to see any difference at all -- and that IS the point. The primary (#606870) is medium grey-blue, the color research most consistently associates with depression. Not a distinct blue (too interesting), not a warm grey (too comfortable). The grey of an overcast sky that will not change. Secondary (#585050) is warm grey-brown: weariness, fatigue. The entire palette operates in a narrow achromatic band. Unlike any other emotion in the system, Depression has no chromatic content.',
  },

  typography: {
    headlineFont: 'Space Grotesk',
    headlineFallback: 'sans-serif',
    bodyFont: 'Work Sans',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'An Absence of Palette.',
        size: '1.75rem',
        weight: 500,
        font: 'headline',
        tracking: '0em',
      },
      headline: {
        text: 'Space Grotesk',
        size: '1.125rem',
        weight: 500,
        font: 'headline',
      },
      title: {
        text: 'Monotone',
        size: '0.875rem',
        weight: 500,
        font: 'headline',
        transform: 'uppercase',
        tracking: '0.1em',
      },
      body: {
        text: 'Getting through another day.',
        size: '0.9375rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'DEFAULT',
        size: '0.75rem',
        weight: 400,
        font: 'body',
      },
      caption: {
        text: 'Was never coming',
        size: '0.625rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '0em',
      body: '0em',
      label: '0.1em',
    },
    lineHeight: {
      headline: 1.2,
      body: 1.5,
    },
    mildToIntense:
      'Mild: weight 400, adequate spacing -- the text functions but does not engage. Moderate: weight 400, default everything -- typed and left, no one came back. Intense: weight 300, tighter spacing, lower opacity -- the text is beginning to fade. It might not finish.',
    rationale:
      'Stitch rendered Space Grotesk at 1.75rem medium for the hero ("An Absence of Palette.") -- deliberately undersized compared to every other emotion (Anger 2.5rem, Pride 2.4rem, Guilt 1.875rem). Section headers use 0.875rem uppercase tracking-widest in on-surface-variant -- mechanical, categorizing, not emphasizing. The header shows "Depression" at only 1.25rem bold. Work Sans handles body text at 0.9375rem weight 400: "A font for reading instructions in a windowless room." The pairing communicates mechanical adequacy: everything is technically present, nothing is chosen with care.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '14px' },
      { label: 'LG', value: '24px' },
      { label: 'XL', value: '36px' },
    ],
    density: 'normal',
    mildToIntense:
      'Mild: md 16px -- slightly more room, slightly less suffocating. Still functional, still grey. Moderate: md 14px -- the spacing of someone going through the motions. Adequate. Intense: md 12px -- slightly tighter but without Frustration\'s aggressive cramping. Just less room. Less everything.',
    rationale:
      'Stitch used gap-12 (48px) between major sections and px-6 (24px) padding -- normal, neither generous nor tight. The .text-indent-center class applies 120px margin-top to the hero, pushing content well below the visual center -- empty space collects above like air that cannot reach the bottom. The spacing is described as "Indifferent density. Large gaps of silence." Unlike Guilt\'s intentional compression or Inspiration\'s intentional generosity, Depression\'s spacing is indifferent. Defaults applied and left alone.',
  },

  motion: {
    duration: '500ms',
    easing: 'cubic-bezier(0.4, 0, 0.4, 1)',
    character: 'exhausted',
    bezierPoints: [0.4, 0, 0.4, 1],
    mildToIntense:
      'Mild: 400ms, slightly more responsive -- functional depression, still going through the motions. Moderate: 500ms, symmetrical dragging -- everything takes too long but not dramatically so. Intense: 650ms, with elements fading slightly during transition -- the animation feels like it might not finish.',
    rationale:
      'Stitch created a .low-energy-transition class with the exact 500ms cubic-bezier(0.4, 0, 0.4, 1) timing. The symmetrical easing means nothing accelerates or decelerates with personality -- just steady, tired movement. The .active-scale reduces to only scale(0.99) on press -- the barest possible acknowledgment that an interaction happened. The ellipsis button ("...") is the punctuation of trailing off. Unlike Anger\'s explosive 150ms, Joy\'s bouncy 250ms, or even Guilt\'s reluctant 300ms, Depression\'s 500ms just drags. No snap, no bounce, no drift. Exhausted trudging from A to B.',
  },

  depth: {
    approach: 'tonal',
    levels: [
      {
        label: 'Surface',
        description: 'Surface-container (#1e1e20). No shadow. Flat.',
        background: '#1e1e20',
      },
      {
        label: 'Shift',
        description: 'Surface-container-high (#242426). No shadow. Slightly lighter grey.',
        background: '#242426',
      },
      {
        label: 'Depth',
        description: 'Surface-container-highest (#2a2a2c). Near-invisible if shadow exists at all.',
        background: '#2a2a2c',
      },
    ],
    shadowIfNeeded: '0 2px 8px rgba(16, 16, 18, 0.3)',
    ghostBorder: '1px solid rgba(46, 46, 48, 0.1)',
    rationale:
      'Stitch rendered ZERO box-shadows across the entire page. Depth is achieved exclusively through tonal shifts: three grey cards side by side (#1e1e20, #242426, #2a2a2c) that you have to look closely to distinguish. "Depth through tonal shift, never shadow." This flat tonal approach is uniquely Depression\'s. Every other emotion uses shadows for some purpose -- Anger crushes, Guilt presses, Pride spotlights, Inspiration lifts. Depression cannot even cast a shadow. The hero image uses grayscale + opacity-40 + mix-blend-luminosity -- color physically drained from the photograph.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px' },
      { label: 'SM', value: '2px' },
      { label: 'MD', value: '6px', recommended: true },
      { label: 'LG', value: '10px' },
    ],
    cornerStyle: 'smooth',
    mildToIntense:
      'Mild: 8px (a small amount of care still present). Moderate: 6px (default, mechanical, the framework default that no one changed). Intense: 3-4px (the last bit of softness eroded).',
    rationale:
      'Stitch set DEFAULT, lg, AND xl all to 6px -- the most uniform radius treatment possible. The Sadness comparison card uses 16px corners to show contrast. The Joy comparison card uses rounded-full. Depression\'s 6px is the radius of not having made a decision about radii. Compare to Anger\'s absolute 0px (weaponized choice), Contentment\'s generous 16px (caring choice). Depression\'s 6px is the absence of choice -- technically present, never considered.',
  },

  layout: {
    alignment: 'left',
    density: 'normal',
    rationale:
      'Stitch created a left-aligned layout with content pushed below center via .text-indent-center (120px margin-top on the hero). Elements sink to the bottom of their sections -- empty space collects above. The layout is described as "indifferent density" with "large gaps of silence." Left alignment because that is the default. Normal density because no one adjusted it. Unlike Guilt\'s intentional sinking or Anger\'s crushing force, Depression\'s downward pull is accidental -- gravity is just slightly heavier here.',
  },

  iconography: {
    icons: [
      { name: 'cloud', label: 'Overcast' },
      { name: 'bedtime', label: 'Exhaustion' },
      { name: 'battery_1_bar', label: 'Depleted' },
      { name: 'volume_off', label: 'Silent' },
      { name: 'blur_on', label: 'Fog' },
      { name: 'schedule', label: 'Passing' },
    ],
    style:
      'Very thin (300 weight, -25 grade) -- barely present. Line drawings that might fade away entirely. Icons reference depletion, silence, fog, and the passage of time without progress.',
    weight: 300,
    fill: false,
    rationale:
      'Stitch rendered icons at weight 300 with GRAD -25 (confirmed in font-variation-settings) in on-surface-variant (#808084). The blur_on icon anchors the header and footer as Depression\'s signature symbol -- everything slightly out of focus. The battery_1_bar icon overlays the hero image (itself grayscale at 40% opacity): "Diminished Capacity." The footer blur_on at 48px and opacity-40 is the largest icon in the system but also the most ghostly. Depression\'s icons are everyday objects running out.',
  },

  rules: {
    dos: [
      'Use grey-on-grey throughout with minimal chromatic content',
      'Keep typography undersized (1.75rem max for display)',
      'Apply flat tonal depth only (no shadows)',
      'Use slow exhausted motion (500ms, symmetrical easing)',
      'Let surfaces barely differ from backgrounds',
      'Keep everything at default-feeling values',
      'Position elements slightly below center (120px offset)',
      'Maintain low contrast between text and background',
    ],
    donts: [
      'Any bright or saturated color accents',
      'Bold large or energetic typography',
      'Bouncy snappy or playful motion (Joy)',
      'Sharp dramatic shadows or glowing effects',
      'Generous caring spacing patterns (Contentment)',
      'Cool atmospheric blues (Loneliness/Fear)',
      'Warm palettes of any kind (Joy/Contentment)',
      'Dynamic or snappy easing curves',
    ],
  },

  words: {
    words: [
      'Heavy',
      'Grey',
      'Flat',
      'Exhausted',
      'Drained',
      'Monotone',
      'Absent',
      'Leaden',
    ],
    feel: 'Getting through another day. A sense of emotional flatness -- not active suffering, but the dull weight of everything requiring more energy than you have. Nothing is terrible. Nothing is good. Everything just... is.',
  },
};

// Self-register on import
registerAdvisory(DEPRESSION_ADVISORY);

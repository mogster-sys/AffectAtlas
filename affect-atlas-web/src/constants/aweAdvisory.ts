/**
 * Awe advisory -- extracted from The design output.
 * Source: stitch-exports/awe-advisory/code.html
 * Values reflect what The design ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const AWE_ADVISORY: EmotionAdvisory = {
  emotion: 'awe',
  label: 'Awe',
  northStar: 'The Vast Threshold',
  philosophy: {
    brief:
      'The Scale of Immensity -- awe is defined by Perceived Vastness and Need for Accommodation.',
    rationale:
      'Awe is the emotion of encountering immensity -- the quiet overwhelm of standing at the edge of something larger than yourself. This design advisory embodies the vast threshold: cosmic depth, luminous light, monumental scale. Every element floats in deep space. Every surface glows. The advisory IS the demonstration. Unlike standard joy or surprise, Awe is the mental portal between what we know and the infinite unknown.',
  },
  deepened: true,
  source: 'stitch:awe_design_advisory',

  emotionalContext:
    'Awe stands apart from every other emotion in the system because it is the ONLY one defined by scale. Fear makes you feel small in a threatening way. Awe makes you feel small in a transcendent way. The design difference is everything: Fear uses cold clinical surfaces and fragile thin type to create vulnerability. Awe uses cosmic deep surfaces and monumental tall serifs to create wonder. Fear contracts (elements shrink, hide, withdraw). Awe expands (elements breathe, glow, tower).\n\nAwe also inverts Frustration. Both deal with encountering something larger than yourself, but Frustration\'s response is blocked energy -- cramped, tight, halting. Awe\'s response is surrender to immensity -- generous, expansive, slow. Frustration at 180ms says "I cannot get through." Awe at 450ms says "I do not need to."\n\nAmong all emotions, Awe is the one most concerned with LUMINOSITY. While other dark-theme emotions use shadows to create depth (Anger\'s crushing weight, Jealousy\'s toxic glow, Fear\'s ethereal vignettes), Awe uses LIGHT as the primary depth mechanism. Cards glow from within. Accents are light sources. The deep navy background is not absence -- it is the infinite space through which light travels.',

  colors: {
    tokens: {
      'primary': '#a8c8ff',
      'on-primary': '#003062',
      'primary-container': '#7092ca',
      'on-primary-container': '#002956',
      'primary-fixed': '#d6e3ff',
      'primary-fixed-dim': '#a8c8ff',
      'on-primary-fixed': '#001b3c',
      'on-primary-fixed-variant': '#21477a',
      'secondary': '#d0bef4',
      'on-secondary': '#362855',
      'secondary-container': '#4d3f6d',
      'on-secondary-container': '#beade2',
      'secondary-fixed': '#eaddff',
      'secondary-fixed-dim': '#d0bef4',
      'on-secondary-fixed': '#21133e',
      'on-secondary-fixed-variant': '#4d3f6d',
      'tertiary': '#6ad6e6',
      'on-tertiary': '#00363d',
      'tertiary-container': '#239fae',
      'on-tertiary-container': '#002f35',
      'tertiary-fixed': '#97f0ff',
      'tertiary-fixed-dim': '#6ad6e6',
      'on-tertiary-fixed': '#001f24',
      'on-tertiary-fixed-variant': '#004f58',
      'surface': '#0f1223',
      'surface-dim': '#0f1223',
      'surface-bright': '#35384a',
      'surface-container-lowest': '#090d1d',
      'surface-container-low': '#171b2b',
      'surface-container': '#1b1f2f',
      'surface-container-high': '#25293a',
      'surface-container-highest': '#303446',
      'surface-tint': '#a8c8ff',
      'surface-variant': '#303446',
      'on-surface': '#dfe1f8',
      'on-surface-variant': '#c3c6d1',
      'outline': '#8d919a',
      'outline-variant': '#43474f',
      'inverse-surface': '#dfe1f8',
      'inverse-primary': '#3c5f94',
      'inverse-on-surface': '#2c3041',
      'background': '#0f1223',
      'on-background': '#dfe1f8',
      'error': '#ffb4ab',
      'on-error': '#690005',
      'error-container': '#93000a',
      'on-error-container': '#ffdad6',
    },
    palette: ['#0f1223', '#a8c8ff', '#d0bef4', '#6ad6e6', '#dfe1f8'],
    mildToIntense: [
      '#c3c6d1',
      '#beade2',
      '#97f0ff',
      '#a8c8ff',
      '#6ad6e6',
      '#3c5f94',
      '#002956',
    ],
    rationale:
      'The design shifted the palette brighter than requested -- primary became luminous periwinkle (#a8c8ff) instead of steel blue (#6e90c8), creating an even more ethereal, light-emitting quality. Secondary shifted to soft lavender (#d0bef4) from dusty violet, and tertiary to bright cyan (#6ad6e6) from muted teal. The effect is more luminous and celestial than the prompt specified. Surface (#0f1223) is deep cosmic navy-black. The custom "awe-" prefixed tokens preserve the original prompt colors for reference. Together the palette reads as "light traveling through deep space" -- luminous, clean, celestial.',
  },

  typography: {
    headlineFont: 'Cormorant',
    headlineFallback: 'serif',
    bodyFont: 'Source Sans 3',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Monumental',
        size: '3.2rem',
        weight: 700,
        font: 'headline',
        tracking: '-0.02em',
      },
      headline: {
        text: 'The Vast Threshold',
        size: '2.5rem',
        weight: 700,
        font: 'headline',
      },
      title: {
        text: 'Cathedral Light',
        size: '1.375rem',
        weight: 500,
        font: 'headline',
      },
      body: {
        text: 'Standing at the edge of something you cannot fully comprehend.',
        size: '1.125rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'LUMINOUS',
        size: '0.65rem',
        weight: 500,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.25em',
      },
      caption: {
        text: 'Beyond the visible frame',
        size: '0.625rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '-0.02em',
      body: '0em',
      label: '0.25em',
    },
    lineHeight: {
      headline: 1.0,
      body: 1.6,
    },
    mildToIntense:
      'Mild: Cormorant at weight 300-400 with more letter spacing -- ethereal, barely there, text breathing like mist. Moderate: weight 500-600 with line-height 1.1 -- cathedral presence. Intense: weight 700 with tighter tracking (-0.03em) and larger scale -- text that towers over you.',
    rationale:
      'The design rendered the headline specimen as "Monumental" in Cormorant bold at 3.2rem -- the word itself demonstrates the font\'s vertical grandeur. The weight ramp shows "Awe" at four sizes with increasing opacity (0.4 to 1.0), the smallest barely visible like a distant star and the largest bold in primary blue. Cormorant\'s tall vertical proportions make text reach upward like spires. Source Sans 3 provides invisible clarity -- body text that lets the monumental display elements command attention.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '16px' },
      { label: 'LG', value: '32px' },
      { label: 'XL', value: '48px' },
      { label: '2XL', value: '72px' },
    ],
    density: 'generous',
    mildToIntense:
      'Mild: lg 40px, xl 60px -- even more generous, almost meditative emptiness. The spacing of an empty cathedral. Moderate: standard scale -- monumental but not infinite. Intense: lg 24px, xl 36px -- slightly tighter, creating density and overwhelming richness.',
    rationale:
      'The design used gap-10 (40px) between main sections and generous padding (p-8 / 32px) within cards -- confirming the monumental spacing approach. The spacing ruler uses vertical bars of increasing height, visualizing the scale as physical presence growing taller. Density labeled "Generous Sparse (24px - 80px)." Awe requires space to exist. The empty space is not wasted -- it IS the emotion.',
  },

  motion: {
    duration: '450ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    character: 'expansive',
    bezierPoints: [0.16, 1, 0.3, 1],
    mildToIntense:
      'Mild: 550ms+ with even slower deceleration -- barely perceptible, elements fade in like stars appearing. Moderate: 450ms with standard expansive easing -- cinematic. Intense: 350ms with dramatic overshoot -- elements expanding past final size before settling.',
    rationale:
      'The design created a custom Tailwind easing token ("cosmic": "cubic-bezier(0.16, 1, 0.3, 1)") and applied it throughout via ease-cosmic. The "Enter the Void" button uses duration-[450ms] ease-cosmic active:scale-95. The SVG curve visualization shows the characteristic quick start then very slow deceleration -- elements drift into place as if moved by vast forces. Section cards use hover:scale-[1.01] at 450ms -- a barely perceptible expansion, breathing at cosmic scale.',
  },

  depth: {
    approach: 'glow',
    levels: [
      {
        label: 'Shimmer',
        description: 'Subtle blue glow, barely perceptible luminosity',
        background: '#1b1f2f',
      },
      {
        label: 'Radiance',
        description: 'Visible blue luminous halo, element emits light',
        background: '#25293a',
      },
      {
        label: 'Corona',
        description: 'Bright cyan-tinted glow, element is a light source',
        background: '#303446',
      },
    ],
    shadowIfNeeded: '0 12px 40px rgba(110, 144, 200, 0.12)',
    ghostBorder: '1px solid rgba(67, 71, 79, 0.15)',
    rationale:
      'The design created a dedicated .awe-glow class (0 12px 40px rgba(110,144,200,0.12)) applied to most section cards. The three shadow levels use increasing spread and opacity: Shimmer (0 4px 20px, 0.08), Radiance (0 12px 40px, 0.18), Corona (0 20px 60px, 0.25 in cyan). The Corona level shifts from blue to cyan tint, matching the tertiary portal color. Unlike Anger\'s crushing downward shadows, Awe\'s luminous glow radiates outward. Every card is a window into light.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '14px', recommended: true },
      { label: 'LG', value: '20px' },
    ],
    cornerStyle: 'smooth',
    mildToIntense:
      'Mild: 18-22px (rounder, softer, more organic). Moderate: 14px (standard awe smoothness). Intense: 8-12px (slightly sharper, more monumental).',
    rationale:
      'The design defined a custom "awe" radius token at 14px and applied rounded-awe to every card and button. The recommended shape demo pulses with a subtle luminous animation (animate-luminous). The 14px feels like observatory windows or spacecraft panels -- not fully rounded (playful) but clearly smooth. The bottom nav uses rounded-t-[14px] for consistency.',
  },

  layout: {
    alignment: 'center',
    density: 'sparse',
    rationale:
      'The design created a centered single-column composition at exactly 393px width. The layout wireframe section shows a centered vertical stack with generous gaps -- labeled "Centered / Single Column / Sparse." The composition reads like a cathedral nave: formal, vertical, processional. Each section is a revelation encountered in sequence. The philosophy section is pure centered text with no card -- just words floating in cosmic space.',
  },

  iconography: {
    icons: [
      { name: 'auto_awesome', label: 'Vastness' },
      { name: 'landscape', label: 'Landscape' },
      { name: 'public', label: 'Totality' },
      { name: 'visibility', label: 'Vision' },
      { name: 'open_in_full', label: 'Expansion' },
      { name: 'all_inclusive', label: 'Infinity' },
    ],
    style:
      'Thin stroke (300 weight), refined, almost disappearing into the layout. Icons feel like astronomical notation -- minimal marks that represent vast concepts.',
    weight: 300,
    fill: false,
    rationale:
      'The design rendered all six icons in tertiary cyan (#6ad6e6) at 300 weight in a 3-column grid. The auto_awesome icon also appears as a hero element in the philosophy section and as a fading footer ornament (opacity-20 with hover-to-full transition over 1000ms). Icons are whispers of vast ideas rather than assertive symbols.',
  },

  rules: {
    dos: [
      'Use generous negative space as emotional content',
      'Let light be the hero (luminous glows, not shadows)',
      'Keep compositions sparse and monumental',
      'Use thin typography at large display sizes',
      'Center key elements for cathedral-like formality',
      'Create depth with luminosity, not dark shadows',
      'Use glass textures and subtle transparency',
      'Let elements breathe with cosmic-scale timing (450ms)',
    ],
    donts: [
      'Cramped layouts or dense information grids',
      'Heavy borders or strong containment lines',
      'Flat, solid colors without luminous quality',
      'Fast snappy motion (undermines cosmic gravity)',
      'Pure black backgrounds (use deep navy instead)',
      'Small, timid typography (too human-scale)',
      'Warm, cozy color palettes (too intimate)',
      'Heavy icon weights or decorative illustrations',
    ],
  },

  words: {
    words: [
      'Vastness',
      'Transcendence',
      'Wonder',
      'Immensity',
      'Luminous',
      'Infinite',
      'Threshold',
      'Sublime',
    ],
    feel: 'Standing at the edge of something larger than yourself. Quiet overwhelm -- not stress, but the stillness that comes from encountering something you cannot fully comprehend.',
  },
};

// Self-register on import
registerAdvisory(AWE_ADVISORY);

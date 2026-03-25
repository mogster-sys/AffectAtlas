/**
 * Contentment advisory -- extracted from Stitch output.
 * Source: stitch-exports/contentment-advisory/contentment_design_advisory/code.html
 * Values reflect what Stitch ACTUALLY produced, not what was requested.
 *
 * Stitch loaded three fonts (Lexend, Karla, Work Sans) instead of the
 * requested two (Lexend, Karla). Work Sans is used for labels/captions.
 * DESIGN.md describes the system as "The Resonant Pool" and introduces
 * the "No-Line Rule" (no 1px borders) and "Ghost Border" pattern.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const CONTENTMENT_ADVISORY: EmotionAdvisory = {
  emotion: 'contentment',
  label: 'Contentment',
  northStar: 'The Settled Basin',
  philosophy: {
    brief:
      'Quiet satisfaction and ease -- water at rest in a natural hollow.',
    rationale:
      'Contentment is the state of finding sufficiency in the present. The UI is designed to feel like a collection of elements that have found their natural resting place. It rejects frantic, high-density layouts in favor of a high-end editorial experience that prioritizes composure, stillness, and breath. Intentional asymmetry and warm, organic tones with generous negative space transform a digital interface into a sanctuary. The "Resonant Pool" creative direction treats the screen as a basin where elements settle into their natural positions.',
  },
  deepened: true,
  source: 'stitch:contentment_design_advisory',

  emotionalContext:
    'Contentment occupies a unique position on the emotional spectrum: positive valence, very low arousal. It shares Joy\'s pleasant quality but replaces Joy\'s brightness and bounce with stillness and warmth. Where Joy is a burst, Contentment is a long exhale.\n\nVisually this means generous space without emptiness, warmth without energy, and organic softness without playfulness. Where Trust builds careful architectural depth through cool precision, Contentment achieves depth through warm tonal layering -- surfaces that feel like afternoon light on natural materials rather than engineered structure.\n\nThe warm cream palette (#fef9ed) distinguishes Contentment from every other light-themed emotion. Trust uses cool tones, Joy uses bright ones, Anticipation uses golden amber. Contentment alone lives in the quiet warmth of cream and sage -- the colors of a sun-warmed garden in late afternoon.',

  colors: {
    tokens: {
      'primary': '#366548',
      'on-primary': '#ffffff',
      'primary-container': '#4f7f5f',
      'on-primary-container': '#f6fff5',
      'primary-fixed': '#bbefc9',
      'primary-fixed-dim': '#9fd2ae',
      'on-primary-fixed': '#00210f',
      'on-primary-fixed-variant': '#205034',
      'secondary': '#50606f',
      'on-secondary': '#ffffff',
      'secondary-container': '#d1e2f3',
      'on-secondary-container': '#556473',
      'secondary-fixed': '#d4e4f6',
      'secondary-fixed-dim': '#b8c8da',
      'on-secondary-fixed': '#0d1d2a',
      'on-secondary-fixed-variant': '#394857',
      'tertiary': '#6d5935',
      'on-tertiary': '#ffffff',
      'tertiary-container': '#88714b',
      'on-tertiary-container': '#fffbff',
      'tertiary-fixed': '#fcdfb1',
      'tertiary-fixed-dim': '#dec397',
      'on-tertiary-fixed': '#271900',
      'on-tertiary-fixed-variant': '#574422',
      'surface': '#fef9ed',
      'surface-dim': '#dfdace',
      'surface-bright': '#fef9ed',
      'surface-container-lowest': '#ffffff',
      'surface-container-low': '#f9f3e7',
      'surface-container': '#f3ede2',
      'surface-container-high': '#ede8dc',
      'surface-container-highest': '#e7e2d6',
      'surface-tint': '#39684a',
      'surface-variant': '#e7e2d6',
      'on-surface': '#1d1c15',
      'on-surface-variant': '#414942',
      'outline': '#717972',
      'outline-variant': '#c1c9c0',
      'inverse-surface': '#323029',
      'inverse-primary': '#9fd2ae',
      'inverse-on-surface': '#f6f0e4',
      'background': '#fef9ed',
      'on-background': '#1d1c15',
      'error': '#ba1a1a',
      'on-error': '#ffffff',
      'error-container': '#ffdad6',
      'on-error-container': '#93000a',
    },
    palette: ['#fef9ed', '#366548', '#50606f', '#6d5935', '#1d1c15'],
    mildToIntense: [
      '#bbefc9',
      '#9fd2ae',
      '#4f7f5f',
      '#366548',
      '#205034',
      '#00210f',
    ],
    rationale:
      'The palette is a sophisticated interplay of warmth and organic vitality. Primary Deep Sage (#366548) is darker and more saturated than expected -- Stitch pushed the green from a gentle sage toward a confident forest tone. Secondary Steel (#50606f) provides cool grounding. Tertiary Warm Honey (#6d5935) adds lived-in warmth. The cream surface (#fef9ed) is the foundation of the "basin" metaphor -- warm enough to feel like natural light on paper.',
  },

  typography: {
    headlineFont: 'Lexend',
    headlineFallback: 'sans-serif',
    bodyFont: 'Karla',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'The Settled Basin',
        size: '3rem',
        weight: 700,
        font: 'headline',
        tracking: '-0.02em',
      },
      headline: {
        text: 'Quiet Satisfaction',
        size: '1.5rem',
        weight: 600,
        font: 'headline',
        tracking: '-0.01em',
      },
      title: {
        text: 'Finding Sufficiency',
        size: '1.25rem',
        weight: 500,
        font: 'headline',
      },
      body: {
        text: 'Water at rest in a natural hollow.',
        size: '1rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'SETTLED STATE',
        size: '0.75rem',
        weight: 600,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.2em',
      },
      caption: {
        text: 'Design advisory for contentment',
        size: '0.625rem',
        weight: 500,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.05em',
      },
    },
    letterSpacing: {
      headline: '-0.02em',
      body: '0em',
      label: '0.2em',
    },
    lineHeight: {
      headline: 1.15,
      body: 1.6,
    },
    mildToIntense:
      'Mild: Lexend at weight 300-400 with generous line-height 1.4, barely asserting itself -- the typographic equivalent of a murmur. Intense: Lexend at weight 700 with tight tracking -0.03em, the type settles into place with gravity and permanence.',
    rationale:
      'Lexend has wide apertures and a stable baseline that evokes "settling" -- geometric stability without coldness. Stitch used it for headlines and anchors with tight tracking at display sizes for editorial authority. Karla provides humanist warmth for body text with generous x-height. Stitch also loaded Work Sans for labels and captions, adding a third voice for utilitarian elements.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'S', value: '8px' },
      { label: 'M', value: '16px' },
      { label: 'L', value: '32px' },
      { label: 'XXL', value: '64px' },
    ],
    density: 'generous',
    mildToIntense:
      'Mild: even more generous (L: 40px, XXL: 80px), maximum breathing room -- the basin is wide and shallow. Intense: tighter (L: 24px, XXL: 48px), the basin is deeper and more contained, elements settle closer together.',
    rationale:
      'Generous spacing creates the "basin" feeling -- room for everything to find its natural level. The editorial scale uses high-contrast gaps between display type and body (32px minimum) to emphasize hierarchy of thought. Asymmetrical margins (different left and right values) create editorial interest without tension.',
  },

  motion: {
    duration: '380ms',
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    character: 'settling',
    bezierPoints: [0.25, 0.1, 0.25, 1],
    mildToIntense:
      'Mild: 450ms with gentler easing, almost imperceptible transitions -- things arrive so slowly you barely notice. Intense: 280ms with slightly more defined deceleration, the settling is visible and deliberate.',
    rationale:
      'The 380ms settling motion is the signature of contentment. The custom easing creates gentle deceleration -- elements ease into their final position like water finding its level. Nothing snaps, nothing bounces, nothing overshoots. The DESIGN.md specifically states: "nothing should snap into place -- it should land." On hover, elements translate upward slightly (-2px) rather than scaling, suggesting a gentle ripple in still water.',
  },

  depth: {
    approach: 'tonal',
    levels: [
      {
        label: 'Base',
        description: 'surface (#fef9ed) -- the foundation of the basin',
        background: '#fef9ed',
      },
      {
        label: 'Inset',
        description: 'surface-container (#f3ede2) -- secondary content areas',
        background: '#f3ede2',
      },
      {
        label: 'Floating',
        description: 'surface-container-lowest (#ffffff) -- primary cards lifted against cream',
        background: '#ffffff',
      },
    ],
    shadowIfNeeded: '0 12px 32px -4px rgba(58, 56, 48, 0.08)',
    ghostBorder: '1px solid rgba(193, 201, 192, 0.15)',
    rationale:
      'Depth is achieved through tonal layering rather than artificial shadows -- the "No-Line Rule." Standard 1px borders are strictly prohibited. Boundaries are defined through background color shifts: surface to surface-container-low creates soft architectural transitions that feel built, not drawn. When a true floating state is required, a warm-tinted diffuse shadow (rgba(58,56,48,0.08)) mimics natural light on matte surfaces. The "Ghost Border" uses outline-variant at 15% opacity as a subtle accessibility fallback.',
  },

  shapes: {
    radii: [
      { label: 'Default', value: '4px' },
      { label: 'Large', value: '8px' },
      { label: 'XL', value: '12px' },
      { label: 'XXL', value: '16px', recommended: true },
      { label: 'Full', value: '9999px' },
    ],
    cornerStyle: 'rounded',
    mildToIntense:
      'Mild: more rounded (20-24px), softer containers that feel like smooth stones. Intense: less rounded (8-12px), more contained and defined -- the basin walls are closer.',
    rationale:
      'Stitch used 16px (xxl) as the primary card radius -- significantly rounder than the requested 14px. Cards ("Basin Containers") must never have borders; they use 1.5rem (24px) radii in the DESIGN.md specification. Pill-shaped buttons (rounded-full/9999px) are the "Pebble" pattern for primary actions. The overall shape language is smooth and organic, like water-worn stones.',
  },

  layout: {
    alignment: 'center',
    density: 'sparse',
    rationale:
      'Centered layout with intentional asymmetry. Large-scale typography is often offset, and components "pool" in specific areas creating gravity and focus. The DESIGN.md specifies asymmetrical margins (e.g., 12 units left, 16 units right) for editorial interest. Cards should be staggered slightly in height or width to mimic the organic nature of a basin rather than rigid grid rows.',
  },

  iconography: {
    icons: [
      { name: 'check_circle', label: 'Confirm' },
      { name: 'home', label: 'Base' },
      { name: 'spa', label: 'Peace' },
      { name: 'self_improvement', label: 'Pause' },
      { name: 'wb_sunny', label: 'Warmth' },
      { name: 'favorite', label: 'Ease' },
    ],
    style:
      'Standard weight (400), with default fill and grade. Icons should be rare -- the DESIGN.md specifies no more than 3 icons per screen. Icons are "jewelry," not decoration. The system relies on typography and color to communicate.',
    weight: 400,
    fill: false,
    rationale:
      'Contentment icons reference sufficiency, peace, warmth, and home. They are deliberately simple and familiar -- check circles, houses, spa leaves. Nothing exotic or surprising. The restraint in icon usage (max 3 per screen) reinforces the contentment principle: enough is enough.',
  },

  rules: {
    dos: [
      'Use background tonal shifts for sectioning (No-Line Rule)',
      'Allow intentional asymmetrical margins',
      'Prioritize the settling motion for all transitions',
      'Use tertiary (Warm Honey) sparingly for accent links',
      'Place primary cards on cream background for tonal lift',
      'Use Ghost Borders (outline-variant at 15% opacity) for accessibility',
      'Keep generous padding (32px minimum for major sections)',
      'Use pill-shaped buttons for primary actions (Pebble pattern)',
    ],
    donts: [
      'Use 1px borders for content containers',
      'Use high-frequency patterns or jagged edges',
      'Use aggressive, snapping animations',
      'Use 100% black text (always use on-surface #1d1c15)',
      'Use standard grid-based cards-in-a-row layouts',
      'Use more than 3 icons per screen',
      'Use cool or sterile white backgrounds',
    ],
  },

  words: {
    words: [
      'settled',
      'comfortable',
      'ease',
      'warmth',
      'sufficiency',
      'gentle',
      'familiar',
      'grounded',
    ],
    feel: 'warm, still, unhurried -- like sitting in a comfortable chair after a good meal',
  },
};

// Self-register on import
registerAdvisory(CONTENTMENT_ADVISORY);

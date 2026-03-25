/**
 * Trust advisory -- extracted from Stitch output.
 * Source: stitch-exports/trust-advisory/stitch/affectatlas_trust_advisory/code.html
 * Values reflect what Stitch ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const TRUST_ADVISORY: EmotionAdvisory = {
  emotion: 'trust',
  label: 'Trust',
  northStar: 'The Architectural Anchor',
  philosophy: {
    brief:
      'A firm handshake -- steady, professional, unwavering. We do not seek to delight, we seek to assure.',
    rationale:
      'Trust in visual design comes from architectural clarity: strict alignment, measured spacing, serif typography that signals permanence, and a restrained monochromatic palette. Every element is deliberate. Nothing is decorative. The system references legal documents, financial journals, and institutional mastheads -- artifacts that carry weight through structure alone.',
  },
  deepened: true,
  source: 'stitch:affectatlas_trust_advisory',

  emotionalContext:
    'Trust is the architectural foundation of Plutchik\'s wheel -- the emotion that asks "can I rely on this?" Where Joy radiates warmth and expansion, Trust radiates stability and weight. Cool oceanic teals replace warm ambers. Serif typography replaces bouncy sans-serifs. Measured precision replaces generous breathing room.\n\nTrust also stands apart from Fear. Both use restrained palettes and tight spacing, but for opposite reasons. Trust\'s restraint communicates competence and authority -- a bank vault, a legal document. Fear\'s restraint communicates constriction and dread -- walls closing in. Trust\'s sharp 4px corners say "precision-engineered." Fear\'s 0px corners say "broken glass."\n\nAmong all eight emotions, Trust is unique in rejecting decoration entirely. No gradients, no shadows, no spring animations. Every element earns its place through structural necessity. The design system references the artifacts that humans have historically trusted most: architectural blueprints, financial ledgers, institutional mastheads.',

  colors: {
    tokens: {
      'primary': '#002434',
      'on-primary': '#ffffff',
      'primary-container': '#1a3a4a',
      'on-primary-container': '#cce8f5',
      'primary-dim': '#385668',
      'primary-fixed': '#c7e7fc',
      'primary-fixed-dim': '#b9d9ee',
      'on-primary-fixed': '#244354',
      'on-primary-fixed-variant': '#415f71',
      'secondary': '#506169',
      'on-secondary': '#ffffff',
      'secondary-container': '#d3e7f0',
      'on-secondary-container': '#0b1d25',
      'secondary-dim': '#45565d',
      'secondary-fixed': '#d3e7f0',
      'secondary-fixed-dim': '#c5d7e1',
      'on-secondary-fixed': '#0b1d25',
      'on-secondary-fixed-variant': '#4d5e66',
      'tertiary': '#446274',
      'on-tertiary': '#ffffff',
      'tertiary-container': '#c9e6f9',
      'on-tertiary-container': '#011e2c',
      'tertiary-dim': '#45546b',
      'tertiary-fixed': '#c9e6f9',
      'tertiary-fixed-dim': '#c6d5f0',
      'on-tertiary-fixed': '#324056',
      'on-tertiary-fixed-variant': '#4e5c73',
      'surface': '#f8fafb',
      'surface-dim': '#d8dadc',
      'surface-bright': '#f8fafb',
      'surface-container-lowest': '#ffffff',
      'surface-container-low': '#e6f6ff',
      'surface-container': '#dbf1fe',
      'surface-container-high': '#e6ecef',
      'surface-container-highest': '#cfe6f2',
      'surface-tint': '#002434',
      'surface-variant': '#cfe6f2',
      'on-surface': '#191c1d',
      'on-surface-variant': '#42474b',
      'outline': '#72787c',
      'outline-variant': '#c2c7cc',
      'inverse-primary': '#c4e4fa',
      'inverse-surface': '#080f13',
      'inverse-on-surface': '#979ea3',
      'background': '#f3faff',
      'on-background': '#071e27',
      'error': '#ba1a1a',
      'on-error': '#ffffff',
      'error-dim': '#4e0309',
      'error-container': '#fe8983',
      'on-error-container': '#752121',
    },
    palette: ['#002434', '#1a3a4a', '#506169', '#f3faff', '#e6f6ff'],
    mildToIntense: [
      '#e6f6ff',
      '#dbf1fe',
      '#cfe6f2',
      '#506169',
      '#1a3a4a',
      '#002434',
      '#080f13',
    ],
    rationale:
      'Deep oceanic teals and cool slates signal depth, permanence, and calm authority. Cool temperatures feel stable and measured. Warm tones are deliberately absent -- warmth implies approachability, not reliability.',
  },

  typography: {
    headlineFont: 'Newsreader',
    headlineFallback: 'serif',
    bodyFont: 'Inter',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Trust',
        size: '5rem',
        weight: 200,
        font: 'headline',
        tracking: '-0.05em',
      },
      headline: {
        text: 'Institutional Authority',
        size: '3rem',
        weight: 500,
        font: 'headline',
        tracking: '-0.02em',
      },
      title: {
        text: 'Reliability',
        size: '1.25rem',
        weight: 600,
        font: 'body',
      },
      body: {
        text: 'Steady, measured, deliberate',
        size: '1rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'VERIFIED',
        size: '0.75rem',
        weight: 700,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.2em',
      },
      caption: {
        text: 'Source: architectural analysis',
        size: '0.625rem',
        weight: 400,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '-0.02em',
      body: '0em',
      label: '0.2em',
    },
    lineHeight: {
      headline: 0.9,
      body: 1.5,
    },
    mildToIntense:
      'Mild: Newsreader at weight 300 with generous line-height 1.6. Intense: Inter only (no serif softness) at weight 700 with tight line-height 1.1.',
    rationale:
      'Serif headlines reference legal documents, financial journals, and institutional mastheads. Sans-serif body ensures functional legibility. The shift from serif warmth to pure sans at intense intensity removes all editorial softness -- pure functional authority remains.',
  },

  spacing: {
    scale: [
      { label: 'Micro', value: '4px' },
      { label: 'Base', value: '8px' },
      { label: 'Standard', value: '16px' },
      { label: 'Editorial', value: '32px' },
      { label: 'Major', value: '48px' },
    ],
    density: 'tight',
    mildToIntense:
      'Mild: 24px between sections for calm openness. Intense: 8px for maximum density and information authority.',
    rationale:
      'Strict 4px grid alignment communicates precision. Every element measured, nothing approximate. Architects measure to the millimeter -- trust demands the same rigor. Generous whitespace signals leisure; measured whitespace signals competence.',
  },

  motion: {
    duration: '250ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    character: 'restrained',
    bezierPoints: [0.4, 0, 0.2, 1],
    mildToIntense:
      'Mild: 400ms ease-out, gentle and unhurried. Moderate: 250ms standard material easing. Intense: 150ms linear, instantaneous and mechanical -- no personality, pure function.',
    rationale:
      'Trust movements are never bouncy or playful. They are deliberate, predictable, and smooth. A bank vault door does not bounce. Linear and ease-in curves communicate mechanical precision. Spring physics are forbidden.',
  },

  depth: {
    approach: 'tonal',
    levels: [
      {
        label: 'Surface',
        description: 'Level 0: Base canvas',
        background: '#f8fafb',
      },
      {
        label: 'Container',
        description: 'Level 1: Grouped content',
        background: '#dbf1fe',
      },
      {
        label: 'High Contrast',
        description: 'Level 2: Emphasis areas',
        background: '#cfe6f2',
      },
    ],
    shadowIfNeeded: '0 12px 32px rgba(25, 28, 29, 0.04)',
    ghostBorder: '1px solid rgba(194, 199, 204, 0.2)',
    rationale:
      'Shadows imply floating, which implies instability. Tonal layering implies stacking, which implies foundation. Trust is built from the ground up, not suspended in air. If a shadow is absolutely necessary, use high-blur low-opacity -- barely visible, highly diffused.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px' },
      { label: 'Subtle', value: '2px' },
      { label: 'Standard', value: '4px', recommended: true },
      { label: 'Container', value: '8px' },
    ],
    cornerStyle: 'smooth',
    mildToIntense:
      'Mild: 4px corners for subtle approachability. Intense: 2px or 0px for maximum architectural sharpness.',
    rationale:
      'Corners above 12px suggest friendliness and play. Trust requires precision. A 4px radius is the architectural equivalent of a chamfered edge -- intentional, not decorative. Pill shapes (rounded-full) are explicitly forbidden.',
  },

  layout: {
    alignment: 'asymmetric',
    density: 'dense',
    rationale:
      'Symmetry is expected. Asymmetry with large display anchoring left creates confident editorial hierarchy -- like a newspaper masthead or architectural blueprint. Structure is the ornament.',
  },

  iconography: {
    icons: [
      { name: 'shield', label: 'Protection' },
      { name: 'verified', label: 'Certainty' },
      { name: 'lock', label: 'Security' },
      { name: 'gavel', label: 'Authority' },
      { name: 'anchor', label: 'Stability' },
      { name: 'handshake', label: 'Reliability' },
    ],
    style:
      'Thin stroke (300 weight), angular, functional. No filled icons -- outlines only. No decorative or playful icons. Every icon must have a clear functional meaning.',
    weight: 300,
    fill: false,
    rationale:
      'Trust icons reference institutional and legal visual language. Thin strokes signal precision. Outlined (not filled) icons feel transparent and honest.',
  },

  rules: {
    dos: [
      'Monochromatic restraint',
      'Tonal nesting for depth',
      'Editorial white space',
      'Academic serif headers',
      'Strict 4px grid alignment',
      'Asymmetric left-anchored layout',
      'Architectural chamfer (4px) for containers',
      'Extreme typographic scale contrast',
    ],
    donts: [
      '1px divider lines',
      'Vibrant accent colors',
      'Standard drop shadows',
      'Rounded-full pills',
      'Bouncy or spring animations',
      'Warm colors -- cool slate only',
    ],
  },

  words: {
    words: [
      'Integrity',
      'Stability',
      'Order',
      'Manuscript',
      'Legacy',
      'Fidelity',
      'Proven',
      'Monolith',
    ],
    feel: 'stable, grounded, balanced -- like a firm handshake',
  },
};

// Self-register on import
registerAdvisory(TRUST_ADVISORY);

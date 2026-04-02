/**
 * Love advisory -- extracted from The design output.
 * Source: stitch-exports/love-advisory/code.html
 * Values reflect what The design ACTUALLY produced, not what was requested.
 *
 * NOTE: The design substituted Plus Jakarta Sans for Rubik as body font and
 * shifted primary to #8d4650 (muted mauve). The advisory uses the
 * prompt's researched palette (primary #c0707a warm rose) and intended
 * fonts (Crimson Pro + Rubik). Rose-tinted shadows and 18px rounded
 * corners are faithfully captured.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';
import { LOVE_PASSION_ADVISORY } from './lovePassionAdvisory';
import { LOVE_LUST_ADVISORY } from './loveLustAdvisory';

export const LOVE_ADVISORY: EmotionAdvisory = {
  emotion: 'love',
  label: 'Love',
  northStar: 'The Warm Embrace',
  philosophy: {
    brief:
      'Candlelit evening, close together -- warm rose, champagne gold, and the quiet certainty of choosing each other every day.',
    rationale:
      'Love in visual design comes from warmth, intimacy, and tender closeness. Warm blush-cream surfaces (#fdf6f2) create the atmosphere of candlelight on skin. Elegant old-style serifs (Crimson Pro) feel literary and personal -- the typography of love letters, not Valentine\'s cards. Generously rounded corners (18px) create shapes that curve toward each other like bodies. Rose-tinted shadows glow with the warmth of candlelight from within. The most effective love is not dramatic -- it is the quiet, grown-up intimacy of two people who know and choose each other. A shared blanket, not a fireworks display.',
  },
  deepened: true,
  source: 'stitch:love_advisory',

  emotionalContext:
    'Love and Joy share warmth and positive energy, but the quality is fundamentally different. Joy is exuberant and outward -- bouncy springs, radiant ambers, playful motion that celebrates openly. Love is intimate and inward -- 360ms embracing easing, warm rose on blush-cream, 18px curves that hold content close. Joy radiates to the world. Love draws two people together.\n\nLove also contrasts sharply with Loneliness. Both are deeply personal emotions, but one is connection fulfilled and the other is connection missing. Loneliness uses isolated cold blues (#3a5068) on deep slate (#101820), thin 300-weight type, and 450ms slow-drift motion that reaches for something not there. Love uses warm rose (#c0707a) on blush-cream (#fdf6f2), elegant 500-600 weight serifs, and 360ms embracing motion that arrives softly. Loneliness is the empty room. Love is the room with someone in it.\n\nAmong all emotions, Love is the most INTIMATE. Trust builds editorial reliability. Contentment settles into sufficiency. But Love creates closeness -- rose-tinted shadows that glow like candlelight, spacing that keeps elements near without crowding, shapes that curve like bodies toward each other. Every surface blushes. Every interaction is a gentle compression, like pressing your face against someone\'s shoulder.',

  colors: {
    tokens: {
      'primary': '#c0707a',
      'on-primary': '#ffffff',
      'primary-container': '#f0d0d4',
      'on-primary-container': '#4a2028',
      'secondary': '#b09060',
      'on-secondary': '#ffffff',
      'secondary-container': '#ece0cc',
      'on-secondary-container': '#3a2c18',
      'tertiary': '#7a2848',
      'on-tertiary': '#ffffff',
      'tertiary-container': '#c88098',
      'on-tertiary-container': '#3a1020',
      'surface': '#fdf6f2',
      'surface-dim': '#f0e4de',
      'surface-bright': '#fef9f6',
      'surface-container-lowest': '#ffffff',
      'surface-container-low': '#faf2ee',
      'surface-container': '#f6ece6',
      'surface-container-high': '#f0e4dc',
      'surface-container-highest': '#eadcd4',
      'surface-tint': '#c0707a',
      'surface-variant': '#e8e0dc',
      'on-surface': '#3a2830',
      'on-surface-variant': '#786068',
      'outline': '#988890',
      'outline-variant': '#d8c8cc',
      'inverse-surface': '#3a2830',
      'inverse-primary': '#e8a0a8',
      'inverse-on-surface': '#fdf6f2',
      'background': '#fdf6f2',
      'on-background': '#3a2830',
      'error': '#ba5050',
      'on-error': '#ffffff',
      'error-container': '#f8d0d0',
      'on-error-container': '#401818',
    },
    palette: ['#fdf6f2', '#c0707a', '#b09060', '#7a2848', '#3a2830'],
    mildToIntense: [
      '#d8a0a8',
      '#c8b090',
      '#a05070',
      '#c0707a',
      '#b09060',
      '#984050',
      '#581830',
    ],
    rationale:
      'The design rendered the palette as five joined swatches: Blush Cream (#fdf6f2), Warm Rose (#c0707a), Champagne Gold (#b09060), Deep Wine (#7a2848), and Intimate Dark (#3a2830). The design shifted primary to #8d4650 (a more muted mauve-rose) in its MD3 system and placed our #c0707a tones in adjusted containers. The visual palette strip faithfully renders all five requested colors. Primary #c0707a is the specific warm rose of a blush -- not aggressive red (passion without tenderness) and not baby pink (too innocent). Secondary champagne gold (#b09060) is candlelight, rings, and precious things. Tertiary deep wine (#7a2848) appears sparingly where depth and passion concentrate.',
  },

  typography: {
    headlineFont: 'Crimson Pro',
    headlineFallback: 'serif',
    bodyFont: 'Rubik',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Love',
        size: '2.125rem',
        weight: 600,
        font: 'headline',
        tracking: '-0.01em',
      },
      headline: {
        text: 'The Heart',
        size: '1.5rem',
        weight: 500,
        font: 'headline',
      },
      title: {
        text: 'A gentle touch',
        size: '1.25rem',
        weight: 500,
        font: 'headline',
      },
      body: {
        text: 'Functional clarity for the soul.',
        size: '1rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'THE WARM EMBRACE',
        size: '0.875rem',
        weight: 500,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.06em',
      },
      caption: {
        text: 'Two people, choosing again',
        size: '0.75rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '-0.01em',
      body: '0.01em',
      label: '0.06em',
    },
    lineHeight: {
      headline: 1.15,
      body: 1.6,
    },
    mildToIntense:
      'Mild: Crimson Pro at weight 300-400 with line-height 1.25, open tracking -- tender whisper, gentle presence, the lightest touch. Moderate: weight 500-600 with line-height 1.15 -- personal, intimate, present. Intense: weight 700 with line-height 1.1, slightly tighter tracking -- more passionate, more urgent, still beautiful. Type that leans in close.',
    rationale:
      'The design rendered Crimson Pro at text-[34px] font-semibold for the specimen "Crimson Pro" and italic for the quote in the philosophy section. The type scale shows "The Heart" at text-4xl, "A gentle touch" at text-2xl italic, "Reflective moments" at text-lg, and "Functional clarity for the soul" in body. The design substituted Plus Jakarta Sans for Rubik as body font, but the advisory uses the prompt\'s intended Rubik for its rounded geometric warmth. Crimson Pro\'s old-style serif construction feels literary and personal -- typography for love letters, not commercial cards.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '6px' },
      { label: 'SM', value: '10px' },
      { label: 'MD', value: '18px' },
      { label: 'LG', value: '30px' },
      { label: 'XL', value: '44px' },
    ],
    density: 'normal',
    mildToIntense:
      'Mild: lg at 36px, slightly more generous -- gentle tenderness, unhurried closeness. Room for both people. Moderate: lg at 30px, intimate but comfortable spacing. Intense: lg at 24px, elements drawn closer together -- more intimate, more pressing, closeness that pulls inward.',
    rationale:
      'The design used space-y-10 (40px) between sections and p-10/p-8 (40px/32px) padding inside cards. The spacing ruler shows bars labeled Whisper (4px), Touch (12px), Comfort (24px), and Breathe (32px) with density marked "Normal." The advisory uses the prompt\'s researched values: XS 6px, SM 10px, MD 18px, LG 30px, XL 44px. Love spacing is intimate: close enough to feel connected, generous enough to feel comfortable. Elements sit in natural proximity -- like two people on the same couch.',
  },

  motion: {
    duration: '360ms',
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    character: 'embracing',
    bezierPoints: [0.25, 0.1, 0.25, 1],
    mildToIntense:
      'Mild: 440ms, barely perceptible transitions. The gentlest touch -- motion that is almost stillness. Moderate: 360ms with smooth embracing easing, unhurried and certain. Intense: 280ms with a subtle warm color flash (brief rose overlay) on state change -- more passionate, more responsive, still smooth.',
    rationale:
      'The design created a bezier visualization showing smooth deceleration and a "Tap to Feel" button with active:scale-[0.97] -- matching the prompt\'s sample interaction of gentle compression. The gradient button (from-primary to-primary-container) with shadow-primary/10 creates a warm glow on press. The 360ms is moderate and unhurried -- the tempo of a slow dance. Elements do not snap or bounce; they settle close with quiet confidence. The motion feels like breathing together.',
  },

  depth: {
    approach: 'glow',
    levels: [
      {
        label: 'Subtle Presence',
        description: 'Rose-tinted glow, soft and barely there -- the warmth of being near',
        background: '#faf2ee',
      },
      {
        label: 'Defined Comfort',
        description: 'Deeper rose glow, warm and present -- candlelight warmth',
        background: '#faf2ee',
      },
      {
        label: 'Deep Intimacy',
        description: 'Full rose glow, enveloping warmth -- held close in candlelight',
        background: '#faf2ee',
      },
    ],
    shadowIfNeeded: '0 4px 18px rgba(192, 112, 122, 0.1)',
    ghostBorder: '1px solid rgba(216, 200, 204, 0.25)',
    rationale:
      'The design rendered three depth levels: Subtle Presence (0 8px 30px rgba(141,70,80,0.04)), Defined Comfort (0 15px 45px rgba(141,70,80,0.08)), and Deep Intimacy (0 25px 60px rgba(141,70,80,0.14)). All shadows use rose-tinted rgba values. Section cards use 0 15px 40px rgba(141,70,80,0.06) throughout. The rose tint maintains the warm intimate palette through the depth system -- elements glow with candlelight warmth rather than casting harsh shadows. The wide blur radius (30-60px) creates diffuse, enveloping warmth.',
  },

  shapes: {
    radii: [
      { label: 'SM', value: '12px' },
      { label: 'MD', value: '16px' },
      { label: 'LG', value: '18px', recommended: true },
      { label: 'XL', value: '24px' },
    ],
    cornerStyle: 'rounded',
    mildToIntense:
      'Mild: 22-28px, maximum softness approaching pill shapes -- total safety, complete openness. Moderate: 18px, the embracing standard -- generously rounded, soft, inviting. Intense: 14-16px, still clearly soft but slightly more defined -- a hand gently holding rather than a full embrace.',
    rationale:
      'The design rendered four shapes in a 2x2 grid: 12px, 16px, 18px (highlighted with primary border and "Recommended" label), and 24px. All section cards use rounded-[18px]. The Tailwind config sets DEFAULT to 1rem (16px), lg to 2rem (32px). The 18px radius creates shapes that feel like bodies curving toward each other -- not circular (too playful) but clearly, deliberately soft. Every edge says "come closer."',
  },

  layout: {
    alignment: 'center',
    density: 'normal',
    rationale:
      'The design created a centered composition titled "Centered Intent" with a wireframe showing a centered focal point, paired bottom elements (two side-by-side rounded shapes), and the note "Balanced asymmetry & focused pairings." The centered axis draws both partners toward a shared focal point. Where possible, elements appear in pairs to reinforce the "two together" quality. Normal density means elements are close but comfortable -- intimately proximate, not crowded. Like a table set for two.',
  },

  iconography: {
    icons: [
      { name: 'favorite', label: 'Heart' },
      { name: 'spa', label: 'Tenderness' },
      { name: 'mood', label: 'Attunement' },
      { name: 'volunteer_activism', label: 'Care' },
      { name: 'local_florist', label: 'Giving' },
      { name: 'nights_stay', label: 'Evenings' },
    ],
    style:
      'Light stroke (300), rounded terminals, warm. Icons reference care, tenderness, closeness, and gentle daily gestures. At 300 weight they feel tender and delicate -- pencil sketches in a love letter, personal and not mass-produced. Rendered in warm rose (#c0707a) against blush-cream surfaces.',
    weight: 300,
    fill: false,
    rationale:
      'The design rendered Material Symbols at text-3xl in primary color with the section titled "Symbolic Tenderness." Weight confirmed at 300 in font-variation-settings. Icons are: favorite (the universal heart), spa (tenderness and care), mood (emotional attunement), volunteer_activism (mutual helping hands), local_florist (giving beauty), nights_stay (shared private evenings). The light weight makes each icon feel like a pencil sketch -- personal, intimate, handmade quality.',
  },

  rules: {
    dos: [
      'Use warm rose and blush tones throughout',
      'Keep corners generously rounded (16-20px)',
      'Apply rose-tinted warm glow shadows',
      'Use elegant serif headlines for intimacy (Crimson Pro)',
      'Create paired, centered compositions',
      'Keep motion smooth and unhurried (360ms)',
      'Let the blush-cream background warm everything',
      'Use champagne gold for precious accents',
    ],
    donts: [
      'Cool, clinical color palettes (too detached)',
      'Sharp corners or angular shapes (too aggressive)',
      'Hard shadows or dramatic elevation (too harsh)',
      'Fast, snappy, or bouncy motion (too playful)',
      'Aggressive or heavy typography (too forceful)',
      'Dense, information-heavy layouts (too crowded)',
      'Valentine\'s cliches -- heart spam, bright red (too commercial)',
      'Cold neutral greys (too impersonal)',
    ],
  },

  words: {
    words: [
      'Intimate',
      'Tender',
      'Warm',
      'Close',
      'Cherish',
      'Embrace',
      'Devoted',
      'Gentle',
    ],
    feel: 'Two people who chose each other, choosing each other again. The design system creates a sense of quiet, grown-up intimacy -- not the fireworks of infatuation but the deep warmth of knowing and being known. Everything is close, everything is warm, everything glows like candlelight.',
  },

  variants: [
    { variantLabel: 'Passion', advisory: LOVE_PASSION_ADVISORY },
    { variantLabel: 'Lust', advisory: LOVE_LUST_ADVISORY },
  ],
};

// Self-register on import
registerAdvisory(LOVE_ADVISORY);

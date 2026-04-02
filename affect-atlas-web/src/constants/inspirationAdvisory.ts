/**
 * Inspiration advisory -- extracted from The design output.
 * Source: stitch-exports/inspiration-advisory/code.html
 * Values reflect what The design ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const INSPIRATION_ADVISORY: EmotionAdvisory = {
  emotion: 'inspiration',
  label: 'Inspiration',
  northStar: 'The Open Sky',
  philosophy: {
    brief:
      'A design language built on the belief that clarity precedes creation -- intentional air transforms functional tools into aspirational editorial experiences.',
    rationale:
      'Inspiration in visual design comes from buoyancy, democratic openness, and the vertical pull of possibility. The palette transitions from deep atmospheric blue to warm sunrise amber on a blue-tinted white canvas (#f7f9fd) that avoids sterile pure-white. Generous spacing is structural, not decorative. Geometric headlines (Sora) paired with warm humanist body (Figtree) create editorial tension -- professional yet approachable. The most effective inspiration does not shout -- it opens a door and lets the light in. An invitation, not a command.',
  },
  deepened: true,
  source: 'stitch:inspiration_advisory',

  emotionalContext:
    'Inspiration and Joy share light themes and upward energy, but the direction differs. Joy radiates outward in every direction (bouncy motion, saturated celebration, 24px pill shapes). Inspiration pulls UPWARD -- vertical, aspirational, focused on the horizon (buoyant motion, atmospheric blues, editorial asymmetry). Joy is a party. Inspiration is a clear morning.\n\nInspiration also diverges from Awe. Both involve expansive wonder, but Awe is cosmic and overwhelming (deep space indigo, luminous glows, 450ms drift). Inspiration is grounded and democratic (sky blue on white, tonal layering, 350ms buoyant rise). Awe makes you feel small before something vast. Inspiration makes you feel capable of something new.\n\nAmong all emotions, Inspiration is the most INVITATIONAL. Fear warns. Anger demands. Guilt confesses. But Inspiration opens -- it creates space for the viewer to step into. Its design reflects this openness: generous whitespace as structural element, asymmetric margins that create visual rhythm, glass layers that let content breathe through, and a "no-line" philosophy where borders are defined by tonal shifts rather than hard edges.',

  colors: {
    tokens: {
      'primary': '#034877',
      'on-primary': '#ffffff',
      'primary-container': '#2a6090',
      'on-primary-container': '#b9d9ff',
      'secondary': '#4e6074',
      'on-secondary': '#ffffff',
      'secondary-container': '#cfe1fa',
      'on-secondary-container': '#536479',
      'tertiary': '#683a00',
      'on-tertiary': '#ffffff',
      'tertiary-container': '#865013',
      'on-tertiary-container': '#ffcca0',
      'surface': '#f7f9fd',
      'surface-dim': '#d8dade',
      'surface-bright': '#f7f9fd',
      'surface-container-lowest': '#ffffff',
      'surface-container-low': '#f2f4f8',
      'surface-container': '#eceef2',
      'surface-container-high': '#e6e8ec',
      'surface-container-highest': '#e0e3e6',
      'surface-tint': '#2c6292',
      'surface-variant': '#e0e3e6',
      'on-surface': '#181c1f',
      'on-surface-variant': '#42474f',
      'outline': '#727780',
      'outline-variant': '#c2c7d0',
      'inverse-surface': '#2d3134',
      'inverse-primary': '#9bcbff',
      'inverse-on-surface': '#eff1f5',
      'background': '#f7f9fd',
      'on-background': '#181c1f',
      'error': '#ba1a1a',
      'on-error': '#ffffff',
      'error-container': '#ffdad6',
      'on-error-container': '#93000a',
    },
    palette: ['#f6f8fc', '#2a6090', '#5a5a80', '#c08040', '#1a2030'],
    mildToIntense: [
      '#f0f4f8',
      '#9bcbff',
      '#2a6090',
      '#034877',
      '#c08040',
      '#683a00',
      '#1a2030',
    ],
    rationale:
      'The design deepened the requested primary (#2a6090) to a richer #034877 and placed the original request as primary-container -- a smart move that gives the palette more range. The surface is #f7f9fd (blue-tinted white, not sterile #ffffff) which maintains the "Open Sky" atmosphere. Spark amber (#c08040) tertiary breaks the cool blue tone for enlightenment moments. The custom "brand-sky" (#f0f4f8), "brand-amber" (#c08040), and "brand-dark" (#1a2030) aliases create a three-point system: sky, light, earth. The mild-to-intense gradient runs from morning mist to midnight sky.',
  },

  typography: {
    headlineFont: 'Sora',
    headlineFallback: 'sans-serif',
    bodyFont: 'Figtree',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'The Boundless Horizon',
        size: '3.5rem',
        weight: 700,
        font: 'headline',
        tracking: '-0.02em',
      },
      headline: {
        text: 'Sora',
        size: '1.5rem',
        weight: 700,
        font: 'headline',
      },
      title: {
        text: 'Atmospheric Color',
        size: '1.125rem',
        weight: 600,
        font: 'headline',
      },
      body: {
        text: 'Clarity precedes creation -- intentional air transforms the functional into the aspirational.',
        size: '0.875rem',
        weight: 300,
        font: 'body',
      },
      label: {
        text: 'THE SPECTRUM',
        size: '0.625rem',
        weight: 700,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.15em',
      },
      caption: {
        text: 'Democratic possibility',
        size: '0.75rem',
        weight: 400,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '-0.02em',
      body: '0em',
      label: '0.15em',
    },
    lineHeight: {
      headline: 1.1,
      body: 1.6,
    },
    mildToIntense:
      'Mild: weight 300, line-height 1.7 -- light and airy, words float on the page. Moderate: weight 400-500, line-height 1.5 -- text settles into editorial confidence. Intense: weight 600-700, line-height 1.1 -- bold declarations, magazine headlines that command upward attention.',
    rationale:
      'The design rendered Sora in bold at 1.75rem for the header ("Inspiration") with tight tracking -- geometric, confident, clean. The philosophy heading "The Open Sky" uses 1.5rem bold with the amber accent on "Open" for emphasis. Figtree appears throughout as body text at font-light (300), creating the "Approachable Warmth" the prompt described. The pairing creates editorial tension: Sora\'s geometric authority versus Figtree\'s curved humanist terminals. Unlike Joy\'s celebratory Plus Jakarta Sans (rounded, playful), Inspiration\'s Sora is structured and forward-looking.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '16px' },
      { label: 'LG', value: '24px' },
      { label: 'XL', value: '40px' },
    ],
    density: 'generous',
    mildToIntense:
      'Mild: md 20px, lg 32px -- maximum air, the page breathes like a morning sky. Moderate: md 16px, lg 24px -- comfortable editorial rhythm. Intense: md 12px, lg 16px -- tighter but still airy, the urgency of a vision crystallizing.',
    rationale:
      'The design used gap-10 (40px) between major sections and gap-6 (24px) within sections -- generous throughout. The layout explicitly labels itself "Generous" density with "Asymmetric" flow. Cards use p-6 (24px) internal padding. Unlike Guilt\'s self-imposed compression or Anger\'s crushing density, Inspiration\'s spacing is deliberately expansive. White space is structural, not decorative -- the DESIGN.md calls it "Intentional Air."',
  },

  motion: {
    duration: '350ms',
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    character: 'uplifting',
    bezierPoints: [0.22, 1, 0.36, 1],
    mildToIntense:
      'Mild: 400ms, gentler easing -- elements drift upward like clouds. Moderate: 350ms, standard buoyant bezier -- confident rising. Intense: 280ms, sharper overshoot -- the surge of a sudden idea.',
    rationale:
      'The design created a dedicated .buoyant-bezier CSS class with the exact cubic-bezier(0.22, 1, 0.36, 1) easing. The CREATE button uses active:scale-[1.03] active:-translate-y-[3px] -- a RISING gesture (elements lift on press, opposite of Guilt\'s sinking). The Export button uses hover:scale-[1.03] -- breathing, expanding outward. The hero image uses a 2000ms scale transition on hover for a slow, expansive zoom. Unlike Fear\'s sharp panic (150ms, jarring) or Guilt\'s reluctant sink (300ms, downward), Inspiration rises. Everything moves UP.',
  },

  depth: {
    approach: 'tonal',
    levels: [
      {
        label: 'Spark',
        description: 'Subtle tinted shadow, element gently present',
        background: '#ffffff',
      },
      {
        label: 'Lift',
        description: 'Buoyant ambient shadow, card feels afloat',
        background: '#f2f4f8',
      },
      {
        label: 'Ascend',
        description: 'Full buoyant-deep shadow, element risen from surface',
        background: '#eceef2',
      },
    ],
    shadowIfNeeded: '0 8px 32px rgba(42, 96, 144, 0.08)',
    ghostBorder: '1px solid rgba(200, 208, 216, 0.2)',
    rationale:
      'The design created two custom shadow tokens: "buoyant" (0 8px 32px rgba(42,96,144,0.08)) and "buoyant-deep" (0 12px 40px rgba(42,96,144,0.12)). Both use the primary blue tint rather than black -- shadows glow rather than darken. The three elevation tiers (Spark, Lift, Ascend) progress from barely-there to fully buoyant. The DESIGN.md explicitly states: "If the shadow looks like a shadow, it\'s too dark; it should look like a glow of depth." Ghost borders at 20% opacity replace hard lines. Unlike Guilt\'s pressing inset shadows or Anger\'s crushing weight, Inspiration\'s shadows lift elements off the surface.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px' },
      { label: 'SM', value: '4px' },
      { label: 'MD', value: '8px' },
      { label: 'LG', value: '14px', recommended: true },
      { label: 'XL', value: '20px' },
    ],
    cornerStyle: 'smooth',
    mildToIntense:
      'Mild: 20px (soft, open, welcoming). Moderate: 14px (the signature inspiration radius). Intense: 8px (more focused, geometric precision as the idea sharpens).',
    rationale:
      'The design configured border-radius with xl at 14px and 2xl at 20px -- these are the signature shapes. The 14px radius appears on most interactive elements (buttons, inputs, cards) while 20px appears on hero containers and larger decorative shapes. The DESIGN.md explicitly calls out "lean into the 14px radius" as a core do. Unlike Joy\'s generous 24px pills or Anger\'s razor 0px, Inspiration\'s 14px is geometric but approachable -- structured enough to feel intentional, soft enough to feel inviting.',
  },

  layout: {
    alignment: 'left',
    density: 'sparse',
    rationale:
      'The design created a left-aligned editorial layout with explicit asymmetric composition. The DESIGN.md mandates asymmetrical margins (e.g., 24px left, 40px right). Content flows downward in a magazine-style single column with generous gaps. The hero image uses a gradient overlay (primary at 60% opacity) bleeding content into background -- the glass-header with backdrop-filter blur(12px) lets the sky show through. The wireframe section labels itself "Generous Flow." Unlike Guilt\'s sinking-to-bottom layout or Pride\'s centered ceremony, Inspiration\'s layout is an open page waiting to be filled.',
  },

  iconography: {
    icons: [
      { name: 'lightbulb', label: 'Idea' },
      { name: 'auto_awesome', label: 'Magic' },
      { name: 'palette', label: 'Hue' },
      { name: 'architecture', label: 'Draft' },
      { name: 'rocket_launch', label: 'Launch' },
      { name: 'draw', label: 'Sketch' },
    ],
    style:
      'Regular weight (400) with default grade (0). Icons feel clean and confident, rendered in primary blue at 30px -- large enough to be immediately readable, small enough to not dominate.',
    weight: 400,
    fill: false,
    rationale:
      'The design rendered icons in primary (#034877) at text-3xl -- prominent and clear. The 3-column grid with gap-6 gives each icon generous breathing room. Labels are concise and action-oriented: "Idea", "Magic", "Launch", "Sketch" -- each one a creative verb or noun, not an abstract concept. The icon set tells a creation story: idea -> magic -> palette -> draft -> launch -> sketch. Unlike Guilt\'s withdrawn icons (-25 grade, muted) or Anger\'s hostile weight (600+), Inspiration\'s icons are clear, approachable, and forward-looking.',
  },

  rules: {
    dos: [
      'Use asymmetric margins for editorial rhythm',
      'Prioritize white space as structural element (Intentional Air)',
      'Lean into 14px radius for the geometric-but-approachable feel',
      'Define boundaries through tonal shifts, not hard lines',
      'Use blue-tinted shadows that glow rather than darken',
      'Keep interactions buoyant (elements rise on press)',
      'Let Sora headlines contrast with Figtree body for editorial tension',
      'Use glass layers with backdrop blur for floating panels',
    ],
    donts: [
      'Heavy 1px solid borders to section content',
      'Rigid grid symmetry (use asymmetric flow)',
      'Crowded UI elements (generous spacing is non-negotiable)',
      'Pure black text or backgrounds (use blue-tinted darks)',
      'Harsh drop shadows (if it looks like a shadow, it is too dark)',
      'Bouncy playful motion (that is Joy, not Inspiration)',
      'Dense compressed spacing (that is Guilt or Frustration)',
      'Centered ceremonial compositions (that is Pride)',
    ],
  },

  words: {
    words: [
      'Possibility',
      'Clarity',
      'Uplift',
      'Horizon',
      'Ethereal',
      'Boundless',
      'Buoyant',
      'Democratic',
    ],
    feel: 'A clear morning with unlimited visibility. The sensation of standing at the edge of something new -- not the vertigo of Awe or the explosion of Joy, but the quiet confidence that you could build anything from here. Everything rises.',
  },
};

// Self-register on import
registerAdvisory(INSPIRATION_ADVISORY);

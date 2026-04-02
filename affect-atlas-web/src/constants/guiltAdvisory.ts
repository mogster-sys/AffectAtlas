/**
 * Guilt advisory -- extracted from The design output.
 * Source: stitch-exports/guilt-advisory/code.html
 * Values reflect what The design ACTUALLY produced, not what was requested.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const GUILT_ADVISORY: EmotionAdvisory = {
  emotion: 'guilt',
  label: 'Guilt',
  northStar: 'The Quiet Reckoning',
  philosophy: {
    brief:
      'The architecture of guilt is built on clarity and institutional permanence -- burden of intent, not explosion of feeling.',
    rationale:
      'Guilt in visual design comes from moral weight, restrained honesty, and the heavy pull of conscience. Desaturated maroon on dark gray-purple backgrounds creates the atmosphere of dusk in a quiet room. Slightly compressed spacing communicates an internal burden. Literary serifs feel like confessional prose. The most effective guilt is not punishing -- it is the design equivalent of sitting alone with what you know. A confession, not a sentence.',
  },
  deepened: true,
  source: 'stitch:guilt_advisory',

  emotionalContext:
    'Guilt and Sadness share dark palettes and heavy moods, but the weight is different. Sadness is loss -- passive, drifting, formless (Lora\'s soft serifs, blue-gray mist, 16px rounded corners). Guilt is accountability -- active, pressing, structured (Spectral\'s literary serifs, maroon sting, 6px contained corners). Sadness lets things fall apart. Guilt holds things together under pressure.\n\nGuilt also diverges from Anger. Both are weighted and dark, but Anger\'s weight is force directed outward (crushing density, explosive motion, razor edges). Guilt\'s weight is force directed INWARD (pressing density, reluctant motion, contained edges). Anger slams. Guilt sinks. Anger\'s Oswald shouts at weight 700. Guilt\'s Spectral confesses at weight 500.\n\nAmong all emotions, Guilt is the most SELF-AWARE. Fear is aware of the world. Anger is aware of the injustice. Sadness is aware of the loss. But Guilt is aware of the self -- specifically, aware that the self has done something wrong. Its design reflects this inwardness: elements positioned slightly below center (sinking), shadows that press down rather than lift up, typography that reads like confessional prose.',

  colors: {
    tokens: {
      'primary': '#6a3840',
      'on-primary': '#e8d8da',
      'primary-container': '#3a2028',
      'on-primary-container': '#d0a0a8',
      'secondary': '#485868',
      'on-secondary': '#d0d8e0',
      'secondary-container': '#2a3440',
      'on-secondary-container': '#a0b0c0',
      'tertiary': '#785040',
      'on-tertiary': '#e8d8d0',
      'tertiary-container': '#3a2820',
      'on-tertiary-container': '#c8a898',
      'surface': '#18161a',
      'surface-dim': '#121014',
      'surface-bright': '#201e22',
      'surface-container-lowest': '#0e0c10',
      'surface-container-low': '#1c1a1e',
      'surface-container': '#201e24',
      'surface-container-high': '#28262c',
      'surface-container-highest': '#2e2c32',
      'surface-tint': '#6a3840',
      'surface-variant': '#302c30',
      'on-surface': '#d0c8c4',
      'on-surface-variant': '#908880',
      'outline': '#585050',
      'outline-variant': '#302c30',
      'inverse-surface': '#d0c8c4',
      'inverse-primary': '#4a2028',
      'inverse-on-surface': '#18161a',
      'background': '#18161a',
      'on-background': '#d0c8c4',
      'error': '#a84040',
      'on-error': '#ffffff',
      'error-container': '#401818',
      'on-error-container': '#c89080',
    },
    palette: ['#18161a', '#6a3840', '#485868', '#785040', '#d0c8c4'],
    mildToIntense: [
      '#907078',
      '#687880',
      '#906860',
      '#6a3840',
      '#485868',
      '#4a2028',
      '#2a3440',
    ],
    rationale:
      'The design faithfully rendered the exact requested palette. Desaturated maroon (#6a3840) is the color of dried blood and old wounds -- not Anger\'s bright crimson (fresh, forceful) but the specific dark red of something that happened in the past and cannot be undone. Somber blue-gray (#485868) adds the distance of looking at a gray sky while thinking about what you did. Rust tertiary (#785040) is the stain metaphor. On dark gray-purple (#18161a), the palette reads as "confession written in dim light." The mild-to-intense gradient runs from uncomfortable-but-manageable to the sleepless night.',
  },

  typography: {
    headlineFont: 'Spectral',
    headlineFallback: 'serif',
    bodyFont: 'Public Sans',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'Burden of Intent.',
        size: '3.5rem',
        weight: 300,
        font: 'headline',
        tracking: '-0.04em',
      },
      headline: {
        text: 'Spectral',
        size: '2.5rem',
        weight: 400,
        font: 'headline',
      },
      title: {
        text: 'Conscience',
        size: '1.125rem',
        weight: 400,
        font: 'headline',
      },
      body: {
        text: 'The slow, inexorable weight of a moral compass turning inward.',
        size: '0.875rem',
        weight: 300,
        font: 'body',
      },
      label: {
        text: 'CONTRITE',
        size: '0.6875rem',
        weight: 500,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.2em',
      },
      caption: {
        text: 'It will not wash clean',
        size: '0.625rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '-0.04em',
      body: '0em',
      label: '0.2em',
    },
    lineHeight: {
      headline: 1.1,
      body: 1.5,
    },
    mildToIntense:
      'Mild: weights 300-400, line-height 1.6 -- guilt is present but not crushing. Moderate: weight 500, line-height 1.35 -- words have weight. Intense: weights 600-700, line-height 1.1 -- the words press down, each one heavier than the last.',
    rationale:
      'The design rendered Spectral in italic for the hero ("Burden of Intent.") at light weight 300 -- confessional, literary, introspective. The italic creates a handwritten-confessional quality that pure roman would miss. Public Sans appears as "The Moral Ledger" -- sterile, clear, unfeeling, used for facts and metadata. The design labeled the pairing "Confession vs Ledger" -- the emotional voice (Spectral) versus the institutional record (Public Sans). Unlike Anger\'s brutalist Oswald (which shouts), Guilt\'s Spectral quietly states.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '8px' },
      { label: 'MD', value: '14px' },
      { label: 'LG', value: '24px' },
      { label: 'XL', value: '36px' },
    ],
    density: 'tight',
    mildToIntense:
      'Mild: md 16px, lg 28px -- the weight is present but manageable, like carrying something you can still lift. Moderate: md 14px, lg 24px -- tighter than comfortable, the low ceiling you cannot quite stand up under. Intense: md 10px, lg 18px -- the walls close in, the compression is the physical sensation of a heavy chest.',
    rationale:
      'The design used space-y-lg (24px) between sections and space-y-sm (8px) within cards -- slightly compressed throughout. The spacing config defines md as 0.875rem (14px), confirming the tighter-than-standard gaps. Unlike Frustration\'s external compression (someone blocking your path), Guilt\'s compression is self-imposed. There is room to read, room to understand. But no room to be comfortable.',
  },

  motion: {
    duration: '300ms',
    easing: 'cubic-bezier(0.5, 0, 0.8, 0.5)',
    character: 'reluctant',
    bezierPoints: [0.5, 0, 0.8, 0.5],
    mildToIntense:
      'Mild: 360ms, smoother easing -- hesitation is present but subtle. Moderate: 300ms, uneven easing -- elements arrive without confidence, landing heavy. Intense: 240ms, more linear with abrupt stop -- the reckoning arrives whether you want it to or not.',
    rationale:
      'The design created a dedicated .reluctant-motion class with the exact cubic-bezier(0.5, 0, 0.8, 0.5) easing. The Amend button uses active:translate-y-2 active:scale-[0.98] -- a sinking, pressing gesture. Cards use hover:translate-y-1 -- even hovering pushes things down. The bottom nav transitions at 700ms, deliberately slow and heavy. Unlike Anger\'s explosive slam (force outward), Guilt sinks (force inward). The downward translate on every interaction is the physical metaphor: guilt pulls you down.',
  },

  depth: {
    approach: 'shadows',
    levels: [
      {
        label: 'Burden',
        description: 'Subtle pressing shadow, element rests heavy',
        background: '#201e24',
      },
      {
        label: 'Weight',
        description: 'Visible shadow-lg, card lifted but heavy',
        background: '#28262c',
      },
      {
        label: 'Reckoning',
        description: 'Inset sunken shadow -- content pressed INTO the surface',
        background: '#0e0c10',
      },
    ],
    shadowIfNeeded: 'inset 0 4px 12px rgba(0, 0, 0, 0.6)',
    ghostBorder: '1px solid rgba(48, 44, 48, 0.15)',
    rationale:
      'The design created a dedicated .sunken-shadow class (inset 0 4px 12px rgba(0,0,0,0.6)) for the heaviest level -- elements pressed INTO the surface rather than floating above it. The three shadow levels progress from subtle pressing (Burden) through visible weight (Weight, using shadow-lg) to full inset concavity (Reckoning). The bottom nav uses inset shadow too (inset 0 2px 4px rgba(0,0,0,0.6)). Unlike Pride\'s spotlit elevation or Joy\'s playful lift, Guilt\'s shadows all push DOWN and IN.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px' },
      { label: 'SM', value: '4px' },
      { label: 'MD', value: '6px', recommended: true },
      { label: 'LG', value: '10px' },
    ],
    cornerStyle: 'smooth',
    mildToIntense:
      'Mild: 8-10px (less tense, more reflective). Moderate: 6px (standard guilt containment). Intense: 3-4px (the edges of conscience cut closer).',
    rationale:
      'The design set DEFAULT and md radius to 0.375rem (6px), confirming the contained corner approach. The 6px sits between comfort emotions (Contentment\'s 16px, Joy\'s 24px) and hostility (Anger\'s 0px). Shapes hold their boundaries tightly -- contained and measured, like someone sitting with arms crossed.',
  },

  layout: {
    alignment: 'left',
    density: 'normal',
    rationale:
      'The design created a left-aligned layout with the hero text ("Burden of Intent.") positioned at the BOTTOM of a tall header section (justify-end, h-[486px]) -- elements sink to the bottom rather than rising to the top. The emotional context section compares Guilt to Sadness and Anger in a grid, positioning Guilt as the inward-directed middle ground. Left alignment reads as written confession -- prose flowing naturally down the page.',
  },

  iconography: {
    icons: [
      { name: 'person_off', label: 'Alienation' },
      { name: 'cloud', label: 'Obscurity' },
      { name: 'visibility_off', label: 'Aversion' },
      { name: 'replay', label: 'Compulsion' },
      { name: 'undo', label: 'Regret' },
      { name: 'sentiment_dissatisfied', label: 'Sorrow' },
    ],
    style:
      'Regular weight (400) with -25 grade -- slightly thinner and less present than standard. Icons feel withdrawn and recessive, echoing the way guilt makes you want to shrink from view.',
    weight: 400,
    fill: false,
    rationale:
      'The design rendered icons in on-surface-variant (#908880) -- deliberately muted, not prominent. The 3-column grid with generous spacing gives each icon room but no emphasis. Labels are evocative rather than functional: "Alienation" not "person_off", "Compulsion" not "replay". The -25 grade (confirmed in CSS font-variation-settings) makes icons thinner than standard -- present but retreating.',
  },

  rules: {
    dos: [
      'Use asymmetric vertical sinks (elements settle below center)',
      'Keep typography literary and confessional (Spectral italic)',
      'Apply slight spacing compression throughout',
      'Use pressing/sinking shadows (inset at heavy level)',
      'Maintain muted desaturated warm-dark palettes',
      'Frame actions as repair not punishment ("Amend" not "Delete")',
      'Let the moral weight be quiet, not shouting',
      'Use reluctant, hesitant motion (300ms, weak landing)',
    ],
    donts: [
      'Playful rounded pills or bouncy motion',
      'Bright saturated accents (reads as Anger)',
      'Aggressive all-caps condensed heavy type',
      'Pure black backgrounds (reads as nihilism)',
      'Large dramatic shadows or glowing effects',
      'Centered ceremonial compositions (that is Pride)',
      'Fast explosive motion (that is Anger)',
      'Manipulative confirmshaming copy patterns',
    ],
  },

  words: {
    words: [
      'Reckoning',
      'Weight',
      'Conscience',
      'Burden',
      'Reflection',
      'Amends',
      'Contrite',
      'Somber',
    ],
    feel: 'The morning after. A sense of heavy quiet -- not despair, but the honest, uncomfortable weight of knowing you need to make something right. Nothing punishes. Everything waits.',
  },
};

// Self-register on import
registerAdvisory(GUILT_ADVISORY);

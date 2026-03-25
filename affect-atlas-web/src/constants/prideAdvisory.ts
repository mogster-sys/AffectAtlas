/**
 * Pride advisory -- extracted from Stitch output.
 * Source: stitch-exports/pride-advisory/code.html
 * Values reflect what Stitch ACTUALLY produced, not what was requested.
 *
 * NOTE: Stitch shifted primary to #dab9ff (light lavender) and placed
 * our #6a3ca0 as primary-container. Secondary shifted to #f0c047
 * (brighter gold). Advisory uses prompt's researched palette for tokens.
 * Spotlit purple and gold shadows are faithfully captured.
 */

import type { EmotionAdvisory } from './advisoryData';
import { registerAdvisory } from './advisoryData';

export const PRIDE_ADVISORY: EmotionAdvisory = {
  emotion: 'pride' as any,
  label: 'Pride',
  northStar: 'The Elevated Stage',
  philosophy: {
    brief:
      'An awards ceremony at twilight -- regal purple, ceremonial gold, and the quiet confidence of earned prominence.',
    rationale:
      'Pride in visual design comes from elevation, warmth, and institutional gravitas. Rich purples and golds on deep regal backgrounds create the atmosphere of ceremony and honor. Centered compositions with generous clearspace communicate importance through isolation -- the hero element stands alone because it has earned that space. Slab serifs (Bitter) feel carved and permanent, like inscriptions on monuments. The most effective pride is not ostentatious -- it is the confident restraint of someone who knows their achievement speaks for itself. An awards stage, not a circus.',
  },
  deepened: true,
  source: 'stitch:pride_advisory',

  emotionalContext:
    'Pride and Joy share warmth and positive energy, but the expression is opposite. Joy is exuberant and generous -- bouncy springs, warm ambers, 24px rounded corners, playful motion that celebrates freely. Pride is dignified and earned -- ceremonial 320ms transitions, regal purple and gold, 8px smooth corners, every movement a processional. Joy radiates outward like a sunbeam. Pride elevates upward like a podium rising.\n\nPride also inverts Anger. Both are powerful and confident emotions, but their power manifests differently. Anger is hostile and compressed -- 0px razor corners, crushing density, 150ms explosive snaps. Pride is elevated and spacious -- 8px smooth corners, generous clearspace, 320ms ceremonial arrivals. Anger demands through force. Pride commands through presence. Anger\'s Oswald screams in condensed uppercase. Pride\'s Bitter declares in sturdy slab serifs.\n\nAmong all emotions, Pride is the most VERTICAL. Trust builds horizontal editorial grids. Sadness drifts formlessly. Joy bounces in all directions. Pride builds upward -- podium steps, trophy pedestals, cathedral spires. The strong center axis and hierarchical composition mean one element always stands tallest, and everything else supports it. This is the emotion of earned prominence: not arrogance, but the quiet confidence of having done something worth celebrating.',

  colors: {
    tokens: {
      'primary': '#6a3ca0',
      'on-primary': '#ffffff',
      'primary-container': '#3a2060',
      'on-primary-container': '#d8c0f0',
      'secondary': '#c49820',
      'on-secondary': '#0e0c14',
      'secondary-container': '#4a3810',
      'on-secondary-container': '#f0d880',
      'tertiary': '#a83040',
      'on-tertiary': '#ffffff',
      'tertiary-container': '#4a1820',
      'on-tertiary-container': '#f0b0b8',
      'surface': '#0e0c14',
      'surface-dim': '#0a0810',
      'surface-bright': '#181420',
      'surface-container-lowest': '#060408',
      'surface-container-low': '#121018',
      'surface-container': '#161220',
      'surface-container-high': '#1c1828',
      'surface-container-highest': '#221e30',
      'surface-tint': '#6a3ca0',
      'surface-variant': '#2e2840',
      'on-surface': '#e8e4f0',
      'on-surface-variant': '#a8a0b8',
      'outline': '#5a5068',
      'outline-variant': '#2e2840',
      'inverse-surface': '#e8e4f0',
      'inverse-primary': '#4a2878',
      'inverse-on-surface': '#0e0c14',
      'background': '#0e0c14',
      'on-background': '#e8e4f0',
      'error': '#d04040',
      'on-error': '#ffffff',
      'error-container': '#401010',
      'on-error-container': '#d08080',
    },
    palette: ['#0e0c14', '#6a3ca0', '#c49820', '#a83040', '#e8e4f0'],
    mildToIntense: [
      '#a888c8',
      '#d8b860',
      '#c87080',
      '#6a3ca0',
      '#c49820',
      '#4a2078',
      '#a07810',
    ],
    rationale:
      'Stitch rendered the palette as five tall swatches: Surface Deep (#0e0c14), Sovereign Purple (#6a3ca0), Ceremonial Gold (#c49820), Regal Red (#a83040), and Archival White (#e8e4f0). The 7-step intensity gradient shifts through purples from #14121a (near-black) through #6a3ca0 to #dab9ff (light lavender). Regal purple is the historic color of royalty, ceremony, and elevated status. Ceremonial gold is the universal color of achievement -- medals, trophies, gilded frames. The warm undertone in the darks is critical: Fear\'s darkness is cold and clinical, Anger\'s darkness is charred and hostile, but Pride\'s darkness is rich and velvety.',
  },

  typography: {
    headlineFont: 'Bitter',
    headlineFallback: 'serif',
    bodyFont: 'Manrope',
    bodyFallback: 'sans-serif',
    scale: {
      display: {
        text: 'PRIDE',
        size: '2.4rem',
        weight: 700,
        font: 'headline',
        tracking: '-0.01em',
      },
      headline: {
        text: 'Ceremony',
        size: '1.6rem',
        weight: 600,
        font: 'headline',
      },
      title: {
        text: 'Achievement',
        size: '1.25rem',
        weight: 500,
        font: 'headline',
      },
      body: {
        text: 'Earned prominence, confident restraint.',
        size: '1rem',
        weight: 400,
        font: 'body',
      },
      label: {
        text: 'DISTINCTION',
        size: '0.8rem',
        weight: 600,
        font: 'body',
        transform: 'uppercase',
        tracking: '0.08em',
      },
      caption: {
        text: 'The stage is set',
        size: '0.75rem',
        weight: 300,
        font: 'body',
      },
    },
    letterSpacing: {
      headline: '-0.01em',
      body: '0.01em',
      label: '0.08em',
    },
    lineHeight: {
      headline: 1.05,
      body: 1.55,
    },
    mildToIntense:
      'Mild: Bitter at weight 400-500 with line-height 1.3, letter-spacing 0 -- quiet confidence, understated achievement. Moderate: weight 600 with line-height 1.1, slight negative tracking. Intense: weight 700 with line-height 1.0, tracking -0.02em -- declarations, not suggestions. Type carved into the stone of permanence.',
    rationale:
      'Stitch rendered Bitter at text-5xl font-bold for the hero "DESIGN ADVISORY" and text-4xl font-bold for the specimen "Bitter Slab." The type scale shows Display "PRIDE" at text-2xl, Headline "Achievement" at text-lg, both in Bitter. Body "Permanent Archive" and labels in Manrope. The italic quote "An awards ceremony at twilight" uses Bitter italic. Section headers like "TONAL SOVEREIGNTY" and "EDITORIAL AUTHORITY" show Bitter at text-xl in secondary gold. Slab serifs signal institutional weight and earned permanence -- type carved into stone rather than typed on a screen.',
  },

  spacing: {
    scale: [
      { label: 'XS', value: '4px' },
      { label: 'SM', value: '10px' },
      { label: 'MD', value: '20px' },
      { label: 'LG', value: '36px' },
      { label: 'XL', value: '52px' },
    ],
    density: 'generous',
    mildToIntense:
      'Mild: lg at 28px, slightly tighter, more approachable, less formal -- quiet achievement that does not need a stage. Moderate: lg at 36px, ceremonial spacing, each element has room to breathe. Intense: lg at 44px, maximum clearspace -- every element is a monument. Museum-quality isolation.',
    rationale:
      'Stitch used space-y-12 (48px) between sections and p-6 (24px) padding inside cards -- generous and presidential. The spacing ruler shows vertical bars of increasing height in secondary gold for XS through XL. The note reads: "Generous clearspace is a luxury. In the Archive, we breathe with prestige." The hero section has mb-16 (64px) below it. This is the opposite of Anger\'s crushing density and Frustration\'s cramped obstruction. Pride gives space as a mark of status.',
  },

  motion: {
    duration: '320ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    character: 'ceremonial',
    bezierPoints: [0.4, 0, 0.2, 1],
    mildToIntense:
      'Mild: 400ms, very smooth, almost meditative. Achievement acknowledged quietly. Moderate: 320ms with ceremonial easing, confident arrivals. Intense: 250ms, crisper, with slight upward lift overshoot to 1.03 -- the crowd is cheering.',
    rationale:
      'Stitch created a .transition-ceremonial class with 320ms cubic-bezier(0.4, 0, 0.2, 1). The ELEVATE card uses hover:scale-[1.02] hover:-translate-y-2 -- elements RISE on interaction. "HOVER TO MATERIALIZE" -- the upward lift is uniquely Pride\'s. While Anger slams down and Sadness drifts away, Pride rises. The export button uses hover:scale-105 active:scale-95. The 320ms gives elements time to be noticed arriving -- faster would feel casual (Joy\'s springs), slower would feel hesitant (Guilt\'s reluctant dragging). Everything is gravitas.',
  },

  depth: {
    approach: 'shadows',
    levels: [
      {
        label: 'Pedestal',
        description: 'Purple-tinted spotlight, element gently illuminated from above',
        background: '#161220',
      },
      {
        label: 'Podium',
        description: 'Deeper purple spotlight, element elevated and prominent',
        background: '#161220',
      },
      {
        label: 'Spotlight',
        description: 'Gold-tinted spotlight, element gilded with ceremonial warmth',
        background: '#161220',
      },
    ],
    shadowIfNeeded: '0 12px 48px rgba(106, 60, 160, 0.15)',
    ghostBorder: '1px solid rgba(46, 40, 64, 0.15)',
    rationale:
      'Stitch created .spotlit-shadow-purple (0 12px 48px rgba(106,60,160,0.15)) and .spotlit-shadow-gold (0 12px 48px rgba(240,192,71,0.1)). The three depth cards show: Pedestal at 0 12px 48px rgba(106,60,160,0.2), Podium at 0 24px 64px rgba(106,60,160,0.3) -- deeper and more dramatic, and Spotlight at 0 12px 48px rgba(240,192,71,0.15) with a secondary gold border. The gold-tinted heavy shadow is the signature move: the most important elements feel literally gilded. Unlike Anger\'s crushing black shadows or Frustration\'s hard industrial offsets, Pride\'s shadows lift elements up into the light.',
  },

  shapes: {
    radii: [
      { label: 'None', value: '0px' },
      { label: 'SM', value: '4px' },
      { label: 'MD', value: '8px', recommended: true },
      { label: 'LG', value: '16px' },
    ],
    cornerStyle: 'smooth',
    mildToIntense:
      'Mild: 10-12px (warmer, more approachable). Moderate: 8px (ceremonial standard). Intense: 4-6px (more monumental, more institutional -- like cornerstones and columns).',
    rationale:
      'Stitch rendered four shapes in a 2x2 grid: SHARP (0), SOFT (4px), PRIDE (8px, highlighted with secondary border and bold gold text), and ROUND (16px). The section title is "GEOMETRIC DIGNITY." 8px is the ceremonial standard: enough softness to feel refined, enough structure to feel permanent. Compare to Joy\'s 24px (too casual), Anger\'s 0px (too hostile), Trust\'s 12px (too editorial). Pride\'s 8px says it was designed with care.',
  },

  layout: {
    alignment: 'center',
    density: 'sparse',
    rationale:
      'Stitch created a centered hierarchical layout titled "AXIAL HIERARCHY." The wireframe shows a strong vertical center axis (rendered as a 1px line) with a gold accent at the apex, a wide hero element below, a narrower sub-element, then a 3-column grid at the bottom. The centered composition is uniquely Pride\'s. Trust uses measured left-aligned grids. Anger shoves things asymmetrically. But Pride centers -- because ceremony centers. The hero section uses mb-16 (64px) for maximum clearspace.',
  },

  iconography: {
    icons: [
      { name: 'military_tech', label: 'Honor' },
      { name: 'workspace_premium', label: 'Premium' },
      { name: 'shield', label: 'Shield' },
      { name: 'emoji_events', label: 'Triumph' },
      { name: 'star', label: 'Star' },
      { name: 'diamond', label: 'Prestige' },
    ],
    style:
      'Medium weight (500), symbolic, ceremonial. Icons reference achievement, status, and protection -- medals, trophies, shields, crowns. Gold color for all icons reinforces the ceremonial-achievement theme.',
    weight: 500,
    fill: false,
    rationale:
      'Stitch rendered Material Symbols at text-3xl in secondary gold with the section titled "SIGILS" -- a word choice that reinforces the ceremonial, heraldic quality. The star icon uses FILL 1 (filled) while others are outlined. Icons are: military_tech (honor medal), workspace_premium (premium badge), shield (protection), emoji_events (trophy), star (distinction), diamond (prestige). Weight at 500 is substantial without being aggressive. Gold rendering is the key differentiator -- where other emotions use on-surface or primary for icons, Pride uses secondary gold because achievement is the central metaphor.',
  },

  rules: {
    dos: [
      'Center key elements for ceremonial hierarchy',
      'Use generous clearspace around hero content',
      'Apply gold accents for achievement markers',
      'Keep typography sturdy and proclamation-like (Bitter slab serifs)',
      'Use spotlit shadows that illuminate from above',
      'Create strong vertical axis throughout',
      'Make headlines feel like declarations',
      'Use generous padding as a mark of status',
    ],
    donts: [
      'Chaotic asymmetric layouts (too informal)',
      'Vivid neon or playful bouncy motion (Joy territory)',
      'Cool muted palettes (too subdued for ceremony)',
      'Thin light typography weights (too fragile)',
      'Cramped spacing or dense grids (too common)',
      'Small margins that undercut importance',
      'Aggressive sharp corners (too hostile)',
      'Decorative flourishes (pride is earned, not performed)',
    ],
  },

  words: {
    words: [
      'Achievement',
      'Elevation',
      'Dignity',
      'Ceremony',
      'Confidence',
      'Honor',
      'Stature',
      'Triumph',
    ],
    feel: 'Standing at the top of the stairs, looking out over the audience. The design system creates a sense of earned prominence -- not arrogance, but the quiet confidence of having done something worth celebrating.',
  },
};

// Self-register on import
registerAdvisory(PRIDE_ADVISORY);

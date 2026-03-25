/**
 * Design guidance extracted from Stitch's DESIGN.md reasoning files.
 * Each entry preserves the Creative North Star, philosophy, and key
 * do's / don'ts that Stitch used when crafting the screen.
 *
 * Surfaced in the preview screen as suggestions and included
 * in AI prompt exports.
 */

import type { EmotionType, Intensity } from '@/types/emotion';

export interface DesignGuidance {
  northStar: string;
  philosophy: string;
  dos: string[];
  donts: string[];
}

/**
 * Keyed by "emotion:intensity" — same pattern as designTokens.ts.
 */
const GUIDANCE: Record<string, DesignGuidance> = {
  // ─── JOY ──────────────────────────────────────────
  'joy:mild': {
    northStar: 'The Sun-Drenched Atrium',
    philosophy:
      'Sun-lit room: airy, weightless, optimistic editorial warmth with expansive whitespace.',
    dos: [
      'Use asymmetrical margins for editorial feel',
      'Embrace generous whitespace — let elements breathe',
      'Layer warm tones (amber, gold, cream) with soft tonal depth',
      'Favor rounded shapes — circles, soft pills, and curves signal approachability',
      'Choose humanist or rounded sans-serifs with softer terminals',
      'Use light to medium font weights at larger sizes — airy, open type',
      'Use muted/light yellows (butter, cream, honey) for large areas — save intense yellow for small highlights',
      'Apply 60-30-10 rule: warm neutral base (60%), one warm hero color (30%), bright accent (10%)',
      'Use simple friendly icons (stars, suns, confetti) for delight moments',
    ],
    donts: [
      'No pure black — use warm on-surface tones like #322f20',
      'No 1px solid borders — use tonal shifts instead',
      'No standard drop shadows — use warm upward Y-offset shadows only',
      'No sharp angles or jagged shapes — they subconsciously hint at danger',
      'No large full-screen bright yellow backgrounds — causes eye strain',
      'No yellow text on light backgrounds — pair yellow with dark text (charcoal, navy)',
    ],
  },
  'joy:moderate': {
    northStar: 'The Sun-Drenched Atrium',
    philosophy:
      'Sun-soaked morning with expansive editorial feel. Intentional asymmetry and tonal immersion.',
    dos: [
      'Use display-lg for short impactful phrases',
      'Embrace asymmetrical layouts — offset headlines',
      'Add 20% more whitespace than feels necessary',
      'Circular buttons, pill-shaped chips, rounded cards, curved dividers',
      'Use micro-animations for delight — checkmarks popping, subtle confetti on success',
      'Shift yellows toward amber/mustard for better readability on mobile',
      'Pair warm accents with plenty of white or light neutrals to avoid visual fatigue',
      'Add small expressive typographic touches — occasional playful display fonts sparingly',
    ],
    donts: [
      'No pure black — use on-surface #322f20',
      'No 1px solid borders',
      'No standard drop shadows — warm upward Y-shadows only',
      'No rigid condensed typefaces — they feel tense, not cheerful',
      'No heavy darks in large areas — they dampen the mood',
      'No overloading warm color — small bursts on neutral base, not wall-to-wall saturation',
    ],
  },
  'joy:intense': {
    northStar: 'The Sun-Drenched Festival',
    philosophy:
      'Peak human emotion — explosive, radiant, weightless. Festival energy with editorial restraint.',
    dos: [
      'Lean into overwhelming warmth and saturated amber/gold',
      'Use extreme typographic scale contrast',
      'Overlap elements for festival energy',
      'Subtle bounces and easing-out transitions on positive actions',
      'Use organic blob shapes and curved dividers for maximum warmth',
      'Select joyful imagery — upward curves, natural light, vibrant palettes',
      'Reserve strongest yellow/orange for primary actions and highlights',
    ],
    donts: [
      'No cold greys — tint everything warm',
      'No standard card layouts — break the grid',
      "No subtle effects — this is the loudest joy gets, don't hold back",
      'No V-shapes or spikes — they create alertness and tension',
      'No dense long paragraphs on bright yellow — keep body text in dark neutrals',
      'No standard easing — use bouncy spring curves for celebrations',
    ],
  },

  // ─── TRUST ────────────────────────────────────────
  'trust:mild': {
    northStar: 'The Stoic Monolith',
    philosophy:
      'Architectural Clarity — permanence, stability, authority. A building you trust will not fall.',
    dos: [
      'Align to strict 4px grid — every element measured',
      'Use Newsreader serif for institutional gravitas',
      'Maintain consistent spacing scale throughout',
    ],
    donts: [
      'No rounded corners > 4px — suggests playfulness',
      'No bright accents — use weight and scale, not color',
      'No shadows for depth — use tonal shifts instead',
    ],
  },
  'trust:moderate': {
    northStar: 'The Modern Monolith',
    philosophy:
      'Firm handshake — steady, professional, unwavering. Monochromatic sophistication.',
    dos: [
      'Embrace asymmetry with large display anchoring left',
      'Use monochromatic palette with blue-gray tones',
      'Treat data and precision as primary ornament',
    ],
    donts: [
      'No decorative elements — ornament through structure',
      'No warm colors — cool blue-slate only',
      'No bouncy animations — linear or ease-in only',
    ],
  },
  'trust:intense': {
    northStar: 'The Architectural Anchor',
    philosophy:
      'Digital vault — extreme contrast, unwavering alignment. Absolute structural certainty.',
    dos: [
      'Use extreme typographic contrast (large headline + small label)',
      'Align everything to strict spacing scale',
      'Embrace monochromatic blue-gray palette',
    ],
    donts: [
      'No border-radius above 4px',
      'No organic or bouncy micro-interactions',
      'No soft grey — every color needs blue/slate tint',
    ],
  },

  // ─── FEAR ─────────────────────────────────────────
  'fear:mild': {
    northStar: 'The Hushed Twilight',
    philosophy:
      'A fog rolling over a violet landscape — intentional, understated, slightly unsettling. Surfaces float and bleed into one another.',
    dos: [
      'Embrace asymmetry — align text far left, leave right 40% empty to evoke the unknown',
      'Use slow transitions (300-500ms) with ease-in-out to mimic cautious movement',
      'Layer transparent surfaces of surface-variant to create complex moody purples',
      'Use thin font weights (light/thin) for vulnerability',
      'Use extreme typographic contrast — massive display headers vs. microscopic labels',
    ],
    donts: [
      'No pure white — use twilight tones like #FAF9F9 or #F5DDFF',
      'No hard shadows — too physical and grounded for this ethereal system',
      'No standard 16px padding — use tight clusters (0.5rem) and wide section breaks (4rem)',
      'No dramatic misalignment — subtle unease only',
    ],
  },
  'fear:moderate': {
    northStar: 'The Constricted Corridor',
    philosophy:
      'Narrowing space — intense, hyper-vigilant squeeze. Claustrophobic tension through layout.',
    dos: [
      'Tighten spacing — create sense of walls closing in',
      'Use high-contrast purple on dark background',
      'Embrace intentional asymmetry suggesting instability',
    ],
    donts: [
      'No warm colors — cold violets and grays only',
      'No large gutters — max spacing-4',
      'No rounded corners — sharp edges increase tension',
    ],
  },
  'fear:intense': {
    northStar: 'Emergency Crisis in the Dark',
    philosophy:
      'Blackout + strobes — high-stakes industrial urgency. A system under extreme pressure.',
    dos: [
      'Stay sharp — every corner 0px',
      'Embrace the dark — 90% of surface range in dark tones',
      'Use high contrast for critical elements',
    ],
    donts: [
      'No pure white — use tinted on-surface',
      'No rounded corners — even 2px is too friendly',
      'No large gutters — max spacing-4 for claustrophobia',
    ],
  },

  // ─── SURPRISE ─────────────────────────────────────
  'surprise:mild': {
    northStar: 'The Gentle Double-Take',
    philosophy:
      'A mild "oh!" — unexpected but not jarring. Soft pastels with playful asymmetry.',
    dos: [
      'Mix radii playfully (8-16px) — gentle variety',
      'Use soft pastel gradients — pale pink to pale cyan',
      'Off-center placement — not chaotic, just unexpected',
      'Subtly interrupt repeating grids or rhythms — broken patterns feel surprising',
      'Easter eggs and hidden interactions — elements that react only when explored',
      'Whimsical palette: teal, coral, lilac — playful, imaginative, nudges exploration',
      'Nonlinear motion curves: slight overshoot or bounce gives "startle then settle"',
      'One word in a different typeface or orientation punctuates with surprise',
    ],
    donts: [
      'No sharp corners — keep everything soft at mild level',
      'No high contrast — muted purple-gray text',
      'No dramatic scale shifts — subtle size variation only',
      'No random surprises — tie to user intent, trigger after clear actions',
      'No screen-wide disruptions — keep surprise lightweight and localized',
      'No walls of saturated color — keep bold hues as small accents on neutral base',
    ],
  },
  'surprise:moderate': {
    northStar: 'The Sudden Flash',
    philosophy:
      'Physiological surprise — disorientation, electric pulse. A camera flash in a dark room.',
    dos: [
      'Use high-contrast magenta/cyan pairings',
      'Embrace asymmetry — offset elements dramatically',
      'Mix serif display with geometric body for contrast',
      'Exaggerated scale and proportion — oversized elements or extreme cropping',
      'Juxtaposition: put things together that "don\'t belong" for cognitive surprise',
      'Timed reveals: content that appears just after key actions (confetti, witty loading)',
      'Bright accents against dark fields (neon on charcoal) generate visual "pops"',
      'Animated button states: scaling, color shifts, playful morphs on interaction',
    ],
    donts: [
      'No standard grey shadows — tint with blue/magenta',
      'No consistent spacing — vary rhythm for disorientation',
      "No centered layouts — surprise doesn't sit still",
      'No predictable motion — easing should overshoot, bounce, or briefly pause',
      'No generic spinners — custom loaders inject surprise into waiting states',
    ],
  },
  'surprise:intense': {
    northStar: 'The Controlled Explosion',
    philosophy:
      'Lightning-bolt moment — jarringly bold yet premium. Maximum visual impact with editorial control.',
    dos: [
      'Lean into overwhelming scale — huge display type',
      'Overlap elements for explosive energy',
      'Use high-energy color pairings (magenta + cyan)',
      'Firework palette: scarlet, vivid orange, saturated purples — dramatic, explosive',
      'Sharp angles, sudden directional changes, visual "bursts" echo startle reflex',
      'Success celebrations: confetti bursts, fireworks, animated icons on completion',
      'Pop-art brights: electric blue + hot pink + neon yellow — immediately surprising',
      'Keep animations short (150-400ms) and GPU-friendly (transforms, opacity)',
    ],
    donts: [
      'No consistent corner radius — mix 0px and 48px',
      'No 1px dividers — use tonal shifts',
      "No centered layouts — don't let it feel stable",
      'No soft continuous forms — sharp angles and bursts are the startle language',
      'No constant running animations — surprise works because it is rare and well-timed',
      'No layout-triggering animation properties — avoid animating size/position, use transforms',
    ],
  },

  // ─── SADNESS ──────────────────────────────────────
  'sadness:mild': {
    northStar: 'The Rain-Streaked Window',
    philosophy:
      'Contemplative stillness watching rain blur the world. Not crying — just quiet.',
    dos: [
      'Use massive whitespace — words feel distant, drifting',
      'Choose light serif fonts (Newsreader Light, EB Garamond Thin)',
      'Keep everything at low contrast — visible but not assertive',
      'Desaturated blues, blue-grays, and cool purples for melancholy',
      'Downturned or drooping curves echo facial expressions of sadness',
      'Thin, fragile lines and slight asymmetry suggest vulnerability',
      'Small content islands in large empty canvases convey solitude',
      'Slow, easing animations and subtle transitions — never snappy',
    ],
    donts: [
      'No sharp corners — use minimal radius (4-6px)',
      'No shadows at all — flat, weightless elements',
      'No demanding buttons — ghost style, barely-there borders',
      'No loud display fonts — understated type for low-arousal emotion',
      'No high saturation — limited color variety conveys "drained" state',
      'No dynamic diagonal compositions — horizontal or gently sloping lines feel resigned',
    ],
  },
  'sadness:moderate': {
    northStar: 'The Deflating Balloon',
    philosophy:
      'Anticipation giving way to quiet heavy exhale. Color draining slowly from something once vivid.',
    dos: [
      'Use editorial serif (Newsreader) for contemplative weight',
      'Maintain pale blue-gray washes — overcast palette',
      'Allow text to breathe with generous line-height (1.6+)',
      'Isolated focal points surrounded by negative space evoke loneliness',
      'Imbalanced layouts — visual weight pushed to one side, emptiness on the other',
      'Cards that sit slightly "low" in their container feel weighed down',
      'Overcast lighting and cool color grading reinforce somber tone',
      'Reserve any saturated color only for critical CTAs — reads as hope amid subdued palette',
    ],
    donts: [
      'No vibrant colors — everything desaturated and muted',
      'No pure black (#000) — use blue-gray tints',
      'No upbeat motion — slow, deliberate, linear easing',
      'No shouty all-caps — quiet typography scale with smaller headings',
      'No pure white backgrounds — mid-to-low value reinforces overcast atmosphere',
      'No dense layouts — spaciousness = emptiness = sadness',
    ],
  },
  'sadness:intense': {
    northStar: 'The Monolith',
    philosophy:
      'Crushing density — heavy, anchored, permanent. An ancient stone monument, damp and cold.',
    dos: [
      'Use heavy Cormorant Garamond for monumental feel',
      'Embrace bottom-heavy layouts — visual weight sinking',
      'Tighten leading on headlines to 1.1 for compression',
      'Repetition with little variation suggests monotony and rumination',
      'Receding empty space (corridors, fading gradients) — being swallowed by thought',
      'Elements pointing or looking downward echo slumped body language',
      'Soft, low-detail icons with thin strokes — minimal decorative complexity',
      'Monochrome gray scale: mid-gray background, darker text, lighter surfaces',
    ],
    donts: [
      'No decorative elements — stripped to essentials',
      'No happy motion — linear/ease-in only, slow and deliberate',
      'No pure white — brightest tone should be pale blue-gray',
      'No turned-toward or upward-facing elements — everything faces down or away',
      'No success/warning colors at full saturation — desaturate them to not break the tone',
      'No dynamic, energetic compositions — static, horizontal, resigned',
    ],
  },

  // ─── DISGUST ──────────────────────────────────────
  'disgust:mild': {
    northStar: 'The Slight Grimace',
    philosophy:
      'A slight "no thank you" — like food that smells slightly off. Murky but not rotten.',
    dos: [
      'Use muted olive-beige palette — stale, not spoiled',
      'Slightly uneven spacing — not cramped but not comfortable',
      'Low contrast text in dusty yellow-green tones',
      'Yellow-green / chartreuse / olive accents — "sick" and contaminated associations',
      'Introduce slight brown/grey contamination to greens and yellows — swampy, not fresh',
      'Subtle uneven erosion on edges and mottled backgrounds suggest mild staleness',
      'Uneasy affordances — hover states that feel slightly too sticky or encroached',
    ],
    donts: [
      'No clean whites — murky warm tones only',
      'No symmetrical padding — subtle irregularity',
      'No attractive button styling — slightly uninviting',
      'No clean, fresh greens or cheerful yellows — they signal growth and energy, not disgust',
      'No fast ballistic motion — slow, oozing, sticky motion mimics organic decay',
    ],
  },
  'disgust:moderate': {
    northStar: 'The Biological Brutalist',
    philosophy:
      'Visceral, damp, claustrophobic un-design. Organic Brutalism celebrating the uncomfortable.',
    dos: [
      'Use intentional congestion — tight irregular spacing',
      'Overlap elements with negative margins',
      'Lean into muddy colors — bruised undertones',
      'Asymmetric, bulbous, swollen shapes read as diseased or parasitic',
      'Clusters of small repeated elements (holes, bumps) evoke trypophobia-like revulsion',
      'Slimy, sticky, crusty textures via noise, bump maps, organic gradients',
      'Sickly green or yellow color casts push toward jaundiced, infectious look',
      'Dirty mixed color temperatures — cold blue/green ambience + warm sodium highlights',
      '"Contaminated" states: buttons gaining stains, cracks, organic edges on interaction',
    ],
    donts: [
      'No pure white or pure black — tint with olive/brown',
      'No "Success" green — use muted secondary instead',
      'No symmetrical padding — stagger elements',
      'No clean uniform textures — localized patches of damage, not uniform noise',
      'No crisp, airy hover states — everything should feel slightly too sticky',
      'No very dark tones (lean toward fear) — middle-dark murky green-yellow = disgust',
    ],
  },
  'disgust:intense': {
    northStar: 'The Biological Abyss',
    philosophy:
      'Heavy, humid, unsettling organic compression. An external force invading from within.',
    dos: [
      'Overlap elements aggressively (negative margins)',
      'Use irregular border-radius for organic shapes',
      'Maintain just-above-threshold contrast — barely readable',
      'Slow oozing, pulsating, writhing, dripping animations mimic decay and infestation',
      'Visual "overgrowth" — creeping encroachment toward the viewer reinforces contamination',
      'Raking side light brings out bumps, cracks, slime — makes surfaces repellant',
      'Icons as twisted standard symbols — corroded warning triangles, overfull leaking trash',
      'Gradually phase in greenish cast — makes environment feel like it is visually "rotting"',
      'Fragmentation and loss — missing chunks, crumbling edges, exposed substrate',
    ],
    donts: [
      'No white (#FFFFFF) anywhere',
      'No perfect vertical alignment — stagger using spacing tokens',
      'No rounded corners for structural elements — organic only',
      'No fast, clean, ballistic motion — it reads as anger, not disgust',
      'No pure saturated hues — muddy mixes between green, yellow, and brown only',
      'No uniform even textures — concentrated zones of mold/rust/cracking plus intact areas',
    ],
  },

  // ─── ANGER ────────────────────────────────────────
  'anger:mild': {
    northStar: 'The Simmering Coal',
    philosophy:
      'Contained heat — not erupting, just simmering. Pressurized precision at low temperature.',
    dos: [
      'Use 0px border-radius everywhere — sharpness is anger',
      'Keep typography dense and tight — condensed proportions, tight tracking',
      'Warm reds on near-black — coals not flames',
      'Limit palette to a few close warm hues (reds, dark oranges) for heat and pressure',
      'Use diagonal or off-balance compositions to convey volatility',
      'Distressed or rough textures add raw, hostile, "battle-worn" quality at mild levels',
    ],
    donts: [
      'No rounded corners — even 4px destroys the intent',
      'No soft colors — no blues, greens, or pastels',
      'No white space for breathing — space creates cold voids',
      'No friendly humanist typefaces — they undercut tension',
      'No gentle easing — transitions should feel abrupt even at mild',
    ],
  },
  'anger:moderate': {
    northStar: 'The Pressurized Crucible',
    philosophy:
      'Crushing depth — squeezed, pressurized, unyielding. Translating raw energy into high-end editorial.',
    dos: [
      'Use intentional asymmetry — far-left headlines, far-right body',
      'Lean into density — spacing 0.5-2 tokens',
      'Embrace sharpness — every corner 0px',
      'Choose heavy, condensed, blocky type with sharp terminals',
      'Use uppercase, bold, short punchy words — signals shouting and commands',
      'Push contrast hard — bright on dark or dark on bright, no middle ground',
      'Severity ramp: yellow (caution) -> orange (warning) -> red (critical) for escalation',
      'Hazard iconography — exclamation marks, warning triangles, flames',
    ],
    donts: [
      'No rounded corners at all',
      'No soft colors — no blues, greens, or pastels',
      'No white space for breathing — density is the message',
      'No candy-bright reds — use deep crimson or blood red for seriousness',
      'No calm, balanced symmetry — instability is the point',
      'No mixed-case friendly text — all caps, imperative tone',
    ],
  },
  'anger:intense': {
    northStar: 'The Pressurized Crucible',
    philosophy:
      'Engine at combustion — clenched jaw, smoldering coals, absolute precision of high-pressure containment.',
    dos: [
      'Use extreme typographic contrast (3.5rem headline + 0.75rem label)',
      'Use tight internal padding (spacing.3)',
      'Use heavy 2-3px stroke icons — nothing lightweight',
      'Sudden, snappy transitions — quick shakes, sharp scaling, flashes of red',
      'Vibrating, jittery, or rapidly oscillating motion for simmering rage',
      'Full-screen red overlays and harsh feedback for destructive actions',
      'Maximum saturation + maximum contrast = maximum anger perception',
      'Crowded overlapping elements and compressed spacing for claustrophobic hostility',
    ],
    donts: [
      'No border-radius — even 4px destroys the intent',
      'No soft easing — use linear or fast-out only, never bounce or spring',
      'No centered layouts — harsh left-aligned or justified',
      'No gentle micro-interactions — every animation should feel like an outburst',
      'No pastel or desaturated reds — they read as love or playfulness, not anger',
      'No generous whitespace — anger-aesthetic fatigue comes from density, but that IS the intent',
    ],
  },

  // ─── ANTICIPATION ─────────────────────────────────
  'anticipation:mild': {
    northStar: 'The Luminous Pause',
    philosophy:
      'Late-afternoon sun dipping toward the horizon — editorial asymmetry on a canvas of layered light and fine paper. Elements placed by hand, favouring breathing room over information density.',
    dos: [
      'Embrace asymmetry — offset headers, let images bleed off screen edge while text stays centered',
      'Use large spacing — if you think there is enough, add one more increment (spacing-8 or spacing-10)',
      'Define sections through tonal shifts (surface → surface-container-low), never structural lines',
      'Apply gradient CTAs (primary to primary-container at 135°) to mimic sunset light direction',
      'Generous card padding (spacing-5 / 1.7rem minimum) — never crowd content',
    ],
    donts: [
      'No 100% black — use on-surface #1e1b17 for all dark elements to maintain warmth',
      'No sharp corners — never use rounded-none; everything weathered and soft',
      'No crowding — max three primary actions on a single screen; anticipation requires focus',
      'No line dividers between list items — use vertical white space or alternating tones',
    ],
  },
  'anticipation:moderate': {
    northStar: 'The Dawning Horizon',
    philosophy:
      'Sun breaking the horizon — progressive momentum with radiant asymmetry.',
    dos: [
      'Use asymmetrical margins — content leaning forward',
      'Embrace Bold Italic for the forward lean',
      'Layer with light — warm amber gradients',
    ],
    donts: [
      'No 1px dividers — use tonal shifts',
      'No cold greys — hint of warmth/amber in neutrals',
      "No centered layouts — anticipation doesn't sit still",
    ],
  },
  'anticipation:intense': {
    northStar: 'The Dawning Horizon',
    philosophy:
      'Radiant, energetic, expectant. "The Forward Lean" with italicized typography and rightward visual momentum.',
    dos: [
      'Use asymmetrical margins — push content rightward',
      'Use chevron motifs suggesting forward motion',
      'Lean into warmth — on-surface tones contain ochre',
    ],
    donts: [
      'No pure black or cold greys',
      'No 90-degree corners — min 0.5rem radius',
      'No horizontal dividers — they stop momentum',
    ],
  },

  // ─── LOVE (Joy + Trust) ───────────────────────────
  'love:mild': {
    northStar: 'The Ethereal Glow',
    philosophy:
      'A sun-drenched afternoon or a handwritten note from a loved one — quiet, intentional, deeply personal. Intentional asymmetry and floating composition where elements drift on a sea of soft cream.',
    dos: [
      'Use white space as a luxury — over-margin elements with spacing-10 (3.5rem)+ between major sections',
      'Asymmetric layouts — headline left, small supporting image offset right; avoid centering everything',
      'Warm-tinted imagery — soft rose or cream overlay (10% opacity) on all photography',
      'Pair display-md serif heading with label-md sans-serif sub-header in all-caps (0.1em tracking)',
      'Ghost borders only — outline-variant at 15% opacity, felt rather than seen',
    ],
    donts: [
      'No 100% black — even for text; use on-surface #1D1B1A for soft contrast',
      'No hard corners — anything under 0.5rem (sm) is too aggressive for this system',
      'No standard blue links — all interactive text must be primary (#7A545B) or secondary (#864E5D)',
      'No line dividers — separate list items with spacing-4 (1.4rem) vertical white space',
    ],
  },
  'love:moderate': {
    northStar: 'The Radiant Enclosure',
    philosophy:
      'A warm immersive embrace — unapologetically bold rose-pink spectrum with maximalist density.',
    dos: [
      'Use max saturation in rose-pink tones',
      'Prioritize density styled elegantly — premium feel',
      'Asymmetric layouts with soft large radii (32px+)',
    ],
    donts: [
      'No gray — use pink-undertone neutrals only',
      'No hard edges — min 1.5rem radius',
      'No flat white (#FFFFFF) for sections — tint everything',
    ],
  },
  'love:intense': {
    northStar: 'The Radiant Heart',
    philosophy:
      'Explosive sunburst of affection — standing inside a sunrise. Tonal fluidity challenging rigid grids.',
    dos: [
      'Embrace whitespace (spacing 16/20/24)',
      'Use asymmetrical layouts — flowing, not structured',
      'Use color as structural tool — rose as architecture',
    ],
    donts: [
      'No pure black — use on-surface #392b31',
      'No sharp corners — nothing below 1.5rem',
      "No crowding — love needs space to breathe",
    ],
  },

  // ─── SUBMISSION (Trust + Fear) ────────────────────
  'submission:mild': {
    northStar: 'The Silent Registrar',
    philosophy:
      'High-end archival institution with mid-century modern bureaucracy. The Ghost Grid — elements aligned to a strict mathematical system but lacking visible lines, creating invisible order.',
    dos: [
      'Embrace the void — use spacing-24 (6rem) between major sections; silence is a feature',
      'Snap every element to the spacing scale — precision creates the "Orderly" feel',
      'Use subtle background shifts (surface → surface-container-low) for selected states',
      'Display at 80% opacity with on-surface-variant — text is large but hushed, not shouting',
      'Patient loading — thin 1px horizontal progress bar, constant pace, no spinning wheels',
    ],
    donts: [
      'No rounded corners above md (6px) — circles and large radii are too friendly and playful',
      'No pure black — use on-background #26343d for max contrast while keeping blue-gray atmosphere',
      'No motion for excitement — linear or ease-in-out 300ms only; elements slide with mechanical patience',
      'No bold weights — hierarchy through massive scale shifts, not weight',
    ],
  },
  'submission:moderate': {
    northStar: 'The Brutalist Archive',
    philosophy:
      'Regimented sophistication through thin lines, vast monochromatic surfaces, and rhythmic grid-based layouts.',
    dos: [
      'Align every element to spacing scale — strict grid',
      'Embrace asymmetry with large display anchoring left',
      'Use monochromatic tonal sophistication',
    ],
    donts: [
      'No rounded corners > 4px',
      'No bright accents — use weight/scale, not color',
      'No shadows for depth — use tonal shifts',
    ],
  },
  'submission:intense': {
    northStar: 'The Absolute Monolith',
    philosophy:
      'Institutional obsidian tower — intimidating, flawless, indisputable. Standing at the base looking up.',
    dos: [
      'Align to strict 4px grid — absolute precision',
      'Use extreme typographic contrast (huge headline + tiny label)',
      'Hyper-rigid grid where elements are locked in place',
    ],
    donts: [
      'No border-radius above 4px anywhere',
      'No organic bouncy animations — mechanical only',
      'No soft grey — every color needs blue/slate tint',
    ],
  },

  // ─── ALARM (Fear + Surprise) ──────────────────────
  'alarm:mild': {
    northStar: 'The Raised Eyebrow',
    philosophy:
      'Sophisticated skepticism — a UI that leans in, narrows its gaze, and asks the user to pay attention. High-end command center meets editorial piece on global preservation.',
    dos: [
      'Use dimmed states — when one element is focused, drop surrounding elements to 60% opacity',
      'Embrace asymmetry — text left-aligned, supporting metadata on an offset right column',
      'Use spacing scale religiously — stick to 0.2rem increments for the technical feel',
      'Status Pulse indicator — small 4px primary circle with 8px outer glow for "Active Monitoring"',
      'Amber-tinted shadows only — tinted with primary color, never pure black',
    ],
    donts: [
      'No pure white — brightest color is on-background #e7e1e1; pure white breaks the dim atmosphere',
      'No large radii — anything above md (0.375rem) feels too friendly; keep corners 2-4px',
      'No standard red for errors — use tuned error tokens (#ffb4ab) that harmonise with amber palette',
      'No 1px solid borders for sectioning — use background color shifts only',
    ],
  },
  'alarm:moderate': {
    northStar: 'The Emergency Pulse',
    philosophy:
      'Adrenaline spike HUD — tactical, authoritative. A system under pressure with fractured grid.',
    dos: [
      'Use high contrast — amber/orange on near-black',
      'Embrace asymmetry suggesting system under pressure',
      'Sharp 0px corners everywhere',
    ],
    donts: [
      'No soft grays — use tinted neutrals',
      'No rounded iconography — everything sharp',
      'No symmetry — imperfect balance creates urgency',
    ],
  },
  'alarm:intense': {
    northStar: 'The Electric Void',
    philosophy:
      'Emergency crisis in total darkness — high-voltage, irrational layouts demanding attention.',
    dos: [
      'Embrace asymmetry — offset headers by large spacing',
      'Use high contrast — warning colors on void black',
      'Respect the void — large empty surface areas between bursts',
    ],
    donts: [
      'No rounded corners — any radius above 0px is failure',
      'No soft shadows — hard shadows only',
      'No pastel tones — high-saturation warning colors',
    ],
  },

  // ─── DISAPPOINTMENT (Surprise + Sadness) ──────────
  'disappointment:mild': {
    northStar: 'The Aesthetic of Ennui',
    philosophy:
      'Sophisticated washed-out minimalism — intentional stagnation executed with the precision of a luxury gallery. Not a broken UI, an intentionally uninspired one.',
    dos: [
      'Embrace asymmetry — place elements slightly off-center to suggest a "shrugged" layout',
      'Use dead air — leave entire quadrants of the screen empty; space is the primary luxury',
      'Mute the motion — all transitions must be slow and linear (400ms linear); no snappy or bouncy easings',
      'Editorial split-grid — align headers far left and body text far right for a sense of distance',
      'Hierarchy through scale not weight — avoid bold; use massive shifts in size with regular weight only',
    ],
    donts: [
      'No pure black (#000000) — too aggressive; use on-surface #303237 for all dark needs',
      'No high-saturation colors — even for errors use bruised dusty rose (#9e3f4e), not bright red',
      'No centering everything — centering feels too intentional; left-heavy or bottom-heavy feels more deflated',
      'No 1px solid borders for sectioning — use tonal shifts between surface tiers',
    ],
  },
  'disappointment:moderate': {
    northStar: 'The Distant Echo',
    philosophy:
      'The moment a memory begins to fail — things winding down, deflating, receding into the background. A Sunday evening in November: quiet, slightly melancholy, entirely devoid of urgency.',
    dos: [
      'Use wide gutters — spacing-16 or spacing-20 between major sections to create emptiness',
      'Embrace grey — let on-surface-variant (#5b6061) do the heavy lifting; pure black is too confident',
      'Subtle scroll gradients — linear gradient from surface to surface-dim to simulate fading as user scrolls',
      'Sagging layouts — increase margin-top to spacing-10 while keeping margin-bottom at spacing-2',
      'Hover states darken instead of brighten — buttons get slightly darker, signalling deflation',
    ],
    donts: [
      'No 1px borders — most important rule; if you need a boundary, use a background color change',
      'No bright saturation — if a color feels vibrant it is wrong; use _dim or _fixed_dim tokens',
      'No centering everything — use off-center layouts (7-column main in 12-column grid) to feel unbalanced',
      'No high-contrast shadows — shadows should be felt, not seen; if you see the edge, it is too dark',
    ],
  },
  'disappointment:intense': {
    northStar: 'The Empty Room',
    philosophy:
      'The party is over and everyone has gone. Profound absence where there was once something.',
    dos: [
      'Use desaturated purple-gray palette',
      'Maximize empty space — absence is the design',
      'Typography should feel small and diminished',
    ],
    donts: [
      'No color saturation — everything gray-shifted',
      'No decorative elements — emptiness is the point',
      'No energetic motion — still, heavy, final',
    ],
  },

  // ─── REMORSE (Sadness + Disgust) ──────────────────
  'remorse:mild': {
    northStar: 'The Stoic Archive',
    philosophy:
      'Heavy stillness of a permanent lapse — vellum pages stacked in a dim room. Intentional asymmetry with large blocks of surface-container-low offset by thin tall columns of serif typography.',
    dos: [
      'Embrace negative space — use spacing-16 (5.5rem) or spacing-20 (7rem) between major sections',
      'Use asymmetry — display-sm headline on the left, narrow body-md column on the far right; the void in the middle is intentional',
      'Maintain precision — keep all radii at sm (2px) or DEFAULT (4px); sharp corners feel slightly uncomfortable but professional',
      'Pair Noto Serif (the wince) with Work Sans (the obligation) for editorial friction',
      'Sink interactive elements — input field as surface-container-lowest inside surface-container parent for recessed weight',
    ],
    donts: [
      'No rounded corners — never use full or xl radii; this is not a soft or bubbly system',
      'No pure grays — never use #000000 or #333333; always use green-tinted tokens for muted teal atmosphere',
      'No motion blur — use linear or ease-in curves only; bounce or elastic movements destroy the stoic nature',
      'No line dividers — separate list items with spacing-2.5 (0.85rem) vertical space',
    ],
  },
  'remorse:moderate': {
    northStar: 'Stalwart Solemnity',
    philosophy:
      'The visceral intersection of remorse, obligation, and physical burden. Bottom-heavy layouts pressed into the page.',
    dos: [
      'Use bottom-heavy layouts — visual weight sinking down',
      'Embrace asymmetry — nothing centered or balanced',
      'Respect spacing scale — spacing-16 for breathing room',
    ],
    donts: [
      'No decorative elements of any kind',
      'No happy motion — linear/ease-in only, slow and deliberate',
      'No pure white — brightest is pale blue-gray #c5ebff',
    ],
  },
  'remorse:intense': {
    northStar: 'Cold Rain on Old Stone',
    philosophy:
      'An ancient monument: immovable, damp, somber. Mass and compression — beauty in brutal honesty.',
    dos: [
      'Embrace asymmetry — align to bottom-left anchor',
      'Use high contrast for critical errors (like open wound)',
      'Tighten leading on headlines to 1.1 — compressed gravity',
    ],
    donts: [
      'No rounded corners — 0px, max 4px for icons',
      'No floating elements — everything heavy and grounded',
      'No animation bounce — linear/ease-in only, mechanical',
    ],
  },

  // ─── CONTEMPT (Disgust + Anger) ───────────────────
  'contempt:mild': {
    northStar: 'The Silent Registrar',
    philosophy:
      'An elite, cold, stone-walled archive — high-end and expensive yet intentionally detached. Large amounts of negative space push content into unexpected corners; the interface simply exists.',
    dos: [
      'Asymmetrical margins — leave one side of the screen significantly more empty than the other',
      'Use surface-bright (#342a24) for hover states on dark containers — a breathing effect',
      'Favour verticality — long scrolling pages with sparse content feel more detached than dense dashboards',
      'Typography does the heavy lifting — Newsreader for editorial voice, Inter for clinical labels only',
      'Ghost borders at 15% opacity — a whisper of a boundary, never a shout',
    ],
    donts: [
      'No pure white (#FFFFFF) — brightest point is tertiary (#fff8f4)',
      'No bubbly icons — icons must be thin-stroke (1-1.5px) and angular',
      'No bouncy easings — use cubic-bezier(0.2, 0, 0, 1) for smooth clinical transitions like a heavy door closing',
      'No standard 8px grids for everything — break the grid intentionally for editorial tension',
    ],
  },
  'contempt:moderate': {
    northStar: 'The Cold Sovereign',
    philosophy:
      'A system of high-status exclusion — silent, intimidating, impeccably composed. Private high-end library or ancestral estate. Rigid intentionality with asymmetric gravity.',
    dos: [
      'Embrace 0px radius everywhere — roundness is a sign of weakness in this system',
      'Use expensive space — if a section feels crowded, double the padding; the Sovereign is never in a hurry',
      'Prioritise type over icons — if you can use a word instead of an icon, use the word; icons are too universal',
      'Anchor content to far edges of the grid, leaving vast expanses of negative space',
      'Extreme scale shifts — massive Newsreader display paired with microscopic Inter labels for architectural hierarchy',
    ],
    donts: [
      'No 1px borders — never use a solid high-contrast line to separate sections; they are pedestrian',
      'No vibrant colors — no Action Blue or Success Green; use tertiary (#ffb4a8) for alerts, keep it muted',
      'No soft shadows — avoid Material Design look; if it belongs on a generic weather app it is a failure',
      'No center-alignment in heroes — keep the eye moving across the asymmetric landscape; equilibrium is stagnant',
    ],
  },
  'contempt:intense': {
    northStar: 'The Vitrified Aristocrat',
    philosophy:
      'Pressurized elegance chilled to glass — unyielding. Superiority through complexity and cold precision.',
    dos: [
      'Embrace asymmetry — nothing welcoming or centered',
      'Use sharp corners (0px standard, 2px absolute max)',
      'Maintain maximum contrast — cold bronze on dark burgundy',
    ],
    donts: [
      'No rounded corners — suggests warmth and safety',
      'No soft neutral grey — burgundy/bronze tinted only',
      'No animation bounce — linear or expo-in only',
    ],
  },

  // ─── AGGRESSIVENESS (Anger + Anticipation) ────────
  'aggressiveness:mild': {
    northStar: 'The Unyielding Monolith',
    philosophy:
      'Absolute structural integrity — an aesthetic of standing your ground. Does not reach out with rounded corners or bouncy animations; it exists as firm, immovable digital architecture. Carved, not assembled.',
    dos: [
      'Use 0px corners everywhere — perfection is in the right angle',
      'Large negative space — the design should feel heavy but not cluttered',
      'Vertical typography for labels or side-navigation — break the traditional horizontal grid',
      'CTAs feel like a physical thud — large, bold, coloured with "Heat Core" tones (primary-container)',
      'Use cubic-bezier(0.2, 0, 0, 1) for transitions — heavy fast start that slams into a stop',
    ],
    donts: [
      'No radius above 2px — even 4px weakens the firm posture of the system',
      'No standard blue or green for success — use brighter copper (#C06030), not forest green',
      'No soft bouncy easing for transitions — mechanical, clinical, unyielding movement only',
      'No 1px solid borders for sectioning — use background shifts, hard edges, or massive negative space',
    ],
  },
  'aggressiveness:moderate': {
    northStar: 'Heated Metal About to Strike',
    philosophy:
      'The precise moment before kinetic release. Volatility combined with tension — razor-sharp terminals.',
    dos: [
      'Overlap elements suggesting motion and danger',
      'Use heavy contrast between dark and hot orange',
      'Embrace the forward lean — italic oblique typography',
    ],
    donts: [
      'No rounded corners — even 1px is too soft',
      'No neutral greys — must be tinted red/orange',
      'No centered layouts or dividers — movement only',
    ],
  },
  'aggressiveness:intense': {
    northStar: 'The Battering Ram',
    philosophy:
      'Unstoppable force, raw power, deliberate confrontation. Layouts lean forward ready to strike, components crash into one another breaking the grid. High-contrast density with scorching oranges against absolute blacks.',
    dos: [
      'Use italics for all H1-H3 headlines — forward-leaning momentum implies speed and force',
      'Allow elements to bleed off screen edges or overlap neighbouring containers',
      'Use absolute black (#000000) for deepest background layers to make the orange scorch',
      'Maintain high density — tight spacing feels pressurised and intense',
      'Reduce letter-spacing on display-lg to -0.05em — compressed, heavy, block-like type',
    ],
    donts: [
      'No border-radius ever — 1px of rounding breaks the Battering Ram metaphor',
      'No soft drop shadows — if you need depth, use a hard 100% opaque offset in on-background at 10% opacity',
      'No centered layouts — align everything left or right for weighted off-balance visual tension',
      'No friendly micro-copy — be direct, punchy, and imperative',
    ],
  },

  // ─── OPTIMISM (Anticipation + Joy) ────────────────
  'optimism:mild': {
    northStar: 'The Diffused Dawn',
    philosophy:
      'Morning light filtering through linen — boundaries are soft, atmosphere is weightless. Editorial-grade interface that feels like a physical space filled with light. Typography feels typeset onto the light itself, not trapped inside boxes.',
    dos: [
      'Use generous white space — if you think there is enough, add 20% more',
      'Align to an asymmetrical axis — place text off-center for editorial high-end feel',
      'Use warm amber for text (#907040 or on-surface tokens) instead of pure black',
      'Floating typography — elements should look placed on light, not boxed in containers',
      'Upward ambient shadows — 0px -8px 24px rgba(144,112,64,0.06) with tinted amber, never grey',
    ],
    donts: [
      'No 1px borders — quickest way to destroy the Morning Promise aesthetic',
      'No heavy shadows — if the shadow is clearly visible at a glance, it is too dark; felt, not seen',
      'No tight margins — elements should never feel trapped within their containers',
      'No high-saturation colors — keep saturation low (~10) to maintain the "mild" in Mild Optimism',
    ],
  },
  'optimism:moderate': {
    northStar: 'The Dawning Horizon',
    philosophy:
      'Morning light flooding a room — fresh start and certainty of a new day. Anticipation + Joy combined.',
    dos: [
      'Use asymmetrical margins for editorial feel',
      'Display-lg for short impactful optimistic phrases',
      'Embrace whitespace — add 20% more than feels needed',
    ],
    donts: [
      'No pure black — use on-surface #322f20',
      'No 1px solid borders — tonal transitions only',
      'No standard drop shadows — upward Y-shadows only',
    ],
  },
  'optimism:intense': {
    northStar: 'The Radiant Dawn',
    philosophy:
      'Maximum golden sunrise — certainty radiating outward. Festival energy meeting morning clarity.',
    dos: [
      'Lean into saturated amber-gold palette',
      'Use extreme typographic scale for impact',
      'Overlap warm elements for radiant energy',
    ],
    donts: [
      'No cold tones — pure warmth everywhere',
      'No restraint in saturation — full golden intensity',
      'No standard card layouts — break the grid with warmth',
    ],
  },
};

// ---------- Lookup ----------

/**
 * Get design guidance for an emotion at a given intensity.
 * Returns Stitch's Creative North Star, philosophy, and key rules.
 */
export function getDesignGuidance(
  emotion: EmotionType,
  intensity: Intensity,
): DesignGuidance | undefined {
  return GUIDANCE[`${emotion}:${intensity}`];
}

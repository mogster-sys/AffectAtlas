/**
 * Extra emotions beyond Plutchik's 16.
 * Each extra maps to a parent primary emotion for theme/word fallback.
 */

import type { ExtraEmotionType, PrimaryEmotionType } from '@/types/emotion';

export interface ExtraEmotion {
  type: ExtraEmotionType;
  label: string;
  parent: PrimaryEmotionType;
  description: string;
}

const EXTRA_EMOTIONS: ExtraEmotion[] = [
  // Joy extras
  { type: 'contentment', label: 'Contentment', parent: 'joy', description: 'Settled, sustained satisfaction' },
  { type: 'pride', label: 'Pride', parent: 'joy', description: 'Confidence from personal achievement' },

  // Fear extras
  { type: 'fright', label: 'Fright', parent: 'fear', description: 'Sudden, acute fear response' },
  { type: 'embarrassment', label: 'Embarrassment', parent: 'fear', description: 'Social exposure and self-consciousness' },

  // Surprise extras
  { type: 'awe', label: 'Awe', parent: 'surprise', description: 'Overwhelmed by vastness or grandeur' },
  { type: 'confusion', label: 'Confusion', parent: 'surprise', description: 'Disoriented, unable to make sense' },

  // Sadness extras
  { type: 'depression', label: 'Depression', parent: 'sadness', description: 'Deep, prolonged absence of vitality' },
  { type: 'loneliness', label: 'Loneliness', parent: 'sadness', description: 'Painful awareness of disconnection' },
  { type: 'guilt', label: 'Guilt', parent: 'sadness', description: 'Weight of having caused harm' },

  // Disgust extras
  { type: 'appalled', label: 'Appalled', parent: 'disgust', description: 'Shocked moral revulsion' },

  // Anger extras
  { type: 'frustration', label: 'Frustration', parent: 'anger', description: 'Blocked effort, mounting irritation' },
  { type: 'jealousy', label: 'Jealousy', parent: 'anger', description: 'Threatened possession, guarding what is yours' },

  // Anticipation extras
  { type: 'inspiration', label: 'Inspiration', parent: 'anticipation', description: 'Elevated creative momentum' },
];

// Lookup maps
const BY_TYPE = new Map<ExtraEmotionType, ExtraEmotion>();
const BY_PARENT = new Map<PrimaryEmotionType, ExtraEmotion[]>();

for (const extra of EXTRA_EMOTIONS) {
  BY_TYPE.set(extra.type, extra);
  const list = BY_PARENT.get(extra.parent) ?? [];
  list.push(extra);
  BY_PARENT.set(extra.parent, list);
}

export function getExtraEmotion(type: ExtraEmotionType): ExtraEmotion | undefined {
  return BY_TYPE.get(type);
}

export function getExtrasForPrimary(primary: PrimaryEmotionType): ExtraEmotion[] {
  return BY_PARENT.get(primary) ?? [];
}

export function isExtraEmotion(type: string): type is ExtraEmotionType {
  return BY_TYPE.has(type as ExtraEmotionType);
}

export function getAllExtras(): ExtraEmotion[] {
  return EXTRA_EMOTIONS;
}

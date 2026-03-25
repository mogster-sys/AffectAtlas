/**
 * Emotion definitions and constants based on Plutchik's Wheel of Emotions
 */

import type { PrimaryEmotion, DerivedEmotion } from '@/types/emotion';

export const PRIMARY_EMOTIONS: PrimaryEmotion[] = [
  {
    type: 'joy',
    label: 'Joy',
    baseColor: '#FFD700', // Golden yellow
    opposite: 'sadness',
    description: 'Happiness, pleasure, and positive energy',
    colorProperties: {
      hue: 50,
      chroma: 0.25,
      lightness: 0.75,
    },
    characteristics: {
      energy: 'high',
      valence: 'positive',
      arousal: 'high',
    },
  },
  {
    type: 'trust',
    label: 'Trust',
    baseColor: '#90EE90', // Light green
    opposite: 'disgust',
    description: 'Safety, reliability, and connection',
    colorProperties: {
      hue: 120,
      chroma: 0.2,
      lightness: 0.7,
    },
    characteristics: {
      energy: 'medium',
      valence: 'positive',
      arousal: 'low',
    },
  },
  {
    type: 'fear',
    label: 'Fear',
    baseColor: '#4B0082', // Indigo
    opposite: 'anger',
    description: 'Anxiety, caution, and protection',
    colorProperties: {
      hue: 275,
      chroma: 0.3,
      lightness: 0.35,
    },
    characteristics: {
      energy: 'high',
      valence: 'negative',
      arousal: 'high',
    },
  },
  {
    type: 'surprise',
    label: 'Surprise',
    baseColor: '#00CED1', // Dark turquoise
    opposite: 'anticipation',
    description: 'Unexpected, sudden, and impactful',
    colorProperties: {
      hue: 180,
      chroma: 0.22,
      lightness: 0.55,
    },
    characteristics: {
      energy: 'high',
      valence: 'neutral',
      arousal: 'high',
    },
  },
  {
    type: 'sadness',
    label: 'Sadness',
    baseColor: '#4682B4', // Steel blue
    opposite: 'joy',
    description: 'Melancholy, reflection, and quietness',
    colorProperties: {
      hue: 207,
      chroma: 0.15,
      lightness: 0.45,
    },
    characteristics: {
      energy: 'low',
      valence: 'negative',
      arousal: 'low',
    },
  },
  {
    type: 'disgust',
    label: 'Disgust',
    baseColor: '#8B4513', // Saddle brown
    opposite: 'trust',
    description: 'Rejection, avoidance, and discomfort',
    colorProperties: {
      hue: 30,
      chroma: 0.18,
      lightness: 0.4,
    },
    characteristics: {
      energy: 'medium',
      valence: 'negative',
      arousal: 'medium',
    },
  },
  {
    type: 'anger',
    label: 'Anger',
    baseColor: '#DC143C', // Crimson
    opposite: 'fear',
    description: 'Intensity, passion, and confrontation',
    colorProperties: {
      hue: 0,
      chroma: 0.35,
      lightness: 0.5,
    },
    characteristics: {
      energy: 'high',
      valence: 'negative',
      arousal: 'high',
    },
  },
  {
    type: 'anticipation',
    label: 'Anticipation',
    baseColor: '#FF8C00', // Dark orange
    opposite: 'surprise',
    description: 'Expectation, preparation, and excitement',
    colorProperties: {
      hue: 35,
      chroma: 0.28,
      lightness: 0.6,
    },
    characteristics: {
      energy: 'high',
      valence: 'positive',
      arousal: 'medium',
    },
  },
];

export const DERIVED_EMOTIONS: DerivedEmotion[] = [
  {
    type: 'love',
    label: 'Love',
    primary1: 'joy',
    primary2: 'trust',
    description: 'Deep affection and connection',
    blendRatio: 0.5,
  },
  {
    type: 'submission',
    label: 'Submission',
    primary1: 'trust',
    primary2: 'fear',
    description: 'Yielding and acceptance',
    blendRatio: 0.5,
  },
  {
    type: 'alarm',
    label: 'Alarm',
    primary1: 'fear',
    primary2: 'surprise',
    description: 'Startled awareness and urgency',
    blendRatio: 0.5,
  },
  {
    type: 'disappointment',
    label: 'Disappointment',
    primary1: 'surprise',
    primary2: 'sadness',
    description: 'Unmet expectations and letdown',
    blendRatio: 0.5,
  },
  {
    type: 'remorse',
    label: 'Remorse',
    primary1: 'sadness',
    primary2: 'disgust',
    description: 'Regret and self-directed negativity',
    blendRatio: 0.5,
  },
  {
    type: 'contempt',
    label: 'Contempt',
    primary1: 'disgust',
    primary2: 'anger',
    description: 'Scorn and superiority',
    blendRatio: 0.5,
  },
  {
    type: 'aggressiveness',
    label: 'Aggressiveness',
    primary1: 'anger',
    primary2: 'anticipation',
    description: 'Forceful pursuit and domination',
    blendRatio: 0.5,
  },
  {
    type: 'optimism',
    label: 'Optimism',
    primary1: 'anticipation',
    primary2: 'joy',
    description: 'Hopeful excitement and positivity',
    blendRatio: 0.5,
  },
];

// Helper functions
export function getPrimaryEmotion(type: string): PrimaryEmotion | undefined {
  return PRIMARY_EMOTIONS.find(e => e.type === type);
}

export function getDerivedEmotion(type: string): DerivedEmotion | undefined {
  return DERIVED_EMOTIONS.find(e => e.type === type);
}

export function getEmotionByType(type: string): PrimaryEmotion | DerivedEmotion | undefined {
  return getPrimaryEmotion(type) || getDerivedEmotion(type);
}

export function getOppositeEmotion(type: string): PrimaryEmotion | undefined {
  const emotion = getPrimaryEmotion(type);
  if (emotion) {
    return getPrimaryEmotion(emotion.opposite);
  }
  return undefined;
}

// Intensity modifiers
export const INTENSITY_MODIFIERS = {
  intense: {
    chromaMultiplier: 1.3,
    lightnessOffset: -0.1,
    energyBoost: 1.2,
  },
  moderate: {
    chromaMultiplier: 1.0,
    lightnessOffset: 0,
    energyBoost: 1.0,
  },
  mild: {
    chromaMultiplier: 0.5,
    lightnessOffset: 0.15,
    energyBoost: 0.8,
  },
};
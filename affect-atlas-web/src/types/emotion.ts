/**
 * Core emotion type definitions for the Emotion Design System
 */

// The 8 primary emotions from Plutchik's Wheel
export type PrimaryEmotionType =
  | 'joy'
  | 'trust'
  | 'fear'
  | 'surprise'
  | 'sadness'
  | 'disgust'
  | 'anger'
  | 'anticipation';

// Derived emotions (dyads) from primary combinations
export type DerivedEmotionType =
  | 'love'        // joy + trust
  | 'submission'  // trust + fear
  | 'alarm'       // fear + surprise
  | 'disappointment' // surprise + sadness
  | 'remorse'     // sadness + disgust
  | 'contempt'    // disgust + anger
  | 'aggressiveness' // anger + anticipation
  | 'optimism';   // anticipation + joy

export type EmotionType = PrimaryEmotionType | DerivedEmotionType;

// Extra emotions beyond Plutchik's 16 (extras relate to a parent primary)
export type ExtraEmotionType =
  | 'contentment'
  | 'pride'
  | 'fright'
  | 'embarrassment'
  | 'awe'
  | 'depression'
  | 'loneliness'
  | 'guilt'
  | 'appalled'
  | 'frustration'
  | 'jealousy'
  | 'inspiration'
  | 'confusion';

export type AnyEmotionType = EmotionType | ExtraEmotionType;

export type Intensity = 'intense' | 'moderate' | 'mild';

export interface PrimaryEmotion {
  type: PrimaryEmotionType;
  label: string;
  baseColor: string;  // Hex color for moderate intensity
  opposite: PrimaryEmotionType;  // Opposite emotion on the wheel
  description: string;
  // Color properties in OKLCH space
  colorProperties: {
    hue: number;        // 0-360
    chroma: number;     // 0-0.4
    lightness: number;  // 0-1
  };
  // Design characteristics
  characteristics: {
    energy: 'high' | 'medium' | 'low';
    valence: 'positive' | 'negative' | 'neutral';
    arousal: 'high' | 'medium' | 'low';
  };
}

export interface DerivedEmotion {
  type: DerivedEmotionType;
  label: string;
  primary1: PrimaryEmotionType;
  primary2: PrimaryEmotionType;
  description: string;
  blendRatio?: number; // Default blend ratio (0.5 = equal)
}

export interface EmotionInput {
  primary: AnyEmotionType;
  secondary?: EmotionType | null;
  intensity: Intensity;
  blendRatio?: number; // 0-1, where 0.5 is equal blend
}

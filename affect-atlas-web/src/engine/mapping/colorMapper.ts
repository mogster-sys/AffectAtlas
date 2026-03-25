/**
 * Maps emotions to color systems
 */

import { oklchToHex, interpolateOklch, type OklchColor } from '../color/oklch';
import { getPrimaryEmotion, getDerivedEmotion, INTENSITY_MODIFIERS } from '@/constants/emotions';
import type { EmotionType, Intensity } from '@/types/emotion';
import type { SemanticColors } from '@/types/design';

export function mapEmotionToColor(
  emotion: EmotionType,
  intensity: Intensity
): SemanticColors {
  const primaryEmotion = getPrimaryEmotion(emotion);
  const derivedEmotion = getDerivedEmotion(emotion);

  let baseColor: OklchColor;

  if (primaryEmotion) {
    // Primary emotion - use direct color
    baseColor = {
      l: primaryEmotion.colorProperties.lightness,
      c: primaryEmotion.colorProperties.chroma,
      h: primaryEmotion.colorProperties.hue,
    };
  } else if (derivedEmotion) {
    // Derived emotion - blend two primary colors
    const primary1 = getPrimaryEmotion(derivedEmotion.primary1);
    const primary2 = getPrimaryEmotion(derivedEmotion.primary2);

    if (!primary1 || !primary2) {
      throw new Error(`Invalid derived emotion: ${emotion}`);
    }

    const color1: OklchColor = {
      l: primary1.colorProperties.lightness,
      c: primary1.colorProperties.chroma,
      h: primary1.colorProperties.hue,
    };

    const color2: OklchColor = {
      l: primary2.colorProperties.lightness,
      c: primary2.colorProperties.chroma,
      h: primary2.colorProperties.hue,
    };

    baseColor = interpolateOklch(color1, color2, derivedEmotion.blendRatio || 0.5);
  } else {
    throw new Error(`Unknown emotion: ${emotion}`);
  }

  // Apply intensity modifiers
  const modifier = INTENSITY_MODIFIERS[intensity];
  baseColor.c = Math.min(0.4, baseColor.c * modifier.chromaMultiplier);
  baseColor.l = Math.max(0.1, Math.min(0.95, baseColor.l + modifier.lightnessOffset));

  const primaryHex = oklchToHex(baseColor);

  // Generate complementary colors
  const secondaryColor = interpolateOklch(
    baseColor,
    { ...baseColor, h: (baseColor.h + 120) % 360 },
    0.3
  );

  const accentColor = {
    ...baseColor,
    c: Math.min(0.4, baseColor.c * 1.2),
    l: Math.max(0.1, baseColor.l - 0.1),
  };

  // Generate neutral colors based on the emotion
  const backgroundColor: OklchColor = {
    l: 0.98,
    c: baseColor.c * 0.05,
    h: baseColor.h,
  };

  const surfaceColor: OklchColor = {
    l: 0.95,
    c: baseColor.c * 0.08,
    h: baseColor.h,
  };

  const textColor: OklchColor = {
    l: 0.15,
    c: baseColor.c * 0.1,
    h: baseColor.h,
  };

  const textSecondaryColor: OklchColor = {
    l: 0.4,
    c: baseColor.c * 0.08,
    h: baseColor.h,
  };

  const borderColor: OklchColor = {
    l: 0.85,
    c: baseColor.c * 0.1,
    h: baseColor.h,
  };

  // Semantic status colors with emotion influence
  const errorColor = interpolateOklch(
    { l: 0.5, c: 0.35, h: 10 }, // Red
    baseColor,
    0.1
  );

  const warningColor = interpolateOklch(
    { l: 0.6, c: 0.3, h: 50 }, // Yellow
    baseColor,
    0.1
  );

  const successColor = interpolateOklch(
    { l: 0.5, c: 0.25, h: 140 }, // Green
    baseColor,
    0.1
  );

  const infoColor = interpolateOklch(
    { l: 0.5, c: 0.2, h: 220 }, // Blue
    baseColor,
    0.1
  );

  return {
    primary: primaryHex,
    secondary: oklchToHex(secondaryColor),
    accent: oklchToHex(accentColor),
    background: oklchToHex(backgroundColor),
    surface: oklchToHex(surfaceColor),
    text: oklchToHex(textColor),
    textSecondary: oklchToHex(textSecondaryColor),
    border: oklchToHex(borderColor),
    error: oklchToHex(errorColor),
    warning: oklchToHex(warningColor),
    success: oklchToHex(successColor),
    info: oklchToHex(infoColor),
  };
}

/**
 * Get emotion colors for wheel visualization
 */
export function getEmotionColors(emotion: EmotionType): {
  intense: string;
  moderate: string;
  mild: string;
} {
  const primaryEmotion = getPrimaryEmotion(emotion);

  if (!primaryEmotion) {
    throw new Error(`Unknown emotion: ${emotion}`);
  }

  const baseColor: OklchColor = {
    l: primaryEmotion.colorProperties.lightness,
    c: primaryEmotion.colorProperties.chroma,
    h: primaryEmotion.colorProperties.hue,
  };

  const intenseModifier = INTENSITY_MODIFIERS.intense;
  const mildModifier = INTENSITY_MODIFIERS.mild;

  const intenseColor: OklchColor = {
    ...baseColor,
    c: Math.min(0.4, baseColor.c * intenseModifier.chromaMultiplier),
    l: Math.max(0.1, baseColor.l + intenseModifier.lightnessOffset),
  };

  const mildColor: OklchColor = {
    ...baseColor,
    c: baseColor.c * mildModifier.chromaMultiplier,
    l: Math.min(0.95, baseColor.l + mildModifier.lightnessOffset),
  };

  return {
    intense: oklchToHex(intenseColor),
    moderate: oklchToHex(baseColor),
    mild: oklchToHex(mildColor),
  };
}

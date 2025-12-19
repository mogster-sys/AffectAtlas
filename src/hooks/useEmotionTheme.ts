/**
 * Hook that provides a complete theme based on the currently selected emotion
 * This makes the ENTIRE UI reactive to the emotion wheel selection
 */

import { useMemo } from 'react';
import { useEmotionStore } from '@/store/useEmotionStore';
import { mapEmotionToColor } from '@/engine/mapping/colorMapper';
import { getPrimaryEmotion } from '@/constants/emotions';

export interface EmotionTheme {
  // Primary emotion colors
  primary: string;
  primaryLight: string;
  primaryDark: string;

  // UI backgrounds (derived from emotion)
  background: string;
  surface: string;
  surfaceElevated: string;

  // Text colors (contrasting with emotion backgrounds)
  text: string;
  textSecondary: string;
  textTertiary: string;
  textOnPrimary: string;

  // Borders and dividers
  border: string;
  borderLight: string;

  // Interactive elements
  buttonPrimary: string;
  buttonSecondary: string;

  // Status colors (influenced by emotion)
  success: string;
  warning: string;
  error: string;
  info: string;

  // Special UI elements
  wheelBackground: string;
  headerBackground: string;
  tabBarBackground: string;

  // Emotion metadata
  emotionName: string | null;
  intensity: 'intense' | 'moderate' | 'mild';
  isEmotionSelected: boolean;
}

/**
 * Default neutral theme when no emotion is selected
 */
const neutralTheme: EmotionTheme = {
  primary: '#3B82F6',
  primaryLight: '#60A5FA',
  primaryDark: '#2563EB',

  background: '#FAFAFA',
  surface: '#FFFFFF',
  surfaceElevated: '#FFFFFF',

  text: '#1F2937',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  textOnPrimary: '#FFFFFF',

  border: '#E5E7EB',
  borderLight: '#F3F4F6',

  buttonPrimary: '#3B82F6',
  buttonSecondary: '#E5E7EB',

  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  wheelBackground: '#FFFFFF',
  headerBackground: '#FFFFFF',
  tabBarBackground: '#FFFFFF',

  emotionName: null,
  intensity: 'moderate',
  isEmotionSelected: false,
};

export function useEmotionTheme(): EmotionTheme {
  const { primaryEmotion, intensity } = useEmotionStore();

  const theme = useMemo(() => {
    if (!primaryEmotion) {
      return neutralTheme;
    }

    // Get the emotion's color palette
    const colors = mapEmotionToColor(primaryEmotion, intensity);
    const emotionData = getPrimaryEmotion(primaryEmotion);

    // Determine if this is a light or dark emotion based on characteristics
    const isHighEnergy = emotionData?.characteristics.energy === 'high';
    const isPositive = emotionData?.characteristics.valence === 'positive';

    // Calculate text colors for contrast
    const needsDarkText = isPositive && intensity === 'mild';

    return {
      // Primary colors from the emotion
      primary: colors.primary,
      primaryLight: colors.secondary,
      primaryDark: colors.accent,

      // Backgrounds influenced by emotion
      background: colors.background,
      surface: colors.surface,
      surfaceElevated: colors.surface,

      // Text colors with proper contrast
      text: colors.text,
      textSecondary: colors.textSecondary,
      textTertiary: adjustOpacity(colors.textSecondary, 0.6),
      textOnPrimary: needsDarkText ? '#000000' : '#FFFFFF',

      // Borders derived from emotion
      border: colors.border,
      borderLight: adjustOpacity(colors.border, 0.5),

      // Buttons use emotion colors
      buttonPrimary: colors.primary,
      buttonSecondary: colors.surface,

      // Status colors influenced by emotion
      success: blendWithEmotion(colors.primary, '#10B981', 0.3),
      warning: blendWithEmotion(colors.primary, '#F59E0B', 0.3),
      error: blendWithEmotion(colors.primary, '#EF4444', 0.3),
      info: colors.info,

      // UI elements use emotion colors
      wheelBackground: adjustOpacity(colors.surface, 0.95),
      headerBackground: colors.background,
      tabBarBackground: colors.surface,

      // Metadata
      emotionName: primaryEmotion,
      intensity,
      isEmotionSelected: true,
    };
  }, [primaryEmotion, intensity]);

  return theme;
}

/**
 * Helper to adjust color opacity
 */
function adjustOpacity(hexColor: string, opacity: number): string {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Helper to blend emotion color with another color
 */
function blendWithEmotion(emotionColor: string, targetColor: string, ratio: number): string {
  const emotion = hexToRgb(emotionColor);
  const target = hexToRgb(targetColor);

  if (!emotion || !target) return targetColor;

  const blended = {
    r: Math.round(emotion.r * (1 - ratio) + target.r * ratio),
    g: Math.round(emotion.g * (1 - ratio) + target.g * ratio),
    b: Math.round(emotion.b * (1 - ratio) + target.b * ratio),
  };

  return rgbToHex(blended);
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}

function rgbToHex(rgb: { r: number; g: number; b: number }): string {
  const toHex = (n: number) => {
    const hex = Math.round(Math.max(0, Math.min(255, n))).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}
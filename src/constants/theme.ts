/**
 * Adaptive theme constants for light and dark mode
 */

import { Appearance } from 'react-native';

export interface ThemeColors {
  // Backgrounds
  background: string;
  surface: string;
  surfaceElevated: string;

  // Text
  text: string;
  textSecondary: string;
  textTertiary: string;

  // Borders
  border: string;
  borderLight: string;

  // Primary colors
  primary: string;
  primaryLight: string;

  // Status
  success: string;
  warning: string;
  error: string;

  // Special
  wheelBackground: string;
  overlayBackground: string;
}

export const lightTheme: ThemeColors = {
  // Backgrounds
  background: '#FFFFFF',
  surface: '#F5F5F7',
  surfaceElevated: '#FFFFFF',

  // Text
  text: '#1C1C1E',
  textSecondary: '#6E6E73',
  textTertiary: '#A0A0A5',

  // Borders
  border: '#E5E5EA',
  borderLight: '#F2F2F7',

  // Primary colors
  primary: '#3B82F6',
  primaryLight: '#60A5FA',

  // Status
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',

  // Special
  wheelBackground: '#FFFFFF',
  overlayBackground: 'rgba(0, 0, 0, 0.3)',
};

export const darkTheme: ThemeColors = {
  // Backgrounds
  background: '#000000',
  surface: '#1C1C1E',
  surfaceElevated: '#2C2C2E',

  // Text
  text: '#FFFFFF',
  textSecondary: '#A0A0A5',
  textTertiary: '#6E6E73',

  // Borders
  border: '#38383A',
  borderLight: '#2C2C2E',

  // Primary colors
  primary: '#3B82F6',
  primaryLight: '#2563EB',

  // Status
  success: '#32D74B',
  warning: '#FF9F0A',
  error: '#FF453A',

  // Special
  wheelBackground: '#1C1C1E',
  overlayBackground: 'rgba(0, 0, 0, 0.5)',
};

export function getTheme(): ThemeColors {
  return Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme;
}

export function useAdaptiveColor(lightColor: string, darkColor: string): string {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme === 'dark' ? darkColor : lightColor;
}
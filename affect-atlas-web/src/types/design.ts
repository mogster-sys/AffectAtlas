/**
 * Design system type definitions
 */

import type { EmotionInput } from './emotion';

export interface ColorPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;  // Base color
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface SemanticColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  error: string;
  warning: string;
  success: string;
  info: string;
}

export interface Typography {
  fontFamily: string;
  fontWeight: number;
  letterSpacing: string;
  lineHeight: number;
  sizes: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  weights: {
    thin: number;
    light: number;
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
    black: number;
  };
}

export interface Shapes {
  borderRadius: {
    none: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    full: string;
  };
  cornerStyle: 'rounded' | 'sharp' | 'smooth' | 'mixed';
}

export interface Spacing {
  base: number;
  scale: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
}

export interface Motion {
  duration: {
    instant: string;
    fast: string;
    normal: string;
    slow: string;
    slower: string;
  };
  easing: string;
  spring: {
    tension: number;
    friction: number;
    mass: number;
  };
}

export interface AccessibilityInfo {
  isValid: boolean;
  warnings: string[];
  contrastRatios: {
    textOnBackground: number;
    textOnPrimary: number;
    textOnSecondary: number;
  };
  wcagLevel: 'AAA' | 'AA' | 'A' | 'FAIL';
}

export interface DesignSystem {
  metadata: {
    generatedAt: string;
    emotion: EmotionInput;
    options?: any;
  };
  colors: {
    palette: ColorPalette;
    semantic: SemanticColors;
  };
  typography: Typography;
  shapes: Shapes;
  spacing: Spacing;
  motion: Motion;
  accessibility: AccessibilityInfo;
}
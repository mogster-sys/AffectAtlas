/**
 * OKLCH Color Space utilities for perceptually uniform color manipulation.
 * OKLCH provides better interpolation than HSL/RGB for emotional gradients.
 */

import { oklch, rgb, formatHex } from 'culori';

export interface OklchColor {
  l: number;  // Lightness: 0-1
  c: number;  // Chroma: 0-0.4 (typically)
  h: number;  // Hue: 0-360
  alpha?: number;
}

export interface RgbColor {
  r: number;  // 0-255
  g: number;  // 0-255
  b: number;  // 0-255
  alpha?: number;
}

/**
 * Convert hex color to OKLCH
 */
export function hexToOklch(hex: string): OklchColor {
  const color = oklch(hex);
  if (!color) {
    throw new Error(`Invalid hex color: ${hex}`);
  }
  return {
    l: color.l,
    c: color.c,
    h: color.h || 0,
    alpha: color.alpha,
  };
}

/**
 * Convert OKLCH to hex string
 */
export function oklchToHex(color: OklchColor): string {
  const rgbColor = rgb({
    mode: 'oklch',
    l: color.l,
    c: color.c,
    h: color.h,
    alpha: color.alpha,
  });

  return formatHex(rgbColor);
}

/**
 * Convert OKLCH to RGB values (0-255)
 */
export function oklchToRgb(color: OklchColor): RgbColor {
  const rgbColor = rgb({
    mode: 'oklch',
    l: color.l,
    c: color.c,
    h: color.h,
    alpha: color.alpha,
  });

  return {
    r: Math.round((rgbColor.r || 0) * 255),
    g: Math.round((rgbColor.g || 0) * 255),
    b: Math.round((rgbColor.b || 0) * 255),
    alpha: rgbColor.alpha,
  };
}

/**
 * Interpolate between two OKLCH colors.
 * Uses shortest path for hue interpolation.
 */
export function interpolateOklch(
  color1: OklchColor,
  color2: OklchColor,
  t: number // 0-1 interpolation factor
): OklchColor {
  // Clamp t to valid range
  t = Math.max(0, Math.min(1, t));

  // Linear interpolation for L and C
  const l = color1.l + (color2.l - color1.l) * t;
  const c = color1.c + (color2.c - color1.c) * t;

  // Shortest path hue interpolation
  const h1 = color1.h;
  const h2 = color2.h;

  // Find shortest path around the hue circle
  let hueDiff = h2 - h1;
  if (hueDiff > 180) {
    hueDiff -= 360;
  } else if (hueDiff < -180) {
    hueDiff += 360;
  }

  let h = h1 + hueDiff * t;
  if (h < 0) h += 360;
  if (h >= 360) h -= 360;

  return { l, c, h };
}

/**
 * Generate intensity gradient for an emotion color.
 * Returns colors for intense, moderate, and mild levels.
 */
export function generateIntensityGradient(
  baseColor: OklchColor,
  _emotionType: string
): { intense: string; moderate: string; mild: string } {
  // Intense: Higher chroma, slightly darker
  const intense: OklchColor = {
    l: Math.max(0.2, baseColor.l - 0.1),
    c: Math.min(0.4, baseColor.c * 1.3),
    h: baseColor.h,
  };

  // Moderate: Base values
  const moderate: OklchColor = { ...baseColor };

  // Mild: Lower chroma, lighter
  const mild: OklchColor = {
    l: Math.min(0.95, baseColor.l + 0.15),
    c: baseColor.c * 0.5,
    h: baseColor.h,
  };

  return {
    intense: oklchToHex(intense),
    moderate: oklchToHex(moderate),
    mild: oklchToHex(mild),
  };
}

/**
 * Generate a complete color palette from a base color.
 * Creates shades from 50 (lightest) to 900 (darkest).
 */
export function generateColorPalette(baseHex: string): Record<number, string> {
  const baseColor = hexToOklch(baseHex);

  const palette: Record<number, string> = {
    50: oklchToHex({ ...baseColor, l: 0.95, c: baseColor.c * 0.2 }),
    100: oklchToHex({ ...baseColor, l: 0.9, c: baseColor.c * 0.3 }),
    200: oklchToHex({ ...baseColor, l: 0.82, c: baseColor.c * 0.5 }),
    300: oklchToHex({ ...baseColor, l: 0.74, c: baseColor.c * 0.7 }),
    400: oklchToHex({ ...baseColor, l: 0.66, c: baseColor.c * 0.9 }),
    500: oklchToHex({ ...baseColor }), // Base color
    600: oklchToHex({ ...baseColor, l: baseColor.l * 0.85, c: baseColor.c }),
    700: oklchToHex({ ...baseColor, l: baseColor.l * 0.7, c: baseColor.c }),
    800: oklchToHex({ ...baseColor, l: baseColor.l * 0.55, c: baseColor.c * 0.9 }),
    900: oklchToHex({ ...baseColor, l: baseColor.l * 0.4, c: baseColor.c * 0.8 }),
  };

  return palette;
}

/**
 * Adjust the lightness of a color
 */
export function adjustLightness(hex: string, amount: number): string {
  const color = hexToOklch(hex);
  color.l = Math.max(0, Math.min(1, color.l + amount));
  return oklchToHex(color);
}

/**
 * Adjust the chroma (saturation) of a color
 */
export function adjustChroma(hex: string, amount: number): string {
  const color = hexToOklch(hex);
  color.c = Math.max(0, Math.min(0.4, color.c + amount));
  return oklchToHex(color);
}

/**
 * Rotate the hue of a color
 */
export function rotateHue(hex: string, degrees: number): string {
  const color = hexToOklch(hex);
  color.h = (color.h + degrees) % 360;
  if (color.h < 0) color.h += 360;
  return oklchToHex(color);
}

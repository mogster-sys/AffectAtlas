/**
 * Unified theme mapper — converts an emotion + intensity selection into
 * a complete DesignSystem ready for display and export.
 *
 * The EmotionTheme from designTokens.ts IS the product.
 * This mapper just reformats it into DesignSystem for export compatibility.
 */

import type { EmotionType, Intensity } from '@/types/emotion';
import type { DesignSystem, ColorPalette } from '@/types/design';
import { getEmotionTheme } from '@/constants/designTokens';
import { getEmotionWords, getEmotionFeel } from '@/constants/emotionWords';
import { getDesignGuidance } from '@/constants/designGuidance';
import { generateColorPalette } from '../color/oklch';

/**
 * Generate a complete DesignSystem from an emotion and intensity.
 * Wraps the Stitch tokens into the DesignSystem export format.
 */
export function generateDesignSystem(
  emotion: EmotionType,
  intensity: Intensity,
): DesignSystem {
  const theme = getEmotionTheme(emotion, intensity);
  const palette = generateColorPalette(theme.colors.primary) as unknown as ColorPalette;

  return {
    metadata: {
      generatedAt: new Date().toISOString(),
      emotion: {
        primary: emotion,
        intensity,
      },
    },
    colors: {
      palette,
      semantic: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        accent: theme.colors.accent,
        background: theme.colors.background,
        surface: theme.colors.surface,
        text: theme.colors.text,
        textSecondary: theme.colors.textSecondary,
        border: theme.isDark ? '#2a2a2b' : '#e0e0e0',
        error: '#ef4444',
        warning: '#f59e0b',
        success: '#22c55e',
        info: '#3b82f6',
      },
    },
    typography: {
      fontFamily: theme.typography.headlineFont,
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.5,
      sizes: {
        xs: '10px', sm: '12px', base: '14px', lg: '16px',
        xl: '20px', '2xl': '24px', '3xl': '32px', '4xl': '40px',
      },
      weights: {
        thin: 100, light: 300, regular: 400, medium: 500,
        semibold: 600, bold: 700, black: 900,
      },
    },
    shapes: {
      borderRadius: {
        none: '0px',
        sm: `${Math.round(theme.shapes.borderRadius * 0.5)}px`,
        base: `${theme.shapes.borderRadius}px`,
        md: `${theme.shapes.borderRadiusLg}px`,
        lg: `${theme.shapes.borderRadiusLg}px`,
        xl: `${theme.shapes.borderRadiusXl}px`,
        '2xl': `${Math.round(theme.shapes.borderRadiusXl * 1.5)}px`,
        full: '9999px',
      },
      cornerStyle: theme.shapes.cornerStyle,
    },
    spacing: {
      base: 8,
      scale: {
        xs: '4px', sm: '8px', md: '16px', lg: '24px',
        xl: '32px', '2xl': '48px', '3xl': '64px', '4xl': '96px',
      },
    },
    motion: {
      duration: {
        instant: '50ms', fast: '100ms', normal: '200ms',
        slow: '300ms', slower: '500ms',
      },
      easing: 'ease-out',
      spring: { tension: 170, friction: 12, mass: 1 },
    },
    accessibility: {
      isValid: true,
      warnings: [],
      contrastRatios: {
        textOnBackground: 0,
        textOnPrimary: 0,
        textOnSecondary: 0,
      },
      wcagLevel: 'AA',
    },
  };
}

/**
 * Generate an AI prompt that describes the design system for this emotion.
 * Outputs exactly what Stitch designed — colors, fonts, shapes, words, feel.
 */
export function generateAIPrompt(
  emotion: EmotionType,
  intensity: Intensity,
): string {
  const theme = getEmotionTheme(emotion, intensity);
  const words = getEmotionWords(emotion);
  const feel = getEmotionFeel(emotion);

  const label = emotion.charAt(0).toUpperCase() + emotion.slice(1);
  const lines: string[] = [
    `Design System: ${label} (${intensity} intensity)`,
    `Source: ${theme.source}`,
    '',
    `Emotion: ${label}`,
    `Intensity: ${intensity}`,
    `Feel: ${feel}`,
    '',
    '--- Colors ---',
    `Theme: ${theme.isDark ? 'Dark' : 'Light'}`,
    `Primary: ${theme.colors.primary}`,
    `Secondary: ${theme.colors.secondary}`,
    `Accent: ${theme.colors.accent}`,
    `Background: ${theme.colors.background}`,
    `Surface: ${theme.colors.surface}`,
    `Text: ${theme.colors.text}`,
    `Text Secondary: ${theme.colors.textSecondary}`,
    `Palette: ${theme.colors.palette.join(', ')}`,
    '',
    '--- Typography ---',
    `Headline font: ${theme.typography.headlineFont}`,
    `Body font: ${theme.typography.bodyFont}`,
    '',
    '--- Shapes ---',
    `Border radius: ${theme.shapes.borderRadius}px`,
    `Border radius lg: ${theme.shapes.borderRadiusLg}px`,
    `Border radius xl: ${theme.shapes.borderRadiusXl}px`,
    `Corner style: ${theme.shapes.cornerStyle}`,
    '',
    '--- Thesaurus Words ---',
    words.join(', '),
    '',
    '--- Design Direction ---',
    `Apply this design system to create a UI that embodies ${label}.`,
    `The visual language should feel: ${feel}.`,
    `Use ${theme.typography.headlineFont} for headlines and ${theme.typography.bodyFont} for body text.`,
    `Corners should be ${theme.shapes.cornerStyle} with ${theme.shapes.borderRadius}px base radius.`,
    theme.isDark
      ? 'Use a dark background with light text.'
      : 'Use a light background with dark text.',
    '',
    'The thesaurus words above can be displayed as a word cloud to',
    'reinforce the emotional atmosphere of the design.',
  ];

  const guidance = getDesignGuidance(emotion, intensity);
  if (guidance) {
    lines.push('');
    lines.push('--- Design Guidance ---');
    lines.push(`Creative North Star: "${guidance.northStar}"`);
    lines.push(`Philosophy: ${guidance.philosophy}`);
    lines.push('');
    lines.push("Do's:");
    guidance.dos.forEach(d => lines.push(`  - ${d}`));
    lines.push('');
    lines.push("Don'ts:");
    guidance.donts.forEach(d => lines.push(`  - ${d}`));
  }

  return lines.join('\n');
}

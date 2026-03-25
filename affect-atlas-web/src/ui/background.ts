/**
 * Applies an EmotionTheme to the page by setting CSS custom properties on :root.
 * CSS transitions in style.css handle the animated crossfade.
 */

import type { EmotionTheme } from '@/constants/designTokens';
import { ensureFontsLoaded } from './fontLoader';

export async function applyTheme(theme: EmotionTheme): Promise<void> {
  // Load fonts before applying so there's no FOUT
  await ensureFontsLoaded(theme.typography.headlineFont, theme.typography.bodyFont);

  const root = document.documentElement.style;

  root.setProperty('--ea-bg', theme.colors.background);
  root.setProperty('--ea-text', theme.colors.text);
  root.setProperty('--ea-text-secondary', theme.colors.textSecondary);
  root.setProperty('--ea-primary', theme.colors.primary);
  root.setProperty('--ea-secondary', theme.colors.secondary);
  root.setProperty('--ea-accent', theme.colors.accent);
  root.setProperty('--ea-surface', theme.colors.surface);
  root.setProperty('--ea-radius', `${theme.shapes.borderRadius}px`);
  root.setProperty('--ea-radius-lg', `${theme.shapes.borderRadiusLg}px`);
  root.setProperty('--ea-radius-xl', `${theme.shapes.borderRadiusXl}px`);
  root.setProperty('--ea-font-headline', `'${theme.typography.headlineFont}', sans-serif`);
  root.setProperty('--ea-font-body', `'${theme.typography.bodyFont}', sans-serif`);
}

export function applyDefaultTheme(): void {
  const root = document.documentElement.style;
  root.setProperty('--ea-bg', '#0A0A0B');
  root.setProperty('--ea-text', '#FFFFFF');
  root.setProperty('--ea-text-secondary', '#666666');
  root.setProperty('--ea-primary', '#3B82F6');
  root.setProperty('--ea-secondary', '#1A1A1B');
  root.setProperty('--ea-accent', '#3B82F6');
  root.setProperty('--ea-surface', '#1A1A1B');
  root.setProperty('--ea-radius', '12px');
  root.setProperty('--ea-radius-lg', '24px');
  root.setProperty('--ea-radius-xl', '36px');
  root.setProperty('--ea-font-headline', "'Inter', sans-serif");
  root.setProperty('--ea-font-body', "'Inter', sans-serif");
}

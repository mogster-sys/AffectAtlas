/**
 * EmotionAdvisory type definitions and registry.
 *
 * Each deepened emotion gets a dedicated advisory file
 * (e.g. trustAdvisory.ts) populated from Stitch output.
 * Non-deepened emotions use the fallback generator.
 */

import type { AnyEmotionType } from '@/types/emotion';

// ── Color dimension ──────────────────────────────────

export interface AdvisoryColors {
  /** Full MD3 color token map -- what Stitch actually produced */
  tokens: Record<string, string>;
  /** 5-swatch quick-reference palette strip */
  palette: [string, string, string, string, string];
  /** Hex steps from mild (desaturated) to intense (saturated) */
  mildToIntense: string[];
  rationale: string;
}

// ── Typography dimension ─────────────────────────────

export interface AdvisoryTypographyScale {
  text: string;
  size: string;
  weight: number;
  font: 'headline' | 'body';
  transform?: string;
  tracking?: string;
}

export interface AdvisoryTypography {
  headlineFont: string;
  headlineFallback: string;
  bodyFont: string;
  bodyFallback: string;
  scale: {
    display: AdvisoryTypographyScale;
    headline: AdvisoryTypographyScale;
    title: AdvisoryTypographyScale;
    body: AdvisoryTypographyScale;
    label: AdvisoryTypographyScale;
    caption: AdvisoryTypographyScale;
  };
  letterSpacing: {
    headline: string;
    body: string;
    label: string;
  };
  lineHeight: {
    headline: number;
    body: number;
  };
  mildToIntense: string;
  rationale: string;
}

// ── Spacing dimension ────────────────────────────────

export interface AdvisorySpacingStep {
  label: string;
  value: string;
}

export interface AdvisorySpacing {
  scale: AdvisorySpacingStep[];
  density: 'tight' | 'normal' | 'generous' | 'variable';
  mildToIntense: string;
  rationale: string;
}

// ── Motion dimension ─────────────────────────────────

export interface AdvisoryMotion {
  duration: string;
  easing: string;
  character: string;
  /** cubic-bezier control points: x1, y1, x2, y2 */
  bezierPoints: [number, number, number, number];
  mildToIntense: string;
  rationale: string;
}

// ── Depth / shadows dimension ────────────────────────

export interface AdvisoryDepthLevel {
  label: string;
  description: string;
  background: string;
}

export interface AdvisoryDepth {
  approach: 'shadows' | 'tonal' | 'mixed' | 'glow';
  levels: AdvisoryDepthLevel[];
  /** CSS box-shadow if one is absolutely needed */
  shadowIfNeeded: string;
  /** Ghost border CSS for accessibility fallback */
  ghostBorder: string;
  rationale: string;
}

// ── Shapes dimension ─────────────────────────────────

export interface AdvisoryRadiusStep {
  label: string;
  value: string;
  recommended?: boolean;
}

export interface AdvisoryShapes {
  radii: AdvisoryRadiusStep[];
  cornerStyle: 'sharp' | 'smooth' | 'rounded' | 'mixed';
  mildToIntense: string;
  rationale: string;
}

// ── Layout dimension ─────────────────────────────────

export interface AdvisoryLayout {
  alignment: 'left' | 'center' | 'asymmetric';
  density: 'sparse' | 'normal' | 'dense' | 'variable';
  rationale: string;
}

// ── Iconography dimension ────────────────────────────

export interface AdvisoryIcon {
  name: string;
  label: string;
}

export interface AdvisoryIconography {
  icons: AdvisoryIcon[];
  style: string;
  weight: number;
  fill: boolean;
  rationale: string;
}

// ── Rules dimension ──────────────────────────────────

export interface AdvisoryRules {
  dos: string[];
  donts: string[];
}

// ── Words dimension ──────────────────────────────────

export interface AdvisoryWords {
  words: string[];
  feel: string;
}

// ── Variant (bonus screen) ───────────────────────────

export interface AdvisoryVariant {
  /** Short label for the chip (e.g. "Passion") */
  variantLabel: string;
  /** Full advisory data for this variant */
  advisory: EmotionAdvisory;
}

// ── Full advisory ────────────────────────────────────

export interface EmotionAdvisory {
  emotion: AnyEmotionType;
  label: string;
  northStar: string;
  philosophy: {
    brief: string;
    rationale: string;
  };
  /** true = extracted from Stitch, false = auto-generated */
  deepened: boolean;
  /** provenance (e.g. "stitch:trust_advisory" or "fallback") */
  source: string;

  /** Comparative text: what makes this emotion unique vs others */
  emotionalContext?: string;

  colors: AdvisoryColors;
  typography: AdvisoryTypography;
  spacing: AdvisorySpacing;
  motion: AdvisoryMotion;
  depth: AdvisoryDepth;
  shapes: AdvisoryShapes;
  layout: AdvisoryLayout;
  iconography: AdvisoryIconography;
  rules: AdvisoryRules;
  words: AdvisoryWords;

  /** Optional variant screens (max 3). Each is a full advisory. */
  variants?: AdvisoryVariant[];
}

// ── Registry ─────────────────────────────────────────

const advisoryRegistry = new Map<AnyEmotionType, EmotionAdvisory>();

export function registerAdvisory(advisory: EmotionAdvisory): void {
  advisoryRegistry.set(advisory.emotion, advisory);
}

export function getAdvisory(emotion: AnyEmotionType): EmotionAdvisory | undefined {
  return advisoryRegistry.get(emotion);
}

export function hasDeepened(emotion: AnyEmotionType): boolean {
  const a = advisoryRegistry.get(emotion);
  return a !== undefined && a.deepened;
}

export function getAllAdvisories(): EmotionAdvisory[] {
  return Array.from(advisoryRegistry.values());
}

export function hasVariants(emotion: AnyEmotionType): boolean {
  const a = advisoryRegistry.get(emotion);
  return (a?.variants?.length ?? 0) > 0;
}

export function getVariants(emotion: AnyEmotionType): AdvisoryVariant[] {
  const a = advisoryRegistry.get(emotion);
  return a?.variants ?? [];
}

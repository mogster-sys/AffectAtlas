/**
 * Complete design token sets for all 29 emotions × 3 intensities = 87 entries.
 * Values sourced directly from Stitch-generated code.html Tailwind configs.
 * No computed modifiers — each entry is exactly what Stitch designed.
 *
 * Entries marked "placeholder" use the closest available Stitch screen
 * until dedicated screens are generated.
 */

import type { AnyEmotionType, Intensity } from '@/types/emotion';
import { isExtraEmotion, getExtraEmotion } from '@/constants/extraEmotions';

export interface EmotionColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  palette: [string, string, string, string, string];
}

export interface EmotionTypography {
  headlineFont: string;
  bodyFont: string;
}

export interface EmotionShapes {
  borderRadius: number;
  borderRadiusLg: number;
  borderRadiusXl: number;
  cornerStyle: 'rounded' | 'sharp' | 'smooth' | 'mixed';
}

export interface EmotionTheme {
  emotion: AnyEmotionType;
  intensity: Intensity;
  source: string;
  placeholder: boolean;
  isDark: boolean;
  colors: EmotionColors;
  typography: EmotionTypography;
  shapes: EmotionShapes;
}

const ALL_THEMES: EmotionTheme[] = [
  // joy mild (V2 — mild uses desaturated warm cream from prompt Mild-to-Intense)
  {
    emotion: 'joy',
    intensity: 'mild',
    source: 'v2-01-joy',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#6c5a00',
      secondary: '#5f5c4a',
      accent: '#6c5a00',
      background: '#fff8e8',
      surface: '#fff4f2',
      text: '#412923',
      textSecondary: '#72544e',
      palette: ['#fef3e0', '#6c5a00', '#5f5c4a', '#f5e6d0', '#fff8e8'],
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans',
      bodyFont: 'Be Vietnam Pro',
    },
    shapes: {
      borderRadius: 12,
      borderRadiusLg: 16,
      borderRadiusXl: 24,
      cornerStyle: 'rounded',
    },
  },
  // joy moderate (V2 — directly from v2-01-joy code.html Tailwind config)
  {
    emotion: 'joy',
    intensity: 'moderate',
    source: 'v2-01-joy',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#7b5400',
      secondary: '#9b3e20',
      accent: '#6c5a00',
      background: '#fdf6df',
      surface: '#fff4f2',
      text: '#322f20',
      textSecondary: '#5f5c4a',
      palette: ['#ffd709', '#7b5400', '#9b3e20', '#fdf6df', '#fff8e8'],
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans',
      bodyFont: 'Be Vietnam Pro',
    },
    shapes: {
      borderRadius: 12,
      borderRadiusLg: 16,
      borderRadiusXl: 24,
      cornerStyle: 'rounded',
    },
  },
  // joy intense (V2 — intense uses saturated amber-orange from prompt Mild-to-Intense)
  {
    emotion: 'joy',
    intensity: 'intense',
    source: 'v2-01-joy',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#874e00',
      secondary: '#6c5a00',
      accent: '#ff9800',
      background: '#fff5ec',
      surface: '#fff4f2',
      text: '#432900',
      textSecondary: '#765524',
      palette: ['#ff9800', '#874e00', '#6c5a00', '#a83100', '#fff5ec'],
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans',
      bodyFont: 'Be Vietnam Pro',
    },
    shapes: {
      borderRadius: 12,
      borderRadiusLg: 16,
      borderRadiusXl: 24,
      cornerStyle: 'rounded',
    },
  },
  // trust mild (V2 — mild uses desaturated cool gray from prompt Mild-to-Intense)
  {
    emotion: 'trust',
    intensity: 'mild',
    source: 'v2-02-trust',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#002434',
      secondary: '#b0bec5',
      accent: '#cfd8dc',
      background: '#eceff1',
      surface: '#eceff1',
      text: '#191c1d',
      textSecondary: '#42474b',
      palette: ['#b0bec5', '#cfd8dc', '#eceff1', '#002434', '#506169'],
    },
    typography: {
      headlineFont: 'Newsreader',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'smooth',
    },
  },
  // trust moderate (V2 — directly from v2-02-trust code.html Tailwind config)
  {
    emotion: 'trust',
    intensity: 'moderate',
    source: 'v2-02-trust',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#002434',
      secondary: '#506169',
      accent: '#446274',
      background: '#f3faff',
      surface: '#f8fafb',
      text: '#191c1d',
      textSecondary: '#42474b',
      palette: ['#1a3a4a', '#002434', '#506169', '#f3faff', '#e6f6ff'],
    },
    typography: {
      headlineFont: 'Newsreader',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 8,
      cornerStyle: 'smooth',
    },
  },
  // trust intense (V2 — high-contrast deep navy, Inter only, max sharpness)
  {
    emotion: 'trust',
    intensity: 'intense',
    source: 'v2-02-trust',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#002434',
      secondary: '#000d14',
      accent: '#002434',
      background: '#f8fafb',
      surface: '#f8fafb',
      text: '#191c1d',
      textSecondary: '#42474b',
      palette: ['#002434', '#000d14', '#f8fafb', '#1a3a4a', '#506169'],
    },
    typography: {
      headlineFont: 'Inter',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 2,
      borderRadiusXl: 4,
      cornerStyle: 'smooth',
    },
  },
  // fear mild (V2 — desaturated twilight from prompt Mild-to-Intense)
  {
    emotion: 'fear',
    intensity: 'mild',
    source: 'v2-03-fear',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#d3bee9',
      secondary: '#a698b7',
      accent: '#6A5A7A',
      background: '#2A2030',
      surface: '#2A2030',
      text: '#e5e2e1',
      textSecondary: '#cdc3d4',
      palette: ['#2A2030', '#3D2D4A', '#6A5A7A', '#d3bee9', '#a698b7'],
    },
    typography: {
      headlineFont: 'Epilogue',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'sharp',
    },
  },
  // fear moderate (V2 — directly from v2-03-fear code.html Tailwind config)
  {
    emotion: 'fear',
    intensity: 'moderate',
    source: 'v2-03-fear',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#d3bee9',
      secondary: '#a698b7',
      accent: '#efb1f9',
      background: '#0e0e0e',
      surface: '#191a1a',
      text: '#e5e2e1',
      textSecondary: '#cdc3d4',
      palette: ['#504063', '#d3bee9', '#a698b7', '#0e0e0e', '#131313'],
    },
    typography: {
      headlineFont: 'Epilogue',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'sharp',
    },
  },
  // fear intense (V2 — near-black with violet flickers, max clinical sharpness)
  {
    emotion: 'fear',
    intensity: 'intense',
    source: 'v2-03-fear',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#d3bee9',
      secondary: '#504063',
      accent: '#efb1f9',
      background: '#050505',
      surface: '#0a0a0a',
      text: '#e5e2e1',
      textSecondary: '#cdc3d4',
      palette: ['#0a0a0a', '#050505', '#1c0634', '#504063', '#d3bee9'],
    },
    typography: {
      headlineFont: 'Epilogue',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 0,
      borderRadiusXl: 0,
      cornerStyle: 'sharp',
    },
  },
  // surprise mild (V2 — light pastels, gentle double-take from prompt Mild-to-Intense)
  {
    emotion: 'surprise',
    intensity: 'mild',
    source: 'v2-04-surprise',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#e060d8',
      secondary: '#30c8e0',
      accent: '#b098f0',
      background: '#FCF4FC',
      surface: '#FCF4FC',
      text: '#322e3c',
      textSecondary: '#4c4458',
      palette: ['#F0D0E8', '#D0E8F0', '#FCF4FC', '#e060d8', '#30c8e0'],
    },
    typography: {
      headlineFont: 'Space Grotesk',
      bodyFont: 'Manrope',
    },
    shapes: {
      borderRadius: 8,
      borderRadiusLg: 16,
      borderRadiusXl: 16,
      cornerStyle: 'mixed',
    },
  },
  // surprise moderate (V2 — directly from v2-04-surprise code.html Tailwind config)
  {
    emotion: 'surprise',
    intensity: 'moderate',
    source: 'v2-04-surprise',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#ff7cf5',
      secondary: '#50e1f9',
      accent: '#c8b4ff',
      background: '#0a0030',
      surface: '#201c30',
      text: '#e8e0f0',
      textSecondary: '#ccc4d8',
      palette: ['#7a0077', '#ff7cf5', '#50e1f9', '#0a0030', '#201c30'],
    },
    typography: {
      headlineFont: 'Space Grotesk',
      bodyFont: 'Manrope',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 16,
      borderRadiusXl: 32,
      cornerStyle: 'mixed',
    },
  },
  // surprise intense (V2 — maximum contrast, lightning bolt, 0px + 48px corners)
  {
    emotion: 'surprise',
    intensity: 'intense',
    source: 'v2-04-surprise',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#ff5af9',
      secondary: '#00fbfb',
      accent: '#c8b4ff',
      background: '#0e0e10',
      surface: '#141020',
      text: '#e8e0f0',
      textSecondary: '#ccc4d8',
      palette: ['#0e0e10', '#ff5af9', '#00fbfb', '#141020', '#c8b4ff'],
    },
    typography: {
      headlineFont: 'Space Grotesk',
      bodyFont: 'Manrope',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 32,
      borderRadiusXl: 48,
      cornerStyle: 'mixed',
    },
  },
  // sadness mild (V2 — morning fog, barely there, drifting)
  {
    emotion: 'sadness',
    intensity: 'mild',
    source: 'v2-05-sadness',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#3a5460',
      secondary: '#42555e',
      accent: '#5a4780',
      background: '#f2fbff',
      surface: '#f1f5f7',
      text: '#42474b',
      textSecondary: '#72787c',
      palette: ['#f2fbff', '#f1f5f7', '#ebeef1', '#d8dde0', '#b3d5e4'],
    },
    typography: {
      headlineFont: 'Cormorant Garamond',
      bodyFont: 'Newsreader',
    },
    shapes: {
      borderRadius: 8,
      borderRadiusLg: 12,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // sadness moderate (V2 — directly from v2-05-sadness code.html Tailwind config)
  {
    emotion: 'sadness',
    intensity: 'moderate',
    source: 'v2-05-sadness',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#48626e',
      secondary: '#4f626b',
      accent: '#69558e',
      background: '#f2fbff',
      surface: '#ebeef1',
      text: '#1b1f22',
      textSecondary: '#42474b',
      palette: ['#cbe7f5', '#48626e', '#4f626b', '#f2fbff', '#d8dde0'],
    },
    typography: {
      headlineFont: 'Cormorant Garamond',
      bodyFont: 'Newsreader',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // sadness intense (V2 — granite, monumental weight, stone-like)
  {
    emotion: 'sadness',
    intensity: 'intense',
    source: 'v2-05-sadness',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#283439',
      secondary: '#4a626d',
      accent: '#69558e',
      background: '#f7fafc',
      surface: '#d8dde0',
      text: '#1b1f22',
      textSecondary: '#2f3336',
      palette: ['#283439', '#4a626d', '#7c8a99', '#d8dde0', '#f7fafc'],
    },
    typography: {
      headlineFont: 'Cormorant Garamond',
      bodyFont: 'Newsreader',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'smooth',
    },
  },
  // disgust mild (V2 — muted beige-olive, food that smells slightly off)
  {
    emotion: 'disgust',
    intensity: 'mild',
    source: 'v2-06-disgust',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#D0C6A5',
      secondary: '#A0A080',
      accent: '#8a8060',
      background: '#141408',
      surface: '#1a1a0d',
      text: '#e6e3cc',
      textSecondary: '#c0bda8',
      palette: ['#D0C6A5', '#A0A080', '#8a8060', '#141408', '#1a1a0d'],
    },
    typography: {
      headlineFont: 'Syne',
      bodyFont: 'Work Sans',
    },
    shapes: {
      borderRadius: 8,
      borderRadiusLg: 12,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // disgust moderate (V2 — directly from v2-06-disgust code.html Tailwind config)
  {
    emotion: 'disgust',
    intensity: 'moderate',
    source: 'v2-06-disgust',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#c3cf52',
      secondary: '#a09070',
      accent: '#8a8060',
      background: '#141408',
      surface: '#202013',
      text: '#e6e3cc',
      textSecondary: '#c0bda8',
      palette: ['#c3cf52', '#a09070', '#8a8060', '#141408', '#202013'],
    },
    typography: {
      headlineFont: 'Syne',
      bodyFont: 'Work Sans',
    },
    shapes: {
      borderRadius: 6,
      borderRadiusLg: 12,
      borderRadiusXl: 16,
      cornerStyle: 'smooth',
    },
  },
  // disgust intense (V2 — toxic, sickly yellow-green on near-black, full rot)
  {
    emotion: 'disgust',
    intensity: 'intense',
    source: 'v2-06-disgust',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#c3cf52',
      secondary: '#464c00',
      accent: '#8a8060',
      background: '#0f0f05',
      surface: '#141408',
      text: '#e6e3cc',
      textSecondary: '#c0bda8',
      palette: ['#c3cf52', '#464c00', '#0f0f05', '#141408', '#202013'],
    },
    typography: {
      headlineFont: 'Syne',
      bodyFont: 'Work Sans',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 4,
      cornerStyle: 'smooth',
    },
  },
  // anger mild (V2 — smoldering coals, simmering but structured)
  {
    emotion: 'anger',
    intensity: 'mild',
    source: 'v2-07-anger',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#e7bdb6',
      secondary: '#c9a39c',
      accent: '#dac18e',
      background: '#1a0e0c',
      surface: '#221715',
      text: '#f1dedb',
      textSecondary: '#d8c2bd',
      palette: ['#e7bdb6', '#5d3f3b', '#c9a39c', '#1a0e0c', '#221715'],
    },
    typography: {
      headlineFont: 'Oswald',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 2,
      borderRadiusXl: 2,
      cornerStyle: 'sharp',
    },
  },
  // anger moderate (V2 — directly from v2-07-anger code.html Tailwind config)
  {
    emotion: 'anger',
    intensity: 'moderate',
    source: 'v2-07-anger',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#ff8a80',
      secondary: '#e7bdb6',
      accent: '#dac18e',
      background: '#1a0e0c',
      surface: '#261b19',
      text: '#f1dedb',
      textSecondary: '#d8c2bd',
      palette: ['#ff8a80', '#930012', '#e7bdb6', '#1a0e0c', '#261b19'],
    },
    typography: {
      headlineFont: 'Oswald',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 0,
      borderRadiusXl: 0,
      cornerStyle: 'sharp',
    },
  },
  // anger intense (V2 — pure combustion, white-hot steel, maximum compression)
  {
    emotion: 'anger',
    intensity: 'intense',
    source: 'v2-07-anger',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#ff0000',
      secondary: '#930012',
      accent: '#c00010',
      background: '#120807',
      surface: '#1a0e0c',
      text: '#ffdad6',
      textSecondary: '#f1dedb',
      palette: ['#ff0000', '#c00010', '#930012', '#120807', '#1a0e0c'],
    },
    typography: {
      headlineFont: 'Oswald',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 0,
      borderRadiusXl: 0,
      cornerStyle: 'sharp',
    },
  },
  // anticipation mild (V2 — warm whisper, golden-hour dawn, soft undercurrent)
  {
    emotion: 'anticipation',
    intensity: 'mild',
    source: 'v2-08-anticipation',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#c88a30',
      secondary: '#8a6e4a',
      accent: '#b86040',
      background: '#fff8f0',
      surface: '#fdf5ec',
      text: '#1e1b17',
      textSecondary: '#5a5248',
      palette: ['#c88a30', '#d4b888', '#8a6e4a', '#fff8f0', '#fdf5ec'],
    },
    typography: {
      headlineFont: 'Urbanist',
      bodyFont: 'Nunito Sans',
    },
    shapes: {
      borderRadius: 16,
      borderRadiusLg: 20,
      borderRadiusXl: 20,
      cornerStyle: 'smooth',
    },
  },
  // anticipation moderate (V2 — directly from v2-08-anticipation code.html Tailwind config)
  {
    emotion: 'anticipation',
    intensity: 'moderate',
    source: 'v2-08-anticipation',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#b87820',
      secondary: '#8a6e4a',
      accent: '#b05830',
      background: '#fff8f0',
      surface: '#fdf5ec',
      text: '#1e1b17',
      textSecondary: '#5a5248',
      palette: ['#b87820', '#ffddb0', '#8a6e4a', '#fff8f0', '#f5ede3'],
    },
    typography: {
      headlineFont: 'Urbanist',
      bodyFont: 'Nunito Sans',
    },
    shapes: {
      borderRadius: 12,
      borderRadiusLg: 12,
      borderRadiusXl: 20,
      cornerStyle: 'smooth',
    },
  },
  // anticipation intense (V2 — radiant forward, full sunburst, peak momentum)
  {
    emotion: 'anticipation',
    intensity: 'intense',
    source: 'v2-08-anticipation',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#b87820',
      secondary: '#b05830',
      accent: '#924828',
      background: '#fff8f0',
      surface: '#f5ede3',
      text: '#1e1b17',
      textSecondary: '#5a5248',
      palette: ['#b87820', '#b05830', '#924828', '#fff8f0', '#f5ede3'],
    },
    typography: {
      headlineFont: 'Urbanist',
      bodyFont: 'Nunito Sans',
    },
    shapes: {
      borderRadius: 8,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // love mild (V2 — tender warmth, gentle blush, holding hands)
  {
    emotion: 'love',
    intensity: 'mild',
    source: 'v2-09-love',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#d8a0a8',
      secondary: '#c8b090',
      accent: '#a05070',
      background: '#fdf6f2',
      surface: '#fef9f6',
      text: '#3a2830',
      textSecondary: '#786068',
      palette: ['#d8a0a8', '#f0d0d4', '#c8b090', '#fdf6f2', '#fef9f6'],
    },
    typography: {
      headlineFont: 'Crimson Pro',
      bodyFont: 'Rubik',
    },
    shapes: {
      borderRadius: 22,
      borderRadiusLg: 28,
      borderRadiusXl: 28,
      cornerStyle: 'rounded',
    },
  },
  // love moderate (V2 — directly from code.html Tailwind config)
  {
    emotion: 'love',
    intensity: 'moderate',
    source: 'v2-09-love',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#c0707a',
      secondary: '#b09060',
      accent: '#7a2848',
      background: '#fdf6f2',
      surface: '#faf2ee',
      text: '#3a2830',
      textSecondary: '#786068',
      palette: ['#c0707a', '#f0d0d4', '#b09060', '#fdf6f2', '#f6ece6'],
    },
    typography: {
      headlineFont: 'Crimson Pro',
      bodyFont: 'Rubik',
    },
    shapes: {
      borderRadius: 18,
      borderRadiusLg: 18,
      borderRadiusXl: 24,
      cornerStyle: 'rounded',
    },
  },
  // love intense (V2 — passionate, consuming, all-in)
  {
    emotion: 'love',
    intensity: 'intense',
    source: 'v2-09-love',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#984050',
      secondary: '#887040',
      accent: '#581830',
      background: '#fdf6f2',
      surface: '#f0e4de',
      text: '#3a2830',
      textSecondary: '#786068',
      palette: ['#984050', '#887040', '#581830', '#fdf6f2', '#f0e4de'],
    },
    typography: {
      headlineFont: 'Crimson Pro',
      bodyFont: 'Rubik',
    },
    shapes: {
      borderRadius: 14,
      borderRadiusLg: 14,
      borderRadiusXl: 16,
      cornerStyle: 'rounded',
    },
  },
  // submission mild (V2 — barely there, maximum deference, approaching neutral)
  {
    emotion: 'submission',
    intensity: 'mild',
    source: 'v2-10-submission',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#90a0a8',
      secondary: '#98a098',
      accent: '#b8b098',
      background: '#f2f0ee',
      surface: '#f8f6f4',
      text: '#484848',
      textSecondary: '#787470',
      palette: ['#90a0a8', '#d0dce4', '#98a098', '#f2f0ee', '#f8f6f4'],
    },
    typography: {
      headlineFont: 'Maven Pro',
      bodyFont: 'Lato',
    },
    shapes: {
      borderRadius: 22,
      borderRadiusLg: 28,
      borderRadiusXl: 28,
      cornerStyle: 'rounded',
    },
  },
  // submission moderate (V2 — directly from code.html Tailwind config)
  {
    emotion: 'submission',
    intensity: 'moderate',
    source: 'v2-10-submission',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#7090a0',
      secondary: '#889880',
      accent: '#a89878',
      background: '#f2f0ee',
      surface: '#f0ecea',
      text: '#484848',
      textSecondary: '#787470',
      palette: ['#7090a0', '#d0dce4', '#889880', '#f2f0ee', '#eae8e4'],
    },
    typography: {
      headlineFont: 'Maven Pro',
      bodyFont: 'Lato',
    },
    shapes: {
      borderRadius: 18,
      borderRadiusLg: 18,
      borderRadiusXl: 24,
      cornerStyle: 'rounded',
    },
  },
  // submission intense (V2 — quiet determination, more defined but still deferential)
  {
    emotion: 'submission',
    intensity: 'intense',
    source: 'v2-10-submission',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#506878',
      secondary: '#687860',
      accent: '#887858',
      background: '#f2f0ee',
      surface: '#e4e2de',
      text: '#484848',
      textSecondary: '#787470',
      palette: ['#506878', '#687860', '#887858', '#f2f0ee', '#e4e2de'],
    },
    typography: {
      headlineFont: 'Maven Pro',
      bodyFont: 'Lato',
    },
    shapes: {
      borderRadius: 14,
      borderRadiusLg: 14,
      borderRadiusXl: 16,
      cornerStyle: 'rounded',
    },
  },
  // alarm mild (V2 — cautious alert, amber warning, early detection)
  {
    emotion: 'alarm',
    intensity: 'mild',
    source: 'v2-11-alarm',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#e06040',
      secondary: '#e0a848',
      accent: '#e8e0d8',
      background: '#121018',
      surface: '#1a1620',
      text: '#e8e0d8',
      textSecondary: '#a89890',
      palette: ['#e06040', '#f0c0b0', '#e0a848', '#121018', '#1a1620'],
    },
    typography: {
      headlineFont: 'Exo 2',
      bodyFont: 'Fira Sans',
    },
    shapes: {
      borderRadius: 6,
      borderRadiusLg: 6,
      borderRadiusXl: 10,
      cornerStyle: 'sharp',
    },
  },
  // alarm moderate (V2 — emergency control panel, red alert, pulsing urgency)
  {
    emotion: 'alarm',
    intensity: 'moderate',
    source: 'v2-11-alarm',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#d03020',
      secondary: '#d89020',
      accent: '#e8e0d8',
      background: '#0c0a0e',
      surface: '#141018',
      text: '#e8e0d8',
      textSecondary: '#a89890',
      palette: ['#d03020', '#e88070', '#d89020', '#0c0a0e', '#141018'],
    },
    typography: {
      headlineFont: 'Exo 2',
      bodyFont: 'Fira Sans',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'sharp',
    },
  },
  // alarm intense (V2 — full emergency, maximum urgency, critical state)
  {
    emotion: 'alarm',
    intensity: 'intense',
    source: 'v2-11-alarm',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#b82018',
      secondary: '#c07818',
      accent: '#e0d8d0',
      background: '#080608',
      surface: '#100c10',
      text: '#e0d8d0',
      textSecondary: '#988880',
      palette: ['#b82018', '#d06050', '#c07818', '#080608', '#100c10'],
    },
    typography: {
      headlineFont: 'Exo 2',
      bodyFont: 'Fira Sans',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 2,
      borderRadiusXl: 4,
      cornerStyle: 'sharp',
    },
  },
  // disappointment mild (V2)
  {
    emotion: 'disappointment',
    intensity: 'mild',
    source: 'v2-12-disappointment',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#687888',
      secondary: '#808080',
      accent: '#a09070',
      background: '#f0f0f2',
      surface: '#e6e6ea',
      text: '#404040',
      textSecondary: '#686868',
      palette: ['#a09070', '#687888', '#808080', '#e6e6ea', '#f0f0f2'],
    },
    typography: {
      headlineFont: 'Vollkorn',
      bodyFont: 'Jost',
    },
    shapes: {
      borderRadius: 10,
      borderRadiusLg: 14,
      borderRadiusXl: 28,
      cornerStyle: 'smooth',
    },
  },
  // disappointment moderate (V2)
  {
    emotion: 'disappointment',
    intensity: 'moderate',
    source: 'v2-12-disappointment',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#687888',
      secondary: '#808080',
      accent: '#a09070',
      background: '#f0f0f2',
      surface: '#e6e6ea',
      text: '#404040',
      textSecondary: '#686868',
      palette: ['#a09070', '#687888', '#808080', '#e6e6ea', '#f0f0f2'],
    },
    typography: {
      headlineFont: 'Vollkorn',
      bodyFont: 'Jost',
    },
    shapes: {
      borderRadius: 10,
      borderRadiusLg: 14,
      borderRadiusXl: 28,
      cornerStyle: 'smooth',
    },
  },
  // disappointment intense (V2)
  {
    emotion: 'disappointment',
    intensity: 'intense',
    source: 'v2-12-disappointment',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#687888',
      secondary: '#808080',
      accent: '#a09070',
      background: '#f0f0f2',
      surface: '#e6e6ea',
      text: '#404040',
      textSecondary: '#686868',
      palette: ['#a09070', '#687888', '#808080', '#e6e6ea', '#f0f0f2'],
    },
    typography: {
      headlineFont: 'Vollkorn',
      bodyFont: 'Jost',
    },
    shapes: {
      borderRadius: 10,
      borderRadiusLg: 14,
      borderRadiusXl: 28,
      cornerStyle: 'smooth',
    },
  },
  // remorse mild (V2)
  {
    emotion: 'remorse',
    intensity: 'mild',
    source: 'v2-13-remorse',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#587080',
      secondary: '#6a5848',
      accent: '#803040',
      background: '#141618',
      surface: '#181a1e',
      text: '#b8bcc0',
      textSecondary: '#808488',
      palette: ['#803040', '#587080', '#6a5848', '#181a1e', '#141618'],
    },
    typography: {
      headlineFont: 'Fraunces',
      bodyFont: 'Albert Sans',
    },
    shapes: {
      borderRadius: 10,
      borderRadiusLg: 14,
      borderRadiusXl: 28,
      cornerStyle: 'smooth',
    },
  },
  // remorse moderate (V2)
  {
    emotion: 'remorse',
    intensity: 'moderate',
    source: 'v2-13-remorse',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#587080',
      secondary: '#6a5848',
      accent: '#803040',
      background: '#141618',
      surface: '#181a1e',
      text: '#b8bcc0',
      textSecondary: '#808488',
      palette: ['#803040', '#587080', '#6a5848', '#181a1e', '#141618'],
    },
    typography: {
      headlineFont: 'Fraunces',
      bodyFont: 'Albert Sans',
    },
    shapes: {
      borderRadius: 10,
      borderRadiusLg: 14,
      borderRadiusXl: 28,
      cornerStyle: 'smooth',
    },
  },
  // remorse intense (V2)
  {
    emotion: 'remorse',
    intensity: 'intense',
    source: 'v2-13-remorse',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#587080',
      secondary: '#6a5848',
      accent: '#803040',
      background: '#141618',
      surface: '#181a1e',
      text: '#b8bcc0',
      textSecondary: '#808488',
      palette: ['#803040', '#587080', '#6a5848', '#181a1e', '#141618'],
    },
    typography: {
      headlineFont: 'Fraunces',
      bodyFont: 'Albert Sans',
    },
    shapes: {
      borderRadius: 10,
      borderRadiusLg: 14,
      borderRadiusXl: 28,
      cornerStyle: 'smooth',
    },
  },
  // contempt mild (V2)
  {
    emotion: 'contempt',
    intensity: 'mild',
    source: 'v2-14-contempt',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#1c2028',
      secondary: '#687080',
      accent: '#8a9828',
      background: '#ecedf0',
      surface: '#e8e8ec',
      text: '#1c2028',
      textSecondary: '#50586a',
      palette: ['#8a9828', '#1c2028', '#687080', '#e8e8ec', '#ecedf0'],
    },
    typography: {
      headlineFont: 'Prata',
      bodyFont: 'Red Hat Text',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'sharp',
    },
  },
  // contempt moderate (V2)
  {
    emotion: 'contempt',
    intensity: 'moderate',
    source: 'v2-14-contempt',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#1c2028',
      secondary: '#687080',
      accent: '#8a9828',
      background: '#ecedf0',
      surface: '#e8e8ec',
      text: '#1c2028',
      textSecondary: '#50586a',
      palette: ['#8a9828', '#1c2028', '#687080', '#e8e8ec', '#ecedf0'],
    },
    typography: {
      headlineFont: 'Prata',
      bodyFont: 'Red Hat Text',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'sharp',
    },
  },
  // contempt intense (V2)
  {
    emotion: 'contempt',
    intensity: 'intense',
    source: 'v2-14-contempt',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#1c2028',
      secondary: '#687080',
      accent: '#8a9828',
      background: '#ecedf0',
      surface: '#e8e8ec',
      text: '#1c2028',
      textSecondary: '#50586a',
      palette: ['#8a9828', '#1c2028', '#687080', '#e8e8ec', '#ecedf0'],
    },
    typography: {
      headlineFont: 'Prata',
      bodyFont: 'Red Hat Text',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'sharp',
    },
  },
  // aggressiveness mild (V2)
  {
    emotion: 'aggressiveness',
    intensity: 'mild',
    source: 'v2-15-aggressiveness',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#c82020',
      secondary: '#d08820',
      accent: '#c0c8d0',
      background: '#0a0a10',
      surface: '#141418',
      text: '#e0e0e8',
      textSecondary: '#909098',
      palette: ['#c0c8d0', '#c82020', '#d08820', '#141418', '#0a0a10'],
    },
    typography: {
      headlineFont: 'Teko',
      bodyFont: 'Titillium Web',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'sharp',
    },
  },
  // aggressiveness moderate (V2)
  {
    emotion: 'aggressiveness',
    intensity: 'moderate',
    source: 'v2-15-aggressiveness',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#c82020',
      secondary: '#d08820',
      accent: '#c0c8d0',
      background: '#0a0a10',
      surface: '#141418',
      text: '#e0e0e8',
      textSecondary: '#909098',
      palette: ['#c0c8d0', '#c82020', '#d08820', '#141418', '#0a0a10'],
    },
    typography: {
      headlineFont: 'Teko',
      bodyFont: 'Titillium Web',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'sharp',
    },
  },
  // aggressiveness intense (V2)
  {
    emotion: 'aggressiveness',
    intensity: 'intense',
    source: 'v2-15-aggressiveness',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#c82020',
      secondary: '#d08820',
      accent: '#c0c8d0',
      background: '#0a0a10',
      surface: '#141418',
      text: '#e0e0e8',
      textSecondary: '#909098',
      palette: ['#c0c8d0', '#c82020', '#d08820', '#141418', '#0a0a10'],
    },
    typography: {
      headlineFont: 'Teko',
      bodyFont: 'Titillium Web',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'sharp',
    },
  },
  // optimism mild (V2)
  {
    emotion: 'optimism',
    intensity: 'mild',
    source: 'v2-16-optimism',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#d09020',
      secondary: '#38885c',
      accent: '#4888c0',
      background: '#faf8f4',
      surface: '#f0ece6',
      text: '#282420',
      textSecondary: '#686058',
      palette: ['#4888c0', '#d09020', '#38885c', '#f0ece6', '#faf8f4'],
    },
    typography: {
      headlineFont: 'DM Sans',
      bodyFont: 'Nunito',
    },
    shapes: {
      borderRadius: 14,
      borderRadiusLg: 20,
      borderRadiusXl: 40,
      cornerStyle: 'rounded',
    },
  },
  // optimism moderate (V2)
  {
    emotion: 'optimism',
    intensity: 'moderate',
    source: 'v2-16-optimism',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#d09020',
      secondary: '#38885c',
      accent: '#4888c0',
      background: '#faf8f4',
      surface: '#f0ece6',
      text: '#282420',
      textSecondary: '#686058',
      palette: ['#4888c0', '#d09020', '#38885c', '#f0ece6', '#faf8f4'],
    },
    typography: {
      headlineFont: 'DM Sans',
      bodyFont: 'Nunito',
    },
    shapes: {
      borderRadius: 14,
      borderRadiusLg: 20,
      borderRadiusXl: 40,
      cornerStyle: 'rounded',
    },
  },
  // optimism intense (V2)
  {
    emotion: 'optimism',
    intensity: 'intense',
    source: 'v2-16-optimism',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#d09020',
      secondary: '#38885c',
      accent: '#4888c0',
      background: '#faf8f4',
      surface: '#f0ece6',
      text: '#282420',
      textSecondary: '#686058',
      palette: ['#4888c0', '#d09020', '#38885c', '#f0ece6', '#faf8f4'],
    },
    typography: {
      headlineFont: 'DM Sans',
      bodyFont: 'Nunito',
    },
    shapes: {
      borderRadius: 14,
      borderRadiusLg: 20,
      borderRadiusXl: 40,
      cornerStyle: 'rounded',
    },
  },
  // ===== EXPANDED EMOTIONS (v2-17 through v2-29) =====
  // awe mild (V2)
  {
    emotion: 'awe',
    intensity: 'mild',
    source: 'v2-17-awe',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#6e90c8',
      secondary: '#8878aa',
      accent: '#48b8c8',
      background: '#0c1020',
      surface: '#121830',
      text: '#d8dce8',
      textSecondary: '#a0a8b8',
      palette: ['#48b8c8', '#6e90c8', '#8878aa', '#121830', '#0c1020'],
    },
    typography: {
      headlineFont: 'Cormorant',
      bodyFont: 'Source Sans 3',
    },
    shapes: {
      borderRadius: 14,
      borderRadiusLg: 20,
      borderRadiusXl: 40,
      cornerStyle: 'rounded',
    },
  },
  // awe moderate (V2)
  {
    emotion: 'awe',
    intensity: 'moderate',
    source: 'v2-17-awe',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#6e90c8',
      secondary: '#8878aa',
      accent: '#48b8c8',
      background: '#0c1020',
      surface: '#121830',
      text: '#d8dce8',
      textSecondary: '#a0a8b8',
      palette: ['#48b8c8', '#6e90c8', '#8878aa', '#121830', '#0c1020'],
    },
    typography: {
      headlineFont: 'Cormorant',
      bodyFont: 'Source Sans 3',
    },
    shapes: {
      borderRadius: 14,
      borderRadiusLg: 20,
      borderRadiusXl: 40,
      cornerStyle: 'rounded',
    },
  },
  // awe intense (V2)
  {
    emotion: 'awe',
    intensity: 'intense',
    source: 'v2-17-awe',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#6e90c8',
      secondary: '#8878aa',
      accent: '#48b8c8',
      background: '#0c1020',
      surface: '#121830',
      text: '#d8dce8',
      textSecondary: '#a0a8b8',
      palette: ['#48b8c8', '#6e90c8', '#8878aa', '#121830', '#0c1020'],
    },
    typography: {
      headlineFont: 'Cormorant',
      bodyFont: 'Source Sans 3',
    },
    shapes: {
      borderRadius: 14,
      borderRadiusLg: 20,
      borderRadiusXl: 40,
      cornerStyle: 'rounded',
    },
  },
  // confusion mild (V2)
  {
    emotion: 'confusion',
    intensity: 'mild',
    source: 'v2-18-confusion',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#8b7ea0',
      secondary: '#9a9088',
      accent: '#6d8a88',
      background: '#f5f0eb',
      surface: '#ebe5df',
      text: '#4a4540',
      textSecondary: '#7a7570',
      palette: ['#6d8a88', '#8b7ea0', '#9a9088', '#ebe5df', '#f5f0eb'],
    },
    typography: {
      headlineFont: 'Outfit',
      bodyFont: 'DM Sans',
    },
    shapes: {
      borderRadius: 8,
      borderRadiusLg: 16,
      borderRadiusXl: 32,
      cornerStyle: 'smooth',
    },
  },
  // confusion moderate (V2)
  {
    emotion: 'confusion',
    intensity: 'moderate',
    source: 'v2-18-confusion',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#8b7ea0',
      secondary: '#9a9088',
      accent: '#6d8a88',
      background: '#f5f0eb',
      surface: '#ebe5df',
      text: '#4a4540',
      textSecondary: '#7a7570',
      palette: ['#6d8a88', '#8b7ea0', '#9a9088', '#ebe5df', '#f5f0eb'],
    },
    typography: {
      headlineFont: 'Outfit',
      bodyFont: 'DM Sans',
    },
    shapes: {
      borderRadius: 8,
      borderRadiusLg: 16,
      borderRadiusXl: 32,
      cornerStyle: 'smooth',
    },
  },
  // confusion intense (V2)
  {
    emotion: 'confusion',
    intensity: 'intense',
    source: 'v2-18-confusion',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#8b7ea0',
      secondary: '#9a9088',
      accent: '#6d8a88',
      background: '#f5f0eb',
      surface: '#ebe5df',
      text: '#4a4540',
      textSecondary: '#7a7570',
      palette: ['#6d8a88', '#8b7ea0', '#9a9088', '#ebe5df', '#f5f0eb'],
    },
    typography: {
      headlineFont: 'Outfit',
      bodyFont: 'DM Sans',
    },
    shapes: {
      borderRadius: 8,
      borderRadiusLg: 16,
      borderRadiusXl: 32,
      cornerStyle: 'smooth',
    },
  },
  // depression mild (V2)
  {
    emotion: 'depression',
    intensity: 'mild',
    source: 'v2-19-depression',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#606870',
      secondary: '#585050',
      accent: '#708090',
      background: '#161618',
      surface: '#1e1e20',
      text: '#b0b0b4',
      textSecondary: '#808084',
      palette: ['#708090', '#606870', '#585050', '#1e1e20', '#161618'],
    },
    typography: {
      headlineFont: 'Space Grotesk',
      bodyFont: 'Work Sans',
    },
    shapes: {
      borderRadius: 6,
      borderRadiusLg: 10,
      borderRadiusXl: 20,
      cornerStyle: 'smooth',
    },
  },
  // depression moderate (V2)
  {
    emotion: 'depression',
    intensity: 'moderate',
    source: 'v2-19-depression',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#606870',
      secondary: '#585050',
      accent: '#708090',
      background: '#161618',
      surface: '#1e1e20',
      text: '#b0b0b4',
      textSecondary: '#808084',
      palette: ['#708090', '#606870', '#585050', '#1e1e20', '#161618'],
    },
    typography: {
      headlineFont: 'Space Grotesk',
      bodyFont: 'Work Sans',
    },
    shapes: {
      borderRadius: 6,
      borderRadiusLg: 10,
      borderRadiusXl: 20,
      cornerStyle: 'smooth',
    },
  },
  // depression intense (V2)
  {
    emotion: 'depression',
    intensity: 'intense',
    source: 'v2-19-depression',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#606870',
      secondary: '#585050',
      accent: '#708090',
      background: '#161618',
      surface: '#1e1e20',
      text: '#b0b0b4',
      textSecondary: '#808084',
      palette: ['#708090', '#606870', '#585050', '#1e1e20', '#161618'],
    },
    typography: {
      headlineFont: 'Space Grotesk',
      bodyFont: 'Work Sans',
    },
    shapes: {
      borderRadius: 6,
      borderRadiusLg: 10,
      borderRadiusXl: 20,
      cornerStyle: 'smooth',
    },
  },
  // loneliness mild (V2)
  {
    emotion: 'loneliness',
    intensity: 'mild',
    source: 'v2-20-loneliness',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#5078a0',
      secondary: '#706878',
      accent: '#887868',
      background: '#121418',
      surface: '#181c24',
      text: '#b8bcc8',
      textSecondary: '#787c88',
      palette: ['#887868', '#5078a0', '#706878', '#181c24', '#121418'],
    },
    typography: {
      headlineFont: 'Josefin Sans',
      bodyFont: 'Cabin',
    },
    shapes: {
      borderRadius: 8,
      borderRadiusLg: 14,
      borderRadiusXl: 28,
      cornerStyle: 'smooth',
    },
  },
  // loneliness moderate (V2)
  {
    emotion: 'loneliness',
    intensity: 'moderate',
    source: 'v2-20-loneliness',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#5078a0',
      secondary: '#706878',
      accent: '#887868',
      background: '#121418',
      surface: '#181c24',
      text: '#b8bcc8',
      textSecondary: '#787c88',
      palette: ['#887868', '#5078a0', '#706878', '#181c24', '#121418'],
    },
    typography: {
      headlineFont: 'Josefin Sans',
      bodyFont: 'Cabin',
    },
    shapes: {
      borderRadius: 8,
      borderRadiusLg: 14,
      borderRadiusXl: 28,
      cornerStyle: 'smooth',
    },
  },
  // loneliness intense (V2)
  {
    emotion: 'loneliness',
    intensity: 'intense',
    source: 'v2-20-loneliness',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#5078a0',
      secondary: '#706878',
      accent: '#887868',
      background: '#121418',
      surface: '#181c24',
      text: '#b8bcc8',
      textSecondary: '#787c88',
      palette: ['#887868', '#5078a0', '#706878', '#181c24', '#121418'],
    },
    typography: {
      headlineFont: 'Josefin Sans',
      bodyFont: 'Cabin',
    },
    shapes: {
      borderRadius: 8,
      borderRadiusLg: 14,
      borderRadiusXl: 28,
      cornerStyle: 'smooth',
    },
  },
  // guilt mild (V2)
  {
    emotion: 'guilt',
    intensity: 'mild',
    source: 'v2-21-guilt',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#6a3840',
      secondary: '#485868',
      accent: '#785040',
      background: '#18161a',
      surface: '#201e24',
      text: '#d0c8c4',
      textSecondary: '#908880',
      palette: ['#785040', '#6a3840', '#485868', '#201e24', '#18161a'],
    },
    typography: {
      headlineFont: 'Spectral',
      bodyFont: 'Public Sans',
    },
    shapes: {
      borderRadius: 6,
      borderRadiusLg: 10,
      borderRadiusXl: 20,
      cornerStyle: 'smooth',
    },
  },
  // guilt moderate (V2)
  {
    emotion: 'guilt',
    intensity: 'moderate',
    source: 'v2-21-guilt',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#6a3840',
      secondary: '#485868',
      accent: '#785040',
      background: '#18161a',
      surface: '#201e24',
      text: '#d0c8c4',
      textSecondary: '#908880',
      palette: ['#785040', '#6a3840', '#485868', '#201e24', '#18161a'],
    },
    typography: {
      headlineFont: 'Spectral',
      bodyFont: 'Public Sans',
    },
    shapes: {
      borderRadius: 6,
      borderRadiusLg: 10,
      borderRadiusXl: 20,
      cornerStyle: 'smooth',
    },
  },
  // guilt intense (V2)
  {
    emotion: 'guilt',
    intensity: 'intense',
    source: 'v2-21-guilt',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#6a3840',
      secondary: '#485868',
      accent: '#785040',
      background: '#18161a',
      surface: '#201e24',
      text: '#d0c8c4',
      textSecondary: '#908880',
      palette: ['#785040', '#6a3840', '#485868', '#201e24', '#18161a'],
    },
    typography: {
      headlineFont: 'Spectral',
      bodyFont: 'Public Sans',
    },
    shapes: {
      borderRadius: 6,
      borderRadiusLg: 10,
      borderRadiusXl: 20,
      cornerStyle: 'smooth',
    },
  },
  // appalled mild (V2)
  {
    emotion: 'appalled',
    intensity: 'mild',
    source: 'v2-22-appalled',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#889020',
      secondary: '#685040',
      accent: '#c04870',
      background: '#141210',
      surface: '#1c1a18',
      text: '#c8c4b8',
      textSecondary: '#888478',
      palette: ['#c04870', '#889020', '#685040', '#1c1a18', '#141210'],
    },
    typography: {
      headlineFont: 'Chakra Petch',
      bodyFont: 'Overpass',
    },
    shapes: {
      borderRadius: 5,
      borderRadiusLg: 8,
      borderRadiusXl: 16,
      cornerStyle: 'smooth',
    },
  },
  // appalled moderate (V2)
  {
    emotion: 'appalled',
    intensity: 'moderate',
    source: 'v2-22-appalled',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#889020',
      secondary: '#685040',
      accent: '#c04870',
      background: '#141210',
      surface: '#1c1a18',
      text: '#c8c4b8',
      textSecondary: '#888478',
      palette: ['#c04870', '#889020', '#685040', '#1c1a18', '#141210'],
    },
    typography: {
      headlineFont: 'Chakra Petch',
      bodyFont: 'Overpass',
    },
    shapes: {
      borderRadius: 5,
      borderRadiusLg: 8,
      borderRadiusXl: 16,
      cornerStyle: 'smooth',
    },
  },
  // appalled intense (V2)
  {
    emotion: 'appalled',
    intensity: 'intense',
    source: 'v2-22-appalled',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#889020',
      secondary: '#685040',
      accent: '#c04870',
      background: '#141210',
      surface: '#1c1a18',
      text: '#c8c4b8',
      textSecondary: '#888478',
      palette: ['#c04870', '#889020', '#685040', '#1c1a18', '#141210'],
    },
    typography: {
      headlineFont: 'Chakra Petch',
      bodyFont: 'Overpass',
    },
    shapes: {
      borderRadius: 5,
      borderRadiusLg: 8,
      borderRadiusXl: 16,
      cornerStyle: 'smooth',
    },
  },
  // frustration mild (V2)
  {
    emotion: 'frustration',
    intensity: 'mild',
    source: 'v2-23-frustration',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#c44030',
      secondary: '#8a5a30',
      accent: '#c48820',
      background: '#1a1412',
      surface: '#22191a',
      text: '#e8dcd0',
      textSecondary: '#a89888',
      palette: ['#c48820', '#c44030', '#8a5a30', '#22191a', '#1a1412'],
    },
    typography: {
      headlineFont: 'Barlow Condensed',
      bodyFont: 'IBM Plex Sans',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 6,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // frustration moderate (V2)
  {
    emotion: 'frustration',
    intensity: 'moderate',
    source: 'v2-23-frustration',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#c44030',
      secondary: '#8a5a30',
      accent: '#c48820',
      background: '#1a1412',
      surface: '#22191a',
      text: '#e8dcd0',
      textSecondary: '#a89888',
      palette: ['#c48820', '#c44030', '#8a5a30', '#22191a', '#1a1412'],
    },
    typography: {
      headlineFont: 'Barlow Condensed',
      bodyFont: 'IBM Plex Sans',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 6,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // frustration intense (V2)
  {
    emotion: 'frustration',
    intensity: 'intense',
    source: 'v2-23-frustration',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#c44030',
      secondary: '#8a5a30',
      accent: '#c48820',
      background: '#1a1412',
      surface: '#22191a',
      text: '#e8dcd0',
      textSecondary: '#a89888',
      palette: ['#c48820', '#c44030', '#8a5a30', '#22191a', '#1a1412'],
    },
    typography: {
      headlineFont: 'Barlow Condensed',
      bodyFont: 'IBM Plex Sans',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 6,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // jealousy mild (V2)
  {
    emotion: 'jealousy',
    intensity: 'mild',
    source: 'v2-24-jealousy',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#488040',
      secondary: '#8a8830',
      accent: '#a04048',
      background: '#0e120c',
      surface: '#141a14',
      text: '#c8ccc4',
      textSecondary: '#889084',
      palette: ['#a04048', '#488040', '#8a8830', '#141a14', '#0e120c'],
    },
    typography: {
      headlineFont: 'Bodoni Moda',
      bodyFont: 'Archivo',
    },
    shapes: {
      borderRadius: 6,
      borderRadiusLg: 10,
      borderRadiusXl: 20,
      cornerStyle: 'smooth',
    },
  },
  // jealousy moderate (V2)
  {
    emotion: 'jealousy',
    intensity: 'moderate',
    source: 'v2-24-jealousy',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#488040',
      secondary: '#8a8830',
      accent: '#a04048',
      background: '#0e120c',
      surface: '#141a14',
      text: '#c8ccc4',
      textSecondary: '#889084',
      palette: ['#a04048', '#488040', '#8a8830', '#141a14', '#0e120c'],
    },
    typography: {
      headlineFont: 'Bodoni Moda',
      bodyFont: 'Archivo',
    },
    shapes: {
      borderRadius: 6,
      borderRadiusLg: 10,
      borderRadiusXl: 20,
      cornerStyle: 'smooth',
    },
  },
  // jealousy intense (V2)
  {
    emotion: 'jealousy',
    intensity: 'intense',
    source: 'v2-24-jealousy',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#488040',
      secondary: '#8a8830',
      accent: '#a04048',
      background: '#0e120c',
      surface: '#141a14',
      text: '#c8ccc4',
      textSecondary: '#889084',
      palette: ['#a04048', '#488040', '#8a8830', '#141a14', '#0e120c'],
    },
    typography: {
      headlineFont: 'Bodoni Moda',
      bodyFont: 'Archivo',
    },
    shapes: {
      borderRadius: 6,
      borderRadiusLg: 10,
      borderRadiusXl: 20,
      cornerStyle: 'smooth',
    },
  },
  // inspiration mild (V2)
  {
    emotion: 'inspiration',
    intensity: 'mild',
    source: 'v2-25-inspiration',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#2a6090',
      secondary: '#5a5a80',
      accent: '#c08040',
      background: '#f6f8fc',
      surface: '#eaeff4',
      text: '#1a2030',
      textSecondary: '#505868',
      palette: ['#c08040', '#2a6090', '#5a5a80', '#eaeff4', '#f6f8fc'],
    },
    typography: {
      headlineFont: 'Sora',
      bodyFont: 'Figtree',
    },
    shapes: {
      borderRadius: 14,
      borderRadiusLg: 20,
      borderRadiusXl: 40,
      cornerStyle: 'rounded',
    },
  },
  // inspiration moderate (V2)
  {
    emotion: 'inspiration',
    intensity: 'moderate',
    source: 'v2-25-inspiration',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#2a6090',
      secondary: '#5a5a80',
      accent: '#c08040',
      background: '#f6f8fc',
      surface: '#eaeff4',
      text: '#1a2030',
      textSecondary: '#505868',
      palette: ['#c08040', '#2a6090', '#5a5a80', '#eaeff4', '#f6f8fc'],
    },
    typography: {
      headlineFont: 'Sora',
      bodyFont: 'Figtree',
    },
    shapes: {
      borderRadius: 14,
      borderRadiusLg: 20,
      borderRadiusXl: 40,
      cornerStyle: 'rounded',
    },
  },
  // inspiration intense (V2)
  {
    emotion: 'inspiration',
    intensity: 'intense',
    source: 'v2-25-inspiration',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#2a6090',
      secondary: '#5a5a80',
      accent: '#c08040',
      background: '#f6f8fc',
      surface: '#eaeff4',
      text: '#1a2030',
      textSecondary: '#505868',
      palette: ['#c08040', '#2a6090', '#5a5a80', '#eaeff4', '#f6f8fc'],
    },
    typography: {
      headlineFont: 'Sora',
      bodyFont: 'Figtree',
    },
    shapes: {
      borderRadius: 14,
      borderRadiusLg: 20,
      borderRadiusXl: 40,
      cornerStyle: 'rounded',
    },
  },
  // contentment mild (V2)
  {
    emotion: 'contentment',
    intensity: 'mild',
    source: 'v2-26-contentment',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#5a8a6a',
      secondary: '#7a8a9a',
      accent: '#a08860',
      background: '#f8f5f0',
      surface: '#f0ece6',
      text: '#3a3830',
      textSecondary: '#706a60',
      palette: ['#a08860', '#5a8a6a', '#7a8a9a', '#f0ece6', '#f8f5f0'],
    },
    typography: {
      headlineFont: 'Lexend',
      bodyFont: 'Karla',
    },
    shapes: {
      borderRadius: 16,
      borderRadiusLg: 22,
      borderRadiusXl: 44,
      cornerStyle: 'rounded',
    },
  },
  // contentment moderate (V2)
  {
    emotion: 'contentment',
    intensity: 'moderate',
    source: 'v2-26-contentment',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#5a8a6a',
      secondary: '#7a8a9a',
      accent: '#a08860',
      background: '#f8f5f0',
      surface: '#f0ece6',
      text: '#3a3830',
      textSecondary: '#706a60',
      palette: ['#a08860', '#5a8a6a', '#7a8a9a', '#f0ece6', '#f8f5f0'],
    },
    typography: {
      headlineFont: 'Lexend',
      bodyFont: 'Karla',
    },
    shapes: {
      borderRadius: 16,
      borderRadiusLg: 22,
      borderRadiusXl: 44,
      cornerStyle: 'rounded',
    },
  },
  // contentment intense (V2)
  {
    emotion: 'contentment',
    intensity: 'intense',
    source: 'v2-26-contentment',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#5a8a6a',
      secondary: '#7a8a9a',
      accent: '#a08860',
      background: '#f8f5f0',
      surface: '#f0ece6',
      text: '#3a3830',
      textSecondary: '#706a60',
      palette: ['#a08860', '#5a8a6a', '#7a8a9a', '#f0ece6', '#f8f5f0'],
    },
    typography: {
      headlineFont: 'Lexend',
      bodyFont: 'Karla',
    },
    shapes: {
      borderRadius: 16,
      borderRadiusLg: 22,
      borderRadiusXl: 44,
      cornerStyle: 'rounded',
    },
  },
  // embarrassment mild (V2)
  {
    emotion: 'embarrassment',
    intensity: 'mild',
    source: 'v2-27-embarrassment',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#c45878',
      secondary: '#8a6878',
      accent: '#5e013e',
      background: '#fdf0f4',
      surface: '#f4e8ee',
      text: '#382028',
      textSecondary: '#6a5058',
      palette: ['#5e013e', '#c45878', '#8a6878', '#f4e8ee', '#fdf0f4'],
    },
    typography: {
      headlineFont: 'Quicksand',
      bodyFont: 'Mulish',
    },
    shapes: {
      borderRadius: 14,
      borderRadiusLg: 20,
      borderRadiusXl: 40,
      cornerStyle: 'rounded',
    },
  },
  // embarrassment moderate (V2)
  {
    emotion: 'embarrassment',
    intensity: 'moderate',
    source: 'v2-27-embarrassment',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#c45878',
      secondary: '#8a6878',
      accent: '#5e013e',
      background: '#fdf0f4',
      surface: '#f4e8ee',
      text: '#382028',
      textSecondary: '#6a5058',
      palette: ['#5e013e', '#c45878', '#8a6878', '#f4e8ee', '#fdf0f4'],
    },
    typography: {
      headlineFont: 'Quicksand',
      bodyFont: 'Mulish',
    },
    shapes: {
      borderRadius: 14,
      borderRadiusLg: 20,
      borderRadiusXl: 40,
      cornerStyle: 'rounded',
    },
  },
  // embarrassment intense (V2)
  {
    emotion: 'embarrassment',
    intensity: 'intense',
    source: 'v2-27-embarrassment',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#c45878',
      secondary: '#8a6878',
      accent: '#5e013e',
      background: '#fdf0f4',
      surface: '#f4e8ee',
      text: '#382028',
      textSecondary: '#6a5058',
      palette: ['#5e013e', '#c45878', '#8a6878', '#f4e8ee', '#fdf0f4'],
    },
    typography: {
      headlineFont: 'Quicksand',
      bodyFont: 'Mulish',
    },
    shapes: {
      borderRadius: 14,
      borderRadiusLg: 20,
      borderRadiusXl: 40,
      cornerStyle: 'rounded',
    },
  },
  // fright mild (V2)
  {
    emotion: 'fright',
    intensity: 'mild',
    source: 'v2-28-fright',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#a82830',
      secondary: '#384858',
      accent: '#c09020',
      background: '#0a0c10',
      surface: '#101420',
      text: '#c8c8d0',
      textSecondary: '#787880',
      palette: ['#c09020', '#a82830', '#384858', '#101420', '#0a0c10'],
    },
    typography: {
      headlineFont: 'Saira Condensed',
      bodyFont: 'Libre Franklin',
    },
    shapes: {
      borderRadius: 3,
      borderRadiusLg: 3,
      borderRadiusXl: 6,
      cornerStyle: 'sharp',
    },
  },
  // fright moderate (V2)
  {
    emotion: 'fright',
    intensity: 'moderate',
    source: 'v2-28-fright',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#a82830',
      secondary: '#384858',
      accent: '#c09020',
      background: '#0a0c10',
      surface: '#101420',
      text: '#c8c8d0',
      textSecondary: '#787880',
      palette: ['#c09020', '#a82830', '#384858', '#101420', '#0a0c10'],
    },
    typography: {
      headlineFont: 'Saira Condensed',
      bodyFont: 'Libre Franklin',
    },
    shapes: {
      borderRadius: 3,
      borderRadiusLg: 3,
      borderRadiusXl: 6,
      cornerStyle: 'sharp',
    },
  },
  // fright intense (V2)
  {
    emotion: 'fright',
    intensity: 'intense',
    source: 'v2-28-fright',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#a82830',
      secondary: '#384858',
      accent: '#c09020',
      background: '#0a0c10',
      surface: '#101420',
      text: '#c8c8d0',
      textSecondary: '#787880',
      palette: ['#c09020', '#a82830', '#384858', '#101420', '#0a0c10'],
    },
    typography: {
      headlineFont: 'Saira Condensed',
      bodyFont: 'Libre Franklin',
    },
    shapes: {
      borderRadius: 3,
      borderRadiusLg: 3,
      borderRadiusXl: 6,
      cornerStyle: 'sharp',
    },
  },
  // pride mild (V2)
  {
    emotion: 'pride',
    intensity: 'mild',
    source: 'v2-29-pride',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#2a4a6a',
      secondary: '#8a7a40',
      accent: '#985a30',
      background: '#faf8f4',
      surface: '#efeae4',
      text: '#2a2820',
      textSecondary: '#58564a',
      palette: ['#985a30', '#2a4a6a', '#8a7a40', '#efeae4', '#faf8f4'],
    },
    typography: {
      headlineFont: 'Bitter',
      bodyFont: 'Source Sans 3',
    },
    shapes: {
      borderRadius: 8,
      borderRadiusLg: 12,
      borderRadiusXl: 24,
      cornerStyle: 'smooth',
    },
  },
  // pride moderate (V2)
  {
    emotion: 'pride',
    intensity: 'moderate',
    source: 'v2-29-pride',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#2a4a6a',
      secondary: '#8a7a40',
      accent: '#985a30',
      background: '#faf8f4',
      surface: '#efeae4',
      text: '#2a2820',
      textSecondary: '#58564a',
      palette: ['#985a30', '#2a4a6a', '#8a7a40', '#efeae4', '#faf8f4'],
    },
    typography: {
      headlineFont: 'Bitter',
      bodyFont: 'Source Sans 3',
    },
    shapes: {
      borderRadius: 8,
      borderRadiusLg: 12,
      borderRadiusXl: 24,
      cornerStyle: 'smooth',
    },
  },
  // pride intense (V2)
  {
    emotion: 'pride',
    intensity: 'intense',
    source: 'v2-29-pride',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#2a4a6a',
      secondary: '#8a7a40',
      accent: '#985a30',
      background: '#faf8f4',
      surface: '#efeae4',
      text: '#2a2820',
      textSecondary: '#58564a',
      palette: ['#985a30', '#2a4a6a', '#8a7a40', '#efeae4', '#faf8f4'],
    },
    typography: {
      headlineFont: 'Bitter',
      bodyFont: 'Source Sans 3',
    },
    shapes: {
      borderRadius: 8,
      borderRadiusLg: 12,
      borderRadiusXl: 24,
      cornerStyle: 'smooth',
    },
  },
];

// ---------- Lookup ----------

function buildKey(emotion: AnyEmotionType, intensity: Intensity): string {
  return `${emotion}:${intensity}`;
}

const THEME_MAP = new Map<string, EmotionTheme>();
for (const theme of ALL_THEMES) {
  THEME_MAP.set(buildKey(theme.emotion, theme.intensity), theme);
}

/**
 * Get the design theme for an emotion at a given intensity.
 * Returns exactly what Stitch designed — WYSIWYG.
 */
export function getEmotionTheme(emotion: AnyEmotionType, intensity: Intensity): EmotionTheme {
  const theme = THEME_MAP.get(buildKey(emotion, intensity));
  if (!theme) {
    throw new Error(`No theme for ${emotion} at ${intensity}`);
  }
  return theme;
}

/**
 * Get theme for any emotion (including extras).
 * Tries the direct theme first, falls back to parent primary if missing.
 */
export function getEmotionThemeOrFallback(emotion: AnyEmotionType, intensity: Intensity): EmotionTheme {
  // Try direct lookup first (works for all 29 emotions)
  const direct = THEME_MAP.get(`${emotion}:${intensity}`);
  if (direct) return direct;

  // Fall back to parent primary for extras without their own theme
  if (isExtraEmotion(emotion)) {
    const extra = getExtraEmotion(emotion);
    if (extra) {
      return getEmotionTheme(extra.parent, intensity);
    }
  }
  throw new Error(`No theme for ${emotion} at ${intensity}`);
}

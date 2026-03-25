/**
 * Complete design token sets for all 16 emotions × 3 intensities = 48 entries.
 * Values sourced directly from Stitch-generated code.html Tailwind configs.
 * No computed modifiers — each entry is exactly what Stitch designed.
 *
 * Entries marked "placeholder" use the closest available Stitch screen
 * until dedicated screens are generated.
 */

import type { EmotionType, Intensity } from '@/types/emotion';

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
  cornerStyle: 'rounded' | 'sharp' | 'smooth';
}

export interface EmotionTheme {
  emotion: EmotionType;
  intensity: Intensity;
  source: string;
  placeholder: boolean;
  isDark: boolean;
  colors: EmotionColors;
  typography: EmotionTypography;
  shapes: EmotionShapes;
}

const ALL_THEMES: EmotionTheme[] = [
  // joy mild
  {
    emotion: 'joy',
    intensity: 'mild',
    source: 'joy_mild_intensity',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#6c5a00',
      secondary: '#5f5c4a',
      accent: '#6c5a00',
      background: '#fff4f2',
      surface: '#fff4f2',
      text: '#412923',
      textSecondary: '#72544e',
      palette: ['#ffd709', '#6c5a00', '#5f5c4a', '#72544e', '#6c5a00'],
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans',
      bodyFont: 'Be Vietnam Pro',
    },
    shapes: {
      borderRadius: 16,
      borderRadiusLg: 32,
      borderRadiusXl: 48,
      cornerStyle: 'rounded',
    },
  },
  // joy moderate
  {
    emotion: 'joy',
    intensity: 'moderate',
    source: 'joy_moderate_intensity_refined',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#7b5400',
      secondary: '#9b3e20',
      accent: '#7b5400',
      background: '#fdf6df',
      surface: '#fdf6df',
      text: '#322f20',
      textSecondary: '#5f5c4a',
      palette: ['#feb300', '#7b5400', '#9b3e20', '#72544e', '#7b5400'],
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans',
      bodyFont: 'Be Vietnam Pro',
    },
    shapes: {
      borderRadius: 16,
      borderRadiusLg: 32,
      borderRadiusXl: 48,
      cornerStyle: 'rounded',
    },
  },
  // joy intense
  {
    emotion: 'joy',
    intensity: 'intense',
    source: 'intense_joy_radiant_variant',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#874e00',
      secondary: '#6c5a00',
      accent: '#874e00',
      background: '#fff5ec',
      surface: '#fff5ec',
      text: '#432900',
      textSecondary: '#765524',
      palette: ['#ff9800', '#874e00', '#6c5a00', '#a83100', '#874e00'],
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans',
      bodyFont: 'Plus Jakarta Sans',
    },
    shapes: {
      borderRadius: 16,
      borderRadiusLg: 32,
      borderRadiusXl: 48,
      cornerStyle: 'rounded',
    },
  },
  // trust mild
  {
    emotion: 'trust',
    intensity: 'mild',
    source: 'trust_mild_intensity_1',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#002434',
      secondary: '#456273',
      accent: '#446274',
      background: '#f8fafb',
      surface: '#f8fafb',
      text: '#191c1d',
      textSecondary: '#42474b',
      palette: ['#1a3a4a', '#002434', '#456273', '#182326', '#446274'],
    },
    typography: {
      headlineFont: 'Newsreader',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'smooth',
    },
  },
  // trust moderate
  {
    emotion: 'trust',
    intensity: 'moderate',
    source: 'trust_moderate_intensity_refined',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#002434',
      secondary: '#506169',
      accent: '#446274',
      background: '#f3faff',
      surface: '#f3faff',
      text: '#071e27',
      textSecondary: '#42474b',
      palette: ['#1a3a4a', '#002434', '#506169', '#0b242e', '#446274'],
    },
    typography: {
      headlineFont: 'Newsreader',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // trust intense
  {
    emotion: 'trust',
    intensity: 'intense',
    source: 'intense_trust_absolute_variant',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#002434',
      secondary: '#506169',
      accent: '#446274',
      background: '#f8fafb',
      surface: '#f8fafb',
      text: '#191c1d',
      textSecondary: '#42474b',
      palette: ['#1a3a4a', '#002434', '#506169', '#00262c', '#446274'],
    },
    typography: {
      headlineFont: 'Inter',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // fear mild
  {
    emotion: 'fear',
    intensity: 'mild',
    source: 'mild_fear_affectatlas',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#D1C0E1',
      secondary: '#A997BA',
      accent: '#C3B3D3',
      background: '#130A19',
      surface: '#130A19',
      text: '#F5DDFF',
      textSecondary: '#C09FD4',
      palette: ['#2A2030', '#3D2D4A', '#6A5A7A', '#9E9E9E', '#C0B0D0'],
    },
    typography: {
      headlineFont: 'Epilogue',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'smooth',
    },
  },
  // fear moderate
  {
    emotion: 'fear',
    intensity: 'moderate',
    source: 'fear_moderate_intensity_refined',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#ebb2ff',
      secondary: '#d8bbf2',
      accent: '#ebb2ff',
      background: '#131313',
      surface: '#131313',
      text: '#e5e2e1',
      textSecondary: '#cdc3d4',
      palette: ['#5c0080', '#ebb2ff', '#d8bbf2', '#efb1f9', '#ebb2ff'],
    },
    typography: {
      headlineFont: 'Epilogue',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // fear intense
  {
    emotion: 'fear',
    intensity: 'intense',
    source: 'fear_intense_intensity_1',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#d6bcf4',
      secondary: '#d4beec',
      accent: '#d6bcf4',
      background: '#131313',
      surface: '#131313',
      text: '#e5e2e1',
      textSecondary: '#ccc4ce',
      palette: ['#1c0634', '#d6bcf4', '#d4beec', '#c6c4dc', '#d6bcf4'],
    },
    typography: {
      headlineFont: 'Inter',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 0,
      borderRadiusXl: 0,
      cornerStyle: 'sharp',
    },
  },
  // surprise mild
  {
    emotion: 'surprise',
    intensity: 'mild',
    source: 'mild_surprise_affectatlas',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#5E5966',
      secondary: '#3D535A',
      accent: '#60485C',
      background: '#FCF4FC',
      surface: '#FCF4FC',
      text: '#312D33',
      textSecondary: '#5F5A60',
      palette: ['#F0D0E8', '#D0E8F0', '#E8E0F0', '#F8F0F8', '#8080A0'],
    },
    typography: {
      headlineFont: 'Space Grotesk',
      bodyFont: 'Plus Jakarta Sans',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'rounded',
    },
  },
  // surprise moderate
  {
    emotion: 'surprise',
    intensity: 'moderate',
    source: 'surprise_moderate_intensity_final',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#ff7cf5',
      secondary: '#50e1f9',
      accent: '#ff7cf5',
      background: '#000341',
      surface: '#000341',
      text: '#e3e3ff',
      textSecondary: '#9ba4ff',
      palette: ['#ff5af9', '#ff7cf5', '#50e1f9', '#eb65ff', '#ff7cf5'],
    },
    typography: {
      headlineFont: 'Space Grotesk',
      bodyFont: 'Manrope',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // surprise intense
  {
    emotion: 'surprise',
    intensity: 'intense',
    source: 'surprise_intense_intensity_1',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#ff7cf5',
      secondary: '#00fbfb',
      accent: '#ff7cf5',
      background: '#0e0e10',
      surface: '#0e0e10',
      text: '#fffbfe',
      textSecondary: '#adaaad',
      palette: ['#ff5af9', '#ff7cf5', '#00fbfb', '#ac89ff', '#ff7cf5'],
    },
    typography: {
      headlineFont: 'Space Grotesk',
      bodyFont: 'Manrope',
    },
    shapes: {
      borderRadius: 16,
      borderRadiusLg: 32,
      borderRadiusXl: 48,
      cornerStyle: 'rounded',
    },
  },
  // sadness mild
  {
    emotion: 'sadness',
    intensity: 'mild',
    source: 'mild_sadness_affectatlas',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#516168',
      secondary: '#45555C',
      accent: '#516168',
      background: '#F3FBFF',
      surface: '#F3FBFF',
      text: '#1D363E',
      textSecondary: '#4B636C',
      palette: ['#B8C8D0', '#C8D0D8', '#D8E0E4', '#E8ECF0', '#8898A0'],
    },
    typography: {
      headlineFont: 'Newsreader',
      bodyFont: 'Public Sans',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'smooth',
    },
  },
  // sadness moderate
  {
    emotion: 'sadness',
    intensity: 'moderate',
    source: 'sadness_moderate_intensity_final',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#48626e',
      secondary: '#4f626b',
      accent: '#48626e',
      background: '#f2fbff',
      surface: '#f2fbff',
      text: '#1b363f',
      textSecondary: '#48636c',
      palette: ['#cbe7f5', '#48626e', '#4f626b', '#69558e', '#48626e'],
    },
    typography: {
      headlineFont: 'Newsreader',
      bodyFont: 'Newsreader',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'smooth',
    },
  },
  // sadness intense
  {
    emotion: 'sadness',
    intensity: 'intense',
    source: 'sadness_intense_intensity_1',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#4a626d',
      secondary: '#546167',
      accent: '#4a626d',
      background: '#f7fafc',
      surface: '#f7fafc',
      text: '#283439',
      textSecondary: '#546166',
      palette: ['#cde6f4', '#4a626d', '#546167', '#586064', '#4a626d'],
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
  // disgust mild
  {
    emotion: 'disgust',
    intensity: 'mild',
    source: 'mild_disgust_affectatlas',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#D0C6A5',
      secondary: '#A0A080',
      accent: '#C3BA99',
      background: '#13140F',
      surface: '#13140F',
      text: '#E5E2DA',
      textSecondary: '#CCC6B9',
      palette: ['#504A30', '#605830', '#8A8060', '#A09070', '#C0B890'],
    },
    typography: {
      headlineFont: 'Epilogue',
      bodyFont: 'Epilogue',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'smooth',
    },
  },
  // disgust moderate
  {
    emotion: 'disgust',
    intensity: 'moderate',
    source: 'disgust_moderate_intensity_refined',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#d6c862',
      secondary: '#cac99f',
      accent: '#d6c862',
      background: '#141405',
      surface: '#141405',
      text: '#e6e4c7',
      textSecondary: '#c9c7b9',
      palette: ['#514900', '#d6c862', '#cac99f', '#ffb5a1', '#d6c862'],
    },
    typography: {
      headlineFont: 'Epilogue',
      bodyFont: 'Work Sans',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // disgust intense
  {
    emotion: 'disgust',
    intensity: 'intense',
    source: 'disgust_intense_intensity_1',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#c3cf52',
      secondary: '#cac99f',
      accent: '#c3cf52',
      background: '#141407',
      surface: '#141407',
      text: '#e6e3cc',
      textSecondary: '#c9c7b9',
      palette: ['#464c00', '#c3cf52', '#cac99f', '#cac8ac', '#c3cf52'],
    },
    typography: {
      headlineFont: 'Epilogue',
      bodyFont: 'Work Sans',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // anger mild
  {
    emotion: 'anger',
    intensity: 'mild',
    source: 'anger_mild_intensity',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#ff8e80',
      secondary: '#ff725e',
      accent: '#ff8e80',
      background: '#200604',
      surface: '#200604',
      text: '#ffded9',
      textSecondary: '#d39f96',
      palette: ['#ff7766', '#ff8e80', '#ff725e', '#ff9787', '#ff8e80'],
    },
    typography: {
      headlineFont: 'Inter',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 0,
      borderRadiusXl: 0,
      cornerStyle: 'sharp',
    },
  },
  // anger moderate
  {
    emotion: 'anger',
    intensity: 'moderate',
    source: 'anger_moderate_intensity_final',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#ffb3b3',
      secondary: '#ffb4ab',
      accent: '#ffb3b3',
      background: '#2b0604',
      surface: '#2b0604',
      text: '#ffdad4',
      textSecondary: '#e4beb9',
      palette: ['#bd002d', '#ffb3b3', '#ffb4ab', '#ffb3ac', '#ffb3b3'],
    },
    typography: {
      headlineFont: 'Inter',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 0,
      borderRadiusXl: 0,
      cornerStyle: 'sharp',
    },
  },
  // anger intense
  {
    emotion: 'anger',
    intensity: 'intense',
    source: 'anger_intense_intensity_1',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#ff8e80',
      secondary: '#ff725e',
      accent: '#ff8e80',
      background: '#200604',
      surface: '#200604',
      text: '#ffded9',
      textSecondary: '#d39f96',
      palette: ['#ff7766', '#ff8e80', '#ff725e', '#ff9787', '#ff8e80'],
    },
    typography: {
      headlineFont: 'Inter',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 0,
      borderRadiusXl: 0,
      cornerStyle: 'sharp',
    },
  },
  // anticipation mild
  {
    emotion: 'anticipation',
    intensity: 'mild',
    source: 'mild_anticipation_affectatlas',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#735B2D',
      secondary: '#775839',
      accent: '#6F5D3D',
      background: '#FFF8F1',
      surface: '#FFF8F1',
      text: '#1E1B17',
      textSecondary: '#4C463C',
      palette: ['#F0D8B0', '#E8C890', '#FFF0E0', '#FFF8F0', '#C0A070'],
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // anticipation moderate
  {
    emotion: 'anticipation',
    intensity: 'moderate',
    source: 'anticipation_moderate_intensity_final',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#a33700',
      secondary: '#8c4a00',
      accent: '#a33700',
      background: '#fff5e7',
      surface: '#fff5e7',
      text: '#342e22',
      textSecondary: '#625b4c',
      palette: ['#ff7943', '#a33700', '#8c4a00', '#825000', '#a33700'],
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // anticipation intense
  {
    emotion: 'anticipation',
    intensity: 'intense',
    source: 'anticipation_intense_intensity_final',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#a33700',
      secondary: '#8c4a00',
      accent: '#a33700',
      background: '#fff5e7',
      surface: '#fff5e7',
      text: '#342e22',
      textSecondary: '#625b4c',
      palette: ['#ff7943', '#a33700', '#8c4a00', '#825000', '#a33700'],
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // love mild
  {
    emotion: 'love',
    intensity: 'mild',
    source: 'mild_love_affectatlas',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#7A545B',
      secondary: '#906060',
      accent: '#7A545B',
      background: '#FFF8F6',
      surface: '#FFF8F6',
      text: '#1D1B1A',
      textSecondary: '#504445',
      palette: ['#F0C0C8', '#F8D0D8', '#FFF0F2', '#FFF8F6', '#C08090'],
    },
    typography: {
      headlineFont: 'Noto Serif',
      bodyFont: 'Plus Jakarta Sans',
    },
    shapes: {
      borderRadius: 16,
      borderRadiusLg: 32,
      borderRadiusXl: 48,
      cornerStyle: 'rounded',
    },
  },
  // love moderate
  {
    emotion: 'love',
    intensity: 'moderate',
    source: 'love_moderate_intensity_joy_trust',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#b80049',
      secondary: '#a82d68',
      accent: '#bc004b',
      background: '#fef8fa',
      surface: '#fef8fa',
      text: '#1d1b1d',
      textSecondary: '#5b3f43',
      palette: ['#e2165f', '#b80049', '#a82d68', '#69575e', '#bc004b'],
    },
    typography: {
      headlineFont: 'Noto Serif',
      bodyFont: 'Plus Jakarta Sans',
    },
    shapes: {
      borderRadius: 16,
      borderRadiusLg: 32,
      borderRadiusXl: 48,
      cornerStyle: 'rounded',
    },
  },
  // love intense
  {
    emotion: 'love',
    intensity: 'intense',
    source: 'intense_love_radiant_variant',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#b70049',
      secondary: '#a52a65',
      accent: '#b70049',
      background: '#fff4f6',
      surface: '#fff4f6',
      text: '#392b31',
      textSecondary: '#68575e',
      palette: ['#ff7290', '#b70049', '#a52a65', '#a7295a', '#b70049'],
    },
    typography: {
      headlineFont: 'Noto Serif',
      bodyFont: 'Plus Jakarta Sans',
    },
    shapes: {
      borderRadius: 16,
      borderRadiusLg: 32,
      borderRadiusXl: 48,
      cornerStyle: 'rounded',
    },
  },
  // submission mild
  {
    emotion: 'submission',
    intensity: 'mild',
    source: 'mild_submission_affectatlas',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#575F67',
      secondary: '#808898',
      accent: '#575F67',
      background: '#F6FAFE',
      surface: '#F6FAFE',
      text: '#26343D',
      textSecondary: '#52616A',
      palette: ['#C0C8D0', '#D0D4D8', '#E0E4E8', '#F0F2F4', '#808890'],
    },
    typography: {
      headlineFont: 'Inter',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'smooth',
    },
  },
  // submission moderate
  {
    emotion: 'submission',
    intensity: 'moderate',
    source: 'submission_moderate_intensity_trust_fear',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#546067',
      secondary: '#49636f',
      accent: '#546067',
      background: '#f3faff',
      surface: '#f3faff',
      text: '#043746',
      textSecondary: '#3b6575',
      palette: ['#d7e4ec', '#546067', '#49636f', '#4b626e', '#546067'],
    },
    typography: {
      headlineFont: 'Inter',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'smooth',
    },
  },
  // submission intense
  {
    emotion: 'submission',
    intensity: 'intense',
    source: 'intense_submission_architect_variant',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#c5c7c9',
      secondary: '#9c9ea1',
      accent: '#c5c7c9',
      background: '#0c0e10',
      surface: '#0c0e10',
      text: '#e0e6ed',
      textSecondary: '#a6acb3',
      palette: ['#444749', '#c5c7c9', '#9c9ea1', '#f3f6ff', '#c5c7c9'],
    },
    typography: {
      headlineFont: 'Inter',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // alarm mild
  {
    emotion: 'alarm',
    intensity: 'mild',
    source: 'mild_alarm_affectatlas',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#F1BC89',
      secondary: '#E8BF99',
      accent: '#C09060',
      background: '#151313',
      surface: '#151313',
      text: '#E7E1E1',
      textSecondary: '#D4C4B6',
      palette: ['#1A1818', '#302820', '#806040', '#C09060', '#A08060'],
    },
    typography: {
      headlineFont: 'Space Grotesk',
      bodyFont: 'Space Grotesk',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'smooth',
    },
  },
  // alarm moderate
  {
    emotion: 'alarm',
    intensity: 'moderate',
    source: 'alarm_moderate_intensity_fear_surprise',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#ffb691',
      secondary: '#ffdf9e',
      accent: '#ffb691',
      background: '#131313',
      surface: '#131313',
      text: '#e5e2e1',
      textSecondary: '#e1bfb0',
      palette: ['#ff6f00', '#ffb691', '#ffdf9e', '#ffb4a2', '#ffb691'],
    },
    typography: {
      headlineFont: 'Space Grotesk',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 0,
      borderRadiusXl: 0,
      cornerStyle: 'sharp',
    },
  },
  // alarm intense
  {
    emotion: 'alarm',
    intensity: 'intense',
    source: 'intense_alarm_electric_pulse_variant',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#ffb691',
      secondary: '#ffdf9e',
      accent: '#ffb691',
      background: '#131313',
      surface: '#131313',
      text: '#e5e2e1',
      textSecondary: '#e1bfb0',
      palette: ['#ff6f00', '#ffb691', '#ffdf9e', '#d7baff', '#ffb691'],
    },
    typography: {
      headlineFont: 'Space Grotesk',
      bodyFont: 'Work Sans',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 0,
      borderRadiusXl: 0,
      cornerStyle: 'sharp',
    },
  },
  // disappointment mild
  {
    emotion: 'disappointment',
    intensity: 'mild',
    source: 'mild_disappointment_affectatlas',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#625C6A',
      secondary: '#808090',
      accent: '#625C6A',
      background: '#FBF9FB',
      surface: '#FBF9FB',
      text: '#303237',
      textSecondary: '#5D5F64',
      palette: ['#C8C0C8', '#D8D0D8', '#E0DDE0', '#E8E6E8', '#908898'],
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans',
      bodyFont: 'Plus Jakarta Sans',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // disappointment moderate
  {
    emotion: 'disappointment',
    intensity: 'moderate',
    source: 'moderate_disappointment_affectatlas',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#6F48B2',
      secondary: '#7E57C2',
      accent: '#6F48B2',
      background: '#FAF9F9',
      surface: '#FAF9F9',
      text: '#2F3334',
      textSecondary: '#5B6061',
      palette: ['#D1C4E9', '#B39DDB', '#9E9E9E', '#E0E0E0', '#7E57C2'],
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans',
      bodyFont: 'Plus Jakarta Sans',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // disappointment intense
  {
    emotion: 'disappointment',
    intensity: 'intense',
    source: 'intense_disappointment_peak_variant',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#6f48b2',
      secondary: '#69558e',
      accent: '#6f48b2',
      background: '#faf9f9',
      surface: '#faf9f9',
      text: '#2f3334',
      textSecondary: '#5b6061',
      palette: ['#ebdcff', '#6f48b2', '#69558e', '#645a7a', '#6f48b2'],
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans',
      bodyFont: 'Plus Jakarta Sans',
    },
    shapes: {
      borderRadius: 4,
      borderRadiusLg: 8,
      borderRadiusXl: 12,
      cornerStyle: 'smooth',
    },
  },
  // remorse mild
  {
    emotion: 'remorse',
    intensity: 'mild',
    source: 'mild_remorse_affectatlas',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#B8C9D2',
      secondary: '#90A0A9',
      accent: '#C2D3DC',
      background: '#0B0F11',
      surface: '#0B0F11',
      text: '#DAE7EF',
      textSecondary: '#A0ADB4',
      palette: ['#303840', '#405058', '#607078', '#809098', '#1A1E20'],
    },
    typography: {
      headlineFont: 'Noto Serif',
      bodyFont: 'Work Sans',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'smooth',
    },
  },
  // remorse moderate
  {
    emotion: 'remorse',
    intensity: 'moderate',
    source: 'remorse_moderate_intensity_sadness_disgust',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#b4cad6',
      secondary: '#a1a079',
      accent: '#b4cad6',
      background: '#041015',
      surface: '#041015',
      text: '#c5ebff',
      textSecondary: '#8ab1c4',
      palette: ['#354a53', '#b4cad6', '#a1a079', '#bdb2ff', '#b4cad6'],
    },
    typography: {
      headlineFont: 'Noto Serif',
      bodyFont: 'Work Sans',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'smooth',
    },
  },
  // remorse intense
  {
    emotion: 'remorse',
    intensity: 'intense',
    source: 'intense_remorse_monolith_variant',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#b8c9d3',
      secondary: '#a1a079',
      accent: '#b8c9d3',
      background: '#0e0e0e',
      surface: '#0e0e0e',
      text: '#e7e5e5',
      textSecondary: '#acabab',
      palette: ['#394951', '#b8c9d3', '#a1a079', '#f4faff', '#b8c9d3'],
    },
    typography: {
      headlineFont: 'Noto Serif',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 0,
      borderRadiusXl: 0,
      cornerStyle: 'sharp',
    },
  },
  // contempt mild
  {
    emotion: 'contempt',
    intensity: 'mild',
    source: 'mild_contempt_affectatlas',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#D8C3B0',
      secondary: '#A79C92',
      accent: '#CAB5A3',
      background: '#110D0C',
      surface: '#110D0C',
      text: '#F3E2DA',
      textSecondary: '#B7A8A1',
      palette: ['#3A3430', '#504840', '#8A7868', '#A09080', '#1E1A18'],
    },
    typography: {
      headlineFont: 'Newsreader',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 2,
      borderRadiusLg: 4,
      borderRadiusXl: 8,
      cornerStyle: 'smooth',
    },
  },
  // contempt moderate
  {
    emotion: 'contempt',
    intensity: 'moderate',
    source: 'moderate_contempt_affectatlas',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#E3BEB8',
      secondary: '#8D6E63',
      accent: '#AE8D87',
      background: '#2C0603',
      surface: '#2C0603',
      text: '#FFDAD4',
      textSecondary: '#D3C3C0',
      palette: ['#3E2723', '#4E342E', '#8D6E63', '#BF360C', '#1B0000'],
    },
    typography: {
      headlineFont: 'Newsreader',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 0,
      borderRadiusXl: 0,
      cornerStyle: 'sharp',
    },
  },
  // contempt intense
  {
    emotion: 'contempt',
    intensity: 'intense',
    source: 'intense_contempt_vitrified_variant',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#e3beb8',
      secondary: '#e4beb2',
      accent: '#e3beb8',
      background: '#2c0603',
      surface: '#2c0603',
      text: '#ffdad4',
      textSecondary: '#d3c3c0',
      palette: ['#3e2723', '#e3beb8', '#e4beb2', '#ffb4a8', '#e3beb8'],
    },
    typography: {
      headlineFont: 'Newsreader',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 0,
      borderRadiusXl: 0,
      cornerStyle: 'sharp',
    },
  },
  // aggressiveness mild
  {
    emotion: 'aggressiveness',
    intensity: 'mild',
    source: 'mild_aggressiveness_affectatlas',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#FFB59E',
      secondary: '#C08060',
      accent: '#FFCDBF',
      background: '#200F07',
      surface: '#200F07',
      text: '#FFDBCD',
      textSecondary: '#DDC0B8',
      palette: ['#2A1008', '#501808', '#A04020', '#C06030', '#1A0A04'],
    },
    typography: {
      headlineFont: 'Space Grotesk',
      bodyFont: 'Space Grotesk',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 0,
      borderRadiusXl: 0,
      cornerStyle: 'sharp',
    },
  },
  // aggressiveness moderate
  {
    emotion: 'aggressiveness',
    intensity: 'moderate',
    source: 'aggressiveness_emotion_screen_anger_anticipation',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#ff8f73',
      secondary: '#ff751d',
      accent: '#ff8f73',
      background: '#240301',
      surface: '#240301',
      text: '#ffded9',
      textSecondary: '#e0998e',
      palette: ['#ff7856', '#ff8f73', '#ff751d', '#ff7165', '#ff8f73'],
    },
    typography: {
      headlineFont: 'Space Grotesk',
      bodyFont: 'Inter',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 0,
      borderRadiusXl: 0,
      cornerStyle: 'sharp',
    },
  },
  // aggressiveness intense
  {
    emotion: 'aggressiveness',
    intensity: 'intense',
    source: 'intense_aggressiveness_affectatlas',
    placeholder: false,
    isDark: true,
    colors: {
      primary: '#FF8F73',
      secondary: '#FF6E00',
      accent: '#FF3D00',
      background: '#1F0704',
      surface: '#1F0704',
      text: '#FFDED9',
      textSecondary: '#CFA098',
      palette: ['#FF3D00', '#DD2C00', '#B71C1C', '#FF6E00', '#0A0000'],
    },
    typography: {
      headlineFont: 'Space Grotesk',
      bodyFont: 'Space Grotesk',
    },
    shapes: {
      borderRadius: 0,
      borderRadiusLg: 0,
      borderRadiusXl: 0,
      cornerStyle: 'sharp',
    },
  },
  // optimism mild
  {
    emotion: 'optimism',
    intensity: 'mild',
    source: 'mild_optimism_affectatlas',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#6F5D29',
      secondary: '#6B5E34',
      accent: '#907040',
      background: '#FFF9ED',
      surface: '#FFF9ED',
      text: '#373220',
      textSecondary: '#655F4A',
      palette: ['#F0E0B0', '#E8D090', '#FFF8E8', '#FFFCF4', '#B0A070'],
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans',
      bodyFont: 'Plus Jakarta Sans',
    },
    shapes: {
      borderRadius: 16,
      borderRadiusLg: 32,
      borderRadiusXl: 48,
      cornerStyle: 'rounded',
    },
  },
  // optimism moderate
  {
    emotion: 'optimism',
    intensity: 'moderate',
    source: 'optimism_moderate_intensity_anticipation_joy',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#924700',
      secondary: '#874e00',
      accent: '#924700',
      background: '#fdf6df',
      surface: '#fdf6df',
      text: '#322f20',
      textSecondary: '#5f5c4a',
      palette: ['#fe851f', '#924700', '#874e00', '#665c00', '#924700'],
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans',
      bodyFont: 'Be Vietnam Pro',
    },
    shapes: {
      borderRadius: 16,
      borderRadiusLg: 32,
      borderRadiusXl: 48,
      cornerStyle: 'rounded',
    },
  },
  // optimism intense
  {
    emotion: 'optimism',
    intensity: 'intense',
    source: 'intense_optimism_radiant_variant_1',
    placeholder: false,
    isDark: false,
    colors: {
      primary: '#6c5a00',
      secondary: '#5f5c4a',
      accent: '#ffd709',
      background: '#fff4f2',
      surface: '#fff4f2',
      text: '#412923',
      textSecondary: '#412923',
      palette: ['#ffd709', '#6c5a00', '#5f5c4a', '#412923', '#000000'],
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans',
      bodyFont: 'Be Vietnam Pro',
    },
    shapes: {
      borderRadius: 16,
      borderRadiusLg: 32,
      borderRadiusXl: 48,
      cornerStyle: 'rounded',
    },
  },
];

// ---------- Lookup ----------

function buildKey(emotion: EmotionType, intensity: Intensity): string {
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
export function getEmotionTheme(emotion: EmotionType, intensity: Intensity): EmotionTheme {
  const theme = THEME_MAP.get(buildKey(emotion, intensity));
  if (!theme) {
    throw new Error(`No theme for ${emotion} at ${intensity}`);
  }
  return theme;
}

/**
 * Get all three intensity variants for an emotion.
 */
export function getEmotionThemes(emotion: EmotionType): {
  mild: EmotionTheme;
  moderate: EmotionTheme;
  intense: EmotionTheme;
} {
  return {
    mild: getEmotionTheme(emotion, 'mild'),
    moderate: getEmotionTheme(emotion, 'moderate'),
    intense: getEmotionTheme(emotion, 'intense'),
  };
}

/**
 * Check which entries are placeholders (need real Stitch screens).
 */
export function getPlaceholders(): EmotionTheme[] {
  return ALL_THEMES.filter(t => t.placeholder);
}

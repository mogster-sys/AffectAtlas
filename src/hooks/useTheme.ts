/**
 * Custom hook for adaptive theme support
 */

import { useEffect, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { lightTheme, darkTheme, ThemeColors } from '@/constants/theme';

export interface UseThemeResult {
  theme: ThemeColors;
  colorScheme: ColorSchemeName;
  isDark: boolean;
}

export function useTheme(): UseThemeResult {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme()
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => subscription?.remove();
  }, []);

  const isDark = colorScheme === 'dark';
  const theme = isDark ? darkTheme : lightTheme;

  return {
    theme,
    colorScheme,
    isDark,
  };
}
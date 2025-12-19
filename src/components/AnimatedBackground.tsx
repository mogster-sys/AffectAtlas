/**
 * Animated background component that smoothly transitions between emotion colors
 */

import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
  Easing,
} from 'react-native-reanimated';
import { useEmotionTheme } from '@/hooks/useEmotionTheme';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  style?: any;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children, style }) => {
  const theme = useEmotionTheme();
  const progress = useSharedValue(0);

  // Store previous colors for smooth transitions
  const prevBackground = useSharedValue(theme.background);
  const prevSurface = useSharedValue(theme.surface);

  useEffect(() => {
    // Animate transition when theme changes
    progress.value = 0;
    progress.value = withTiming(1, {
      duration: 800,
      easing: Easing.inOut(Easing.ease),
    });

    // Update previous colors after animation starts
    const timer = setTimeout(() => {
      prevBackground.value = theme.background;
      prevSurface.value = theme.surface;
    }, 800);

    return () => clearTimeout(timer);
  }, [theme.emotionName, theme.intensity]);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [prevBackground.value, theme.background]
    );

    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle, style]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
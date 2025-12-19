/**
 * Root layout for AffectAtlas - Dynamically themed based on selected emotion
 */

import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { useEmotionTheme } from '@/hooks/useEmotionTheme';

// Helper to determine if a color is dark
function isColorDark(hexColor: string): boolean {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  // Calculate perceived brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
}

export default function RootLayout() {
  const theme = useEmotionTheme();

  // Determine status bar style based on background brightness
  const isDarkBackground = theme.isEmotionSelected ?
    isColorDark(theme.background) : false;
  const statusBarStyle = isDarkBackground ? 'light' : 'dark';

  return (
    <GestureHandlerRootView style={[styles.container, { backgroundColor: theme.background }]}>
      <SafeAreaProvider>
        <StatusBar style={statusBarStyle} backgroundColor={theme.headerBackground} />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.headerBackground,
            },
            headerTintColor: theme.text,
            headerTitleStyle: {
              fontWeight: 'bold',
              color: theme.text,
            },
            contentStyle: {
              backgroundColor: theme.background,
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: 'AffectAtlas',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="preview"
            options={{
              title: 'Design Preview',
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name="export"
            options={{
              title: 'Export',
              presentation: 'modal',
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0B',
  },
});
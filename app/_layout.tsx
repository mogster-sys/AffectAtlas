/**
 * Root layout for the Emotion Design System app
 */

import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0A0A0B',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            contentStyle: {
              backgroundColor: '#0A0A0B',
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: 'Emotion Design System',
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
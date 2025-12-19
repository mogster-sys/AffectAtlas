/**
 * Design system preview screen
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEmotionStore } from '@/store/useEmotionStore';
import { mapEmotionToColor } from '@/engine/mapping/colorMapper';

export default function PreviewScreen() {
  const { primaryEmotion, intensity } = useEmotionStore();

  if (!primaryEmotion) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No emotion selected</Text>
        </View>
      </SafeAreaView>
    );
  }

  const colors = mapEmotionToColor(primaryEmotion, intensity);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Design System Preview</Text>
        <Text style={styles.subtitle}>
          {primaryEmotion} - {intensity}
        </Text>

        {/* Color Palette */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Color Palette</Text>
          {Object.entries(colors).map(([name, color]) => (
            <View key={name} style={styles.colorRow}>
              <View style={[styles.colorBox, { backgroundColor: color }]} />
              <Text style={styles.colorName}>{name}</Text>
              <Text style={styles.colorValue}>{color}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0B',
  },
  content: {
    padding: 24,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#666666',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#A0A0A0',
    marginBottom: 24,
    textTransform: 'capitalize',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  colorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#1A1A1B',
    padding: 12,
    borderRadius: 8,
  },
  colorBox: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#3A3A3B',
  },
  colorName: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  colorValue: {
    color: '#808080',
    fontSize: 12,
    fontFamily: 'monospace',
  },
});
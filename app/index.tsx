/**
 * Home screen with emotion wheel interface
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { EmotionWheel } from '@/components/wheel/EmotionWheel';
import { useEmotionStore } from '@/store/useEmotionStore';
import { getPrimaryEmotion } from '@/constants/emotions';
import { mapEmotionToColor } from '@/engine/mapping/colorMapper';
import { useTheme } from '@/hooks/useTheme';

export default function HomeScreen() {
  const {
    primaryEmotion,
    intensity,
    clearSelection,
  } = useEmotionStore();

  const { theme } = useTheme();

  const selectedEmotion = primaryEmotion ? getPrimaryEmotion(primaryEmotion) : null;
  const colors = primaryEmotion ? mapEmotionToColor(primaryEmotion, intensity) : null;

  // Create dynamic styles with theme colors
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: theme.textSecondary,
      textAlign: 'center',
      paddingHorizontal: 32,
    },
    selectionContainer: {
      backgroundColor: theme.surface,
      borderRadius: 16,
      padding: 20,
      marginTop: 24,
    },
    selectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 16,
    },
    emotionName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 4,
    },
    intensityText: {
      fontSize: 14,
      color: theme.textSecondary,
      marginBottom: 8,
      textTransform: 'capitalize',
    },
    descriptionText: {
      fontSize: 14,
      color: theme.textTertiary,
      lineHeight: 20,
    },
    paletteTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.textSecondary,
      marginBottom: 12,
    },
    colorLabel: {
      fontSize: 11,
      color: theme.textTertiary,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    secondaryButton: {
      backgroundColor: theme.surfaceElevated,
      borderWidth: 1,
      borderColor: theme.border,
    },
    secondaryButtonText: {
      color: theme.text,
    },
    clearButtonText: {
      fontSize: 14,
      color: theme.textTertiary,
    },
    borderTop: {
      borderTopWidth: 1,
      borderTopColor: theme.border,
    },
    colorSwatch: {
      width: 48,
      height: 48,
      borderRadius: 8,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: theme.borderLight,
    },
  });

  return (
    <SafeAreaView style={dynamicStyles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>AffectAtlas</Text>
          <Text style={styles.subtitle}>
            Map emotions to design systems with a simple touch
          </Text>
        </View>

        {/* Emotion Wheel */}
        <View style={styles.wheelContainer}>
          <EmotionWheel />
        </View>

        {/* Current Selection */}
        {selectedEmotion && colors && (
          <View style={styles.selectionContainer}>
            <Text style={styles.selectionTitle}>Current Selection</Text>
            <View style={styles.selectionInfo}>
              <View style={[styles.colorPreview, { backgroundColor: colors.primary }]} />
              <View style={styles.selectionDetails}>
                <Text style={styles.emotionName}>{selectedEmotion.label}</Text>
                <Text style={styles.intensityText}>{intensity} intensity</Text>
                <Text style={styles.descriptionText}>{selectedEmotion.description}</Text>
              </View>
            </View>

            {/* Color Palette Preview */}
            <View style={styles.paletteContainer}>
              <Text style={styles.paletteTitle}>Generated Colors</Text>
              <View style={styles.colorGrid}>
                <View style={styles.colorItem}>
                  <View style={[styles.colorSwatch, { backgroundColor: colors.primary }]} />
                  <Text style={styles.colorLabel}>Primary</Text>
                </View>
                <View style={styles.colorItem}>
                  <View style={[styles.colorSwatch, { backgroundColor: colors.secondary }]} />
                  <Text style={styles.colorLabel}>Secondary</Text>
                </View>
                <View style={styles.colorItem}>
                  <View style={[styles.colorSwatch, { backgroundColor: colors.accent }]} />
                  <Text style={styles.colorLabel}>Accent</Text>
                </View>
                <View style={styles.colorItem}>
                  <View style={[styles.colorSwatch, { backgroundColor: colors.background }]} />
                  <Text style={styles.colorLabel}>Background</Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {/* Action Buttons */}
        {primaryEmotion && (
          <View style={styles.actions}>
            <Link href="/preview" asChild>
              <Pressable style={[styles.button, styles.secondaryButton]}>
                <Text style={styles.buttonText}>Full Preview</Text>
              </Pressable>
            </Link>

            <Link href="/export" asChild>
              <Pressable style={[styles.button, styles.primaryButton]}>
                <Text style={styles.buttonText}>Export Design</Text>
              </Pressable>
            </Link>
          </View>
        )}

        {/* Clear Button */}
        {primaryEmotion && (
          <Pressable style={styles.clearButton} onPress={clearSelection}>
            <Text style={styles.clearButtonText}>Clear Selection</Text>
          </Pressable>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0B',
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 48,
  },
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#A0A0A0',
    textAlign: 'center',
    paddingHorizontal: 32,
  },
  wheelContainer: {
    marginVertical: 24,
    alignItems: 'center',
  },
  selectionContainer: {
    backgroundColor: '#1A1A1B',
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
  },
  selectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  selectionInfo: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  colorPreview: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 16,
  },
  selectionDetails: {
    flex: 1,
  },
  emotionName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  intensityText: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  descriptionText: {
    fontSize: 14,
    color: '#C0C0C0',
    lineHeight: 20,
  },
  paletteContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#2A2A2B',
  },
  paletteTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#A0A0A0',
    marginBottom: 12,
  },
  colorGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorItem: {
    alignItems: 'center',
  },
  colorSwatch: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#3A3A3B',
  },
  colorLabel: {
    fontSize: 11,
    color: '#808080',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 32,
  },
  button: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#3B82F6',
  },
  secondaryButton: {
    backgroundColor: '#2A2A2B',
    borderWidth: 1,
    borderColor: '#3A3A3B',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  clearButton: {
    marginTop: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  clearButtonText: {
    fontSize: 14,
    color: '#666666',
  },
});
/**
 * Home screen — emotion wheel + live background transformation.
 * Selecting an emotion floods the screen with that emotion's design language.
 */

import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { EmotionWheel } from '@/components/wheel/EmotionWheel';
import { useEmotionStore } from '@/store/useEmotionStore';
import { getEmotionByType } from '@/constants/emotions';
import { getEmotionTheme } from '@/constants/designTokens';
import { getEmotionWords } from '@/constants/emotionWords';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function HomeScreen() {
  const {
    primaryEmotion,
    intensity,
    clearSelection,
  } = useEmotionStore();

  const emotion = primaryEmotion ? getEmotionByType(primaryEmotion) : null;
  const theme = primaryEmotion ? getEmotionTheme(primaryEmotion, intensity) : null;
  const words = primaryEmotion ? getEmotionWords(primaryEmotion) : [];

  // Dynamic styles based on selected emotion
  const bgColor = theme ? theme.colors.background : '#0A0A0B';
  const textColor = theme ? theme.colors.text : '#FFFFFF';
  const textSecondary = theme ? theme.colors.textSecondary : '#666666';
  const surfaceColor = theme ? theme.colors.surface : '#1A1A1B';
  const accentColor = theme ? theme.colors.accent : '#3B82F6';
  const borderRadius = theme ? theme.shapes.borderRadius : 12;

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.appName, { color: textSecondary }]}>
            AFFECTATLAS
          </Text>
        </View>

        {/* Emotion preview area — word cloud when emotion selected */}
        <View style={styles.previewArea}>
          {theme && emotion ? (
            <>
              {/* Info bar */}
              <View style={styles.infoBar}>
                <Text style={[styles.emotionLabel, { color: textColor }]}>
                  {emotion.label}
                </Text>
                <Text style={[styles.intensityLabel, { color: textSecondary }]}>
                  {intensity}
                </Text>
              </View>

              {/* Word cloud */}
              <View style={styles.wordCloud}>
                {words.map((word, i) => (
                  <Text
                    key={word}
                    style={[
                      styles.wordCloudText,
                      {
                        color: textColor,
                        fontSize: WORD_SIZES[i % WORD_SIZES.length],
                        opacity: WORD_OPACITIES[i % WORD_OPACITIES.length],
                      },
                    ]}
                  >
                    {word}
                  </Text>
                ))}
              </View>

              {/* Palette strip */}
              <View style={styles.paletteStrip}>
                {theme.colors.palette.map((color, i) => (
                  <View
                    key={i}
                    style={[
                      styles.paletteSwatch,
                      {
                        backgroundColor: color,
                        borderRadius: Math.max(4, borderRadius / 2),
                      },
                    ]}
                  />
                ))}
              </View>

              {/* Action buttons */}
              <View style={styles.actions}>
                <Link href="/export" asChild>
                  <Pressable
                    style={[
                      styles.generateButton,
                      {
                        backgroundColor: accentColor,
                        borderRadius: Math.max(8, borderRadius),
                      },
                    ]}
                  >
                    <Text style={[styles.generateButtonText, { color: theme.isDark ? '#FFFFFF' : '#000000' }]}>
                      Generate Design System
                    </Text>
                  </Pressable>
                </Link>
                <Pressable style={styles.clearButton} onPress={clearSelection}>
                  <Text style={[styles.clearButtonText, { color: textSecondary }]}>
                    Clear
                  </Text>
                </Pressable>
              </View>
            </>
          ) : (
            <View style={styles.idleState}>
              <Text style={[styles.idleText, { color: textSecondary }]}>
                Select an emotion to see its design language
              </Text>
            </View>
          )}
        </View>

        {/* Emotion Wheel — anchored at bottom */}
        <View style={[styles.wheelContainer, { backgroundColor: surfaceColor }]}>
          <EmotionWheel />
        </View>
      </SafeAreaView>
    </View>
  );
}

// Staggered sizes and opacities for word cloud visual interest
const WORD_SIZES = [28, 20, 24, 16, 22, 18, 26, 14];
const WORD_OPACITIES = [0.25, 0.18, 0.22, 0.15, 0.20, 0.16, 0.24, 0.12];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 8,
    alignItems: 'center',
  },
  appName: {
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 4,
  },
  previewArea: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  infoBar: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 12,
    marginBottom: 24,
  },
  emotionLabel: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  intensityLabel: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
  wordCloud: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
    maxWidth: SCREEN_WIDTH - 48,
  },
  wordCloudText: {
    fontWeight: '300',
  },
  paletteStrip: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  paletteSwatch: {
    flex: 1,
    height: 32,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  generateButton: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
  },
  generateButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  clearButton: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  clearButtonText: {
    fontSize: 14,
  },
  idleState: {
    alignItems: 'center',
    paddingVertical: 48,
  },
  idleText: {
    fontSize: 16,
    textAlign: 'center',
  },
  wheelContainer: {
    paddingTop: 16,
    paddingBottom: 8,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: 'center',
  },
});

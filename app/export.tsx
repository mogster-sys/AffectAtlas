/**
 * Export design system screen
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Clipboard from 'expo-clipboard';
import { useEmotionStore } from '@/store/useEmotionStore';
import { mapEmotionToColor } from '@/engine/mapping/colorMapper';
import { generateColorPalette } from '@/engine/color/oklch';

export default function ExportScreen() {
  const { primaryEmotion, intensity } = useEmotionStore();
  const [selectedFormat, setSelectedFormat] = useState<'css' | 'json' | 'swift'>('css');

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
  const palette = generateColorPalette(colors.primary);

  const generateCSS = () => {
    const lines: string[] = [
      ':root {',
      `  /* Emotion: ${primaryEmotion} - ${intensity} */`,
      `  --color-primary: ${colors.primary};`,
      `  --color-secondary: ${colors.secondary};`,
      `  --color-accent: ${colors.accent};`,
      `  --color-background: ${colors.background};`,
      `  --color-surface: ${colors.surface};`,
      `  --color-text: ${colors.text};`,
      `  --color-text-secondary: ${colors.textSecondary};`,
      '',
      '  /* Palette */',
    ];

    Object.entries(palette).forEach(([shade, color]) => {
      lines.push(`  --color-${shade}: ${color};`);
    });

    lines.push('}');
    return lines.join('\n');
  };

  const generateJSON = () => {
    return JSON.stringify(
      {
        emotion: primaryEmotion,
        intensity,
        colors,
        palette,
      },
      null,
      2
    );
  };

  const generateSwift = () => {
    const lines: string[] = [
      'import SwiftUI',
      '',
      'extension Color {',
      `    // ${primaryEmotion} - ${intensity}`,
      `    static let primary = Color(hex: "${colors.primary}")`,
      `    static let secondary = Color(hex: "${colors.secondary}")`,
      `    static let accent = Color(hex: "${colors.accent}")`,
      `    static let background = Color(hex: "${colors.background}")`,
      `    static let surface = Color(hex: "${colors.surface}")`,
      '}',
    ];
    return lines.join('\n');
  };

  const getExportContent = () => {
    switch (selectedFormat) {
      case 'css':
        return generateCSS();
      case 'json':
        return generateJSON();
      case 'swift':
        return generateSwift();
    }
  };

  const copyToClipboard = async () => {
    const content = getExportContent();
    await Clipboard.setStringAsync(content);
    Alert.alert('Copied!', 'Design tokens copied to clipboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Export Design System</Text>

        {/* Format Selector */}
        <View style={styles.formatSelector}>
          {(['css', 'json', 'swift'] as const).map((format) => (
            <Pressable
              key={format}
              style={[
                styles.formatButton,
                selectedFormat === format && styles.formatButtonActive,
              ]}
              onPress={() => setSelectedFormat(format)}
            >
              <Text
                style={[
                  styles.formatButtonText,
                  selectedFormat === format && styles.formatButtonTextActive,
                ]}
              >
                {format.toUpperCase()}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Code Preview */}
        <View style={styles.codeContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Text style={styles.codeText}>{getExportContent()}</Text>
          </ScrollView>
        </View>

        {/* Copy Button */}
        <Pressable style={styles.copyButton} onPress={copyToClipboard}>
          <Text style={styles.copyButtonText}>Copy to Clipboard</Text>
        </Pressable>
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
    marginBottom: 24,
  },
  formatSelector: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  formatButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#1A1A1B',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2B',
  },
  formatButtonActive: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  formatButtonText: {
    color: '#808080',
    fontSize: 14,
    fontWeight: '600',
  },
  formatButtonTextActive: {
    color: '#FFFFFF',
  },
  codeContainer: {
    backgroundColor: '#1A1A1B',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    minHeight: 300,
  },
  codeText: {
    color: '#E0E0E0',
    fontSize: 12,
    fontFamily: 'monospace',
    lineHeight: 20,
  },
  copyButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  copyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
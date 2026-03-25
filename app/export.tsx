/**
 * Export design system screen
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Clipboard from 'expo-clipboard';
import { useEmotionStore } from '@/store/useEmotionStore';
import { generateDesignSystem, generateAIPrompt } from '@/engine/mapping/themeMapper';
import { getEmotionTheme } from '@/constants/designTokens';
import { getDesignGuidance } from '@/constants/designGuidance';

type ExportFormat = 'css' | 'json' | 'swift' | 'ai-prompt';

export default function ExportScreen() {
  const { primaryEmotion, intensity } = useEmotionStore();
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('css');

  if (!primaryEmotion) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No emotion selected</Text>
        </View>
      </SafeAreaView>
    );
  }

  const designSystem = generateDesignSystem(primaryEmotion, intensity);
  const theme = getEmotionTheme(primaryEmotion, intensity);
  const guidance = getDesignGuidance(primaryEmotion, intensity);

  const generateCSS = () => {
    const { semantic, palette } = designSystem.colors;
    const lines: string[] = [
      ':root {',
      `  /* ${primaryEmotion} - ${intensity} */`,
      `  /* Source: ${theme.source} */`,
      '',
      '  /* Colors */',
      `  --color-primary: ${semantic.primary};`,
      `  --color-secondary: ${semantic.secondary};`,
      `  --color-accent: ${semantic.accent};`,
      `  --color-background: ${semantic.background};`,
      `  --color-surface: ${semantic.surface};`,
      `  --color-text: ${semantic.text};`,
      `  --color-text-secondary: ${semantic.textSecondary};`,
      '',
      '  /* Palette */',
    ];
    Object.entries(palette).forEach(([shade, color]) => {
      lines.push(`  --color-${shade}: ${color};`);
    });
    lines.push('');
    lines.push('  /* Typography */');
    lines.push(`  --font-headline: "${theme.typography.headlineFont}", sans-serif;`);
    lines.push(`  --font-body: "${theme.typography.bodyFont}", sans-serif;`);
    lines.push('');
    lines.push('  /* Shapes */');
    lines.push(`  --border-radius: ${theme.shapes.borderRadius}px;`);
    lines.push(`  --border-radius-lg: ${theme.shapes.borderRadiusLg}px;`);
    lines.push(`  --border-radius-xl: ${theme.shapes.borderRadiusXl}px;`);
    lines.push('}');
    if (guidance) {
      lines.push('');
      lines.push(`/* Creative North Star: "${guidance.northStar}" */`);
      lines.push(`/* ${guidance.philosophy} */`);
      lines.push('/*');
      lines.push(" * Do's:");
      guidance.dos.forEach(d => lines.push(` *   - ${d}`));
      lines.push(" * Don'ts:");
      guidance.donts.forEach(d => lines.push(` *   - ${d}`));
      lines.push(' */');
    }
    return lines.join('\n');
  };

  const generateJSON = () => {
    return JSON.stringify({
      emotion: primaryEmotion,
      intensity,
      source: theme.source,
      isDark: theme.isDark,
      colors: theme.colors,
      typography: theme.typography,
      shapes: theme.shapes,
      ...(guidance ? { designGuidance: guidance } : {}),
    }, null, 2);
  };

  const generateSwift = () => {
    const c = theme.colors;
    const lines: string[] = [
      'import SwiftUI',
      '',
      `// ${primaryEmotion} - ${intensity}`,
      `// Source: ${theme.source}`,
      'extension Color {',
      `    static let emotionPrimary = Color(hex: "${c.primary}")`,
      `    static let emotionSecondary = Color(hex: "${c.secondary}")`,
      `    static let emotionAccent = Color(hex: "${c.accent}")`,
      `    static let emotionBackground = Color(hex: "${c.background}")`,
      `    static let emotionSurface = Color(hex: "${c.surface}")`,
      `    static let emotionText = Color(hex: "${c.text}")`,
      '}',
      '',
      'struct EmotionTypography {',
      `    static let headlineFont = "${theme.typography.headlineFont}"`,
      `    static let bodyFont = "${theme.typography.bodyFont}"`,
      '}',
      '',
      'struct EmotionShapes {',
      `    static let cornerRadius: CGFloat = ${theme.shapes.borderRadius}`,
      `    static let cornerRadiusLg: CGFloat = ${theme.shapes.borderRadiusLg}`,
      `    static let cornerRadiusXl: CGFloat = ${theme.shapes.borderRadiusXl}`,
      '}',
    ];
    return lines.join('\n');
  };

  const getExportContent = (): string => {
    switch (selectedFormat) {
      case 'css':
        return generateCSS();
      case 'json':
        return generateJSON();
      case 'swift':
        return generateSwift();
      case 'ai-prompt':
        return generateAIPrompt(primaryEmotion, intensity);
    }
  };

  const copyToClipboard = async () => {
    const content = getExportContent();
    await Clipboard.setStringAsync(content);
    Alert.alert('Copied!', 'Design tokens copied to clipboard');
  };

  const formats: { key: ExportFormat; label: string }[] = [
    { key: 'css', label: 'CSS' },
    { key: 'json', label: 'JSON' },
    { key: 'swift', label: 'SWIFT' },
    { key: 'ai-prompt', label: 'AI' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Export Design System</Text>

        {/* Format Selector */}
        <View style={styles.formatSelector}>
          {formats.map(({ key, label }) => (
            <Pressable
              key={key}
              style={[
                styles.formatButton,
                selectedFormat === key && styles.formatButtonActive,
              ]}
              onPress={() => setSelectedFormat(key)}
            >
              <Text
                style={[
                  styles.formatButtonText,
                  selectedFormat === key && styles.formatButtonTextActive,
                ]}
              >
                {label}
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

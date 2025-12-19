/**
 * Interactive emotion wheel component for selecting emotions and intensities
 */

import React, { useCallback } from 'react';
import { View, StyleSheet, Dimensions, Text, Pressable } from 'react-native';
import Svg, { G, Path, Circle, Text as SvgText } from 'react-native-svg';
import { useEmotionStore } from '@/store/useEmotionStore';
import { PRIMARY_EMOTIONS } from '@/constants/emotions';
import { getEmotionColors } from '@/engine/mapping/colorMapper';
import type { PrimaryEmotionType, Intensity } from '@/types/emotion';

interface EmotionWheelProps {
  size?: number;
  onEmotionSelect?: (emotion: PrimaryEmotionType, intensity: Intensity) => void;
}

export const EmotionWheel: React.FC<EmotionWheelProps> = ({
  size = Dimensions.get('window').width - 48,
  onEmotionSelect,
}) => {
  const {
    primaryEmotion,
    intensity,
    setPrimaryEmotion,
    setIntensity,
  } = useEmotionStore();

  const centerX = size / 2;
  const centerY = size / 2;
  const segmentAngle = 360 / PRIMARY_EMOTIONS.length; // 45° per segment

  // Generate arc path for a segment
  const createSegmentPath = (
    startAngle: number,
    innerRadius: number,
    outerRadius: number
  ): string => {
    const endAngle = startAngle + segmentAngle;
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + innerRadius * Math.cos(startAngleRad);
    const y1 = centerY + innerRadius * Math.sin(startAngleRad);
    const x2 = centerX + outerRadius * Math.cos(startAngleRad);
    const y2 = centerY + outerRadius * Math.sin(startAngleRad);
    const x3 = centerX + outerRadius * Math.cos(endAngleRad);
    const y3 = centerY + outerRadius * Math.sin(endAngleRad);
    const x4 = centerX + innerRadius * Math.cos(endAngleRad);
    const y4 = centerY + innerRadius * Math.sin(endAngleRad);

    const largeArcFlag = segmentAngle > 180 ? 1 : 0;

    return `
      M ${x1} ${y1}
      L ${x2} ${y2}
      A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x3} ${y3}
      L ${x4} ${y4}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}
      Z
    `;
  };

  const handleSegmentPress = useCallback(
    (emotion: PrimaryEmotionType, selectedIntensity: Intensity) => {
      setPrimaryEmotion(emotion);
      setIntensity(selectedIntensity);
      onEmotionSelect?.(emotion, selectedIntensity);
    },
    [setPrimaryEmotion, setIntensity, onEmotionSelect]
  );

  // Intensity zones
  const zones = {
    intense: { innerRadius: 0, outerRadius: size * 0.2 },
    moderate: { innerRadius: size * 0.2, outerRadius: size * 0.35 },
    mild: { innerRadius: size * 0.35, outerRadius: size * 0.5 },
  };

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <G>
          {PRIMARY_EMOTIONS.map((emotion, index) => {
            const startAngle = index * segmentAngle - 90;
            const colors = getEmotionColors(emotion.type);
            const isSelected = primaryEmotion === emotion.type;

            return (
              <G key={emotion.type}>
                {/* Mild zone */}
                <Path
                  d={createSegmentPath(startAngle, zones.mild.innerRadius, zones.mild.outerRadius)}
                  fill={colors.mild}
                  opacity={isSelected && intensity === 'mild' ? 1 : 0.8}
                  strokeWidth={isSelected && intensity === 'mild' ? 3 : 0}
                  stroke="#FFFFFF"
                  onPress={() => handleSegmentPress(emotion.type, 'mild')}
                />

                {/* Moderate zone */}
                <Path
                  d={createSegmentPath(startAngle, zones.moderate.innerRadius, zones.moderate.outerRadius)}
                  fill={colors.moderate}
                  opacity={isSelected && intensity === 'moderate' ? 1 : 0.8}
                  strokeWidth={isSelected && intensity === 'moderate' ? 3 : 0}
                  stroke="#FFFFFF"
                  onPress={() => handleSegmentPress(emotion.type, 'moderate')}
                />

                {/* Intense zone */}
                <Path
                  d={createSegmentPath(startAngle, zones.intense.innerRadius, zones.intense.outerRadius)}
                  fill={colors.intense}
                  opacity={isSelected && intensity === 'intense' ? 1 : 0.8}
                  strokeWidth={isSelected && intensity === 'intense' ? 3 : 0}
                  stroke="#FFFFFF"
                  onPress={() => handleSegmentPress(emotion.type, 'intense')}
                />

                {/* Label */}
                <SvgText
                  x={centerX + (size * 0.42) * Math.cos((startAngle + segmentAngle / 2) * Math.PI / 180)}
                  y={centerY + (size * 0.42) * Math.sin((startAngle + segmentAngle / 2) * Math.PI / 180)}
                  fontSize="12"
                  fontWeight={isSelected ? "bold" : "normal"}
                  fill="#333333"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  {emotion.label}
                </SvgText>
              </G>
            );
          })}

          {/* Center circle with selected emotion */}
          <Circle
            cx={centerX}
            cy={centerY}
            r={size * 0.15}
            fill="#FFFFFF"
            stroke="#E0E0E0"
            strokeWidth={2}
          />

          {primaryEmotion && (
            <SvgText
              x={centerX}
              y={centerY - 10}
              fontSize="16"
              fontWeight="bold"
              fill="#333333"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {PRIMARY_EMOTIONS.find(e => e.type === primaryEmotion)?.label}
            </SvgText>
          )}

          {intensity && (
            <SvgText
              x={centerX}
              y={centerY + 10}
              fontSize="12"
              fill="#666666"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {intensity}
            </SvgText>
          )}
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
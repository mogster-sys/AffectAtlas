/**
 * Zustand store for managing emotion selection and design system state
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { EmotionType, Intensity, EmotionInput } from '@/types/emotion';
import type { DesignSystem } from '@/types/design';

interface EmotionState {
  // Current selection
  primaryEmotion: EmotionType | null;
  secondaryEmotion: EmotionType | null;
  intensity: Intensity;
  blendRatio: number; // 0-1, where 0.5 is equal blend

  // Generated design system (cached)
  designSystem: DesignSystem | null;

  // Actions
  setPrimaryEmotion: (emotion: EmotionType) => void;
  setSecondaryEmotion: (emotion: EmotionType | null) => void;
  setIntensity: (intensity: Intensity) => void;
  setBlendRatio: (ratio: number) => void;
  setDesignSystem: (system: DesignSystem | null) => void;
  clearSelection: () => void;

  // Computed
  hasBlend: () => boolean;
  getEmotionInput: () => EmotionInput | null;
}

export const useEmotionStore = create<EmotionState>()(
  persist(
    (set, get) => ({
      primaryEmotion: null,
      secondaryEmotion: null,
      intensity: 'moderate',
      blendRatio: 0.5,
      designSystem: null,

      setPrimaryEmotion: (emotion) => set({
        primaryEmotion: emotion,
        designSystem: null, // Invalidate cache
      }),

      setSecondaryEmotion: (emotion) => set({
        secondaryEmotion: emotion,
        designSystem: null,
      }),

      setIntensity: (intensity) => set({
        intensity,
        designSystem: null,
      }),

      setBlendRatio: (ratio) => set({
        blendRatio: Math.max(0, Math.min(1, ratio)),
        designSystem: null,
      }),

      setDesignSystem: (system) => set({
        designSystem: system,
      }),

      clearSelection: () => set({
        primaryEmotion: null,
        secondaryEmotion: null,
        intensity: 'moderate',
        blendRatio: 0.5,
        designSystem: null,
      }),

      hasBlend: () => {
        const state = get();
        return state.primaryEmotion !== null && state.secondaryEmotion !== null;
      },

      getEmotionInput: () => {
        const state = get();
        if (!state.primaryEmotion) return null;

        return {
          primary: state.primaryEmotion,
          secondary: state.secondaryEmotion,
          intensity: state.intensity,
          blendRatio: state.blendRatio,
        };
      },
    }),
    {
      name: 'emotion-store',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        // Only persist user selections, not computed values
        primaryEmotion: state.primaryEmotion,
        secondaryEmotion: state.secondaryEmotion,
        intensity: state.intensity,
        blendRatio: state.blendRatio,
      }),
    }
  )
);
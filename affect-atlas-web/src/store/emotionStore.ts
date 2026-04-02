/**
 * Vanilla pub/sub store for emotion selection state.
 * Replaces Zustand — same shape, no framework dependency.
 */

import type { AnyEmotionType, EmotionType, Intensity } from '@/types/emotion';

export interface EmotionState {
  primaryEmotion: AnyEmotionType | null;
  secondaryEmotion: EmotionType | null;
  intensity: Intensity;
  blendRatio: number;
}

type Listener = (state: EmotionState) => void;

const STORAGE_KEY = 'emotion-store';

function loadState(): EmotionState {
  const defaults: EmotionState = {
    primaryEmotion: 'joy',
    secondaryEmotion: null,
    intensity: 'moderate',
    blendRatio: 0.5,
  };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...defaults, ...parsed };
    }
  } catch {
    // ignore corrupt storage
  }
  return defaults;
}

function saveState(state: EmotionState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      primaryEmotion: state.primaryEmotion,
      secondaryEmotion: state.secondaryEmotion,
      intensity: state.intensity,
      blendRatio: state.blendRatio,
    }));
  } catch {
    // storage full or unavailable
  }
}

let state = loadState();
const listeners = new Set<Listener>();

function notify(): void {
  for (const fn of listeners) {
    fn(state);
  }
}

export const emotionStore = {
  get(): EmotionState {
    return state;
  },

  set(partial: Partial<EmotionState>): void {
    state = { ...state, ...partial };
    saveState(state);
    notify();
  },

  setPrimaryEmotion(emotion: AnyEmotionType): void {
    this.set({ primaryEmotion: emotion });
  },

  setSecondaryEmotion(emotion: EmotionType | null): void {
    this.set({ secondaryEmotion: emotion });
  },

  setIntensity(intensity: Intensity): void {
    this.set({ intensity });
  },

  setBlendRatio(ratio: number): void {
    this.set({ blendRatio: Math.max(0, Math.min(1, ratio)) });
  },

  clearSelection(): void {
    this.set({
      primaryEmotion: null,
      secondaryEmotion: null,
      intensity: 'moderate',
      blendRatio: 0.5,
    });
  },

  subscribe(fn: Listener): () => void {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
};

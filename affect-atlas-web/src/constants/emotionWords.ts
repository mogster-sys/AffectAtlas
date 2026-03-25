/**
 * Thesaurus word lists for each emotion.
 * Used in word cloud display and AI prompt generation.
 */

import type { AnyEmotionType, EmotionType } from '@/types/emotion';
import { isExtraEmotion, getExtraEmotion } from '@/constants/extraEmotions';

export interface EmotionWordSet {
  words: string[];
  feel: string; // One-line description of the emotion's design feel
}

export const EMOTION_WORDS: Record<EmotionType, EmotionWordSet> = {
  // Primary emotions
  joy: {
    words: ['elation', 'delight', 'bliss', 'cheerfulness', 'euphoria', 'contentment', 'glee', 'radiance'],
    feel: 'warm, light, expansive — like laughing on a sunny day',
  },
  trust: {
    words: ['confidence', 'reliability', 'faith', 'assurance', 'certainty', 'loyalty', 'dependability', 'steadiness'],
    feel: 'stable, grounded, balanced — like a firm handshake',
  },
  fear: {
    words: ['dread', 'terror', 'anxiety', 'apprehension', 'panic', 'unease', 'trepidation', 'foreboding'],
    feel: 'constricted, dark, vigilant — like hearing footsteps behind you',
  },
  surprise: {
    words: ['astonishment', 'amazement', 'wonder', 'shock', 'disbelief', 'awe', 'startle', 'bewilderment'],
    feel: 'sudden, electric, disorienting — like a camera flash going off',
  },
  sadness: {
    words: ['melancholy', 'sorrow', 'grief', 'loneliness', 'despair', 'wistfulness', 'heartache', 'yearning'],
    feel: 'quiet, heavy, empty — like staring out a rain-streaked window',
  },
  disgust: {
    words: ['revulsion', 'loathing', 'aversion', 'repugnance', 'distaste', 'contempt', 'abhorrence', 'nausea'],
    feel: 'visceral, recoiling, uncomfortable — like touching something spoiled',
  },
  anger: {
    words: ['fury', 'rage', 'wrath', 'outrage', 'hostility', 'indignation', 'resentment', 'aggression'],
    feel: 'pressurized, intense, explosive — like a clenched jaw',
  },
  anticipation: {
    words: ['expectation', 'eagerness', 'excitement', 'hope', 'curiosity', 'readiness', 'vigilance', 'longing'],
    feel: 'leaning forward, building, warming — like the moment before a starting gun',
  },
  // Derived emotions (dyads)
  love: {
    words: ['devotion', 'tenderness', 'adoration', 'intimacy', 'warmth', 'affection', 'passion', 'cherish'],
    feel: 'warm embrace, tender, close — like candlelight and held hands',
  },
  submission: {
    words: ['compliance', 'deference', 'obedience', 'yielding', 'humility', 'resignation', 'acquiescence', 'docility'],
    feel: 'quiet compliance, head bowed, controlled — like standing at attention',
  },
  alarm: {
    words: ['panic', 'shock', 'fright', 'startled', 'jolt', 'alert', 'emergency', 'distress'],
    feel: 'jolted awake, sirens, heart pounding — fight-or-flight activated',
  },
  disappointment: {
    words: ['letdown', 'dismay', 'disillusion', 'deflation', 'regret', 'unfulfilled', 'crestfallen', 'disheartened'],
    feel: 'the air leaving a balloon, a party after everyone has gone',
  },
  remorse: {
    words: ['guilt', 'regret', 'shame', 'penitence', 'contrition', 'self-reproach', 'anguish', 'repentance'],
    feel: 'heavy stomach, looking down — the weight of something you cannot take back',
  },
  contempt: {
    words: ['scorn', 'disdain', 'derision', 'mockery', 'superiority', 'condescension', 'sneering', 'dismissal'],
    feel: 'raised eyebrow, cold superiority — controlled fury behind refinement',
  },
  aggressiveness: {
    words: ['ferocity', 'dominance', 'confrontation', 'force', 'intensity', 'relentless', 'combative', 'fierce'],
    feel: 'charging bull, clenched fists — controlled violence with a target',
  },
  optimism: {
    words: ['hope', 'brightness', 'possibility', 'confidence', 'enthusiasm', 'positivity', 'aspiration', 'promise'],
    feel: 'sunrise, deep breath of fresh air — the certainty things will work out',
  },
};

export function getEmotionWords(emotion: EmotionType): string[] {
  return EMOTION_WORDS[emotion].words;
}

export function getEmotionFeel(emotion: EmotionType): string {
  return EMOTION_WORDS[emotion].feel;
}

/**
 * Get words for any emotion (including extras).
 * Extras fall back to their parent primary's word list.
 */
export function getEmotionWordsOrFallback(emotion: AnyEmotionType): string[] {
  if (!isExtraEmotion(emotion)) {
    return EMOTION_WORDS[emotion as EmotionType].words;
  }
  const extra = getExtraEmotion(emotion);
  return extra ? EMOTION_WORDS[extra.parent].words : [];
}

export function getEmotionFeelOrFallback(emotion: AnyEmotionType): string {
  if (!isExtraEmotion(emotion)) {
    return EMOTION_WORDS[emotion as EmotionType].feel;
  }
  const extra = getExtraEmotion(emotion);
  return extra ? EMOTION_WORDS[extra.parent].feel : '';
}

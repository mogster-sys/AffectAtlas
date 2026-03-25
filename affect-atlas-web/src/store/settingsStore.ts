/**
 * Minimal settings store backed by localStorage.
 * Controls how extra emotions are displayed (chips, ring, or off).
 */

export type ExtraDisplayMode = 'chips' | 'ring' | 'off';

export interface SettingsState {
  extraDisplayMode: ExtraDisplayMode;
}

type Listener = (state: SettingsState) => void;

const STORAGE_KEY = 'settings-store';

function loadState(): SettingsState {
  const defaults: SettingsState = { extraDisplayMode: 'chips' };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...defaults, ...parsed };
    }
  } catch {
    // ignore
  }
  return defaults;
}

function saveState(state: SettingsState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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

export const settingsStore = {
  get(): SettingsState {
    return state;
  },

  setExtraDisplayMode(mode: ExtraDisplayMode): void {
    state = { ...state, extraDisplayMode: mode };
    saveState(state);
    notify();
  },

  subscribe(fn: Listener): () => void {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
};

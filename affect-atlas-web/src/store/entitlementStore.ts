/**
 * Entitlement store -- tracks Pro unlock state.
 * Same pub/sub pattern as emotionStore & settingsStore,
 * backed by @capacitor/preferences for durability across reinstalls.
 */

import { Preferences } from '@capacitor/preferences';

/** Flip to false when the validation period ends and the paywall goes live. */
export const VALIDATION_PERIOD_ACTIVE = true;

export interface EntitlementState {
  isProUnlocked: boolean;
}

type Listener = (state: EntitlementState) => void;

const PREF_KEY = 'entitlement_pro_unlocked';

// Synchronous in-memory state (loaded async at init, defaults until then)
let state: EntitlementState = {
  isProUnlocked: VALIDATION_PERIOD_ACTIVE,
};

const listeners = new Set<Listener>();

function notify(): void {
  for (const fn of listeners) {
    fn(state);
  }
}

async function persistState(): Promise<void> {
  try {
    await Preferences.set({
      key: PREF_KEY,
      value: JSON.stringify(state.isProUnlocked),
    });
  } catch {
    // storage unavailable
  }
}

/**
 * Load persisted entitlement. Call once at startup.
 * During validation period, always defaults to unlocked.
 */
export async function loadEntitlement(): Promise<void> {
  if (VALIDATION_PERIOD_ACTIVE) {
    state = { isProUnlocked: true };
    return;
  }
  try {
    const { value } = await Preferences.get({ key: PREF_KEY });
    if (value !== null) {
      state = { isProUnlocked: JSON.parse(value) };
    }
  } catch {
    // ignore
  }
}

export const entitlementStore = {
  get(): EntitlementState {
    return state;
  },

  unlockPro(): void {
    state = { ...state, isProUnlocked: true };
    persistState();
    notify();
  },

  lockPro(): void {
    state = { ...state, isProUnlocked: false };
    persistState();
    notify();
  },

  subscribe(fn: Listener): () => void {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
};

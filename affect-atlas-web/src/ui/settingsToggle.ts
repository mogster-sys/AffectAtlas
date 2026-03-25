/**
 * Gear icon button + popover for switching extra-emotion display mode.
 * Mounts in the header area of the preview screen.
 */

import { settingsStore, type ExtraDisplayMode } from '@/store/settingsStore';
import { el } from '@/utils/dom';

let popoverEl: HTMLElement | null = null;

const MODES: { value: ExtraDisplayMode; label: string }[] = [
  { value: 'chips', label: 'Chips' },
  { value: 'ring', label: 'Ring' },
  { value: 'off', label: 'Off' },
];

function closePopover(): void {
  if (popoverEl) {
    popoverEl.remove();
    popoverEl = null;
  }
}

function openPopover(anchor: HTMLElement): void {
  if (popoverEl) { closePopover(); return; }

  const current = settingsStore.get().extraDisplayMode;

  popoverEl = el('div', { className: 'settings-popover' });

  for (const mode of MODES) {
    const isActive = mode.value === current;
    const option = el('button', {
      className: `settings-option ${isActive ? 'settings-option-active' : ''}`,
    }, mode.label);

    option.addEventListener('click', () => {
      settingsStore.setExtraDisplayMode(mode.value);
      closePopover();
    });

    popoverEl.appendChild(option);
  }

  anchor.parentElement?.appendChild(popoverEl);

  // Close on outside click (next tick to avoid immediate close)
  requestAnimationFrame(() => {
    const handler = (e: MouseEvent) => {
      if (!popoverEl?.contains(e.target as Node) && e.target !== anchor) {
        closePopover();
        document.removeEventListener('click', handler);
      }
    };
    document.addEventListener('click', handler);
  });
}

/**
 * Create the gear button element. Caller adds it to the DOM.
 */
export function createSettingsToggle(): HTMLElement {
  const btn = el('button', { className: 'settings-gear-btn' });
  // SVG gear icon (simple 6-tooth)
  btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>`;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    openPopover(btn);
  });

  return btn;
}

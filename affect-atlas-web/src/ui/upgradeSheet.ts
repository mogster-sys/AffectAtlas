/**
 * Upgrade bottom sheet -- shown when a free user taps Export.
 * Slides up like the export panel. On successful purchase, auto-opens export.
 */

import { el } from '@/utils/dom';
import { purchasePro, getProductInfo } from '@/services/iapService';
import { openExportPanel } from '@/ui/exportPanel';

let sheetEl: HTMLElement | null = null;
let backdropEl: HTMLElement | null = null;

function close(): void {
  if (sheetEl) {
    sheetEl.classList.remove('upgrade-sheet-visible');
    backdropEl?.classList.remove('upgrade-backdrop-visible');
    setTimeout(() => {
      sheetEl?.remove();
      backdropEl?.remove();
      sheetEl = null;
      backdropEl = null;
    }, 300);
  }
}

function buildSheet(priceText: string): HTMLElement {
  const features = [
    'Export to CSS, JSON, Swift, Kotlin, AI, Figma, Tailwind, SCSS, and W3C Tokens',
    'Full M3 color tokens, typography scales, spacing, motion, and depth',
    'One-time purchase -- yours forever',
  ];

  const featureList = el('ul', { className: 'upgrade-features' });
  for (const feat of features) {
    featureList.appendChild(el('li', { className: 'upgrade-feature' }, feat));
  }

  const buyBtn = el(
    'button',
    { className: 'upgrade-buy-btn' },
    `Unlock Exports ${priceText}`,
  );
  buyBtn.addEventListener('click', async () => {
    buyBtn.textContent = 'Processing...';
    buyBtn.setAttribute('disabled', 'true');
    const ok = await purchasePro();
    if (ok) {
      close();
      // Auto-open the export panel after successful purchase
      requestAnimationFrame(() => openExportPanel());
    } else {
      buyBtn.textContent = `Unlock Exports ${priceText}`;
      buyBtn.removeAttribute('disabled');
    }
  });

  const restoreLink = el(
    'button',
    { className: 'upgrade-restore-link' },
    'Already purchased? Restore',
  );
  restoreLink.addEventListener('click', async () => {
    const { restorePurchases } = await import('@/services/iapService');
    restoreLink.textContent = 'Restoring...';
    const ok = await restorePurchases();
    if (ok) {
      close();
      requestAnimationFrame(() => openExportPanel());
    } else {
      restoreLink.textContent = 'Nothing found. Already purchased? Restore';
      setTimeout(() => {
        restoreLink.textContent = 'Already purchased? Restore';
      }, 2500);
    }
  });

  const sheet = el(
    'div',
    { className: 'upgrade-sheet' },
    el('div', { className: 'upgrade-handle' }),
    el('h2', { className: 'upgrade-title' }, 'Unlock Export'),
    el(
      'p',
      { className: 'upgrade-subtitle' },
      'Get all 9 export formats with full design tokens.',
    ),
    featureList,
    buyBtn,
    restoreLink,
  );

  return sheet;
}

export async function openUpgradeSheet(): Promise<void> {
  if (sheetEl) return;

  // Fetch price from the store (falls back to "$8.99" if unavailable)
  const product = await getProductInfo();
  const priceText = product?.priceString ?? '$8.99';

  backdropEl = el('div', { className: 'upgrade-backdrop' });
  backdropEl.addEventListener('click', close);
  document.body.appendChild(backdropEl);

  sheetEl = buildSheet(priceText);
  document.body.appendChild(sheetEl);

  requestAnimationFrame(() => {
    backdropEl?.classList.add('upgrade-backdrop-visible');
    sheetEl?.classList.add('upgrade-sheet-visible');
  });
}

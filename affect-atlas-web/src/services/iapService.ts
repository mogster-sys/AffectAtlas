/**
 * IAP service -- wraps @capgo/native-purchases for Google Play Billing.
 * During validation period, all functions early-return (zero native calls).
 */

import { NativePurchases, PURCHASE_TYPE } from '@capgo/native-purchases';
import type { Product } from '@capgo/native-purchases';
import {
  VALIDATION_PERIOD_ACTIVE,
  entitlementStore,
  loadEntitlement,
} from '../store/entitlementStore';

const PRODUCT_ID = 'affect_atlas_pro_unlock';

/** Cached product info from the store (null until queried). */
let cachedProduct: Product | null = null;

/**
 * Initialize IAP at app startup.
 * Loads persisted entitlement, then reconciles with Play Store.
 * During validation period, only loads entitlement (always unlocked).
 */
export async function initIAP(): Promise<void> {
  await loadEntitlement();

  if (VALIDATION_PERIOD_ACTIVE) return;

  try {
    const { isBillingSupported } = await NativePurchases.isBillingSupported();
    if (!isBillingSupported) return;

    // Check for existing purchases and reconcile
    const { purchases } = await NativePurchases.getPurchases({
      productType: PURCHASE_TYPE.INAPP,
    });

    const owned = purchases.some(
      (t) => t.productIdentifier === PRODUCT_ID && t.purchaseState === '1',
    );

    if (owned && !entitlementStore.get().isProUnlocked) {
      entitlementStore.unlockPro();
    }
  } catch {
    // Billing unavailable or network error -- keep existing entitlement state
  }
}

/**
 * Return cached product info (price string, title).
 * Queries the store on first call.
 */
export async function getProductInfo(): Promise<Product | null> {
  if (cachedProduct) return cachedProduct;

  try {
    const { products } = await NativePurchases.getProducts({
      productIdentifiers: [PRODUCT_ID],
      productType: PURCHASE_TYPE.INAPP,
    });
    cachedProduct = products.find((p) => p.identifier === PRODUCT_ID) ?? null;
    return cachedProduct;
  } catch {
    return null;
  }
}

/**
 * Trigger the purchase flow.
 * Returns true if purchase succeeded, false otherwise.
 */
export async function purchasePro(): Promise<boolean> {
  try {
    const transaction = await NativePurchases.purchaseProduct({
      productIdentifier: PRODUCT_ID,
      productType: PURCHASE_TYPE.INAPP,
    });

    if (transaction.purchaseState === '1') {
      entitlementStore.unlockPro();
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

/**
 * Restore previous purchases.
 * Returns true if Pro was found in purchase history.
 */
export async function restorePurchases(): Promise<boolean> {
  try {
    await NativePurchases.restorePurchases();

    // After restore, re-query to check ownership
    const { purchases } = await NativePurchases.getPurchases({
      productType: PURCHASE_TYPE.INAPP,
    });

    const owned = purchases.some(
      (t) => t.productIdentifier === PRODUCT_ID && t.purchaseState === '1',
    );

    if (owned) {
      entitlementStore.unlockPro();
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

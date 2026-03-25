/**
 * Dynamic Google Font loading.
 * Inter, Plus Jakarta Sans, Space Grotesk are preloaded in index.html.
 * All others are loaded on demand when an emotion using them is selected.
 */

const PRELOADED = new Set(['Inter', 'Plus Jakarta Sans', 'Space Grotesk']);
const loaded = new Set<string>(PRELOADED);
const loading = new Map<string, Promise<void>>();

const FONT_WEIGHTS: Record<string, string> = {
  'Be Vietnam Pro': '300;400;500;600;700',
  'Newsreader': '300;400;500;600;700',
  'Epilogue': '300;400;500;600;700;800',
  'Noto Serif': '300;400;500;600;700',
  'Cormorant Garamond': '300;400;500;600;700',
  'Manrope': '300;400;500;600;700;800',
  'Work Sans': '300;400;500;600;700',
  'Public Sans': '300;400;500;600;700',
};

function buildGoogleFontsUrl(family: string): string {
  const weights = FONT_WEIGHTS[family] || '300;400;500;600;700';
  const encoded = family.replace(/ /g, '+');
  return `https://fonts.googleapis.com/css2?family=${encoded}:wght@${weights}&display=swap`;
}

export async function loadFont(family: string): Promise<void> {
  if (loaded.has(family)) return;

  const existing = loading.get(family);
  if (existing) return existing;

  const promise = new Promise<void>((resolve) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = buildGoogleFontsUrl(family);
    link.onload = () => {
      loaded.add(family);
      loading.delete(family);
      resolve();
    };
    link.onerror = () => {
      loading.delete(family);
      resolve(); // don't block on font failure
    };
    document.head.appendChild(link);
  });

  loading.set(family, promise);
  return promise;
}

export async function ensureFontsLoaded(headline: string, body: string): Promise<void> {
  await Promise.all([loadFont(headline), loadFont(body)]);
}

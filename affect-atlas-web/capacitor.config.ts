import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mogster.affectatlas',
  appName: 'AffectAtlas',
  webDir: 'dist',
  android: {
    backgroundColor: '#0A0A0B',
    webContentsDebuggingEnabled: false,
  },
  server: {
    androidScheme: 'https',
  },
};

export default config;

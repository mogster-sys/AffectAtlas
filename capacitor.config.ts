import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mogstersys.affectatlas',
  appName: 'AffectAtlas',
  webDir: 'web-build',
  server: {
    androidScheme: 'https',
    iosScheme: 'https',
    cleartext: true
  },
  android: {
    backgroundColor: '#0A0A0B',
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true
  },
  ios: {
    backgroundColor: '#0A0A0B',
    contentInset: 'automatic',
    scrollEnabled: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0A0A0B',
      showSpinner: false,
      androidSpinnerStyle: 'small',
      iosSpinnerStyle: 'small',
      spinnerColor: '#3B82F6'
    },
    StatusBar: {
      style: 'Dark',
      backgroundColor: '#0A0A0B'
    }
  }
};

export default config;

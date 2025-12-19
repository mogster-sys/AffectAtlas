# Better Alternative: Native React Native Build (Without Capacitor)

## Why Native React Native is Better

Capacitor creates a **web app in a WebView**, which means:
- ❌ Your React Native components render as HTML/CSS
- ❌ Performance is worse than native
- ❌ Some React Native features won't work
- ❌ You lose the benefits of React Native's native rendering

**Native React Native** means:
- ✅ Components render as actual Android/iOS views
- ✅ Better performance
- ✅ All React Native features work
- ✅ True native app experience

## How to Build Native React Native for Android

### Option 1: Using Expo Development Build (Recommended)

```bash
# Install EAS CLI globally
npm install -g eas-cli

# Login to Expo account
eas login

# Configure your project
eas build:configure

# Create a development build for Android
eas build --profile development --platform android

# This will create an APK you can install on your device
```

### Option 2: Using React Native CLI (Direct Android Build)

1. **Install React Native CLI dependencies**:
```bash
# In WSL2
sudo apt-get update
sudo apt-get install openjdk-17-jdk

# Set JAVA_HOME
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export PATH=$PATH:$JAVA_HOME/bin
```

2. **Install Android SDK** (if not using Android Studio):
```bash
# Download Android command line tools
cd ~
wget https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip
unzip commandlinetools-linux-*.zip
mkdir -p ~/Android/Sdk/cmdline-tools
mv cmdline-tools ~/Android/Sdk/cmdline-tools/latest

# Add to ~/.bashrc
echo 'export ANDROID_HOME=$HOME/Android/Sdk' >> ~/.bashrc
echo 'export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools' >> ~/.bashrc
source ~/.bashrc

# Install required packages
sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0"
```

3. **Generate native Android project**:
```bash
cd /home/mogie/CascadeProjects/emotion-design-system

# Install React Native CLI
npm install -g react-native-cli

# Initialize native Android project
npx react-native eject

# Or use Expo prebuild
npx expo prebuild --platform android
```

4. **Build and run**:
```bash
# Connect device with USB debugging enabled
adb devices

# Run on connected device
npx react-native run-android

# Or build APK
cd android
./gradlew assembleDebug
# APK will be at android/app/build/outputs/apk/debug/app-debug.apk
```

### Option 3: Expo Go App (Quickest for Testing)

For immediate testing without building:

1. **Install Expo Go** on your Android device from Play Store

2. **Start development server**:
```bash
cd /home/mogie/CascadeProjects/emotion-design-system
npm start
```

3. **Connect device**:
   - Make sure device is on same network as WSL2 host
   - Scan QR code with Expo Go app
   - App runs directly on device

## Recommended Approach for Your Situation

Since you're using **Expo with Expo Router**, I recommend:

1. **For Quick Testing**: Use Expo Go app
2. **For Real Device Testing**: Use EAS Development Build
3. **For Production**: Use EAS Build

## Remove Capacitor (If Switching to Native)

If you decide to go native instead of Capacitor:

```bash
# Remove Capacitor packages
npm uninstall @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios
npm uninstall @capacitor/haptics @capacitor/clipboard @capacitor/share @capacitor/filesystem @capacitor/splash-screen @capacitor/status-bar

# Remove Capacitor files
rm -rf android/  # Capacitor's Android folder
rm -rf ios/      # Capacitor's iOS folder
rm capacitor.config.ts
rm -rf web-build/

# Clean up package.json scripts
# Remove the cap:* scripts we added
```

## Comparison

| Feature | Capacitor (Current) | Native React Native | Expo Go |
|---------|-------------------|-------------------|----------|
| Performance | Web-like | Native | Native |
| Setup Complexity | Medium | High | Low |
| Build Time | Fast | Slow | Instant |
| Device Features | Via plugins | Direct access | Limited |
| Hot Reload | Yes | Yes | Yes |
| Production Ready | Yes | Yes | No (dev only) |

## My Recommendation

For **AffectAtlas**, since you're already using Expo:

1. **Use Expo Go** for immediate testing
2. **Use EAS Build** for production builds
3. **Skip Capacitor** - it's adding complexity without benefits for a React Native app

The current Capacitor setup works, but you're not getting the full React Native experience.
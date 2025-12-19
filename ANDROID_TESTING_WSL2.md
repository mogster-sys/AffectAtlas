# Android Testing Guide for WSL2 with Capacitor

## Overview
This guide helps you test AffectAtlas on Android devices from WSL2 using Capacitor.

## Prerequisites

### On Windows Host
1. **Android Studio** installed on Windows (NOT in WSL2)
   - Download: https://developer.android.com/studio
   - Install Android SDK (API 34+ recommended)
   - Install Android SDK Build-Tools
   - Install Android SDK Platform-Tools

2. **Enable Developer Mode** on Android Device
   - Settings → About Phone → Tap "Build Number" 7 times
   - Settings → Developer Options → Enable "USB Debugging"
   - Settings → Developer Options → Enable "Install via USB"

3. **ADB Setup on Windows**
   - Add to Windows PATH: `C:\Users\[YourUser]\AppData\Local\Android\Sdk\platform-tools`
   - Test: Open Windows CMD and run `adb devices`

### WSL2 Configuration

1. **Install Android SDK Tools in WSL2**:
```bash
# Install Java
sudo apt update
sudo apt install openjdk-17-jdk

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

2. **Connect WSL2 ADB to Windows ADB**:
```bash
# In Windows PowerShell (as Administrator)
netsh interface portproxy add v4tov4 listenport=5037 listenaddress=0.0.0.0 connectport=5037 connectaddress=127.0.0.1

# Get Windows host IP
ipconfig
# Look for "Ethernet adapter vEthernet (WSL)" - note the IPv4 address

# In WSL2
export ADB_SERVER_HOST=[Windows_IP_from_above]
echo "export ADB_SERVER_HOST=[Windows_IP_from_above]" >> ~/.bashrc
```

## Building and Testing

### Method 1: Using Android Studio on Windows (Recommended)

1. **Build the project in WSL2**:
```bash
cd /home/mogie/CascadeProjects/emotion-design-system
npm run cap:build
```

2. **Open in Android Studio**:
```bash
# This will open Android Studio on Windows
explorer.exe android
```

3. **In Android Studio**:
   - Wait for Gradle sync to complete
   - Connect your Android device via USB
   - Click "Run" (green play button)
   - Select your device

### Method 2: Command Line Build

1. **Build APK in WSL2**:
```bash
cd /home/mogie/CascadeProjects/emotion-design-system

# Sync Capacitor
npx cap sync android

# Build debug APK
cd android
./gradlew assembleDebug

# The APK will be at:
# android/app/build/outputs/apk/debug/app-debug.apk
```

2. **Install on Device**:
```bash
# From WSL2 (if ADB is connected)
adb install android/app/build/outputs/apk/debug/app-debug.apk

# Or copy to Windows and install
cp android/app/build/outputs/apk/debug/app-debug.apk /mnt/c/Users/[YourUser]/Desktop/
# Then use Windows ADB: adb install app-debug.apk
```

### Method 3: Live Reload Development

1. **Get WSL2 IP address**:
```bash
ip addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}'
# Note this IP
```

2. **Start Metro bundler with host binding**:
```bash
npx cap serve --host 0.0.0.0 --port 8081
```

3. **Update Capacitor config** temporarily:
```javascript
// capacitor.config.ts
server: {
  url: 'http://[WSL2_IP]:8081',
  cleartext: true
}
```

4. **Sync and run**:
```bash
npx cap sync android
npx cap run android
```

## Troubleshooting

### ADB Connection Issues
```bash
# Kill ADB server on Windows first
# In Windows CMD: adb kill-server

# Start fresh
adb start-server
adb devices
```

### Gradle Build Issues
```bash
cd android
./gradlew clean
./gradlew build --refresh-dependencies
```

### Permission Issues
```bash
# Make gradlew executable
chmod +x android/gradlew
```

### Network Issues (Live Reload)
- Ensure Windows Firewall allows port 8081
- Disable Windows Defender firewall temporarily for testing
- Use USB tethering instead of WiFi if issues persist

## Quick Commands Reference

```bash
# Full build and run
npm run cap:run:android

# Just sync changes
npx cap sync android

# Open in Android Studio
npx cap open android

# Build APK only
cd android && ./gradlew assembleDebug

# Install APK
adb install -r android/app/build/outputs/apk/debug/app-debug.apk

# View device logs
adb logcat | grep -i capacitor
```

## VS Code Integration

Install the "Android iOS Emulator" extension for VS Code to manage devices directly from the editor.

## Production Build

For release builds (signed APK):

1. Create keystore:
```bash
cd android/app
keytool -genkey -v -keystore affect-atlas.keystore -alias affect-atlas -keyalg RSA -keysize 2048 -validity 10000
```

2. Configure signing in `android/app/build.gradle`

3. Build release:
```bash
cd android
./gradlew assembleRelease
```

## Tips for WSL2

- Use Windows Terminal for better experience
- Keep Android Studio on Windows, code in WSL2
- Use `explorer.exe .` to open Windows Explorer from WSL2
- Use `code .` to open VS Code from WSL2
- Network drives: Access WSL2 files from Windows at `\\wsl$\Ubuntu\home\...`

## Current Status

✅ Capacitor installed and configured
✅ Android platform added
✅ Web build created and synced
✅ Ready for device testing

## Next Steps

1. Connect Android device with USB debugging
2. Run `npx cap open android` to open in Android Studio
3. Build and deploy to device
4. Test all features, especially:
   - Emotion wheel interaction
   - Color generation
   - Export functionality
   - Native features (haptics, clipboard)
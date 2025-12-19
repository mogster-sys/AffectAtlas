# Quick Testing with Expo Go (5 Minutes)

## Fastest Way to Test on Your Android Device

### Step 1: Install Expo Go
On your Android device, install **Expo Go** from Google Play Store:
https://play.google.com/store/apps/details?id=host.exp.exponent

### Step 2: Get Your WSL2 IP Address
```bash
# In WSL2 terminal
hostname -I | awk '{print $1}'
# Example output: 172.27.224.1
```

### Step 3: Start Expo with Tunnel
```bash
cd /home/mogie/CascadeProjects/emotion-design-system

# Start with tunnel mode (works across networks)
npx expo start --tunnel

# OR if on same WiFi network
npx expo start --lan
```

### Step 4: Connect Your Device

After running the command, you'll see:
```
› Metro waiting on exp://192.168.x.x:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

█████████████████
██ ▄▄▄▄▄ █▀▄█ ▄██
██ █   █ █▄▀█▄▄██
██ █▄▄▄█ █ ▀▄ ▀██
██▄▄▄▄▄▄▄█▄▄█▄▄██
█ ▄▄▄ ▄ ▄▄ ▄▄█ ██
```

**On your Android device:**
1. Open Expo Go app
2. Tap "Scan QR Code"
3. Point camera at the QR code
4. App will load and run!

### Step 5: Live Reload

Any changes you make to the code will automatically reload on your device!

## Troubleshooting

### If QR Code doesn't work:

1. **Make sure devices are on same network** (if using --lan)

2. **Try tunnel mode**:
```bash
npx expo start --tunnel
```

3. **Enter URL manually** in Expo Go:
   - Tap "Enter URL manually"
   - Type: `exp://[WSL2_IP]:8081`

### If you see "Network response timed out":

1. **Check Windows Firewall**:
   - Allow Node.js through firewall
   - Or temporarily disable firewall for testing

2. **Use tunnel mode** (always works):
```bash
npx expo start --tunnel
```

## What You'll See

- ✅ **Native React Native rendering** (not WebView!)
- ✅ **Live reload** as you edit
- ✅ **Native performance**
- ✅ **Proper adaptive theme** (light/dark based on device)
- ✅ **All React Native features working**

## Commands Summary

```bash
# Navigate to project
cd /home/mogie/CascadeProjects/emotion-design-system

# Start Expo (choose one):
npx expo start           # Normal mode
npx expo start --lan     # LAN mode (same network)
npx expo start --tunnel  # Tunnel mode (works anywhere)

# Clear cache if needed
npx expo start -c
```

## Benefits Over Capacitor

With Expo Go you get:
- **Real React Native** - components render as native Android views
- **No build step** - instant testing
- **Hot reload** - see changes immediately
- **Native performance** - no WebView overhead
- **Proper theming** - respects device light/dark mode

This is the proper way to test React Native apps!
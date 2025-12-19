# GitHub Repository Setup Instructions

## Create Repository on GitHub

1. **Go to GitHub** and create a new repository:
   - Visit: https://github.com/new
   - Repository name: `emotion-design-system`
   - Description: "React Native app that generates design systems from emotional inputs using Plutchik's Wheel"
   - Make it **Public**
   - DO NOT initialize with README (we already have one)
   - DO NOT add .gitignore (we have one)
   - License: MIT

2. **After creating the repository**, you'll see quick setup instructions.

## Push Your Local Code

Run these commands in your terminal:

```bash
# Navigate to project directory
cd /home/mogie/CascadeProjects/emotion-design-system

# The code is already committed locally, just push it
git push -u origin main
```

If you get an authentication error, you may need to:

### Option A: Use GitHub Personal Access Token (Recommended)
1. Go to: https://github.com/settings/tokens/new
2. Create a token with `repo` scope
3. Use the token as your password when pushing

### Option B: Use SSH
```bash
# Change remote to SSH
git remote set-url origin git@github.com:mogster-sys/emotion-design-system.git

# Generate SSH key if needed
ssh-keygen -t ed25519 -C "mogie.dick@gmail.com"

# Add key to GitHub: https://github.com/settings/keys
cat ~/.ssh/id_ed25519.pub
```

## After Pushing

1. **Add Topics** to your repo:
   - Go to repo settings
   - Add topics: `react-native`, `expo`, `design-system`, `emotion`, `color-theory`, `plutchik`, `oklch`

2. **Create Releases**:
   ```bash
   git tag -a v1.0.0 -m "Initial release"
   git push origin v1.0.0
   ```

3. **Enable GitHub Pages** (optional, for documentation):
   - Settings → Pages → Source: Deploy from branch
   - Branch: main, Folder: /docs

## Set Up Expo EAS Build

1. **Install EAS CLI**:
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo**:
   ```bash
   eas login
   # Use your Expo account credentials
   ```

3. **Configure the project**:
   ```bash
   eas build:configure
   ```

4. **Update the project ID** in app.json:
   - Replace `YOUR_EAS_PROJECT_ID` with the actual ID from EAS

## Prepare for App Store Submission

### iOS App Store

1. **Apple Developer Account** ($99/year):
   - https://developer.apple.com/programs/

2. **Create App ID**:
   - Sign in to Apple Developer
   - Certificates, IDs & Profiles → Identifiers → +
   - App ID: `com.mogstersys.emotiondesignsystem`

3. **Create App in App Store Connect**:
   - https://appstoreconnect.apple.com/
   - My Apps → + → New App
   - Use the information from APP_STORE_LISTING.md

### Google Play Store

1. **Google Play Developer Account** ($25 one-time):
   - https://play.google.com/console/signup

2. **Create App**:
   - Google Play Console → Create app
   - App name: Emotion Design System
   - Use the information from APP_STORE_LISTING.md

## Building for Stores

### Build for iOS:
```bash
eas build --platform ios --profile production
```

### Build for Android:
```bash
eas build --platform android --profile production
```

### Submit to Stores:
```bash
# iOS
eas submit --platform ios

# Android
eas submit --platform android
```

## Continuous Integration (Optional)

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm test
```

## Repository Structure

Your repository is now set up with:
- ✅ Complete React Native app code
- ✅ Privacy policy
- ✅ App store listing information
- ✅ EAS build configuration
- ✅ Professional README
- ✅ MIT License (add LICENSE file if needed)
- ✅ Security-first architecture (React 18, no RSC)

## Next Steps

1. Push code to GitHub
2. Set up EAS with your Expo account
3. Create developer accounts for app stores
4. Build and test on real devices
5. Submit to stores

Good luck with your app launch! 🚀
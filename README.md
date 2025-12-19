# AffectAtlas

A React Native app that maps emotions to beautiful design systems using Plutchik's Wheel of Emotions. Navigate the landscape of affect to discover the perfect visual language for your project.

## Security Status

✅ **NOT AFFECTED by CVE-2025-55182 / CVE-2025-66478**

This React Native app is purely client-side and does not use React Server Components (RSC) or the affected bundlers. The vulnerability affects server-side React applications only.

## Features

- 🎨 Interactive emotion wheel based on Plutchik's model
- 🌈 OKLCH color space for perceptually uniform gradients
- 💾 Persistent state management with Zustand
- 📱 Native mobile experience with Expo SDK 52
- 🎯 Three intensity levels: Intense, Moderate, Mild
- 📤 Multi-format export (CSS, JSON, Swift, Kotlin)
- ♿ WCAG accessibility compliance checking

## Tech Stack

- **React Native 0.76.x** with New Architecture enabled
- **React 18.3.x** (stable, no RSC)
- **Expo SDK 52** (managed workflow)
- **TypeScript** with strict mode
- **Zustand** for state management
- **culori** for OKLCH color manipulation
- **React Native Reanimated** for smooth animations

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo Go app (for mobile testing)

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start

# Run on iOS (requires macOS)
npm run ios

# Run on Android
npm run android
```

## Project Structure

```
affect-atlas/
├── app/                    # Expo Router screens
│   ├── _layout.tsx         # Root layout
│   ├── index.tsx           # Home/Wheel screen
│   ├── preview.tsx         # Design preview
│   └── export.tsx          # Export options
├── src/
│   ├── components/         # UI components
│   ├── engine/             # Core mapping logic
│   ├── store/              # Zustand stores
│   ├── types/              # TypeScript definitions
│   └── constants/          # Emotion definitions
└── assets/                 # Images and fonts
```

## How It Works

1. **Emotion Selection**: Choose a primary emotion from the wheel
2. **Intensity Control**: Select intensity (intense/moderate/mild)
3. **Design Generation**: The engine maps emotions to:
   - Color palettes (using OKLCH for smooth gradients)
   - Typography properties
   - Shape characteristics
   - Spacing systems
   - Animation parameters
4. **Export**: Generate code in multiple formats

## Color Science

The app uses OKLCH color space for perceptually uniform color manipulation:
- **L**: Lightness (0-1)
- **C**: Chroma (0-0.4)
- **H**: Hue (0-360)

This ensures smooth, natural-looking gradients when blending emotions.

## Contributing

This project prioritizes security and clean architecture. When contributing:
1. Maintain React 18.x (avoid React 19/RSC for now)
2. Keep all processing client-side
3. Follow TypeScript strict mode
4. Test on both iOS and Android

## License

MIT

## Future Enhancements

- [ ] Emotion blending (dyads)
- [ ] Custom emotion definitions
- [ ] AI prompt generation for design tools
- [ ] Figma plugin integration
- [ ] Web companion app (with proper RSC security)
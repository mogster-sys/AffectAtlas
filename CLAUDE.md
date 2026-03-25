# AffectAtlas - Claude Code Project Guide

## What This Is
React Native (Expo SDK 54) app that maps emotions to design systems using
Plutchik's Wheel of Emotions. Users dial in an emotion and the entire screen
transforms to embody that emotion through typography, color, spacing, and motion.

## Tech Stack
- React Native 0.81, React 19, Expo SDK 54, TypeScript (strict)
- Expo Router 6 for navigation
- Zustand 5 + AsyncStorage for state
- culori for OKLCH color science
- React Native Reanimated 4 for animations

## Project Structure
- app/           - Expo Router screens (index, preview, export)
- src/components - UI components (wheel/EmotionWheel.tsx)
- src/engine     - Core logic (color/oklch.ts, mapping/colorMapper.ts)
- src/store      - Zustand store (useEmotionStore.ts)
- src/types      - TypeScript types (emotion.ts, design.ts, export.ts)
- src/constants  - Emotion definitions (emotions.ts)

## Path Aliases
Configured in tsconfig.json and babel.config.js:
- @/* -> src/*
- @components/* -> src/components/*
- @engine/* -> src/engine/*
- @store/* -> src/store/*
- @types/* -> src/types/*
- @constants/* -> src/constants/*

## Commands
- npm start          - Start Expo dev server
- npm run ios        - Run on iOS simulator
- npm run android    - Run on Android emulator
- npx expo-doctor   - Check project health

## Environment
- Runs in WSL2 on Windows
- IDE: Windsurf (VSCode fork) with Monokai theme
- Windsurf has a markdown rendering bug - use .txt for docs, not .md
- Node 22, npm 10

## Key Design Decisions
- OKLCH color space for perceptually uniform palettes
- Plutchik's 8 primary + 8 derived emotions (dyads)
- Three intensity levels: mild, moderate, intense
- Dark UI theme (background: #0A0A0B)
- No server/backend - fully client-side
- No React Server Components

## Current State (as of March 2026)
- MVP works: emotion wheel -> color palette -> export (CSS/JSON/Swift)
- Upgraded from SDK 52 to SDK 54 (React 19, RN 0.81)
- Building Stitch prompts for emotion-driven screen designs
- Next: dynamic theming system, typography/spacing mapping, more export formats

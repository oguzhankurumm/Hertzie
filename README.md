# 🎵 Hertzie - Premium Music Streaming Experience

<div align="center">

**Modern Music Streaming & Audio Enhancement Platform**

[![React Native](https://img.shields.io/badge/React%20Native-0.74.5-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~51.0.39-black.svg)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-~5.3.3-blue.svg)](https://www.typescriptlang.org/)
[![Zustand](https://img.shields.io/badge/Zustand-^4.5.4-orange.svg)](https://github.com/pmndrs/zustand)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[✨ Features](#-features) • [🚀 Installation](#-installation) • [🏗️ Architecture](#️-architecture) • [🚦 Development](#-development)

</div>

---

## 🌟 Project Overview

**Hertzie** is a modern mobile application that provides enhanced audio experience and personalized music streaming. Developed using React Native and Expo, this application runs on both iOS and Android platforms, offering users a professional music experience.

### 🎯 Main Highlights

- 🎚️ **Unique Hertz Enhancement**: Advanced audio experience with sound frequency optimization
- 🎵 **Professional Music Player**: Full-featured music player with shuffle, repeat, and queue management
- 📻 **Live Radio Streaming**: Live radio broadcasting feature
- 🎨 **Dynamic Theming**: Customizable interface with dark/light theme support
- 🌐 **Multi-language Support**: Turkish and English language support
- 📱 **Cross-platform**: iOS and Android support

---

## ✨ Features

### 🎵 Music Streaming
```typescript
// Advanced Audio Features
✅ Professional Track Player Integration
✅ Background Audio Playback
✅ Real-time Progress Control
✅ Queue Management
✅ Shuffle & Repeat Modes
```

### 🎚️ Audio Enhancement
```typescript
// Unique Hertz Processing
✅ Custom Frequency Optimization
✅ Advanced Equalizer Settings
✅ Audio Cache Management
✅ Quality Enhancement
```

### 📱 User Experience
```typescript
// Modern Mobile Experience
✅ Gesture-based Navigation
✅ Bottom Sheet Modals
✅ Smooth Animations
✅ Responsive Design
✅ Dark/Light Theme
```

### 🎼 Playlist Management
```typescript
// Complete Playlist System
✅ Create & Organize Playlists
✅ Add Songs to Collections
✅ Browse Music Library
✅ Search & Filter
```

---

## 🚀 Installation

### Prerequisites
- Node.js 14 or newer
- Yarn package manager
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/hertzie.git

# Navigate to project directory
cd hertzie

# Install dependencies
yarn install

# Start development server
yarn start

# Run on iOS
yarn ios-dev

# Run on Android
yarn android-dev
```

### Environment Setup

```bash
# Set API environment variables
API_ENV=dev  # dev, stg, prod
```

---

## 🏗️ Architecture

### 📁 Project Structure
```
src/
├── 🎨 assets/           # Images, icons, fonts, animations
├── 🧩 components/       # Reusable UI components
│   ├── atoms/          # Basic components (Button, Text, etc.)
│   ├── molecules/      # Component combinations
│   └── organisms/      # Complex components
├── 🪝 hooks/           # Custom React hooks
├── 🌐 locales/         # Internationalization
├── 🎭 modals/          # Modal components
├── 🧭 navigations/     # Navigation configuration
├── 🌐 network/         # API integration
├── 📄 scenes/          # Screen components
├── 🏪 stores/          # Zustand state management
├── 🎨 styles/          # Global styles & theming
└── 🛠️ utils/           # Helper functions
```

### 🛠️ Tech Stack

#### **Frontend Framework**
- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **TypeScript** - Type-safe JavaScript

#### **State Management**
- **Zustand** - Lightweight state management
- **TanStack Query** - Server state management
- **React Hook Form** - Form state management

#### **UI & Styling**
- **NativeWind** - Tailwind CSS for React Native
- **React Theme Provider** - Dynamic theming
- **Atomic Design** - Component architecture

#### **Audio & Media**
- **React Native Track Player** - Professional audio playback
- **Custom Audio Processing** - Hertz enhancement
- **Background Audio** - Continuous playback

#### **Navigation & UX**
- **React Navigation 6** - Navigation system
- **Gorhom Bottom Sheet** - Modern bottom sheets
- **React Native Gesture Handler** - Smooth gestures

---

## 🎨 Design System

### Color Palette
```typescript
// Theme Configuration
const lightTheme = {
  primary: '#6366F1',
  secondary: '#8B5CF6',
  accent: '#06B6D4',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
};
```

### Typography Scale
```typescript
// Responsive Typography
export const TextStyle = {
  heading1: { fontSize: moderateScale(32), fontWeight: 'bold' },
  heading2: { fontSize: moderateScale(24), fontWeight: 'bold' },
  body: { fontSize: moderateScale(16), fontWeight: 'normal' },
  caption: { fontSize: moderateScale(12), fontWeight: 'normal' },
};
```

---

## 🚦 Development

### Available Scripts

```bash
# Development
yarn start                 # Start Expo development server
yarn android-dev          # Run on Android (dev environment)
yarn ios-dev             # Run on iOS (dev environment)

# Testing & Quality
yarn test                 # Run unit tests
yarn lint                # Fix linting issues
yarn type:check          # TypeScript type checking

# Production
yarn android-prod        # Build for Android production
yarn ios-prod           # Build for iOS production
```

### Environment Variables

```bash
# API Configuration
API_ENV=dev              # dev, stg, prod

# Expo Configuration
EXPO_PROJECT_ID=your-project-id
```

---

## 🤝 Contributing

While this project was created for portfolio purposes, contributions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- ✅ Use TypeScript
- ✅ Follow ESLint rules
- ✅ Follow Atomic Design principles
- ✅ Write tests
- ✅ Use meaningful commit messages

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**Oğuzhan Kurum**
- 🌐 Portfolio: [oguzhankurum.com](https://oguzhankurum.com)
- 💼 LinkedIn: [linkedin.com/in/oguzhankurum](https://linkedin.com/in/oguzhankurum)
- 📧 Email: hello@oguzhankurum.com

---

<div align="center">

**⭐ If you like this project, don't forget to give it a star!**

Made with ❤️ in Türkiye

</div>

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

**Hertzie**, geliştirilmiş ses deneyimi ve kişiselleştirilmiş müzik akışı sunan modern bir mobil uygulamadır. React Native ve Expo kullanılarak geliştirilen bu uygulama, iOS ve Android platformlarında çalışarak kullanıcılara profesyonel müzik deneyimi sunmaktadır.

### 🎯 Main Highlights

- 🎚️ **Unique Hertz Enhancement**: Ses frekansı optimizasyonu ile gelişmiş audio deneyimi
- 🎵 **Professional Music Player**: Tam özellikli müzik çalar (shuffle, repeat, queue management)
- 📻 **Live Radio Streaming**: Canlı radyo yayını özelliği
- 🎨 **Dynamic Theming**: Koyu/açık tema desteği ile kişiselleştirilebilir arayüz
- 🌐 **Multi-language Support**: Türkçe ve İngilizce dil desteği
- 📱 **Cross-platform**: iOS ve Android desteği

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
- Node.js 14 veya üzeri
- Yarn package manager
- Expo CLI
- iOS Simulator (Mac) veya Android Emulator

### Quick Start

```bash
# Repository'yi klonlayın
git clone https://github.com/yourusername/hertzie.git

# Proje dizinine gidin
cd hertzie

# Bağımlılıkları yükleyin
yarn install

# Development server'ı başlatın
yarn start

# iOS'ta çalıştırın
yarn ios-dev

# Android'de çalıştırın
yarn android-dev
```

### Environment Setup

```bash
# API ortam değişkenlerini ayarlayın
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

Bu proje portfolyo amacıyla oluşturulmuş olsa da, katkılarınızı memnuniyetle karşılıyorum!

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

### Development Guidelines

- ✅ TypeScript kullanın
- ✅ ESLint kurallarına uyun
- ✅ Atomic Design prensiplerini takip edin
- ✅ Test yazın
- ✅ Meaningful commit mesajları

---

## 📄 License

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakınız.

---

## 👨‍💻 Developer

**Oğuzhan Kurum**
- 🌐 Portfolio: [your-portfolio.com](https://your-portfolio.com)
- 💼 LinkedIn: [linkedin.com/in/oguzhankurum](https://linkedin.com/in/oguzhankurum)
- 📧 Email: oguzhan@example.com
- 🐦 Twitter: [@oguzhankurum](https://twitter.com/oguzhankurum)

---

## 🙏 Acknowledgments

- **React Native Community** - Harika framework için
- **Expo Team** - Geliştirme araçları için
- **Open Source Contributors** - Kullanılan kütüphaneler için

---

<div align="center">

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

Made with ❤️ in Türkiye

</div>

# Hertzie Mobile App

This is a React Native Hertzie Mobile App.

- **Zustand Global State Management**
  - [zustand](https://github.com/pmndrs/zustand)
- **Navigation**
  - [React Navigation](https://reactnavigation.org/docs/getting-started)
- **Localization**
  - [Expo Localization](https://docs.expo.dev/versions/latest/sdk/localization/)
- **Multi Language Support**
  - [i18next](https://github.com/i18next/i18next)
  - [react-i18next](https://github.com/i18next/react-i18next)
- **Multi Theme Support**
  - [React Theme Provider](https://github.com/callstack/react-theme-provider#readme)
- **Local Storage**
  - [Async Storage](@react-native-async-storage/async-storage)
- **Data fetching, caching, synchronising, and updating the server state**
  - [TanStack Query](https://tanstack.com/query/latest/docs/react/overview)
- **Encrypt and securely store key–value pairs locally on the device**
  - [expo-unlimited-secure-store](https://github.com/dannyklaassen/expo-unlimited-secure-store)
- **Unit Testing**
  - [jest](https://github.com/jestjs/jest)
  - [react-test-renderer](https://legacy.reactjs.org/docs/test-renderer.html)
  - [@testing-library/react-native](https://github.com/callstack/react-native-testing-library)
- **Logger Tool**
  - [react-native-logs](https://github.com/onubo/react-native-logs)

## Components Directory

This directory holds a reference to all the re-usable components and their type (Atom, Molecule & Organism)

### Hooks

This directory holds a reference to all the re-usable hooks

- [useAssets](./__docs__/hooks/useAssets.md)
- [useTranslate](./__docs__/hooks/useTranslate.md)
- [useExpoNotification](./__docs__/hooks/useExpoNotification.md)
- [useExpoNotificationPermissions](./__docs__/hooks/useExpoNotificationPermissions.md)
- [useNetworkInfo](./__docs__/hooks/useNetworkInfo.md)
- [usePreviousState](./__docs__/hooks/usePreviousState.md)

### Utils

This directory holds a reference to all the re-usable utils, helpers & constants

- helpers
- [secureStorageHandler](./__docs__/utils/secureStorageHandler.md)
- [storageHandler](./__docs__/utils/storageHandler.md)

## Requirements

Node 14 or newer is required. Development for iOS requires a Mac and Xcode, and will target iOS 12.4 and up.

You also need to install the dependencies required by React Native.  
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `Expo Go Quickstart` tab.  
Follow the instructions.

## Quick start

To create a new project using the seed simply the following steps:

- Clone the project

```
git clone https://github.com/oguzhankurumm/hertzie.git
```

- Enter the project folder

```
cd Hertzie
```

- Install the dependencies

```
yarn install
```

- Run app

```
yarn run start
```

- Update remote git repository

```
rm -rf .git
git init
git add --all
git commit -m "Initial Commit"
git remote add origin <new repo>
git push -u origin HEAD:main
```

## Debugging

In order to check the logs and inspect the app, download one of the below tools:

- [Reactotron](https://github.com/infinitered/reactotron)

## Useful commands

- Run android in dev env
  ```
  yarn run android-dev
  ```
- Run android in staging env
  ```
  yarn run android-stg
  ```
- Run android in production env
  ```
  yarn run android-prod
  ```
- Run iOS in dev env
  ```
  yarn run ios-dev
  ```
- Run iOS in staging env
  ```
  yarn run ios-stg
  ```
- Run iOS in production env
  ```
  yarn run ios-prod
  ```
- Start Unit Testing
  ```
  yarn run test
  ```
- Fix Lint Errors only
  ```
  yarn run lint-errors
  ```
- Fix Lint Errors & Warnings
  ```
  yarn run lint
  ```

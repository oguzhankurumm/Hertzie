# useAssets

### Description:

A reusable hook that handles our assets that should be loaded when launching the app.

</br>

### Hooks:

| Name      | Description                                       | Props with Types | Returned Value |
| --------- | ------------------------------------------------- | ---------------- | -------------- |
| useAssets | used to load & cache fonts or/and other resources | None             | boolean        |

</br>

### Dependencies:

| Component / Library            | Source                                                                         |
| ------------------------------ | ------------------------------------------------------------------------------ |
| Font                           | [expo-font](https://docs.expo.dev/versions/latest/sdk/font/)                   |
| SplashScreen                   | [expo-splash-screen](https://docs.expo.dev/versions/latest/sdk/splash-screen/) |

</br>

### Basic Usage

```jsx
const isAssetsLoaded = useAssets();
```

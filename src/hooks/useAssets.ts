import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import * as Font from 'expo-font';

import fontsObject from '_assets/fonts/fontsObject';

import { useTranslate } from './useTranslate';

const Poppins = fontsObject?.Poppins;
const PoppinsMedium = fontsObject?.PoppinsMedium;
const PoppinsSemibold = fontsObject?.PoppinsSemibold;
const PoppinsBold = fontsObject?.PoppinsBold;
const PoppinsExtraBold = fontsObject?.PoppinsExtraBold;
const PoppinsBlack = fontsObject?.PoppinsBlack;

export default function useAssets() {
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);
  const { translate } = useTranslate();

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          'Poppins-Regular': Poppins,
          'Poppins-Medium': PoppinsMedium,
          'Poppins-Semibold': PoppinsSemibold,
          'Poppins-Bold': PoppinsBold,
          'Poppins-ExtraBold': PoppinsExtraBold,
          'Poppins-Black': PoppinsBlack,
        });
      } catch (error) {
        Alert.alert('Failed to load assets', (error as Error).message);
      } finally {
        setIsAssetsLoaded(true);
      }
    }

    loadResourcesAndDataAsync();
  }, [translate]);

  return isAssetsLoaded;
}

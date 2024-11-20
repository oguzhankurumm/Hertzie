import AsyncStorage from '@react-native-async-storage/async-storage';

const getStorageItem = async (key: StorageKeys) => {
  return (await AsyncStorage?.getItem(key)) ?? '';
};
const setStorageItem = async (key: StorageKeys, value: string = '') => {
  return AsyncStorage?.setItem(key, value);
};
const removeStorageItem = async (key: StorageKeys) => {
  return AsyncStorage?.removeItem(key);
};

const clearStorage = async () => {
  await AsyncStorage?.clear();
};

enum StorageKeys {
  Language = 'Language',
  DeviceId = 'DeviceId',
  Theme = 'Theme',
}

const storageServices = {
  setDeviceId: async (deviceId: string) => {
    try {
      await AsyncStorage.setItem(StorageKeys.DeviceId, deviceId);
    } catch (error: any) {
      if (error instanceof Error) console.log('Set Device Id Error: ', error.message);

      throw new Error(error);
    }
  },
  getDeviceId: async () => {
    try {
      const deviceId = await AsyncStorage.getItem(StorageKeys.DeviceId);
      return deviceId;
    } catch (error) {
      if (error instanceof Error) console.log('Get Device Id Error: ', error.message);

      return null;
    }
  },
  getThemeName: async () => {
    try {
      const themeName = await AsyncStorage.getItem(StorageKeys.Theme);
      return themeName;
    } catch (error) {
      if (error instanceof Error) console.log('Get Theme Name Error: ', error.message);
      return null;
    }
  },
  setThemeName: async (themeName: string) => {
    try {
      await AsyncStorage.setItem(StorageKeys.Theme, themeName);
    } catch (error: any) {
      if (error instanceof Error) console.log('Set Theme Name Error: ', error.message);

      throw new Error(error);
    }
  },
};

export {
  StorageKeys,
  clearStorage,
  getStorageItem,
  removeStorageItem,
  setStorageItem,
  storageServices,
};

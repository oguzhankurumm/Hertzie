import { getLocales } from 'expo-localization';
import * as Updates from 'expo-updates';
import i18next, { LanguageDetectorAsyncModule, TOptions } from 'i18next';

import { StorageKeys, getStorageItem, setStorageItem } from '_utils/storageHandler';

import { SupportedLanguagesType } from './localesTypes';

const changeAppLanguage = async (language: SupportedLanguagesType) => {
  await i18next.changeLanguage(language);
  setStorageItem(StorageKeys.Language, language);

  if (!__DEV__) {
    await Updates.reloadAsync();
  }
};

const DEFAULT_LANGUAGE = 'tr';
const deviceLanguage = getLocales()[0]?.languageCode;

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: async (callback: (lang: string) => undefined) => {
    const preferedLanguage = (await getStorageItem(StorageKeys.Language)) ?? deviceLanguage;
    return callback(preferedLanguage ?? DEFAULT_LANGUAGE);
  },
  init: () => {},
  cacheUserLanguage: (language: SupportedLanguagesType) =>
    setStorageItem(StorageKeys.Language, language),
};

const translateFunc = (key: string, options?: TOptions | string) => {
  try {
    if (typeof options === 'string') {
      return i18next.t(key, { defaultValue: options });
    }
    return i18next.t(key, options || { defaultValue: '' });
  } catch {
    return '';
  }
};

export { DEFAULT_LANGUAGE, changeAppLanguage, languageDetector, translateFunc };

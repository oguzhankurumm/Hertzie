import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';

import englishTranslation from './en.json';
import { DEFAULT_LANGUAGE, languageDetector } from './localesHelpers';

if (!i18next.isInitialized) {
  i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      interpolation: {
        escapeValue: false,
      },
      compatibilityJSON: 'v3',
      nonExplicitSupportedLngs: true,
      fallbackLng: DEFAULT_LANGUAGE,
      // debug: process.env.NODE_ENV === 'development',
      debug: false,
      react: {
        useSuspense: false,
      },
      resources: {
        en: {
          translation: englishTranslation,
        },
      },
    });
}

export default i18next;

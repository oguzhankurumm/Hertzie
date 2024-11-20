import { useTranslation } from 'react-i18next';

import { TOptions } from 'i18next';

export type TLanguages = 'en' | 'tr';

export const useTranslate = () => {
  const { t, i18n } = useTranslation();

  const getLanguage = () => {
    return i18n.language as 'en' | 'tr';
  };

  const changeLanguage = (language: 'en' | 'tr') => {
    i18n.changeLanguage(language);
  };

  const translate = (key: string, options?: TOptions | string) => {
    try {
      if (typeof options === 'string') {
        return t(key, { defaultValue: options });
      }
      return t(key, options || { defaultValue: '' });
    } catch (error) {
      console.log('use translate error', error);
      return '';
    }
  };

  return { translate, changeLanguage, getLanguage };
};

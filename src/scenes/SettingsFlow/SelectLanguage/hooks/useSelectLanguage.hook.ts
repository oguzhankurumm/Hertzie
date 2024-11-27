import { useCallback, useState } from 'react';

const useSelectLanguage = () => {
  const [languageItems, setLanguageItems] = useState([
    { id: 'system', title: 'System', active: false, iconName: 'earth' },
    { id: 'en', title: 'English', active: true, iconName: 'enFlag' },
    { id: 'tr', title: 'Turkish', active: false, iconName: 'enFlag' },
  ]);

  const onLanguageChange = useCallback((id: string) => {
    // only 1 item can be active
    setLanguageItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          return { ...item, active: true };
        }
        return { ...item, active: false };
      })
    );
  }, []);

  return {
    languageItems,
    onLanguageChange,
  };
};

export { useSelectLanguage };

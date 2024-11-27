import { useMemo } from 'react';

import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';

const useSettings = () => {
  interface SettingItemType {
    title: string;
    onPress: () => void;
    disabled: boolean;
  }

  const settingsItems = useMemo<SettingItemType[]>(
    () => [
      {
        title: 'Account and Subscription',
        onPress: () => {
          NavigationServices.navigate(Scenes.account);
        },
        disabled: false,
      },
      {
        title: 'Try premium for free',
        onPress: () => {},
        disabled: true,
      },
      {
        title: 'Playback and Hertz',
        onPress: () => {
          NavigationServices.navigate(Scenes.playbackAndHertz);
        },
        disabled: false,
      },
      {
        title: 'Display and Themes',
        onPress: () => {},
        disabled: false,
      },
      {
        title: 'Permissions',
        onPress: () => {},
        disabled: false,
      },
      {
        title: 'Notifications',
        onPress: () => {},
        disabled: false,
      },
      {
        title: 'Scan Media',
        onPress: () => {
          NavigationServices.navigate(Scenes.scanMusic);
        },
        disabled: false,
      },
      {
        title: 'Widget',
        onPress: () => {},
        disabled: false,
      },
      {
        title: 'Equalizer',
        onPress: () => {
          NavigationServices.navigate(Scenes.equalizer);
        },
        disabled: false,
      },
      {
        title: 'Sleep Timer',
        onPress: () => {},
        disabled: false,
      },
      {
        title: 'Language',
        onPress: () => {
          NavigationServices.navigate(Scenes.selectLanguage);
        },
        disabled: false,
      },
      {
        title: 'Clear Cache',
        onPress: () => {},
        disabled: false,
      },
      {
        title: 'FAQ',
        onPress: () => {},
        disabled: false,
      },
      {
        title: 'Feedback',
        onPress: () => {
          NavigationServices.navigate(Scenes.feedback);
        },
        disabled: false,
      },
      {
        title: 'Rate Us',
        onPress: () => {},
        disabled: false,
      },
      {
        title: 'Share',
        onPress: () => {},
        disabled: false,
      },
      {
        title: 'About',
        onPress: () => {},
        disabled: false,
      },
    ],
    []
  );

  return {
    settingsItems,
  };
};

export { useSettings };

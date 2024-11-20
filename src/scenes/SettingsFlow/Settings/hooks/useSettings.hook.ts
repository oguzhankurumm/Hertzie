import { useMemo } from 'react';

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
        onPress: () => {},
        disabled: true,
      },
      {
        title: 'Try premium for free',
        onPress: () => {},
        disabled: true,
      },
      {
        title: 'Playback and Hertz',
        onPress: () => {},
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
        onPress: () => {},
        disabled: false,
      },
      {
        title: 'Widget',
        onPress: () => {},
        disabled: false,
      },
      {
        title: 'Equalizer',
        onPress: () => {},
        disabled: false,
      },
      {
        title: 'Sleep Timer',
        onPress: () => {},
        disabled: false,
      },
      {
        title: 'Language',
        onPress: () => {},
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
        onPress: () => {},
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

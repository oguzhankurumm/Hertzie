import { Alert, Linking } from 'react-native';

import * as ExpoNotifications from 'expo-notifications';

import { showToast } from '_utils/helpers';

import { useTranslate } from './useTranslate';

const useExpoNotificationPermissions = () => {
  const { translate } = useTranslate();
  const requestNotificationPermission = async () => {
    try {
      const { status } = await ExpoNotifications.requestPermissionsAsync();
      if (status !== 'granted') {
        const actions = [
          {
            text: translate('common.openSettings'),
            onPress: () => {
              Linking.openSettings();
            },
          },
          {
            text: translate('common.ok'),
            onPress: () => {},
          },
        ];
        Alert.alert(
          translate('common.error'),
          translate('notifications.enablePushNotifications'),
          actions
        );

        return false;
      }
      return true;
    } catch (_error: any) {
      showToast({
        title: translate('notifications.allowNotifications'),
        type: 'error',
      });
      return false;
    }
  };

  return { requestNotificationPermission };
};

export { useExpoNotificationPermissions };

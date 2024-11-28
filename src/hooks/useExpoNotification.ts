import { useCallback, useEffect, useRef } from 'react';
import { Platform } from 'react-native';

import Constants from 'expo-constants';
import * as ExpoNotifications from 'expo-notifications';

import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
// import { NotificationServices } from '_services/notificationServices/notification.services';
import { useTheme } from '_styles/theming';
import { convertMinsToMilliSeconds } from '_utils/helpers';

import { useNetworkInfo } from './useNetworkInfo';

const useExpoNotification = () => {
  const theme = useTheme();
  const isOnline = useNetworkInfo();
  // const { translate } = useTranslate();
  const isOnlineRef = useRef(isOnline);
  const retryGetPushToken = useRef<any>(null);

  isOnlineRef.current = isOnline;
  let retryCount = 0;
  // the maximum number of retries and the delay in milliseconds between each retry (15 minutes).
  const maxRetries = 4;
  const retryDelay = convertMinsToMilliSeconds(15); // 15 minutes in milliseconds

  const updateExpoPushNotificationToken = useCallback(async (_token: string) => {
    try {
      // TODO: fix here
      // const deviceId = await storageServices.getDeviceId();
      // await NotificationServices.updateExpoPushNotificationToken(token, deviceId);
    } catch (error) {
      console.log('updateExpoPushNotificationToken error', error);
    }
  }, []);

  const fetchToken = useCallback(async () => {
    let token: string | null = null;
    try {
      token = (
        await ExpoNotifications.getExpoPushTokenAsync({
          projectId: Constants.expoConfig?.extra?.eas.projectId,
        })
      ).data;
      if (token) {
        await updateExpoPushNotificationToken(token);
      } else if (isOnlineRef.current && retryCount < maxRetries - 1) {
        retryCount++;
        retryGetPushToken.current = setTimeout(fetchToken, retryDelay);
      } else if (!isOnlineRef.current) {
        retryGetPushToken.current = setTimeout(fetchToken, retryDelay);
      }
    } catch (error) {
      console.log('fetchToken error', error);

      // Alert.alert(translate('common.error'), error.message ?? error, [
      //   { text: translate('common.ok') },
      // ]);
    }
  }, [retryCount, retryDelay, updateExpoPushNotificationToken]);

  const registerForPushNotificationsAsync = useCallback(async () => {
    try {
      if (Platform.OS === 'android') {
        ExpoNotifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: ExpoNotifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: theme?.gray[500],
        });
      }
      // if (user) {
      //   if (Device.isDevice) {
      //     await requestNotificationPermission();

      //     let deviceId = await storageServices.getDeviceId();
      //     if (!deviceId || deviceId.split(user.uuid).length !== 2) {
      //       deviceId = `${user.uuid}${uuidv4()}`;
      //       await storageServices.setDeviceId(deviceId);
      //     }
      //     await fetchToken();
      //   }
      // }
    } catch (error) {
      console.log('registerForPushNotificationsAsync error', error);
    }
  }, [theme?.gray]);

  const navigateToScreen = useCallback(async (screenName: string) => {
    try {
      switch (screenName) {
        default:
          NavigationServices.navigate(Scenes.home);
          break;
      }
      return true;
    } catch (error) {
      return error;
    }
  }, []);

  const handleNotificationReceived = useCallback(() => {
    // TODO: fix here
    // NotificationServices.fetchNotifications(calcPagination(1, 1))
    //   .then((data: any) => {
    //     dispatch(fillNotifications(data?.unreadCount));
    //   })
    //   .catch(error => {
    //  showToast({
    //    title: error.message,
    //    type: 'error',
    //  });
    //     throw error;
    //   });
  }, []);

  const handleNotificationResponse = useCallback(
    async (response: ExpoNotifications.NotificationResponse) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { screenName, _id } = response.notification.request.content.data;

      if (screenName) {
        if (_id) {
          try {
            // TODO: fix here
            // await NotificationServices.updateNotificationAction(_id, NotificationStatuses.Read);
          } catch (error) {
            console.log('updateNotificationAction error', error);
          }
        }
        handleNotificationReceived();
        navigateToScreen(screenName);
      }
    },
    [handleNotificationReceived, navigateToScreen]
  );

  useEffect(() => {
    /*
    / isPermissionChecked added here to avoid request a notification permission 
    / on each time we update the redux state
    */
    // if (user && !isPermissionChecked) {
    //   isPermissionChecked = true;
    //   registerForPushNotificationsAsync();

    //   ExpoNotifications.setNotificationHandler({
    //     handleNotification: async () => ({
    //       shouldShowAlert: true,
    //       shouldPlaySound: true,
    //       shouldSetBadge: true,
    //     }),
    //   });

    //   const responseListener = ExpoNotifications.addNotificationResponseReceivedListener(
    //     handleNotificationResponse
    //   );

    //   const responseReceivedListener = ExpoNotifications.addNotificationReceivedListener(
    //     handleNotificationReceived
    //   );

    //   return () => {
    //     if (responseListener) ExpoNotifications.removeNotificationSubscription(responseListener);
    //     if (responseReceivedListener)
    //       ExpoNotifications.removeNotificationSubscription(responseReceivedListener);
    //   };
    // }
    return () => {};
  }, [handleNotificationResponse, registerForPushNotificationsAsync, handleNotificationReceived]);
};

export { useExpoNotification };

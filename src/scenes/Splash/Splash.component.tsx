import { useCallback, useMemo } from 'react';
import { Image } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';

import imagesObject from '_assets/images/imagesObject';
import { AppWrapper } from '_organisms';
import { useAuthStore } from '_stores/authStore';
import { useDeviceInfoStore } from '_stores/deviceStore';
import { scale, width } from '_styles/scaling';
import { useTheme } from '_styles/theming';
// import { AppThemes } from '_types/index';
import { getActualImageSize, sleep } from '_utils/helpers';

import styles from './Splash.style';

const logoImage = imagesObject?.fullLogo;
const logoHorizontalPadding = scale(175);
const logoWidth = width - logoHorizontalPadding;
const logoHeight = logoWidth / getActualImageSize(logoImage).aspectRatio;

const Splash = () => {
  const theme = useTheme();
  const queryClient = useQueryClient();
  const { initSessionFromStorageBefore, initSessionFromStorageAfter, session, clearSession } =
    useAuthStore();
  // const isDarkMode = useMemo(() => theme?.title === AppThemes.Dark, [theme?.title]);
  const { initDeviceInfo } = useDeviceInfoStore();

  const { container } = useMemo(() => styles(theme), [theme]);

  useFocusEffect(
    useCallback(() => {
      const launchApp = async () => {
        initDeviceInfo();
        await initSessionFromStorageBefore();
        const now = Math.trunc(Date.now() / 1000);

        if (session?.tokenExpires && now > session.tokenExpires) {
          // Session expired, clear session and cache
          // TODO: refresh token

          await clearSession();
          queryClient.clear();
        }

        await sleep(500);

        await initSessionFromStorageAfter();
      };

      launchApp();
    }, [
      initDeviceInfo,
      initSessionFromStorageBefore,
      session?.tokenExpires,
      initSessionFromStorageAfter,
      clearSession,
      queryClient,
    ])
  );

  return (
    <AppWrapper testId='splash.view' overrideStyle={container} removeSafeAreaView>
      <Image
        source={logoImage}
        style={{
          width: logoWidth,
          height: logoHeight,
          // ...(isDarkMode && { tintColor: 'white' }),
        }}
      />
    </AppWrapper>
  );
};

export default Splash;

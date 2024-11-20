import { useEffect, useState } from 'react';

import NetInfo from '@react-native-community/netinfo';
import { debounce } from 'lodash';

import { showToast } from '_utils/helpers';

import usePreviousState from './usePreviousState';
import { useTranslate } from './useTranslate';

const useNetworkInfo = () => {
  const { translate } = useTranslate();
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const debouncedSetIsOnline = debounce(setIsOnline, 2000);
  const prevUpdatedState = usePreviousState({
    isOffline: !isOnline,
  });

  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      debouncedSetIsOnline(!!state.isConnected);
    });
    if (!isOnline) {
      showToast({
        title: translate('common.noInternetConnection'),
        type: 'error',
      });
    }
    if (prevUpdatedState?.isOffline === true && isOnline) {
      showToast({
        title: translate('common.restoredInternetConnection'),
        type: 'success',
      });
    }

    // Remove Listener
    return unsubscribe;
  }, [debouncedSetIsOnline, isOnline, prevUpdatedState?.isOffline, translate]);

  return isOnline;
};

export { useNetworkInfo };

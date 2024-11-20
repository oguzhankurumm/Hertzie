import Constants from 'expo-constants';

const CUSTOM_APP_CONFIG_DATA = {
  APP_STATUS: Constants.expoConfig?.extra?.customConfig?.appStatus,
};
const DEEPLINKING_BASE_URL = 'hertzie://com.hertzie.app';

const NETWORK_ERROR_CODE = 'NetworkError';

const DYNAMIC_SUBFIELD_SEPERATOR = '___';

export {
  CUSTOM_APP_CONFIG_DATA,
  DEEPLINKING_BASE_URL,
  DYNAMIC_SUBFIELD_SEPERATOR,
  NETWORK_ERROR_CODE,
};

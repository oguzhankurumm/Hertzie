import { Image, ImageSourcePropType, Platform } from 'react-native';
import { CountryCode } from 'react-native-country-picker-modal';
import { logger } from 'react-native-logs';
import Toast from 'react-native-toast-message';

import moment from 'moment';

import loggerConfig from '_utils/logger.config';

const PNF = require('google-libphonenumber').PhoneNumberFormat;

const phoneUtil = require('google-libphonenumber')?.PhoneNumberUtil?.getInstance();

const isNullOrEmpty = (text: any) => {
  if (text === null || text === undefined) {
    return true;
  }
  const textString = text?.toString();
  return !textString || textString?.toString()?.replace(/\s/g, '')?.length === 0;
};

const getAutomationTestingProp = (id?: string) => {
  if (id) {
    if (Platform.OS === 'ios') {
      return { testID: id };
    }
    return { accessibilityLabel: id };
  }
  return null;
};

const parsePhoneNumber = (number: string | number, iso2: CountryCode) => {
  try {
    return phoneUtil.parse(number, iso2);
  } catch (_error) {
    return null;
  }
};

const splitCallingCodeFromPhoneNumber = (phoneNumber: string | undefined) => {
  try {
    // Parse the phone number
    const parsedNumber = phoneUtil.parse(`+${phoneNumber}`);

    // Get the country code (calling code)
    const callingCode = parsedNumber.getCountryCode();

    // Get the national significant number (phone number without the calling code)
    const nationalNumber = parsedNumber.getNationalNumber();

    // Return the calling code and the national number
    return {
      callingCode,
      nationalNumber: nationalNumber.toString(),
    };
  } catch (_error) {
    return null;
  }
};

const isValidPhoneNumber = (number: string | number, iso2: CountryCode) => {
  const phoneInfo = parsePhoneNumber(number, iso2);
  if (phoneInfo) {
    return phoneUtil.isValidNumber(phoneInfo);
  }
  return false;
};

const formatPhoneNumber = (phone: string, iso2: CountryCode) => {
  try {
    const number = parsePhoneNumber(phone, iso2);
    return phoneUtil.format(number, PNF.INTERNATIONAL);
  } catch (_error) {
    return `+${phone}`;
  }
};

const formatIbanNumber = (ibanNumber: string) => {
  return ibanNumber
    .replace(/\s/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();
};

const getActualImageSize = (source: ImageSourcePropType) => {
  const { width } = Image.resolveAssetSource(source) || {};
  const { height } = Image.resolveAssetSource(source) || {};
  const aspectRatio = width / height;
  return {
    width,
    height,
    aspectRatio,
  };
};

const convertDateToDiff = (date: Date) => {
  return moment(date).fromNow().toString();
};

const convertMinsToSeconds = (value: number) => {
  const hours = Math.floor(value / 60);
  const seconds = (value % 60 ? value % 60 : '00') as any;
  return `${hours}:${seconds < 10 && seconds > 0 ? `0${seconds}` : seconds}`;
};

const convertMinsToMilliSeconds = (value: number) => {
  return value * 60 * 1000;
};

const showToast = async ({
  title,
  description,
  type,
}: {
  title: string;
  description?: string;
  type: 'error' | 'success' | 'info';
}) => {
  Toast.show({
    text1: title,
    text2: description,
    visibilityTime: 3000,
    type,
  });
};

const calcPagination = (page = 1, per_page = 10) => {
  return {
    skip: (page - 1) * per_page,
    limit: per_page,
  };
};

const sleep = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

const log = logger.createLogger(loggerConfig);

export {
  calcPagination,
  convertDateToDiff,
  convertMinsToMilliSeconds,
  convertMinsToSeconds,
  formatIbanNumber,
  formatPhoneNumber,
  getActualImageSize,
  getAutomationTestingProp,
  isNullOrEmpty,
  isValidPhoneNumber,
  log,
  showToast,
  sleep,
  splitCallingCodeFromPhoneNumber,
};

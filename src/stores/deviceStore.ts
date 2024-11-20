import * as Device from 'expo-device';

import { createMobileStoreWithMiddlewares } from './createMobileStoreWithMiddlewares';

type DeviceType = 'UNKNOWN' | 'PHONE' | 'TABLET' | 'DESKTOP' | 'TV';

export type TDeviceInfo = {
  brand: string | null;
  designName: string | null;
  deviceName: string | null;
  deviceType: DeviceType | null;
  deviceYearClass: number | null;
  isDevice: boolean;
  manufacturer: string | null;
  modelId: any;
  modelName: string | null;
  osBuildFingerprint: string | null;
  osBuildId: string | null;
  osInternalBuildId: string | null;
  osName: string | null;
  osVersion: string | null;
  platformApiLevel: number | null;
  productName: string | null;
  totalMemory: number | null;
};

interface DeviceInfoState {
  isHydrated: boolean;
  initilaized: boolean;

  deviceInfo: TDeviceInfo;
  deviceInfoString: string | null;
  initDeviceInfo: () => void;
}

export const useDeviceInfoStore = createMobileStoreWithMiddlewares<DeviceInfoState>(set => ({
  isHydrated: false,
  initilaized: false,

  deviceInfo: {
    brand: null,
    designName: null,
    deviceName: null,
    deviceType: null,
    deviceYearClass: null,
    isDevice: false,
    manufacturer: null,
    modelId: null,
    modelName: null,
    osBuildFingerprint: null,
    osBuildId: null,
    osInternalBuildId: null,
    osName: null,
    osVersion: null,
    platformApiLevel: null,
    productName: null,
    totalMemory: null,
  },
  deviceInfoString: null,
  initDeviceInfo: () =>
    set(state => {
      const {
        brand,
        designName,
        deviceName,
        deviceType,
        deviceYearClass,
        isDevice,
        manufacturer,
        modelId,
        modelName,
        osBuildFingerprint,
        osBuildId,
        osInternalBuildId,
        osName,
        osVersion,
        platformApiLevel,
        productName,
        totalMemory,
      } = Device;

      const deviceInfo: TDeviceInfo = {
        brand,
        designName,
        deviceName,
        deviceType: 'UNKNOWN',
        deviceYearClass,
        isDevice,
        manufacturer,
        modelId,
        modelName,
        osBuildFingerprint,
        osBuildId,
        osInternalBuildId,
        osName,
        osVersion,
        platformApiLevel,
        productName,
        totalMemory,
      };

      deviceInfo.deviceType = Device.DeviceType[deviceType ?? 0] as DeviceType;

      const deviceInfoString = Object.entries(deviceInfo)
        .map(([key, value]) => `${key}: ${value ?? ''}`)
        .join(', ');

      state.deviceInfo = deviceInfo;
      state.deviceInfoString = deviceInfoString;
      state.initilaized = true;
    }),
}));

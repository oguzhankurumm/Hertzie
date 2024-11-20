const AppConfig = ({ config }: { config: any }) => {
  const configure: {} = {
    ...config,
    extra: {
      appVersion: '1.0',
      apiEnv: process.env.API_ENV,
      eas: {
        ***REMOVED***: '***REMOVED***',
      },
    },
    plugins: [
      'expo-localization',
      'expo-notifications',
      'expo-font',
      'expo-secure-store',
      'expo-build-properties',
    ],
    runtimeVersion: {
      policy: 'sdkVersion',
    },
  };

  return configure;
};

export default AppConfig;

const AppConfig = ({ config }: { config: any }) => {
  const configure: {} = {
    ...config,
    extra: {
      appVersion: '1.0',
      apiEnv: process.env.API_ENV,
      eas: {
        projectId: '2bb554bb-b88f-4b42-bdec-bdfd5f5887aa',
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

import Constants from 'expo-constants';

type Env = {
  API_ENV: 'dev' | 'stg' | 'prod' | undefined;
  APP_URL: string;
  EAS_PROJECT_ID: string;
  TIMEOUT: number;
};

let config: Env = {
  API_ENV: undefined,
  APP_URL: process.env.APP_URL ?? '',
  EAS_PROJECT_ID: process.env.EAS_PROJECT_ID ?? '',
  TIMEOUT: 300000,
};

if (Constants.expoConfig?.extra?.apiEnv === 'dev') {
  config = {
    API_ENV: 'dev',
    APP_URL: process.env.APP_URL ?? '',
    EAS_PROJECT_ID: process.env.EAS_PROJECT_ID ?? '',
    TIMEOUT: 300000,
  };
}

if (Constants.expoConfig?.extra?.apiEnv === 'stg') {
  config = {
    API_ENV: 'stg',
    APP_URL: process.env.APP_URL ?? '',
    EAS_PROJECT_ID: process.env.EAS_PROJECT_ID ?? '',
    TIMEOUT: 300000,
  };
}

if (Constants.expoConfig?.extra?.apiEnv === 'prod') {
  config = {
    API_ENV: 'prod',
    APP_URL: process.env.APP_URL ?? '',
    EAS_PROJECT_ID: process.env.EAS_PROJECT_ID ?? '',
    TIMEOUT: 300000,
  };
}

export const env = { ...config };

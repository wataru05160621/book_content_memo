import Constants from 'expo-constants';

interface AppConfig {
  apiUrl: string;
  apiPort: string;
}

const DEV_CONFIG: AppConfig = {
  apiUrl: process.env.API_URL || 'http://localhost',
  apiPort: process.env.API_PORT || '3000',
};

const PROD_CONFIG: AppConfig = {
  apiUrl: 'https://api.yourdomain.com',
  apiPort: '443',
};

export const getConfig = (): AppConfig => {
  if (__DEV__) {
    return DEV_CONFIG;
  }
  return PROD_CONFIG;
};

export const getBaseUrl = (): string => {
  const config = getConfig();
  return `${config.apiUrl}:${config.apiPort}`;
};

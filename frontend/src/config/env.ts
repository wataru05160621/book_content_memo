import { Platform } from 'react-native';

interface Config {
  apiUrl: string;
  environment: string;
  platform: 'ios' | 'android' | 'web';
}

export const getConfig = (): Config => {
  return {
    apiUrl: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000',
    environment: process.env.EXPO_PUBLIC_ENV || 'development',
    platform: ['ios', 'android', 'web'].includes(Platform.OS)
      ? (Platform.OS as 'ios' | 'android' | 'web')
      : 'web',
  };
};

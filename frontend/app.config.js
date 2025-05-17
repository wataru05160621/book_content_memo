export default {
  expo: {
    name: 'Book Content Memo',
    slug: 'book-content-memo',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    extra: {
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
      environment: process.env.EXPO_PUBLIC_ENV || 'development',
    },
    ios: {
      bundleIdentifier: 'com.yourcompany.bookmemo',
      buildNumber: '1.0.0',
      supportsTablet: true,
    },
    android: {
      package: 'com.yourcompany.bookmemo',
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/favicon.png',
      bundler: 'metro',
    },
    plugins: ['expo-router'],
  },
};

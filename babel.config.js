module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      [
        'module-resolver',
        {
          alias: {
            '@pdt/*': ['./*'],
            '@pdt/app': ['./app'],
            '@pdt/assets': ['./assets'],
            '@pdt/components': ['./components'],
            '@pdt/constants': ['./constants']
          }
        }
      ]
    ]
  };
};

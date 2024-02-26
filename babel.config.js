module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/shared/components',
            '@utils': './src/shared/utils',
            '@hooks': './src/shared/hooks',
            '@routes': './src/routes'
          }
        },
      ],
    ],
  };
};

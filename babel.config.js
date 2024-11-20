const plugins = [
  [
    'module-resolver',
    {
      root: ['.'],
      extensions: ['.ts', '.jsx', '.js', '.json', '.svg'],
      alias: {
        _docs: './__docs__/',
        _assets: './src/assets',
        _atoms: './src/components/atoms',
        _molecules: './src/components/molecules',
        _organisms: './src/components/organisms',
        _organismsShared: './src/components/organisms-shared',
        _stories: './src/components/stories',
        _templates: './src/components/templates',
        _hooks: './src/hooks',
        _locales: './src/locales',
        _modals: './src/modals',
        _navigations: './src/navigations',
        _network: './src/network',
        _queries: './src/queries',
        _stores: './src/stores',
        _scenes: './src/scenes',
        _services: './src/services',
        _styles: './src/styles',
        _types: './src/types',
        _utils: './src/utils',
      },
    },
  ],
  'react-native-reanimated/plugin',
  'nativewind/babel',
  [
    'module:react-native-dotenv',
    {
      moduleName: '@env',
      path: '.env',
      blacklist: null,
      whitelist: null,
      safe: false,
      allowUndefined: true,
    },
  ],
];
if (process?.env?.NODE_ENV !== 'development') {
  plugins.push('transform-remove-console');
}

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: plugins,
  };
};

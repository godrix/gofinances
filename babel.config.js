const plugins = [
  ['react-native-reanimated/plugin'],
  ['inline-dotenv']
];

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [...plugins]
  };
};

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          hooks: './src/hooks',
          modules: './src/modules',
          ui: './src/ui',
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.android.js', '.ios.js'],
      },
    ],
  ],
};

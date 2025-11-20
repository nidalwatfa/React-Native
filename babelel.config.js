module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // لازم نضيف هذا الـ plugin عشان React Navigation يشتغل
    'react-native-reanimated/plugin',
  ],
};

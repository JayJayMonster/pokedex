import * as Font from 'expo-font';

export default useFonts = async () => {
  await Font.loadAsync({
    Bold: require('../assets/fonts/SF-Pro-Display-Bold.otf'),
    // All other fonts here
  });
};

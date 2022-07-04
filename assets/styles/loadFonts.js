import * as Font from 'expo-font';
import { useState, useEffect } from 'react';

export default function loadFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Bold: require('./assets/fonts/SF-Pro-Display-Bold.otf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);
}

import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native';
import pokeball_header from '../assets/images/pokeball_header.png';
import { height } from '../assets/constants';
import commonStyles from '../assets/styles/commonStyles';
import useFonts from '../hooks/useFonts';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import Dots from '../utils/svgs/Dots';

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);

  const loadFonts = async () => {
    await useFonts();
  };
  if (!loading) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setLoading(true)}
        onError={() => Alert.alert('Error', 'Problem with fonts')}
      />
    );
  }

  return (
    <View>
      <ImageBackground
        resizeMode="contain"
        style={{ width: '100%', height: height }}
        source={pokeball_header}
      >
        <Dots />
        <Text style={[commonStyles.heading, { fontFamily: 'Bold' }]}>
          Pokédex
        </Text>
        <Text>
          Search for Pokémon by name or using the National Pokédex number.
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});

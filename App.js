import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { textColor } from './assets/colors';
import HomeScreen from './components/HomeScreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={textColor.white} />
      <SafeAreaView style={{ flex: 1, backgroundColor: textColor.white }}>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StyleSheet, View, StatusBar, Platform } from 'react-native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';


export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

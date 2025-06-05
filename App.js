import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StyleSheet, View, StatusBar, Platform } from 'react-native';
import react from 'react';
import { Searchbar } from react - native - paper;

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.text}>List</Text>
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0
  },
  searchContainer: {
    padding: 16,
    backgroundColor: 'green',
  },
  listContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
  },
});
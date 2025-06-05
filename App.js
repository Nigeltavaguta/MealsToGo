import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StyleSheet, Platform, View } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 16, backgroundColor: 'green' }}>
          <Text>search</Text>
        </View>
        <View> style={{ flex: 1, backgroundColor: 'blue', padding: 16 }}
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({

});

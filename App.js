import React,{ StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dots from './src/component/Dot';

export default function App() {
  return (
    <View style={styles.container}>
      <Dots currentPage={3} pageQuantity={4} />
    </View>
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

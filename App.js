import React,{ StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dots from './src/component/Dots';

export default function App() {
  return (
    <View style={styles.container}>
      <Dots currentPage={5} pageQuantity={6} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

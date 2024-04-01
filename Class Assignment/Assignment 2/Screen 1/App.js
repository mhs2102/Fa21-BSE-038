import React from 'react';
import { View, StyleSheet } from 'react-native';
import FacebookSettingsScreen from './src/Assignment 2/pa/fb';

const App = () => {
  return (
    <View style={styles.container}>
      <FacebookSettingsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

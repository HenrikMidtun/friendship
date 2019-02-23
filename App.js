import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
//
  render() {
      return (
        <View style={styles.container}>
        {Platform.OS === 'ios'}
          <AppNavigator />
        </View>
      );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37424a',
  },
});

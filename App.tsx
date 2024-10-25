import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LoginPage from './screens/LoginPage';
import LauncherPage from './screens/LauncherPage';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LauncherPage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

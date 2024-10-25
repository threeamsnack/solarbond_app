import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LauncherPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  logo: {
    width: 200, 
    height: 200, 
  },
});

export default LauncherPage;

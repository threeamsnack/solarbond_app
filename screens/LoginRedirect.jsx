import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';

const LoginPage = () => {
  const screenwidth = Dimensions.get('window').width;

  return (
    <ImageBackground
      source={require('../assets/login-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={{ marginTop: 600 }}>
        <Text style={{ width: 350, height: 55, textAlign: 'center', borderWidth: 1, borderColor: '#000', padding: 10, borderRadius: 5, fontSize: 24, fontFamily: 'Montserrat-Regular', marginBottom: '12' }}>Login</Text>
        <Text style={{ width: 350, height: 55, textAlign: 'center', borderWidth: 1, borderColor: '#2276B2', padding: 10, borderRadius: 5, fontSize: 24, backgroundColor: '#2276B2', fontFamily: 'Montserrat-Regular', color: '#fff' }}>Signup</Text>
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


});

export default LoginPage;

import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const LoginMethod = () => (
  <Image source={require('../assets/google.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    marginTop:10,
    width: 35,
    height: 35,
  },
});

export default memo(LoginMethod);

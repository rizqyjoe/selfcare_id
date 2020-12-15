import React, { memo, Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, View, StatusBar, Button } from 'react-native';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const LoginMethod = ({navigation}) => (
  <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("")}>
      <Image source={require('../assets/google.png')} style={styles.image} />
      <Text style={styles.txtGoogle}>Google</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  image: {
    marginTop:10,
    width: 40,
    height: 40,
  },
  btn:{
    alignItems:"center",
  },
  txtGoogle:{
    paddingTop:5,
    fontSize:14,
  }
});


export default memo(LoginMethod);

import React, { memo } from "react";
import { ActivityIndicator } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import Background from "../reusable/Background";
import { theme } from "../reusable/theme";
import { firebaseConfig } from "../reusable/config";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AuthLoadingScreen = ({ navigation }) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is logged in
      navigation.navigate('Homescreen');
    } 
    else {
      // User is not logged in
      navigation.navigate('Index');
    }
  });

  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  );
};

export default memo(AuthLoadingScreen);

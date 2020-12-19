import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";

const Background = ({ children }) => (
    <KeyboardAvoidingView style={styles.container}>
      {children}
    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#FFFFFF",
  }
});

export default memo(Background);

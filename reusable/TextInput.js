import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { theme } from "./theme";

const TextInput = ({ errorText, ...props }) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      selectionColor={theme.colors.primary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  input: {
    backgroundColor: theme.colors.surface,
    height:40,
    borderRadius:15,
    marginBottom:5,
  },
  error: {
    fontSize: 12,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 2
  }
});

export default memo(TextInput);

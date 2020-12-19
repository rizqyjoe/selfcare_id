import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "./theme";

const txtBold = ({ children }) => <Text style={styles.text}>{children}</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight:"bold",
    lineHeight: 26,
    color: theme.colors.secondary,
    textAlign: "center",
  }
});

export default memo(txtBold);

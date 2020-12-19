import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "./theme";


const Footer = () => (
    <Text style={styles.footer}>© SelfCare All Right Reserved, 2020.</Text>
  );

const styles = StyleSheet.create({
  footer: {
    fontSize: 14,
    color: theme.colors.primary,
    fontWeight: "bold",
    paddingVertical: 20,
    position:"absolute",
    bottom:0,
  }
});

export default memo(Footer);
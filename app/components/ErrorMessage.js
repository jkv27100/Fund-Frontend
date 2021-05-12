import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../config/theme";

export default function ErrorMessage({ message, visible }) {
  if (!visible || !message) return null;
  return <Text style={styles.text}>{message}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.danger,
  },
});

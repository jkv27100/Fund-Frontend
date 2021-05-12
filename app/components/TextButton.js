import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../config/theme";

export default function TextButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {},
  text: {
    fontSize: 17,
    color: theme.colors.white,
  },
});

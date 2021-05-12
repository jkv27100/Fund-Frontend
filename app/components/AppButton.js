import React from "react";
import { Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import theme from "../config/theme";

export default function AppButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: theme.buttonSizes.login.width,
    height: theme.buttonSizes.login.height,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme.colors.white,
    marginVertical: 10,
  },
  text: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

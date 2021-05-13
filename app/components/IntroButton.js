import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../config/theme";

export default function IntroButton({ text, onPress }) {
  return (
    <View style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 100,
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

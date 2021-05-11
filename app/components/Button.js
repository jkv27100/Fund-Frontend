import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function Button({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 100,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

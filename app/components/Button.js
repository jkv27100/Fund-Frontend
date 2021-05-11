import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function Button() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NEXT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "absolute",
    height: 53,
    width: 182,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.white,
    bottom: "20%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
  },
});

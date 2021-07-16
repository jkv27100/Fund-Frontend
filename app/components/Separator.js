import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../config/theme";

export default function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    marginTop: 10,
  },
});

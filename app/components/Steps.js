import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../config/theme";

export default function Steps({ total, step }) {
  return (
    <View style={styles.container}>
      <View style={styles.step}>
        <Text style={{ fontSize: 34, color: theme.colors.white }}>{step}</Text>
        <Text style={{ fontSize: 20, color: theme.colors.white }}>
          {"/" + total}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  step: {
    flexDirection: "row",
    alignItems: "center",
  },
});

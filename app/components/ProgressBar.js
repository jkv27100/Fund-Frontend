import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../config/theme";

export default function ProgressBar({ percentage }) {
  return (
    <View style={styles.container}>
      <View style={styles.totalProgress}>
        <View
          style={{
            width: `${percentage}%`,
            height: 3,
            backgroundColor: theme.colors.yellow,
          }}
        ></View>
      </View>
      <Text style={{ color: theme.colors.white, marginLeft: 10 }}>
        {percentage + "%"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  totalProgress: {
    width: "100%",
    height: 3,
    backgroundColor: theme.colors.white,
  },
  doneProgress: {},
});

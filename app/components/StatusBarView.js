import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

export default function StatusBarView() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    width: "100%",
  },
});

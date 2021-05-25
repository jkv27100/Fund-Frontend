import { StatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar as statusbar, StyleSheet, View } from "react-native";

export default function StatusBarView() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: statusbar.currentHeight,
    width: "100%",
  },
});

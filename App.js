import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Slide from "./app/components/Slide";

export default function App() {
  return (
    <View style={styles.container}>
      <Slide />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

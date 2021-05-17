import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../config/theme";

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: theme.colors.white }}>Notification Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

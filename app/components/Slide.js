import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../config/theme";
import Animator from "./Animator";

export default function Slide({ title, source, description }) {
  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <Animator src={source} />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.header}>{title}</Text>
        </View>
        <View style={styles.sub}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
  },
  animation: {
    width: 200,
    height: 200,
    top: "15%",
  },
  content: {
    position: "absolute",
    display: "flex",
    top: "40%",
    alignItems: "center",
  },
  sub: {
    width: 400,
    marginTop: 20,
    alignItems: "center",
  },

  header: {
    color: theme.colors.white,
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 42,
  },
  description: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: "100",
  },
});

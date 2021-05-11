import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import Animator from "./Animator";
import Button from "./Button";

export default function Slide() {
  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <Animator />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.header}>Welcome</Text>
        </View>
        <View style={styles.sub}>
          <Text style={styles.description}>
            Dolore dolore cupidatat reprehenderit
          </Text>
        </View>
      </View>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
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
    color: colors.white,
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 42,
  },
  description: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "100",
  },
});

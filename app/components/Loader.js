import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";
import theme from "../config/theme";
import Animator from "./Animator";

export default function Loader({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <Animator
        width={70}
        src={require("../assets/animations/btn-loading.json")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  overlay: {
    backgroundColor: theme.colors.primary,
    width: "100%",
    position: "absolute",
    zIndex: 1,
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
});

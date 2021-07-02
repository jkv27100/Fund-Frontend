import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

export default function Loader({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/btn-loading.json")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 1,
    opacity: 0.7,
  },
});

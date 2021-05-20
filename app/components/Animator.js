import React from "react";
import LottieView from "lottie-react-native";
import theme from "../config/theme";

export default function Animator({ src, width }) {
  return (
    <LottieView
      autoPlay
      loop
      style={{ backgroundColor: theme.colors.primary, width: width }}
      source={src}
    />
  );
}

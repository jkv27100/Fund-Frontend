import LottieView from "lottie-react-native";
import React from "react";
import theme from "../config/theme";

export default function Animator({ src, width, loop = true }) {
  return (
    <LottieView
      autoPlay
      loop={loop}
      style={{ backgroundColor: theme.colors.primary, width: width }}
      source={src}
    />
  );
}

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

export default function Animator({ src }) {
  return (
    <LottieView
      autoPlay
      loop
      style={{ backgroundColor: colors.primary }}
      source={src}
    />
  );
}

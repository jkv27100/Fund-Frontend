import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import theme from "../config/theme";

export default function Icon({
  name,
  size = 35,
  onPress,
  color = theme.colors.white,
}) {
  return (
    <TouchableOpacity
      style={{
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <FontAwesome name={name} color={color} size={size} />
    </TouchableOpacity>
  );
}

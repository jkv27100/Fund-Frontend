import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import theme from "../config/theme";

export default function Icon({ name, size = 35, onPress }) {
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
      <FontAwesome5 name={name} color={theme.colors.white} size={size} />
    </TouchableOpacity>
  );
}

import React from "react";
import { Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import theme from "../config/theme";

export default function AppButton({
  text,
  onPress,
  fontSize = 18,
  width,
  height,
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.colors.primary,
        justifyContent: "center",
        alignItems: "center",
        width: width,
        height: height,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: theme.colors.white,
        marginVertical: 10,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: theme.colors.white,
          fontSize: fontSize,
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: theme.buttonSizes.login.width,
    height: theme.buttonSizes.login.height,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme.colors.white,
    marginVertical: 10,
  },
});

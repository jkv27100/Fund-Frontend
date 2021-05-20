import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import theme from "../config/theme";
import Animator from "./Animator";

export default function AppButton({
  text,
  onPress,
  fontSize = 18,
  width,
  height,
  loader,
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
      {loader ? (
        <Animator
          src={require("../assets/animations/btn-loading.json")}
          width={25}
        />
      ) : (
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
      )}
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

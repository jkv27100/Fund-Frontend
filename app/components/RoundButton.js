import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import theme from "../config/theme";
import Icon from "./Icon";

export default function RoundButton({ icon, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome5 name={icon} size={25} color={theme.colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    borderWidth: 1,
    width: 60,
    height: 60,
    borderColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});

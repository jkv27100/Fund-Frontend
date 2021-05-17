import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../config/theme";
import Icon from "./Icon";

export default function RoundButton({ icon, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} size={25} />
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

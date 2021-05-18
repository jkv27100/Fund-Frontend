import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../config/theme";
import Icon from "./Icon";

export default function Header({ onPress, title }) {
  return (
    <View style={styles.container}>
      <Icon name="bars" size={28} onPress={onPress} />
      <Text
        style={{ color: theme.colors.white, fontSize: 25, fontWeight: "bold" }}
      >
        {title}
      </Text>
      <Icon name="ellipsis-v" size={28} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

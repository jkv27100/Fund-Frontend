import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../config/theme";
import Icon from "./Icon";

export default function ProfileInfo({ text, onPress, name }) {
  return (
    <View style={styles.container}>
      <Text
        numberOfLines={1}
        style={{ color: theme.colors.white, fontSize: 18 }}
      >
        {text}
      </Text>
      <Icon name={name} size={18} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 25,
    borderRadius: 18,
  },
});

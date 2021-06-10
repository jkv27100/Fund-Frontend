import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../config/theme";

export default function SearchResult({ title, subTitle, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text
        numberOfLines={1}
        style={{ color: theme.colors.white, fontSize: 24, fontWeight: "bold" }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: theme.colors.light,
          fontSize: 15,
          fontWeight: "bold",
          marginLeft: 10,
        }}
        numberOfLines={1}
      >
        {subTitle}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
});

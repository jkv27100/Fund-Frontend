import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../config/theme";

export default function Tag({ tag }) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: theme.colors.white,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
        padding: 5,
      }}
    >
      <Text
        style={{
          color: theme.colors.white,
          paddingHorizontal: 10,
          fontSize: 12,
        }}
      >
        {tag}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

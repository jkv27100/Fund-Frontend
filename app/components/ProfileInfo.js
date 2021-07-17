import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../config/theme";
import { FontAwesome } from "@expo/vector-icons";

export default function ProfileInfo({ text, name }) {
  return (
    <View style={styles.container}>
      <FontAwesome name={name} color={theme.colors.white} size={18} />
      <Text
        numberOfLines={1}
        style={{
          color: theme.colors.white,
          fontSize: 18,
          paddingHorizontal: 20,
        }}
      >
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 25,
    borderRadius: 18,
  },
});

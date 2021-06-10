import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import theme from "../config/theme";

export default function SearchBar({ onChangeText }) {
  return (
    <View style={styles.container}>
      <View style={{ padding: 10 }}>
        <FontAwesome5 name="search" color={theme.colors.white} size={25} />
      </View>
      <TextInput
        placeholder="Search..."
        style={styles.text}
        placeholderTextColor={theme.colors.light}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: 18,
  },
  text: {
    color: theme.colors.white,
    padding: 10,
    fontSize: 15,
  },
});

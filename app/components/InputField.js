import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import theme from "../config/theme";

export default function InputField({
  placeholder,
  name,
  size = 20,
  ...otherProps
}) {
  const [state, setState] = useState("");
  const handleChange = (text) => {
    setState(text);
  };
  return (
    <View style={styles.container}>
      {name && (
        <FontAwesome5
          name={name}
          style={styles.icon}
          size={size}
          color={theme.colors.white}
        />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.light}
        style={styles.text}
        onChangeText={(text) => handleChange(text)}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    flexDirection: "row",
    marginVertical: 20,
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: theme.colors.yellow,
  },
  text: {
    fontSize: 18,
    color: theme.colors.white,
  },
  icon: { marginRight: 20 },
});

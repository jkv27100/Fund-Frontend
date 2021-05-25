import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../config/theme";

export default function ItemPIcker({ selectedItem, setSelectedItem }) {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Category" value="category" />
        <Picker.Item label="Art" value="art" />
        <Picker.Item label="Food" value="food" />
        <Picker.Item label="Technology" value="tech" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomColor: theme.colors.yellow,
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  picker: {
    width: "100%",
    padding: 25,
    color: theme.colors.light,
  },
});

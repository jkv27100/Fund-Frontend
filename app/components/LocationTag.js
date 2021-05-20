import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../config/theme";
import Icon from "./Icon";

export default function LocationTag({ location }) {
  return (
    <View style={styles.container}>
      <View style={{ marginRight: 10 }}>
        <Ionicons
          name={"location-sharp"}
          color={theme.colors.white}
          size={25}
        />
      </View>
      <View>
        <Text style={{ color: theme.colors.white }} numberOfLines={1}>
          {location}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginLeft: 10,
  },
});

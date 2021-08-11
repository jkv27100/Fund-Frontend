import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../config/theme";

export default function Transaction({ text }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name={"call-received"}
          size={30}
          color={theme.colors.white}
        />
        <View style={{ marginLeft: 20, width: "80%" }}>
          <Text
            numberOfLines={1}
            style={{ color: theme.colors.white, fontSize: 18 }}
          >
            {text}
          </Text>
          {/* <Text style={{ color: theme.colors.light }}>17/4/12</Text> */}
        </View>
      </View>
      {/* <Text style={{ color: theme.colors.success, fontSize: 17 }}>+350</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

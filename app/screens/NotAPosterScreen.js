import React from "react";
import { Text, View } from "react-native";
import theme from "../config/theme";

export default function NotAPosterScreen({ text1, text2 }) {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text style={{ color: theme.colors.white, fontSize: 80 }}>☹</Text>
      <Text style={{ color: theme.colors.white, fontSize: 17 }}>{text1}</Text>
      <Text style={{ color: theme.colors.white, fontSize: 17 }}>{text2}</Text>
    </View>
  );
}

import React from "react";
import { Text, View } from "react-native";
import theme from "../config/theme";

export default function NotAPosterScreen() {
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
      <Text style={{ color: theme.colors.white, fontSize: 17 }}>
        You Are Not A Poster !
      </Text>
      <Text style={{ color: theme.colors.white, fontSize: 17 }}>
        Apply for poster role or Wait for the verification...
      </Text>
    </View>
  );
}

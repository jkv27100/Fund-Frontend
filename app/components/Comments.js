import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../config/theme";
import Avatar from "./Avatar";

export default function Comments({ image, name, date, comment }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
        }}
      >
        <Avatar image={image} title={name} subTitle={date} />

        <Text
          numberOfLines={1}
          style={{
            color: theme.colors.white,
            paddingHorizontal: 10,
          }}
        >
          {comment}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
    height: "60%",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.colors.white,
    marginRight: 25,
  },
});

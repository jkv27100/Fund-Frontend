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
          height: "30%",
          borderRadius: 18,
          borderWidth: 1,
          borderColor: theme.colors.white,
        }}
      >
        <Avatar
          image={require("../assets/images/pic3.jpg")}
          title={name}
          subTitle={date}
        />
        <Text style={{ color: theme.colors.white, padding: 15 }}>
          {comment}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "100%",
    marginRight: 25,
  },
});

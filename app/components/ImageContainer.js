import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ImageContainer({ uri }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `data:image/jpg;base64,${uri}` }}
        style={styles.img}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginRight: 25,
  },
  img: {
    width: 200,
    height: 150,
    borderRadius: 20,
  },
});

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import theme from "../config/theme";

export default function Avatar({ image, title, subTitle }) {
  return (
    <View style={styles.avatarContainer}>
      <Image
        style={styles.image}
        source={{ uri: `data:image/jpg;base64,${image}` }}
      />

      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {subTitle && (
          <Text style={styles.subTitle} numberOfLines={1}>
            {subTitle}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 35,
  },
  details: {
    flexDirection: "column",
    marginHorizontal: 15,
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: theme.colors.white,
  },
  subTitle: {
    color: theme.colors.white,
  },
});

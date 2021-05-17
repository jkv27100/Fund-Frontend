import React, { useRef } from "react";

import { ScrollView, StyleSheet, Text, View } from "react-native";
import theme from "../config/theme";
import ImageContainer from "./ImageContainer";

export default function Carousel({ imageUris = [] }) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri}>
              <ImageContainer uri={uri} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
});

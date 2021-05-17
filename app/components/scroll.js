import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import PostDetailsScreen from "../screens/PostDetailsScreen";
import Carousel from "./Carousel";

export default function Scroll() {
  const imageUris = [
    require("../assets/images/pic.jpg"),
    require("../assets/images/pic3.jpg"),
    require("../assets/images/pic4.jpg"),
    require("../assets/images/gh.jpg"),
  ];
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.paragraph}>
        Aute mollit duis id adipisicing quis dolore. Et sit qui reprehenderit
        elit id adipisicing culpa exercitation est deserunt pariatur dolor. Sint
        in duis velit amet excepteur consectetur velit tempor. Pariatur
        consectetur adipisicing ad minim excepteur aliqua consectetur esse
        cupidatat mollit veniam ullamco consequat. Anim aute commodo ullamco
        minim est do proident anim commodo irure mollit. Nisi enim aliqua
        exercitation voluptate. Aliqua ullamco ea adipisicing commodo
        reprehenderit.
      </Text>

      <Text style={styles.paragraph}>
        Aute mollit duis id adipisicing quis dolore. Et sit qui reprehenderit
        elit id adipisicing culpa exercitation est deserunt pariatur dolor. Sint
        in duis velit amet excepteur consectetur velit tempor. Pariatur
        consectetur adipisicing ad minim excepteur aliqua consectetur esse
        cupidatat mollit veniam ullamco consequat. Anim aute commodo ullamco
        minim est do proident anim commodo irure mollit. Nisi enim aliqua
        exercitation voluptate. Aliqua ullamco ea adipisicing commodo
        reprehenderit.
      </Text>
      <Text style={styles.paragraph}>
        Aute mollit duis id adipisicing quis dolore. Et sit qui reprehenderit
        elit id adipisicing culpa exercitation est deserunt pariatur dolor. Sint
        in duis velit amet excepteur consectetur velit tempor. Pariatur
        consectetur adipisicing ad minim excepteur aliqua consectetur esse
        cupidatat mollit veniam ullamco consequat. Anim aute commodo ullamco
        minim est do proident anim commodo irure mollit. Nisi enim aliqua
        exercitation voluptate. Aliqua ullamco ea adipisicing commodo
        reprehenderit.
      </Text>
      <Text style={styles.paragraph}>
        Aute mollit duis id adipisicing quis dolore. Et sit qui reprehenderit
        elit id adipisicing culpa exercitation est deserunt pariatur dolor. Sint
        in duis velit amet excepteur consectetur velit tempor. Pariatur
        consectetur adipisicing ad minim excepteur aliqua consectetur esse
        cupidatat mollit veniam ullamco consequat. Anim aute commodo ullamco
        minim est do proident anim commodo irure mollit. Nisi enim aliqua
        exercitation voluptate. Aliqua ullamco ea adipisicing commodo
        reprehenderit.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollView: {
    height: "20%",
    width: "80%",
    margin: 20,
    alignSelf: "center",
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: "lightblue",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    paddingBottom: 50,
  },
});

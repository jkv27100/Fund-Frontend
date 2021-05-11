import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Slide from "./Slide";
import Button from "./Button";

export default function intorslider() {
  const slides = [
    {
      key: 1,
      source: require("../../assets/animations/14482-welcome-onboard.json"),
      title: "Welcome",
      text: "Say something cool",
    },
    {
      key: 2,
      source: require("../../assets/animations/2.json"),
      title: "Add Post and Donate",
      text: "Other cool stuff",
    },
    {
      key: 3,
      source: require("../../assets/animations/block.json"),
      title: "BlockChain",
      text: "Other cool stuff",
    },
    {
      key: 4,
      title: "Get Started",
      source: require("../../assets/animations/start.json"),
      text: "I'm already out of descriptions",
    },
  ];

  const [state, setState] = useState(false);

  const _renderItem = ({ item }) => {
    return (
      <Slide title={item.title} source={item.source} description={item.text} />
    );
  };
  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setState(true);
  };

  const _renderNextButton = () => {
    return <Button text="Next" />;
  };
  const _renderDoneButton = () => {
    return <Button text="Done" />;
  };
  const _renderSkipButton = () => {
    return <Button text="Skip" />;
  };
  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      renderNextButton={_renderNextButton}
      renderDoneButton={_renderDoneButton}
      showSkipButton
      renderSkipButton={_renderSkipButton}
    />
  );
}

const styles = StyleSheet.create({});

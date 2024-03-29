import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Slide from "../components/Slide";
import IntroButton from "../components/IntroButton";
import routes from "../navigation/routes";

export default function OnBoardingScreen({ navigation }) {
  const slides = [
    {
      key: "1",
      source: require("../assets/animations/14482-welcome-onboard.json"),
      title: "Welcome",
      text: "Hi, We will walk you through our app",
    },
    {
      key: "2",
      source: require("../assets/animations/2.json"),
      title: "Add Post and Donate",
      text: "You can add posts and do donations",
    },
    {
      key: "3",
      source: require("../assets/animations/block.json"),
      title: "BlockChain",
      text: "We use blockchain for secure transactions",
    },
    {
      key: "4",
      title: "Get Started",
      source: require("../assets/animations/start.json"),
      text: "Done, Let's get started",
    },
  ];

  const _renderItem = ({ item }) => {
    return (
      <Slide title={item.title} source={item.source} description={item.text} />
    );
  };
  const _onDone = () => {
    navigation.navigate(routes.LOGIN);
  };

  const _renderNextButton = () => {
    return <IntroButton text="Next" />;
  };
  const _renderDoneButton = () => {
    return <IntroButton text="Done" />;
  };
  const _renderSkipButton = () => {
    return <IntroButton text="Skip" />;
  };
  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      renderNextButton={_renderNextButton}
      renderDoneButton={_renderDoneButton}
      showSkipButton
      renderSkipButton={_renderSkipButton}
      onDone={_onDone}
    />
  );
}

const styles = StyleSheet.create({});

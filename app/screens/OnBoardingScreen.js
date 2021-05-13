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
      text: "Say something cool",
    },
    {
      key: "2",
      source: require("../assets/animations/2.json"),
      title: "Add Post and Donate",
      text: "Other cool stuff",
    },
    {
      key: "3",
      source: require("../assets/animations/block.json"),
      title: "BlockChain",
      text: "Other cool stuff",
    },
    {
      key: "4",
      title: "Get Started",
      source: require("../assets/animations/start.json"),
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
    navigation.navigate(routes.REGISTER_1);
    setState(true);
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

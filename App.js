import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  useColorScheme,
  ProgressBarAndroidComponent,
} from "react-native";
import AppButton from "./app/components/AppButton";
import InputField from "./app/components/InputField";
import StatusBarView from "./app/components/StatusBarView";
import Steps from "./app/components/Steps";
import TextButton from "./app/components/TextButton";
import LoginScreen from "./app/screens/LoginScreen";
import OnBoardingScreen from "./app/screens/OnBoardingScreen";
import OtpScreen from "./app/screens/OtpScreen";
import PasswordConfirmScreen from "./app/screens/PasswordConfirmScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import theme from "./app/config/theme";
import AppCard from "./app/components/AppCard";
import ProgressBar from "./app/components/ProgressBar";
import PostListScreen from "./app/screens/PostListScreen";

export default function App() {
  const data = {
    id: "1",
    title: "New app for gaming",
    subTitle: "Install and enjoy the fast",
    image: require("./app/assets/images/pic.jpg"),
    percetage: "37",
    pledged: "$8767",
    days: "5",
    likes: "4561",
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <PostListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
});

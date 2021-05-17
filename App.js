import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  useColorScheme,
  ProgressBarAndroidComponent,
  ScrollView,
  FlatList,
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
import Tag from "./app/components/Tag";
import LocationTag from "./app/components/LocationTag";
import PostDetailsScreen from "./app/screens/PostDetailsScreen";
import Carousel from "./app/components/Carousel";
import ImageContainer from "./app/components/ImageContainer";
import Scroll from "./app/components/scroll";
import Comments from "./app/components/Comments";
import CommentCarousel from "./app/components/CommentCarousel";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <StatusBar style="light" />
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
});

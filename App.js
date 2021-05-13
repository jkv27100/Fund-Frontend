import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
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
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="light" />
        <AuthNavigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#464B58",
  },
});

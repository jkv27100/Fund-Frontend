import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./app/components/AppButton";
import InputField from "./app/components/InputField";
import StatusBarView from "./app/components/StatusBarView";
import TextButton from "./app/components/TextButton";
import LoginScreen from "./app/screens/LoginScreen";
import OnBoardingScreen from "./app/screens/OnBoardingScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LoginScreen />
    </View>
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

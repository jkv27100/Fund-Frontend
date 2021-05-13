import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import RegisterScreen from "../screens/RegisterScreen";
import OtpScreen from "../screens/OtpScreen";
import PasswordConfirmScreen from "../screens/PasswordConfirmScreen";
import LoginScreen from "../screens/LoginScreen";

export default function AuthNavigator() {
  const Stack = createStackNavigator();
  const v = "cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,";
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="OnBoarding"
        component={OnBoardingScreen}
        options={{ headerShown: false, mode: "modal" }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false, mode: "modal" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false, mode: "modal" }}
      />
      <Stack.Screen
        name="OTP"
        component={OtpScreen}
        options={{ headerShown: false, mode: "modal" }}
      />
      <Stack.Screen
        name="Password"
        component={PasswordConfirmScreen}
        options={{ headerShown: false, mode: "modal" }}
      />
    </Stack.Navigator>
  );
}

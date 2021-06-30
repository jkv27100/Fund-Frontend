import React, { useState } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import RegisterScreen from "../screens/RegisterScreen";
import OtpScreen from "../screens/OtpScreen";
import PasswordConfirmScreen from "../screens/PasswordConfirmScreen";
import LoginScreen from "../screens/LoginScreen";
import { Easing } from "react-native";
import { AuthContext } from "../auth/context";
const config = {
  animation: "spring",
  config: {
    stiffness: 500,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};

export default function AuthNavigator() {
  const [newUserData, setNewUserData] = useState();
  const Stack = createStackNavigator();

  return (
    <AuthContext.Provider value={{ newUserData, setNewUserData }}>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          // transitionSpec: {
          //   open: config,
          //   close: closeConfig,
          // },
        }}
      >
        <Stack.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTP"
          component={OtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Password"
          component={PasswordConfirmScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}

import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import CharityApplicationScreen from "../screens/CharityApplicationScreen";
import KickStarterApplicationScreen from "../screens/KickStarterApplicationScreen";
import PosterRoleScreen from "../screens/PosterRoleScreen";

const Stack = createStackNavigator();

export default function PosterRoleNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name={"PosterRole"} component={PosterRoleScreen} />
      <Stack.Screen name={"Charity"} component={CharityApplicationScreen} />
      <Stack.Screen
        name={"KickStarter"}
        component={KickStarterApplicationScreen}
      />
    </Stack.Navigator>
  );
}

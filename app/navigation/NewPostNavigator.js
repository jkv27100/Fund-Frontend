import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import NewPostScreen from "../screens/NewPostScreen";
import NewPostScreenPage2 from "../screens/NewPostScreenPage2";

const Stack = createStackNavigator();

export default function FeedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name={"AddPost"} component={NewPostScreen} />
      <Stack.Screen name={"Post2"} component={NewPostScreenPage2} />
    </Stack.Navigator>
  );
}

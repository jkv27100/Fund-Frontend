import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import PostListScreen from "../screens/PostListScreen";
import PostDetailsScreen from "../screens/PostDetailsScreen";
import CommentScreen from "../screens/CommentScreen";

const Stack = createStackNavigator();

export default function FeedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name={"PostsList"} component={PostListScreen} />
      <Stack.Screen name={"PostDetails"} component={PostDetailsScreen} />
      <Stack.Screen name={"Comment"} component={CommentScreen} />
    </Stack.Navigator>
  );
}

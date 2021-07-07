import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React, { useState } from "react";
import NewPostScreen from "../screens/NewPostScreen";
import NewPostScreenPage2 from "../screens/NewPostScreenPage2";
import { NewPostContext } from "../auth/context";

const Stack = createStackNavigator();

export default function FeedNavigator() {
  const [postData, setPostData] = useState();
  return (
    <NewPostContext.Provider value={{ postData, setPostData }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name={"AddPost"} component={NewPostScreen} />
        <Stack.Screen name={"Post2"} component={NewPostScreenPage2} />
      </Stack.Navigator>
    </NewPostContext.Provider>
  );
}

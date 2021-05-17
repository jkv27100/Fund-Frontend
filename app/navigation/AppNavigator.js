import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "../components/Icon";
import FeedNavigator from "./FeedNavigator";
import SearchScreen from "../screens/SearchScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import theme from "../config/theme";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: theme.colors.primary,
        },
        showLabel: false,
        activeTintColor: theme.colors.yellow,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 color={color} name="home" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 color={color} name="search" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 color={color} name="bell" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 color={color} name="user" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

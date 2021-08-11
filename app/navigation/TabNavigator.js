import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import theme from "../config/theme";
import NotificationScreen from "../screens/NotificationsScreen2";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import FeedNavigator from "./FeedNavigator";
import NewPostNavigator from "./NewPostNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
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
        name="AddPost"
        component={NewPostNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 color={color} name="plus-circle" size={size * 1.5} />
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

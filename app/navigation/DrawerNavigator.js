import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import TabNavigator from "./TabNavigator";
import theme from "../config/theme";
import BookmarkScreen from "../screens/BookmarkScreen";
import HistoryScreen from "../screens/HistoryScreen";

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: theme.colors.primary,
      }}
      drawerType="slide"
      drawerContentOptions={{
        activeTintColor: theme.colors.white,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons color={color} name="ios-home" size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Bookmarks"
        component={BookmarkScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons color={color} name="ios-bookmarks" size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="History"
        component={HistoryScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons color={color} name="ios-albums" size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

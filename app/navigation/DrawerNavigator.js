import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import TabNavigator from "./TabNavigator";
import theme from "../config/theme";
import BookmarkScreen from "../screens/BookmarkScreen";
import TransactionScreen from "../screens/TransactionScreen";

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: theme.colors.primary,
        paddingTop: 100,
      }}
      drawerType="slide"
      drawerContentOptions={{
        activeTintColor: theme.colors.white,
        itemStyle: { marginVertical: 20 },
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
        name="Transactions"
        component={TransactionScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons color={color} name="ios-albums" size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

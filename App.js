import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import theme from "./app/config/theme";
import DrawerNavigator from "./app/navigation/DrawerNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/context/AuthContext";
export default function App() {
  const [user, setUser] = useState();
  const [newUserData, setNewUserData] = useState();
  return (
    <AuthContext.Provider value={{ newUserData, setNewUserData }}>
      <NavigationContainer theme={NavigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
});

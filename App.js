import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import theme from "./app/config/theme";
import DrawerNavigator from "./app/navigation/DrawerNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { UserContext } from "./app/auth/context";
import AppLoading from "expo-app-loading";
import authStorage from "./app/auth/authStorage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const userData = await authStorage.getUser();
    if (userData) setUser(userData);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={NavigationTheme}>
        {user ? <DrawerNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </UserContext.Provider>
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

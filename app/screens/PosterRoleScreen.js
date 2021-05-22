import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";
import routes from "../navigation/routes";

export default function PosterRoleScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBarView />
      <View>
        <Text
          style={{
            color: theme.colors.white,
            fontSize: 28,
            paddingTop: 100,
          }}
        >
          Select your role
        </Text>
        <View style={{ paddingTop: 300 }}>
          <AppButton
            text={"KickStarter"}
            width={190}
            height={50}
            fontSize={16}
            onPress={() => navigation.navigate(routes.KICKSTARTER)}
          />
          <AppButton
            text={"Charity"}
            width={190}
            height={50}
            fontSize={16}
            onPress={() => navigation.navigate(routes.CHARITY)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

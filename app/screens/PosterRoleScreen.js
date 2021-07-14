import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";
import routes from "../navigation/routes";
import { UserContext } from "../auth/context";
import NotAPosterScreen from "../screens/NotAPosterScreen";

export default function PosterRoleScreen({ navigation }) {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <StatusBarView />
      {!user.isBothRole ? (
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
            {!user.isKickStarter && (
              <AppButton
                text={"KickStarter"}
                width={190}
                height={50}
                fontSize={16}
                onPress={() => navigation.navigate(routes.KICKSTARTER)}
              />
            )}
            {!user.isCharity && (
              <AppButton
                text={"Charity"}
                width={190}
                height={50}
                fontSize={16}
                onPress={() => navigation.navigate(routes.CHARITY)}
              />
            )}
          </View>
        </View>
      ) : (
        <NotAPosterScreen
          text1="CONGRATULATIONS"
          text2="You already have both roles"
          emoji="😃"
        />
      )}
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

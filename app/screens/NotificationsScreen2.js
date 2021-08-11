import React, { useState, useEffect, useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";
import notificationApi from "../api/notifications";
import { UserContext } from "../auth/context";
import ProfileInfo from "../components/ProfileInfo";
import Separator from "../components/Separator";

export default function NotificationsScreen2() {
  useEffect(() => {
    getNotifications();
  }, []);
  const { user } = useContext(UserContext);
  const [notifications, setNotifications] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const getNotifications = async () => {
    const result = await notificationApi.getNotifications(user._id);
    setNotifications(result.notifications);
  };
  const handleRefresh = () => {
    getNotifications();
  };
  return (
    <View style={styles.container}>
      <StatusBarView />
      <View style={{ width: "90%", paddingVertical: 40 }}>
        <FlatList
          data={notifications}
          keyExtractor={(data) => data.toString() + Math.random()}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 15,
                borderColor: theme.colors.white,
                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ color: theme.colors.white, fontSize: 18 }}>
                {item}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
});

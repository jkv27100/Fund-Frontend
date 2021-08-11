import React, { useState, useContext, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import StatusBarView from "../components/StatusBarView";
import Transaction from "../components/Transaction";
import theme from "../config/theme";
import userApi from "../api/register";
import { UserContext } from "../auth/context";
import Loader from "../components/Loader";
import Separator from "../components/Separator";

export default function TransactionScreen() {
  const { user } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [ready, setReady] = useState(false);

  const getUser = async () => {
    const response = await userApi.getUserData(user._id);
    setUserDetails(response.userData);
  };

  const handleRefresh = () => {
    getUser();
  };

  useEffect(() => {
    getUser();
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);
  return (
    <>
      {ready ? (
        <View style={styles.container}>
          <StatusBarView />
          <View style={styles.header}>
            <Text
              style={{ color: theme.colors.white, fontSize: 25, padding: 20 }}
            >
              Transaction History
            </Text>
          </View>
          <View style={styles.content}>
            <FlatList
              data={userDetails.transactions}
              refreshing={refreshing}
              onRefresh={handleRefresh}
              ItemSeparatorComponent={Separator}
              showsVerticalScrollIndicator={false}
              keyExtractor={(data) => data.toString()}
              renderItem={({ item }) => <Transaction text={item} />}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader visible={true} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  header: {
    width: "90%",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.yellow,
    height: 70,
    justifyContent: "center",
    marginTop: 20,
  },
  content: {
    width: "90%",
    marginTop: 40,
  },
});

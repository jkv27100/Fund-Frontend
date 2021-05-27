import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StatusBarView from "../components/StatusBarView";
import Transaction from "../components/Transaction";
import theme from "../config/theme";

export default function TransactionScreen() {
  return (
    <View style={styles.container}>
      <StatusBarView />
      <View style={styles.header}>
        <Text style={{ color: theme.colors.white, fontSize: 25, padding: 20 }}>
          Transaction History
        </Text>
      </View>
      <View style={styles.content}>
        <Transaction />
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

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <StatusBarView />
      <View style={{ width: "90%", marginTop: 20 }}>
        <SearchBar />
      </View>
      <View style={styles.list}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  list: {},
});

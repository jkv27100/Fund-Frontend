import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <StatusBarView />
      <View style={styles.topSection}>
        <Image
          source={require("../assets/images/pic3.jpg")}
          style={styles.img}
        />
        <Text
          style={{
            color: theme.colors.white,
            fontSize: 18,
            padding: 10,
            fontWeight: "bold",
          }}
        >
          {"Itachi Uchiha"}
        </Text>
      </View>
      <View style={styles.details}>
        <View style={styles.content}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 19,
              }}
            >
              Post
            </Text>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 19,
                paddingTop: 10,
              }}
            >
              {"8"}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: theme.colors.white, fontSize: 19 }}>
              Donated
            </Text>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 19,
                paddingTop: 10,
              }}
            >
              {"$" + "675.89"}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: theme.colors.white, fontSize: 19 }}>
              Balance
            </Text>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 19,
                paddingTop: 10,
              }}
            >
              {"$" + "10.78"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  topSection: {
    width: "100%",
    height: "40%",
    backgroundColor: theme.colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 35,
  },
  details: {
    width: "80%",
    height: "15%",
    backgroundColor: theme.colors.primary,
    position: "absolute",
    top: "35%",
    elevation: 4,
    borderRadius: 18,
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 10,
  },
});

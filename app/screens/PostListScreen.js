import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppCard from "../components/AppCard";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";

export default function PostListScreen() {
  const details = [
    {
      id: "1",
      title: "New app for gaming",
      subTitle: "Install and enjoy the fast",
      image: require("../assets/images/pic.jpg"),
      percetage: "37",
      pledged: "$8767",
      days: "5",
      likes: "4561",
      tag: "Technology",
      location: "Manglore,Karnataka,India",
    },
    {
      id: "2",
      title: "New app for gaming",
      subTitle: "Install and enjoy the fast",
      image: require("../assets/images/pic.jpg"),
      percetage: "78",
      pledged: "$8767",
      days: "5",
      likes: "4561",
      tag: "Food",
      location: "Kannur,Kerala",
    },
    {
      id: "3",
      title: "New app for gaming",
      subTitle: "Install and enjoy the fast",
      image: require("../assets/images/pic.jpg"),
      percetage: "67",
      pledged: "$8767",
      days: "5",
      likes: "4561",
      tag: "App",
      location: "Taliparamba,Kerala",
    },
    {
      id: "4",
      title: "New app for gaming",
      subTitle: "Install and enjoy the fast",
      image: require("../assets/images/pic.jpg"),
      percetage: "67",
      pledged: "$8767",
      days: "5",
      likes: "4561",
      tag: "App",
      location: "Taliparamba,Kerala",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ width: "90%" }}>
        <StatusBarView />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={details}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <AppCard
                title={item.title}
                subTitle={item.subTitle}
                image={item.image}
                percentage={item.percetage}
                pledged={item.pledged}
                days={item.days}
                likes={item.likes}
                button="back project"
                tag={item.tag}
                location={item.location}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 50,
  },
  list: {
    width: "100%",
    backgroundColor: theme.colors.primary,
  },
});

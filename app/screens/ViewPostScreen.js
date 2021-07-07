import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppCard from "../components/AppCard";
import Header from "../components/Header";
import Loader from "../components/Loader";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";

export default function ViewPostScreen({ navigation }) {
  const [isReady, setIsReady] = useState(false);
  const [visible, setVisible] = useState(true);
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
      isApproved: true,
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
      isApproved: false,
    },
  ];

  setTimeout(() => {
    setIsReady(true);
    setVisible(false);
  }, 2000);

  return (
    <View style={styles.container}>
      <StatusBarView />
      <View style={{ width: "100%", padding: 20 }}>
        <Header onPress={() => navigation.openDrawer()} title="Posts" />
      </View>

      {isReady ? (
        <View style={{ width: "90%" }}>
          <FlatList
            data={details}
            showsVerticalScrollIndicator={false}
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
                  isApproved={item.isApproved}
                />
              </View>
            )}
          />
        </View>
      ) : (
        <View
          style={{
            width: "100%",
            flex: 1,
          }}
        >
          <Loader visible={visible} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 200,
  },
  list: {
    width: "100%",
    backgroundColor: theme.colors.primary,
  },
});

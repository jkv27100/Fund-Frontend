import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import data from "../api/postData";
import AppCard from "../components/AppCard";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";

export default function BookmarkScreen() {
  return (
    <View style={styles.container}>
      <StatusBarView />
      <View style={{ width: "90%", paddingTop: 40 }}>
        <FlatList
          data={data.postDetails}
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
                isBookMarked={true}
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
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
  },
});

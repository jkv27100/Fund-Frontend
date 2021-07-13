import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppCard from "../components/AppCard";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";
import { UserContext } from "../auth/context";
import NotAPostScreen from "../screens/NotAPosterScreen";
import routes from "../navigation/routes";

export default function BookmarkScreen({ navigation }) {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <StatusBarView />
      {user.bookmarked ? (
        <View style={{ width: "90%", paddingTop: 40 }}>
          <FlatList
            data={user.bookmarked}
            showsVerticalScrollIndicator={false}
            keyExtractor={(data) => data._id.toString()}
            renderItem={({ item }) => (
              <View style={styles.list}>
                <AppCard
                  title={item.title}
                  subTitle={item.subTitle}
                  images={item.images}
                  percentage={Math.floor(
                    (item.amountRaised / item.goalAmount) * 100
                  )}
                  pledged={item.goalAmount}
                  days={item.goalDays}
                  likes={item.upvotes}
                  button="back project"
                  tag={item.tag}
                  location={item.location}
                  onPress={() => navigation.navigate(routes.POST_DETAILS, item)}
                  isBookMarked={true}
                />
              </View>
            )}
          />
        </View>
      ) : (
        <NotAPostScreen
          text1="Your bookmarks appears here"
          text2="No bookmarks yet..."
        />
      )}
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

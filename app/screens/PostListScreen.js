import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppCard from "../components/AppCard";
import Header from "../components/Header";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";
import PostApi from "../api/getPostData";
import routes from "../navigation/routes";

export default function PostListScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data } = await PostApi.getApprovedPosts();
    setPosts(data.posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBarView />
      <View style={{ width: "100%", padding: 20 }}>
        <Header onPress={() => navigation.openDrawer()} title="Posts" />
      </View>
      <View style={{ width: "90%" }}>
        <FlatList
          data={posts}
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
                pledged={item.amountRaised}
                days={item.goalDays}
                likes={item.upvotes}
                button="back this post"
                tag={item.tag}
                location={item.location}
                isApproved={item.isApproved}
                postId={item._id}
                onPress={() => navigation.navigate(routes.POST_DETAILS, item)}
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
    paddingBottom: 200,
  },
  list: {
    width: "100%",
    backgroundColor: theme.colors.primary,
  },
});

import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppCard from "../components/AppCard";
import Header from "../components/Header";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";
import PostApi from "../api/getPostData";
import routes from "../navigation/routes";
import Loader from "../components/Loader";
import _ from "lodash";

export default function PostListScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [ready, setReady] = useState(false);
  const [selected, setSelected] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const getPosts = async () => {
    const { data } = await PostApi.getApprovedPosts();
    setPosts(data.posts);
    setFilteredData(data.posts);
  };

  useEffect(() => {
    getPosts();
    setTimeout(() => {
      setReady(true);
    }, 4000);
  }, []);

  const handleModal = () => {
    setModalVisible(true);
  };
  const handleRefresh = () => {
    getPosts();
  };
  const handleItemPick = (item) => {
    setSelected(item);

    let filteredPosts;
    switch (item) {
      case 1:
        filteredPosts = _.sortBy(posts, "amountRaised").reverse();
        setFilteredData(filteredPosts);
        break;

      case 2:
        filteredPosts = _.sortBy(posts, "upvotes").reverse();
        setFilteredData(filteredPosts);
        break;
      case 3:
        filteredPosts = _.filter(posts, { tag: "food" });
        setFilteredData(filteredPosts);
        break;
      case 4:
        filteredPosts = _.filter(posts, { tag: "tech" });
        setFilteredData(filteredPosts);
        break;
      case 5:
        filteredPosts = _.filter(posts, { tag: "art" });
        setFilteredData(filteredPosts);
        break;
    }

    setModalVisible(!modalVisible);
  };

  return (
    <>
      {ready ? (
        <View style={styles.container}>
          <StatusBarView />
          <View style={{ width: "100%", padding: 20 }}>
            <Header
              onPress={() => navigation.openDrawer()}
              title="Posts"
              selected={selected}
              setSelected={setSelected}
              handleItemPick={handleItemPick}
              modalVisible={modalVisible}
              handleModal={handleModal}
              setModalVisible={setModalVisible}
            />
          </View>

          <View style={{ width: "90%" }}>
            <FlatList
              data={filteredData}
              refreshing={refreshing}
              onRefresh={handleRefresh}
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
                    onPress={() =>
                      navigation.navigate(routes.POST_DETAILS, {
                        postData: item._id,
                      })
                    }
                  />
                </View>
              )}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            flex: 1,
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
    width: "100%",
    alignItems: "center",
    paddingBottom: 200,
  },
  list: {
    width: "100%",
    backgroundColor: theme.colors.primary,
  },
});

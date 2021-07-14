import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import Separator from "../components/Separator";
import StatusBarView from "../components/StatusBarView";
import postApi from "../api/getPostData";
import routes from "../navigation/routes";

export default function SearchScreen({ navigation }) {
  const [searched, setSearched] = useState("");
  const [posts, setPosts] = useState();

  const getPosts = async () => {
    const { data } = await postApi.getApprovedPosts();
    setPosts(data.posts);
  };
  useEffect(() => {
    getPosts();
  }, []);

  const [searchDetails, setSearchDetails] = useState(posts);

  const handleChange = (text) => {
    let key = text.replace(/\s/g, "").toLowerCase();

    setSearched(key);
    const filteredData = posts.filter(
      (item) => item.title.replace(/\s/g, "").toLowerCase() === searched
    );
    setSearchDetails(filteredData);
  };

  return (
    <View style={styles.container}>
      <StatusBarView />
      <View style={{ width: "90%", marginTop: 20 }}>
        <SearchBar onChangeText={(text) => handleChange(text)} />
      </View>
      {searched ? (
        <View style={styles.list}>
          <FlatList
            data={searchDetails}
            ItemSeparatorComponent={Separator}
            keyExtractor={(data) => data._id.toString()}
            renderItem={({ item }) => (
              <SearchResult
                title={item.title}
                subTitle={item.subTitle}
                onPress={() => navigation.navigate(routes.POST_DETAILS, item)}
              />
            )}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  list: {
    marginTop: 70,
    width: "90%",
    height: "100%",
  },
});

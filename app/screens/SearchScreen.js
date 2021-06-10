import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import Separator from "../components/Separator";
import StatusBarView from "../components/StatusBarView";

export default function SearchScreen() {
  const [searched, setSearched] = useState("");
  const searchData = [
    {
      id: "1",
      title: "Food",
      subTitle: "Amazing food near you",
    },
    {
      id: "2",
      title: "Art",
      subTitle: "Amazing food near you",
    },
    {
      id: "3",
      title: "Tech",
      subTitle: "Amazing food near you",
    },
    {
      id: "4",
      title: "Autonomus",
      subTitle: "Amazing food near you",
    },
    {
      id: "5",
      title: "Food",
      subTitle: "Amazing food near you",
    },
  ];
  const [searchDetails, setSearchDetails] = useState(searchData);

  const handleChange = (text) => {
    setSearched(text);
    const filteredData = searchData.filter((item) => item.title === searched);
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
            keyExtractor={(data) => data.id.toString()}
            renderItem={({ item }) => (
              <SearchResult title={item.title} subTitle={item.subTitle} />
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

import React, { useState, useEffect, useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import PostApi from "../api/getPostData";
import AppCard from "../components/AppCard";
import Header from "../components/Header";
import Loader from "../components/Loader";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";
import { UserContext } from "../auth/context";
import routes from "../navigation/routes";

export default function ViewPostScreen({ navigation }) {
  const [isReady, setIsReady] = useState(false);
  const [visible, setVisible] = useState(true);
  const [details, setDetails] = useState();
  const [refreshing, setFreshing] = useState(false);
  const { user } = useContext(UserContext);

  const getPosts = async () => {
    const { data } = await PostApi.getAllPostById(user._id);
    setDetails(data.postData);
  };
  useEffect(() => {
    getPosts();
  }, []);

  setTimeout(() => {
    setIsReady(true);
    setVisible(false);
  }, 2000);

  const handleRefresh = () => {
    getPosts();
  };

  return (
    <View style={styles.container}>
      <StatusBarView />
      <View style={{ width: "100%", padding: 20 }}>
        <Header onPress={() => navigation.openDrawer()} title="Your Posts" />
      </View>

      {isReady ? (
        <View style={{ width: "90%" }}>
          <FlatList
            data={details}
            showsVerticalScrollIndicator={false}
            keyExtractor={(data) => data._id.toString()}
            onRefresh={handleRefresh}
            refreshing={refreshing}
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
                  isApproved={item.isApproved}
                  onPress={() => navigation.navigate(routes.POST_DETAILS, item)}
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
    paddingBottom: 200,
  },
  list: {
    width: "100%",
    backgroundColor: theme.colors.primary,
  },
});

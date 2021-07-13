import React, { useContext, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";
import theme from "../config/theme";
import AppButton from "./AppButton";
import Icon from "./Icon";
import LocationTag from "./LocationTag";
import ProgressBar from "./ProgressBar";
import Tag from "./Tag";
import postInteractionApi from "../api/postInteraction";
import { UserContext } from "../auth/context";
import Toast from "../utilities/Toast";
import authStorage from "../auth/authStorage";

export default function AppCard({
  title,
  subTitle,
  images = [],
  percentage,
  pledged,
  days,
  likes,
  button,
  tag,
  location,
  isBookMarked,
  isApproved,
  onPress,
  postId,
}) {
  const [collapsed, setCollapsed] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleBookmark = async () => {
    if (!bookmarked) {
      const response = await postInteractionApi.addToBookmark(user._id, postId);
      let newUser = user;
      newUser.bookmarked.push(response.newPost);
      setUser(newUser);
      authStorage.storeToken(newUser);
      Toast.showToast(response.message);
      setBookmarked(true);
    }
    if (isBookMarked) {
      const response = await postInteractionApi.removeBookmark(
        user._id,
        postId
      );
      let newUser = response.newUser;
      setUser(newUser);
      authStorage.storeToken(newUser);
      Toast.showToast(response.message);
      setBookmarked(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => setCollapsed(!collapsed)}>
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: `data:image/jpg;base64,${images[0]}` }}
          style={styles.img}
        />
        <View style={styles.cardDetails}>
          <View style={styles.topSection}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
              <Text style={styles.subTitle} numberOfLines={1}>
                {subTitle}
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon
                name="bookmark"
                size={22}
                onPress={handleBookmark}
                color={
                  bookmarked || isBookMarked
                    ? theme.colors.yellow
                    : theme.colors.white
                }
              />
              <Icon
                name="heart"
                size={22}
                onPress={() => setUpvoted(!upvoted)}
                color={upvoted ? theme.colors.yellow : theme.colors.white}
              />
            </View>
          </View>
          <View style={styles.progress}>
            <ProgressBar percentage={percentage} />
          </View>
          {isApproved ? (
            <View style={{ width: "100%", paddingHorizontal: 5 }}>
              <View style={{ width: "98%", alignItems: "flex-end" }}>
                <Ionicons
                  name="checkmark-circle"
                  size={25}
                  color={theme.colors.success}
                />
              </View>
            </View>
          ) : (
            <View style={{ width: "100%", paddingHorizontal: 5 }}>
              <View style={{ width: "98%", alignItems: "flex-end" }}>
                <MaterialIcons
                  name="report-problem"
                  size={25}
                  color={theme.colors.danger}
                />
              </View>
            </View>
          )}
          <Collapsible collapsed={collapsed}>
            <View style={styles.expanded}>
              <View style={styles.details}>
                <Text
                  style={{ color: theme.colors.white, fontSize: 15 }}
                  numberOfLines={1}
                >
                  {pledged + " pledged"}
                </Text>
                <Text
                  style={{ color: theme.colors.white, fontSize: 15 }}
                  numberOfLines={1}
                >
                  {days + " days to go"}
                </Text>
                <Text
                  style={{ color: theme.colors.white, fontSize: 15 }}
                  numberOfLines={1}
                >
                  {likes + " likes"}
                </Text>
              </View>
              <View style={styles.btn}>
                <AppButton
                  text={button}
                  fontSize={14}
                  width={theme.buttonSizes.card.width}
                  height={theme.buttonSizes.card.height}
                  fontSize={12}
                  onPress={onPress}
                />
              </View>
            </View>
            <View style={styles.tag}>
              <Tag tag={tag} />
              <LocationTag location={location} />
            </View>
          </Collapsible>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    width: "100%",
    marginBottom: 30,
    overflow: "hidden",
    elevation: 4,
  },
  img: {
    width: "100%",
    height: 170,
  },
  cardDetails: {
    width: "100%",
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    width: "60%",
    marginLeft: 10,
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-around",
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    color: theme.colors.white,
  },
  subTitle: {
    color: theme.colors.white,
    fontSize: 13,
  },
  progress: {
    width: "85%",
    marginTop: 20,
    marginLeft: 10,
    paddingBottom: 25,
  },
  expanded: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    paddingBottom: 20,
  },
  details: {
    width: "40%",
  },
  tag: {
    marginHorizontal: 10,
    paddingBottom: 10,
    flexDirection: "row",
  },
});

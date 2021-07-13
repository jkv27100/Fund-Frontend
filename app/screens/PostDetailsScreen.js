import React, { useRef, useState } from "react";
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import ProgressBar from "../components/ProgressBar";
import Icon from "../components/Icon";
import theme from "../config/theme";
import AppButton from "../components/AppButton";
import Tag from "../components/Tag";
import LocationTag from "../components/LocationTag";
import Carousel from "../components/Carousel";
import RoundButton from "../components/RoundButton";
import CommentCarousel from "../components/CommentCarousel";
import routes from "../navigation/routes";

const minHeaderHeight = 70;
const maxHeaderHeight = 250;

export default function PostDetailsScreen({ navigation, route }) {
  const scrollPosition = useRef(new Animated.Value(0)).current;
  const postData = route.params;

  const headerHeight = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [maxHeaderHeight, minHeaderHeight],
    extrapolate: "clamp",
  });
  const opacity = scrollPosition.interpolate({
    inputRange: [0, 100, 200],
    outputRange: [1, 0.5, 0.3],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          height: headerHeight,
          width: "100%",
          opacity: opacity,
        }}
      >
        <Animated.Image
          source={{ uri: `data:image/jpg;base64,${postData.images[0]}` }}
          style={styles.img}
        />
      </Animated.View>

      <Animated.ScrollView
        style={{ width: "90%" }}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollPosition } } }],
          { useNativeDriver: false }
        )}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={styles.content}>
          <View style={styles.topSection}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {postData.title}
              </Text>
              <Text style={styles.subTitle} numberOfLines={1}>
                {postData.subTitle}
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="bookmark" size={20} />
              <Icon name="thumbs-up" size={20} />
              <Icon name="thumbs-down" size={20} />
            </View>
          </View>
          <View style={styles.progress}>
            <ProgressBar
              percentage={Math.floor(
                (postData.amountRaised / postData.goalAmount) * 100
              )}
            />
          </View>
          <View style={styles.details}>
            <View style={styles.section1}>
              <View style={{ marginBottom: 20 }}>
                <Text
                  style={{
                    color: theme.colors.white,
                    fontSize: 22,
                    fontWeight: "bold",
                  }}
                >
                  US $ {postData.amountRaised}
                </Text>
                <Text style={{ color: theme.colors.white, fontSize: 15 }}>
                  pledged of US $ {postData.goalAmount} goal
                </Text>
              </View>
              <AppButton
                text="Back This project"
                width={theme.buttonSizes.details.width}
                height={theme.buttonSizes.details.height}
                fontSize={14}
              />
              <View style={styles.tags}>
                <Tag tag={postData.tag} />
                <View style={{ marginLeft: 20 }}>
                  <LocationTag location={postData.location} />
                </View>
              </View>
            </View>
            <View style={styles.section2}>
              <View>
                <Text
                  style={{
                    color: theme.colors.white,
                    fontSize: 22,
                    fontWeight: "bold",
                  }}
                >
                  {postData.backers}
                </Text>
                <Text style={{ color: theme.colors.white, fontSize: 15 }}>
                  backers
                </Text>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{
                    color: theme.colors.white,
                    fontSize: 22,
                    fontWeight: "bold",
                  }}
                >
                  {postData.goalDays}
                </Text>
                <Text style={{ color: theme.colors.white, fontSize: 15 }}>
                  days to go
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.carousel}>
            <Carousel imageUris={postData.images} />
          </View>
        </View>

        <View style={{ width: "100%", alignItems: "flex-end" }}>
          <RoundButton
            icon={"folder-plus"}
            onPress={() =>
              navigation.navigate(routes.COMMENT, { postId: postData._id })
            }
          />
        </View>

        <View style={styles.description}>
          <Text
            style={{
              color: theme.colors.white,
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Description
          </Text>
          <Text
            style={{
              color: theme.colors.white,
              fontSize: 16,
              fontWeight: "900",
              marginTop: 20,
            }}
          >
            {postData.description}
          </Text>
        </View>
        <View style={styles.commentSection}>
          <Text
            style={{
              color: theme.colors.white,
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Comments
          </Text>
          <CommentCarousel comments={postData.comments} />
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  img: {
    height: "100%",
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  content: {
    width: "100%",
    marginTop: 10,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  titleContainer: {
    width: "60%",
  },
  iconContainer: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
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
    width: "90%",
    marginTop: 20,
  },
  details: {
    marginTop: 20,
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-between",
  },
  section1: {
    width: "50%",
  },
  tags: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  carousel: {
    marginTop: 30,
    height: 200,
    marginBottom: 0,
  },
  description: {
    width: "100%",
  },
  commentSection: {
    marginTop: 20,
    width: "100%",
    height: "50%",
    paddingBottom: 60,
  },
});

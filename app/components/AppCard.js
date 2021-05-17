import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Collapsible from "react-native-collapsible";
import Icon from "./Icon";
import theme from "../config/theme";
import ProgressBar from "./ProgressBar";
import AppButton from "./AppButton";
import Tag from "./Tag";
import LocationTag from "./LocationTag";
import routes from "../navigation/routes";

export default function AppCard({
  title,
  subTitle,
  image,
  percentage,
  pledged,
  days,
  likes,
  button,
  tag,
  location,
}) {
  const [collapsed, setCollapsed] = useState(true);
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => setCollapsed(!collapsed)}>
      <View style={styles.cardContainer}>
        <Image source={image} style={styles.img} />
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
              <Icon name="bookmark" size={20} />
              <Icon name="thumbs-up" size={20} />
              <Icon name="thumbs-down" size={20} />
            </View>
          </View>
          <View style={styles.progress}>
            <ProgressBar percentage={percentage} />
          </View>
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
                  onPress={() => navigation.navigate(routes.POST_DETAILS)}
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
  },
  iconContainer: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
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

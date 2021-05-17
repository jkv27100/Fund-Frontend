import React from "react";

import { ScrollView, StyleSheet, Text, View } from "react-native";
import Comments from "./Comments";

export default function CommentCarousel({ comments = [] }) {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {comments.map((item) => (
            <View key={item.id}>
              <Comments
                name={item.name}
                date={item.date}
                comment={item.comment}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import AppButton from "../components/AppButton";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";

export default function CommentScreen() {
  const [state, setState] = useState();
  return (
    <View style={styles.container}>
      <StatusBarView />
      <Text
        style={{
          color: theme.colors.white,
          fontSize: 25,
          fontWeight: "bold",
          padding: 20,
        }}
      >
        Add Comment
      </Text>
      <View style={styles.area}>
        <TextInput
          style={styles.input}
          placeholder={"Type here..."}
          placeholderTextColor={theme.colors.light}
          multiline
          numberOfLines={5}
          onChangeText={(text) => setState(text)}
        />
      </View>
      <View
        style={{
          width: "100%",
          padding: 20,
          alignItems: "flex-end",
        }}
      >
        <AppButton text="Comment" width={100} height={30} fontSize={14} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    width: "100%",
  },
  area: {
    width: "90%",
    padding: 5,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: 18,
  },
  input: {
    height: 150,
    margin: 10,
    color: theme.colors.white,
    textAlignVertical: "top",
  },
});

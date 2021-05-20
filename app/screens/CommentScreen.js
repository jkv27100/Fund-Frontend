import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, ToastAndroid } from "react-native";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";

export default function CommentScreen() {
  const [state, setState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handlePress = () => {
    if (state) {
      setIsLoading(true);
      setError(false);
      setTimeout(() => {
        setIsLoading(false);
        showToast();
      }, 2000);
    } else {
      setError(true);
    }
  };

  const showToast = () => {
    ToastAndroid.show("Comment Added succesfully", ToastAndroid.SHORT);
  };

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
      {error ? (
        <View style={{ paddingTop: 20, paddingLeft: 20 }}>
          <ErrorMessage message={"This is a required field"} visible={error} />
        </View>
      ) : null}
      <View
        style={{
          width: "100%",
          padding: 20,
          alignItems: "flex-end",
        }}
      >
        <AppButton
          text="Comment"
          width={100}
          height={30}
          fontSize={14}
          onPress={handlePress}
          loader={isLoading}
        />
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

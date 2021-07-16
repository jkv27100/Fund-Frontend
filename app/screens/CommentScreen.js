import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";
import commentApi from "../api/comment";
import { UserContext } from "../auth/context";
import Toast from "../utilities/Toast";
import routes from "../navigation/routes";

export default function CommentScreen({ route, navigation }) {
  const [state, setState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { postId } = route.params;
  const { user } = useContext(UserContext);

  const currentDate = new Date();
  const commentObj = {
    user_id: user._id,
    comment: state,
    postId,
    date:
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear() +
      "  " +
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds(),
    userName: user.name,
  };
  const handlePress = async () => {
    if (state) {
      setIsLoading(true);
      setError(false);
      const data = await commentApi.addComment(commentObj);

      setTimeout(() => {
        setIsLoading(false);
        Toast.showToast(data.message);
        navigation.navigate(routes.POST_DETAILS, { postData: postId });
      }, 1400);
    } else {
      setError(true);
    }
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

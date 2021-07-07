import React, { useState, useContext } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import AppButton from "../components/AppButton";
import StatusBarView from "../components/StatusBarView";
import Steps from "../components/Steps";
import theme from "../config/theme";
import { NewPostContext } from "../auth/context";
import postUpload from "../api/postUpload";
import Toast from "../utilities/Toast";

export default function NewPostScreenPage2() {
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const { postData, setPostData } = useContext(NewPostContext);

  const generateFormData = () => {
    const formData = new FormData();
    postData.imageUris.map((uri) =>
      formData.append("images", {
        name: new Date() + "_image",
        uri,
        type: "image/jpg",
      })
    );

    formData.append("user_id", postData.user_id);
    formData.append("title", postData.postValues.title);
    formData.append("subTitle", postData.postValues.subTitle);
    formData.append("goalAmount", postData.postValues.amount);
    formData.append("tag", postData.selectedItem);
    formData.append("description", state);

    return formData;
  };
  const handlePostUpload = async () => {
    setLoading(true);
    const data = generateFormData();
    const result = await postUpload.uploadPost(data);
    setTimeout(() => {
      setLoading(false);
      Toast.showToast(result.data.message);
    }, 1800);
  };
  return (
    <View style={styles.container}>
      <StatusBarView />
      <View style={styles.topSection}>
        <Text
          style={{
            color: theme.colors.white,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Describe
        </Text>
        <Steps total="2" step="2" />
      </View>
      <View style={{ paddingTop: 40, width: "100%", alignItems: "center" }}>
        <View style={styles.area}>
          <TextInput
            style={styles.input}
            placeholder={"Type here..."}
            placeholderTextColor={theme.colors.light}
            multiline
            numberOfLines={10}
            onChangeText={(text) => setState(text)}
          />
        </View>
      </View>
      <View style={{ width: "100%", alignItems: "center", paddingTop: 100 }}>
        <AppButton
          text="Post"
          width={theme.buttonSizes.login.width}
          height={theme.buttonSizes.login.height}
          onPress={handlePostUpload}
          loader={loading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  topSection: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
  },
  area: {
    width: "90%",
    padding: 5,
    height: 300,
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

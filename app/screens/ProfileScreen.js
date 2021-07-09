import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";
import { UserContext } from "../auth/context";
import ImageInput from "../components/ImageInput";
import AppButton from "../components/AppButton";
import imageUpload from "../api/imageUpload";
import Toast from "../utilities/Toast";
import imageAPI from "../api/profile";
import TextButton from "../components/TextButton";
import ProfileInfo from "../components/ProfileInfo";
import useAuth from "../auth/useAuth";

export default function ProfileScreen() {
  const { user } = useContext(UserContext);
  const [profileImg, setProfileImg] = useState();
  const [loading, setLoading] = useState(false);

  const auth = useAuth();

  const getProfileImage = async () => {
    const { result } = await imageAPI.getImage(user._id);
    setProfileImg(result);
  };

  useEffect(() => {
    getProfileImage();
  }, []);

  const handleImageUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("profile", {
      name: new Date() + "_profile",
      uri: profileImg,
      type: "image/jpg",
    });
    formData.append("user_id", user._id);

    try {
      const result = await imageUpload.upload(formData);
      if (result.ok) {
        setTimeout(() => {
          Toast.showToast(result.data.message);
          setLoading(false);
        }, 1400);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBarView />

      <View style={styles.topSection}>
        <ImageInput imageUri={profileImg} onChangeImage={setProfileImg} />
        <Text
          style={{
            color: theme.colors.white,
            fontSize: 18,
            padding: 10,
            fontWeight: "bold",
          }}
        >
          {user.name}
        </Text>

        <AppButton
          text="Change Profile"
          width={140}
          height={30}
          fontSize={13}
          loader={loading}
          onPress={handleImageUpload}
        />
      </View>
      <View style={styles.details}>
        <View style={styles.content}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 19,
              }}
            >
              Post
            </Text>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 19,
                paddingTop: 10,
              }}
            >
              {user.post_no}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: theme.colors.white, fontSize: 19 }}>
              Donated
            </Text>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 19,
                paddingTop: 10,
              }}
            >
              {`$ ${user.donated}`}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: theme.colors.white, fontSize: 19 }}>
              Balance
            </Text>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 19,
                paddingTop: 10,
              }}
            >
              {`$ ${user.balance}`}
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.userDetails}>
          <ProfileInfo text={user.email} name="envelope" />
          <ProfileInfo text={user.phone} name="phone" />
          <TextButton text={"Log Out"} onPress={() => auth.logOut()} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  topSection: {
    width: "100%",
    height: "40%",
    backgroundColor: theme.colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 35,
  },
  details: {
    width: "80%",
    height: "15%",
    backgroundColor: theme.colors.primary,
    position: "absolute",
    top: "35%",
    elevation: 4,
    borderRadius: 18,
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 30,
  },
  userDetails: {
    width: "80%",
    marginTop: 100,
    alignItems: "center",
    paddingBottom: 20,
  },
});

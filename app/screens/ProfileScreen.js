import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
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
import userApi from "../api/register";
import Loader from "../components/Loader";
import * as Clipboard from "expo-clipboard";
import QRApi from "../api/QRCode";

export default function ProfileScreen({ navigation }) {
  const { user } = useContext(UserContext);
  const [profileImg, setProfileImg] = useState();
  const [userDetails, setUserDetails] = useState();
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [QRCode, setQRCode] = useState();

  const auth = useAuth();

  const copyToClipboard = () => {
    Clipboard.default.setString(user.accountNo);
    Toast.showToast("Copied to clipboard");
  };

  const getProfileImage = async () => {
    const { result } = await imageAPI.getImage(user._id);
    setProfileImg(result);
  };

  const handleModal = async () => {
    const QRCode = await QRApi.getQR(user.accountNo);
    setQRCode(QRCode.qr);
    setModalVisible(true);
  };

  const getUser = async () => {
    const response = await userApi.getUserData(user._id);
    setUserDetails(response.userData);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getProfileImage();
      getUser();
      setTimeout(() => {
        setReady(true);
      }, 3000);
    });

    return unsubscribe;
  }, [navigation]);

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
    <>
      {ready ? (
        <View style={styles.container}>
          <StatusBarView />
          <Modal
            animationType="slide"
            visible={modalVisible}
            transparent
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Image source={{ uri: QRCode }} style={styles.QRCode} />
                <TouchableOpacity onPress={copyToClipboard}>
                  <Text
                    selectable={true}
                    style={{
                      color: theme.colors.white,
                      padding: 20,
                      fontSize: 18,
                    }}
                  >{`Your account address is ${user.accountNo}`}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View style={styles.topSection}>
            <ImageInput imageUri={profileImg} onChangeImage={setProfileImg} />
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 18,
                padding: 5,
                fontWeight: "bold",
              }}
            >
              {userDetails.name}
            </Text>
            <View style={{ marginBottom: 50 }}>
              <AppButton
                text="Change Profile"
                width={140}
                height={30}
                fontSize={13}
                loader={loading}
                onPress={handleImageUpload}
              />
            </View>
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
                  {userDetails.post_no}
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
                  {`$ ${userDetails.donated}`}
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
                  {`$ ${userDetails.balance}`}
                </Text>
              </View>
            </View>
          </View>
          <ScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <View style={styles.userDetails}>
              <AppButton
                text="Show QR Code"
                width={120}
                height={40}
                fontSize={14}
                onPress={handleModal}
              />
              <ProfileInfo text={userDetails.email} name="envelope" />
              <ProfileInfo text={userDetails.phone} name="phone" />
              <TextButton text={"Log Out"} onPress={() => auth.logOut()} />
            </View>
          </ScrollView>
        </View>
      ) : (
        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader visible={true} />
        </View>
      )}
    </>
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
    marginTop: 80,
    alignItems: "center",
    paddingBottom: 20,
  },
  modalContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.black,
    opacity: 0.8,
  },
  QRCode: {
    width: 250,
    height: 250,
  },
  modalContent: {
    width: "100%",
    alignItems: "center",
  },
});

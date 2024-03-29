import { Formik } from "formik";
import React, { useState, useContext, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import ImageInput from "../components/ImageInput";
import ImageInputList from "../components/ImageInputList";
import InputField from "../components/InputField";
import ItemPIcker from "../components/ItemPIcker";
import StatusBarView from "../components/StatusBarView";
import Steps from "../components/Steps";
import theme from "../config/theme";
import routes from "../navigation/routes";
import { UserContext, NewPostContext } from "../auth/context";
import NotAPosterScreen from "./NotAPosterScreen";
import * as Location from "expo-location";
import locationApi from "../api/location";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  subTitle: Yup.string().required().label("Subtitle"),
  amount: Yup.string().required().label("Goal"),
});

export default function NewPostScreen({ navigation }) {
  const [selectedItem, setSelectedItem] = useState("");
  const [imageUris, setImageUris] = useState([]);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState();
  const { user } = useContext(UserContext);
  const { postData, setPostData } = useContext(NewPostContext);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") return Toast.showToast("Permission Denied");

    let { coords } = await Location.getCurrentPositionAsync({});
    const res = await locationApi.getLocationName(
      coords.latitude,
      coords.longitude
    );
    setLocation(res.locality + ", " + res.county);
  };

  useEffect(() => {
    getLocation();
  });

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  const handleSubmit = (postValues) => {
    setLoading(true);
    setPostData({
      postValues,
      imageUris,
      selectedItem,
      user_id: user._id,
      location,
    });

    setTimeout(() => {
      setLoading(false);
      navigation.navigate(routes.NEW_POST2);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {user.isCharity || user.isKickStarter ? (
        <ScrollView style={{ width: "100%" }}>
          <StatusBarView />
          <View style={styles.topSection}>
            <Steps total="2" step="1" />
          </View>
          <View style={styles.inputSection}>
            <Formik
              initialValues={{ title: "", subTitle: "", amount: "" }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({
                handleChange,
                handleSubmit,
                errors,
                setFieldTouched,
                touched,
              }) => (
                <>
                  <View style={styles.content}>
                    <InputField
                      placeholder="Title"
                      onBlur={() => setFieldTouched("title")}
                      onChangeText={handleChange("title")}
                    />
                    <ErrorMessage
                      message={errors.title}
                      visible={touched.title}
                    />
                    <InputField
                      placeholder="Subtitle"
                      onBlur={() => setFieldTouched("subTitle")}
                      onChangeText={handleChange("subTitle")}
                    />
                    <ErrorMessage
                      message={errors.subTitle}
                      visible={touched.subTitle}
                    />
                    <InputField
                      placeholder="Goal Amount"
                      keyboardType="number-pad"
                      onBlur={() => setFieldTouched("amount")}
                      onChangeText={handleChange("amount")}
                    />
                    <ErrorMessage
                      message={errors.amount}
                      visible={touched.amount}
                    />
                    <ItemPIcker
                      selectedItem={selectedItem}
                      setSelectedItem={setSelectedItem}
                    />
                    <Text style={{ color: theme.colors.white, fontSize: 14 }}>
                      Add Extra Images
                    </Text>
                    <ImageInputList
                      imageUris={imageUris}
                      onAddImage={(uri) => handleAdd(uri)}
                      onRemoveImage={(uri) => handleRemove(uri)}
                    />
                    <View style={styles.bottom}>
                      <View style={styles.btn}>
                        <AppButton
                          text="Next"
                          onPress={handleSubmit}
                          width={theme.buttonSizes.login.width}
                          height={theme.buttonSizes.login.height}
                          loader={loading}
                        />
                      </View>
                    </View>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      ) : (
        <NotAPosterScreen
          text1="You Are Not A Poster !"
          text2="Apply for poster role or Wait for the verification..."
        />
      )}
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
    paddingTop: 40,
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  inputSection: {
    width: "100%",
  },
  content: {
    width: "90%",
    paddingLeft: 50,
    marginTop: "5%",
  },

  bottom: {
    width: "100%",
    alignItems: "center",
    marginTop: 25,
  },
});

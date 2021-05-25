import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import ImageInput from "../components/ImageInput";
import InputField from "../components/InputField";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";
import routes from "../navigation/routes";
import SuccesScreen from "./SuccesScreen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  adress: Yup.string(),
  UID: Yup.string().required().min(12).max(12).label("Adhar No."),
});

export default function CharityApplicationScreen({ navigation }) {
  const [imageUri, setImageUri] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = (values) => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      navigation.navigate(routes.AFTERAPPLIED);
    }, 2800);
    console.log(values);
  };
  return (
    <View style={styles.container}>
      <StatusBarView />
      <SuccesScreen visible={visible} />
      <Formik
        initialValues={{ name: "", UID: "", email: "", adress: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.image}>
              <ImageInput imageUri={imageUri} setImageUri={setImageUri} />
              <Text
                style={{
                  color: theme.colors.white,
                  fontSize: 25,
                  fontWeight: "bold",
                  paddingLeft: 20,
                }}
              >
                Adhar Card
              </Text>
            </View>
            <View style={styles.content}>
              <InputField
                placeholder="Name as in adhar"
                name="user"
                onBlur={() => setFieldTouched("name")}
                onChangeText={handleChange("name")}
                autoCorrect={false}
              />
              <ErrorMessage message={errors.name} visible={touched.name} />
              <InputField
                placeholder="Adhar No."
                name="id-badge"
                keyboardType="number-pad"
                onBlur={() => setFieldTouched("UID")}
                onChangeText={handleChange("UID")}
                autoCorrect={false}
              />
              <ErrorMessage message={errors.UID} visible={touched.UID} />
              <InputField
                placeholder="email"
                name="envelope"
                keyboardType="email-address"
                autoCapitalize="none"
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
                autoCorrect={false}
              />
              <ErrorMessage message={errors.email} visible={touched.email} />
              <InputField
                placeholder="Address of organization (optional)"
                name="address-book"
                onBlur={() => setFieldTouched("adress")}
                onChangeText={handleChange("adress")}
                autoCorrect={false}
              />
              <ErrorMessage message={errors.adress} visible={touched.adress} />
              <View style={styles.bottom}>
                <View style={styles.btn}>
                  <AppButton
                    text="Apply"
                    onPress={handleSubmit}
                    width={theme.buttonSizes.login.width}
                    height={theme.buttonSizes.login.height}
                  />
                </View>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    paddingTop: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 30,
  },

  content: {
    width: "90%",
    paddingLeft: 50,
    marginTop: "10%",
  },

  bottom: {
    width: "100%",
    alignItems: "center",
    marginTop: 25,
  },
});

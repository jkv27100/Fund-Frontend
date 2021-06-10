import { Formik } from "formik";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import DocumentPicker from "../components/DocumentPicker";
import ErrorMessage from "../components/ErrorMessage";
import InputField from "../components/InputField";
import StatusBarView from "../components/StatusBarView";
import theme from "../config/theme";
import routes from "../navigation/routes";
import SuccesScreen from "./SuccesScreen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  adress: Yup.string().required().label("Adress"),
  ID: Yup.string().required().label("Company Id"),
});

export default function KickStarterApplicationScreen({ navigation }) {
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
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.topSection}>
          <DocumentPicker text={"Incorporation Certificate"} />
          <DocumentPicker text={"Startup India Certificate"} />
        </View>
        <View style={styles.inputSection}>
          <SuccesScreen visible={visible} />
          <Formik
            initialValues={{ name: "", ID: "", email: "", adress: "" }}
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
                    placeholder="Company Name"
                    name="user"
                    onBlur={() => setFieldTouched("name")}
                    onChangeText={handleChange("name")}
                    autoCorrect={false}
                  />
                  <ErrorMessage message={errors.name} visible={touched.name} />
                  <InputField
                    placeholder="Company Id"
                    name="id-badge"
                    keyboardType="number-pad"
                    onBlur={() => setFieldTouched("ID")}
                    onChangeText={handleChange("ID")}
                    autoCorrect={false}
                  />
                  <ErrorMessage message={errors.ID} visible={touched.ID} />
                  <InputField
                    placeholder="Company Email"
                    name="envelope"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onBlur={() => setFieldTouched("email")}
                    onChangeText={handleChange("email")}
                    autoCorrect={false}
                  />
                  <ErrorMessage
                    message={errors.email}
                    visible={touched.email}
                  />
                  <InputField
                    placeholder="Company Adress"
                    name="address-book"
                    onBlur={() => setFieldTouched("adress")}
                    onChangeText={handleChange("adress")}
                    autoCorrect={false}
                  />
                  <ErrorMessage
                    message={errors.adress}
                    visible={touched.adress}
                  />
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
      </ScrollView>
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
    paddingVertical: 70,
    width: "100%",
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

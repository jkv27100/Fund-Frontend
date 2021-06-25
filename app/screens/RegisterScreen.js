import { Formik } from "formik";
import React, { useState, useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import InputField from "../components/InputField";
import StatusBarView from "../components/StatusBarView";
import Steps from "../components/Steps";
import TextButton from "../components/TextButton";
import theme from "../config/theme";
import routes from "../navigation/routes";
import AuthContext from "../context/AuthContext";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().min(10).max(10).label("Phone"),
});

export default function RegisterScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  const authContext = useContext(AuthContext);

  const handleFormSubmit = (formValues) => {
    setLoading(true);
    authContext.setNewUserData(formValues);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate(routes.REGISTER_2);
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <StatusBarView />
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Formik
          initialValues={{ name: "", email: "", phone: "" }}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <View style={styles.content}>
              <View style={styles.header}>
                <Text style={{ fontSize: 36, color: theme.colors.white }}>
                  New Account
                </Text>
                <Steps total="3" step="1" />
              </View>
              <InputField
                placeholder="Name"
                name="user"
                onBlur={() => setFieldTouched("name")}
                onChangeText={handleChange("name")}
                autoCorrect={false}
              />
              <ErrorMessage message={errors.name} visible={touched.name} />
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
                placeholder="Phone"
                name="phone-alt"
                keyboardType="number-pad"
                onBlur={() => setFieldTouched("phone")}
                onChangeText={handleChange("phone")}
                autoCorrect={false}
              />
              <ErrorMessage message={errors.phone} visible={touched.phone} />
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
                <View style={styles.login}>
                  <Text style={{ color: theme.colors.white }}>
                    Already a user ?{" "}
                  </Text>
                  <TextButton
                    text="Log In"
                    onPress={() => navigation.navigate(routes.LOGIN)}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
  content: {
    width: "80%",
    marginTop: "20%",
  },
  header: {
    marginBottom: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottom: {
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
  btn: {
    marginTop: 100,
  },
  login: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingBottom: 20,
  },
});

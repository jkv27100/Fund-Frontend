import { Formik } from "formik";
import React, { useState, useContext } from "react";
import { ScrollView, StyleSheet, Text, ToastAndroid, View } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";
import API from "../api/auth";
import { UserContext } from "../auth/context";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import InputField from "../components/InputField";
import StatusBarView from "../components/StatusBarView";
import TextButton from "../components/TextButton";
import theme from "../config/theme";
import routes from "../navigation/routes";
import authStorage from "../auth/authStorage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

export default function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const userContext = useContext(UserContext);

  const handlePasswordPress = () => {
    console.log("pressed");
  };

  const handleSubmit = async (credentials) => {
    setLoading(true);

    const res = await API.authenticate(credentials);

    if (res.status === 400) {
      ToastAndroid.showWithGravity(
        res.data.error,
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
      return setLoading(false);
    }

    if (res.status === 200) {
      ToastAndroid.showWithGravity(
        "Login Succesful",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
      const userData = jwtDecode(res.data.authToken);

      setTimeout(() => {
        setLoading(false);
        userContext.setUser(userData);
        authStorage.storeToken(res.data.authToken);
      }, 1800);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBarView />
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Formik
          initialValues={{ email: "", password: "" }}
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
            <View style={styles.content}>
              <Text style={styles.text}>Log In</Text>
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
                placeholder="password"
                name="lock"
                autoCapitalize="none"
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
                autoCorrect={false}
                secureTextEntry
              />
              <ErrorMessage
                message={errors.password}
                visible={touched.password}
              />
              <View style={styles.bottom}>
                <TextButton
                  text="Forgot Password"
                  onPress={handlePasswordPress}
                />
                <View style={styles.btn}>
                  <AppButton
                    text="Log in"
                    onPress={handleSubmit}
                    width={theme.buttonSizes.login.width}
                    height={theme.buttonSizes.login.height}
                    loader={loading}
                  />
                </View>
                <View style={styles.signup}>
                  <Text style={{ color: theme.colors.white }}>
                    First Time Here ?{" "}
                  </Text>
                  <TextButton
                    text="Sign Up"
                    onPress={() => navigation.navigate(routes.REGISTER_1)}
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
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
  },
  content: {
    width: "75%",
    marginTop: "20%",
  },
  text: {
    fontSize: 36,
    color: theme.colors.white,
    marginBottom: "40%",
  },
  bottom: {
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
  btn: {
    marginTop: 100,
  },
  signup: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingBottom: 20,
  },
});

import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppButton from "../components/AppButton";
import InputField from "../components/InputField";
import StatusBarView from "../components/StatusBarView";
import TextButton from "../components/TextButton";
import { Formik } from "formik";
import * as Yup from "yup";
import theme from "../config/theme";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

export default function LoginScreen() {
  const handlePasswordPress = () => {
    console.log("pressed");
  };
  const handleSignUp = () => {
    console.log("pressed");
  };
  const handleSubmit = () => {
    console.log("submitted");
  };
  return (
    <View style={styles.container}>
      <StatusBarView />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
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
                <AppButton text="Log in" onPress={handleSubmit} />
              </View>
              <View style={styles.signup}>
                <Text style={{ color: theme.colors.white }}>
                  First Time Here ?{" "}
                </Text>
                <TextButton text="Sign Up" onPress={handleSignUp} />
              </View>
            </View>
          </View>
        )}
      </Formik>
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
  },
});

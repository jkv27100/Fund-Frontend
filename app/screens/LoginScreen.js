import { Formik } from "formik";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";
import * as Clipboard from "expo-clipboard";

import API from "../api/auth";
import useAuth from "../auth/useAuth";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import InputField from "../components/InputField";
import StatusBarView from "../components/StatusBarView";
import TextButton from "../components/TextButton";
import theme from "../config/theme";
import routes from "../navigation/routes";
import Toast from "../utilities/Toast";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

export default function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const auth = useAuth();
  const ADMIN_EMAIL = "kvjagannath63@gmail.com";
  const handlePasswordPress = () => {
    setModalVisible(true);
  };

  const handleSubmit = async (credentials) => {
    setLoading(true);

    const res = await API.authenticate(credentials);

    if (res.status === 400) {
      Toast.showToast(res.data.error);
      return setLoading(false);
    }

    if (res.status === 200) {
      Toast.showToast("Login Successfull");
      setTimeout(() => {
        setLoading(false);
        auth.logIn(res.data.authToken);
      }, 1800);
    }
  };

  const openEmailClient = () => {
    Clipboard.default.setString(ADMIN_EMAIL);
    Toast.showToast("Mail copied to clipboard");
  };
  return (
    <View style={styles.container}>
      <StatusBarView />
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            width: "100%",
            flex: 1,
            backgroundColor: theme.colors.black,
            opacity: 0.8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 40, padding: 20 }}>😐</Text>
          <Text style={{ color: theme.colors.white, fontSize: 18 }}>
            Send a mail to Admin to reset your password
          </Text>
          <TouchableOpacity onPress={openEmailClient}>
            <Text
              style={{ color: theme.colors.white, fontSize: 20, padding: 20 }}
            >
              {ADMIN_EMAIL}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
                  <Text
                    style={{ color: theme.colors.white, paddingHorizontal: 10 }}
                  >
                    First Time Here ?
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
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingBottom: 20,
  },
});

import { Formik } from "formik";
import React, { useState, useContext } from "react";
import { ScrollView, StyleSheet, Text, ToastAndroid, View } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import InputField from "../components/InputField";
import StatusBarView from "../components/StatusBarView";
import Steps from "../components/Steps";
import theme from "../config/theme";
import routes from "../navigation/routes";
import { AuthContext } from "../auth/context";
import API from "../api/register";

const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(8).label("Password"),
  cpass: Yup.string().required().min(8).label("Confirm Password"),
});

export default function PasswordConfirmScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const authContext = useContext(AuthContext);

  const handleSubmit = async ({ password, cpass }) => {
    if (password !== cpass)
      return ToastAndroid.showWithGravity(
        "Please Confirm The Password",
        ToastAndroid.LONG,
        ToastAndroid.TOP
      );

    let newUser = authContext.newUserData;
    newUser["password"] = password;
    authContext.setNewUserData(newUser);

    const res = await API.registerNewUser(newUser);

    if (res.status === 200) {
      setLoading(true);
      ToastAndroid.showWithGravity(
        res.data,
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
      setTimeout(() => {
        setLoading(false);
        navigation.navigate(routes.LOGIN);
      }, 1800);
    }
    if (res.status === 400) {
      setLoading(true);
      ToastAndroid.showWithGravity(
        res.data,
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
      setTimeout(() => {
        setLoading(false);
        navigation.navigate(routes.LOGIN);
      }, 1800);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <StatusBarView />

        <Formik
          initialValues={{ password: "", cpass: "" }}
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
              <View style={styles.header}>
                <Text style={{ fontSize: 36, color: theme.colors.white }}>
                  Set Password
                </Text>
                <Steps total="3" step="3" />
              </View>
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
              <InputField
                placeholder="confirm"
                name="lock"
                autoCapitalize="none"
                onBlur={() => setFieldTouched("cpass")}
                onChangeText={handleChange("cpass")}
                autoCorrect={false}
                secureTextEntry
              />
              <ErrorMessage message={errors.cpass} visible={touched.cpass} />

              <View style={styles.bottom}>
                <View style={styles.btn}>
                  <AppButton
                    text="Sign Up"
                    onPress={handleSubmit}
                    width={theme.buttonSizes.login.width}
                    height={theme.buttonSizes.login.height}
                    loader={loading}
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
    marginTop: "10%",
  },
  header: {
    marginBottom: "45%",
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottom: {
    width: "100%",
    alignItems: "center",
    marginTop: 100,
  },
});

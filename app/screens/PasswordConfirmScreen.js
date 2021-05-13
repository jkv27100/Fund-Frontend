import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import InputField from "../components/InputField";
import StatusBarView from "../components/StatusBarView";
import { Formik } from "formik";
import * as Yup from "yup";
import theme from "../config/theme";
import ErrorMessage from "../components/ErrorMessage";
import Steps from "../components/Steps";
import Icon from "../components/Icon";
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(8).label("Password"),
  cpass: Yup.string().required().min(8).label("Password"),
});

export default function PasswordConfirmScreen({ navigation }) {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <View style={styles.container}>
      <StatusBarView />

      <Formik
        initialValues={{ password: "", cpass: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View style={styles.content}>
            <Icon
              name="arrow-left"
              size={30}
              onPress={() => navigation.navigate(routes.REGISTER_2)}
            />
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
                <AppButton text="Sign Up" onPress={handleSubmit} />
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
    marginTop: "10%",
  },
  header: {
    marginBottom: "60%",
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

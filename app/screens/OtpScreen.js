import React from "react";
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
  otp: Yup.number().required().label("OTP"),
});
export default function OtpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBarView />

      <Formik
        initialValues={{ otp: "" }}
        onSubmit={() => navigation.navigate(routes.REGISTER_3)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View style={styles.content}>
            <Icon
              name="arrow-left"
              size={30}
              onPress={() => navigation.navigate(routes.REGISTER_1)}
            />
            <View style={styles.header}>
              <Text style={{ fontSize: 36, color: theme.colors.white }}>
                Enter OTP
              </Text>
              <Steps total="3" step="2" />
            </View>

            <InputField
              placeholder="OTP"
              name="sort-numeric-down"
              keyboardType="number-pad"
              onBlur={() => setFieldTouched("otp")}
              onChangeText={handleChange("otp")}
              autoCorrect={false}
            />
            <ErrorMessage message={errors.otp} visible={touched.otp} />
            <View style={styles.bottom}>
              <View style={styles.btn}>
                <AppButton text="Continue" onPress={handleSubmit} />
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

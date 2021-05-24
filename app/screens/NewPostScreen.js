import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import ImageInput from "../components/ImageInput";
import InputField from "../components/InputField";
import StatusBarView from "../components/StatusBarView";
import Steps from "../components/Steps";
import theme from "../config/theme";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  subTitle: Yup.string().required().label("Subtitle"),
  amount: Yup.string().required().label("Goal"),
});

export default function NewPostScreen() {
  return (
    <View style={styles.container}>
      <StatusBarView />
      <StatusBar style="light" />
      <View style={styles.topSection}>
        <ImageInput />
        <Steps total="2" step="1" />
      </View>
      <View style={styles.inputSection}>
        <Formik
          initialValues={{ title: "", subTitle: "", amount: "" }}
          onSubmit={() => console.log("")}
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
                <ErrorMessage message={errors.title} visible={touched.title} />
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

                <View style={styles.bottom}>
                  <View style={styles.btn}>
                    <AppButton
                      text="Next"
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
    justifyContent: "space-between",
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

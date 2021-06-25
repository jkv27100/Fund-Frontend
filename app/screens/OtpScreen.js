import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, ToastAndroid } from "react-native";
import AppButton from "../components/AppButton";
import InputField from "../components/InputField";
import StatusBarView from "../components/StatusBarView";
import { Formik } from "formik";
import * as Yup from "yup";
import theme from "../config/theme";
import AuthContext from "../context/AuthContext";
import ErrorMessage from "../components/ErrorMessage";
import Steps from "../components/Steps";
import routes from "../navigation/routes";
import { create } from "apisauce";

const validationSchema = Yup.object().shape({
  otp: Yup.string().required().min(6).max(6).label("OTP"),
});

export default function OtpScreen({ navigation }) {
  const [otpSessionKey, setOtpSessionKey] = useState();
  const [loading, setLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const API_KEY = "7f6d6c2d-d504-11eb-8089-0200cd936042";
  const MOBILE_NO = authContext.newUserData.phone;
  const GET_OTP_URL = `https://2factor.in/API/V1/${API_KEY}/SMS/+91${MOBILE_NO}`;
  const VERIFY_OTP_URL = `https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${otpSessionKey}`;
  const getOtpApi = create({ baseURL: GET_OTP_URL });
  const verifyOtpApi = create({ baseURL: VERIFY_OTP_URL });

  const handleGetOtp = async () => {
    const { data } = await getOtpApi.get("/AUTOGEN");

    ToastAndroid.showWithGravity(
      `OTP sent to ${MOBILE_NO} `,
      ToastAndroid.LONG,
      ToastAndroid.TOP
    );

    if (data.Status === "Success") setOtpSessionKey(data.Details);
  };

  const handleSubmit = async ({ otp }) => {
    navigation.navigate(routes.REGISTER_3);
    // const { data } = await verifyOtpApi.get(`/${otp}`);

    // if (data.Status === "Error")
    //   return ToastAndroid.showWithGravity(
    //     data.Details,
    //     ToastAndroid.LONG,
    //     ToastAndroid.TOP
    //   );
    // if (data.Details === "OTP Matched") {
    //   setLoading(true);

    //   ToastAndroid.show("OTP Verified", ToastAndroid.SHORT);
    //   setTimeout(() => {
    //     setLoading(false);

    //     navigation.navigate(routes.REGISTER_3);
    //   }, 1500);
    // }
  };
  return (
    <View style={styles.container}>
      <StatusBarView />

      <Formik
        initialValues={{ otp: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View style={styles.content}>
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
                <AppButton
                  text="get otp"
                  onPress={handleGetOtp}
                  width={120}
                  height={50}
                  fontSize={14}
                />
                <AppButton
                  text="verify"
                  onPress={handleSubmit}
                  width={120}
                  height={50}
                  fontSize={14}
                  loader={loading}
                />
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
  btn: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
});

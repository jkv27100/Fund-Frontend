import React, { useState, useEffect, useContext } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import theme from "../config/theme";
import StatusBarView from "../components/StatusBarView";
import userApi from "../api/register";
import imageAPI from "../api/profile";
import { UserContext } from "../auth/context";
import AppButton from "../components/AppButton";
import Loader from "../components/Loader";
import paymentApi from "../api/payment";
import SuccesScreen from "./SuccesScreen";
import routes from "../navigation/routes";

export default function PaymentScreen({ navigation, route }) {
  const [userDetails, setUserDetails] = useState();
  const [image, setImage] = useState();
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const [ready, setReady] = useState();
  const [visible, setVisible] = useState(false);
  const recipientID = route.params.post.user_id;

  useEffect(() => {
    getProfileImage();
    getUser();
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);

  const getProfileImage = async () => {
    const { result } = await imageAPI.getImage(recipientID);
    setImage(result);
  };
  const getUser = async () => {
    const response = await userApi.getUserData(recipientID);
    setUserDetails(response.userData);
  };

  const handlePayment = async () => {
    setLoading(true);
    const val = parseInt(amount);
    const result = await paymentApi.sendETH(
      user.accountNo,
      userDetails.accountNo,
      val
    );

    setVisible(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
      navigation.navigate(routes.TRANSACTION);
    }, 2800);
  };

  return (
    <>
      {ready ? (
        <View style={styles.container}>
          <StatusBarView />
          <SuccesScreen visible={visible} />
          <View style={styles.topSection}>
            <Image
              source={{ uri: `data:image/jpg;base64,${image}` }}
              style={styles.image}
            />
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 18,
                paddingTop: 5,
              }}
            >
              {userDetails.name}
            </Text>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 15,
                paddingVertical: 20,
              }}
              numberOfLines={1}
            >
              To ETH Address: {userDetails.accountNo}
            </Text>
          </View>
          <View style={styles.amountInput}>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 50,
                paddingRight: 10,
              }}
            >
              ₹
            </Text>
            <TextInput
              placeholder="0"
              placeholderTextColor={theme.colors.light}
              style={{ fontSize: 50, color: theme.colors.white }}
              onChangeText={(text) => setAmount(text)}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.bottomSection}>
            <View style={styles.payBox}>
              <Text
                style={{
                  color: theme.colors.white,
                  fontSize: 15,
                  paddingVertical: 20,
                }}
                numberOfLines={1}
              >
                From Adress: {user.accountNo}
              </Text>
              <AppButton
                text="PAY"
                width={200}
                height={40}
                onPress={handlePayment}
                loader={loading}
              />
            </View>
          </View>
        </View>
      ) : (
        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader visible={true} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.primary,
    alignItems: "center",
  },
  topSection: {
    width: "70%",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  amountInput: {
    marginTop: 100,
    width: "80%",
    justifyContent: "center",
    flexDirection: "row",
  },
  bottomSection: {
    width: "90%",
    flex: 1,
    marginTop: 180,
    paddingBottom: 20,
  },
  payBox: {
    borderColor: theme.colors.light,
    borderRadius: 10,
    borderWidth: 1,
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
});

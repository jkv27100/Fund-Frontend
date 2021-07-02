import { ToastAndroid } from "react-native";

const showToast = (message) => {
  return ToastAndroid.showWithGravity(
    message,
    ToastAndroid.LONG,
    ToastAndroid.TOP
  );
};

export default { showToast };

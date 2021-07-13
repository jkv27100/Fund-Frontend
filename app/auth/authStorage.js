import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "authToken";

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem(KEY, token);
  } catch (error) {
    return error;
  }
};

const getToken = async () => {
  try {
    return await AsyncStorage.getItem(KEY);
  } catch (error) {
    return error;
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? token : null;
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(KEY);
  } catch (error) {
    return error;
  }
};

export default { storeToken, removeToken, getUser };

import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = JSON.stringify("authToken");

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(token));
  } catch (error) {
    console.log("store token " + error);
  }
};

const getToken = async () => {
  try {
    return await AsyncStorage.getItem(KEY);
  } catch (error) {
    console.log("get token " + error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? JSON.parse(token) : null;
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(KEY);
  } catch (error) {
    console.log("remove user " + error);
  }
};

export default { storeToken, removeToken, getUser };

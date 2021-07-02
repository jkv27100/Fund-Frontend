import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const KEY = "authToken";

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(KEY, token);
  } catch (error) {
    return error;
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(KEY);
  } catch (error) {
    return error;
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(KEY);
  } catch (error) {
    return error;
  }
};

export default { storeToken, removeToken, getUser };

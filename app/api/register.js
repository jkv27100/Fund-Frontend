import server from "./server";

const endPoint = "/register";
const getUserEndPoint = "/register/get_user";

const registerNewUser = async (user) => {
  const result = await server.post(endPoint, user);
  return result;
};

const getUserData = async (user_id) => {
  const result = await server.post(getUserEndPoint, { user_id });
  return result;
};

export default { registerNewUser, getUserData };

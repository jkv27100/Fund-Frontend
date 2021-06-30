import server from "./server";

const endPoint = "/register";

const getUsers = async () => {
  const result = await server.get(endPoint);
  return result;
};

const registerNewUser = async (user) => {
  const result = await server.post(endPoint, user);
  return result;
};

export default { registerNewUser };

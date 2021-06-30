import server from "./server";

const endPoint = "/login";

const authenticate = async (credentials) => {
  const result = await server.post(endPoint, credentials);
  return result;
};

export default { authenticate };

import server from "./server";

const endPoint = "/";

const getBalance = async (accountNo) => {
  const { data } = await server.get(endPoint, { accountNo });
  return data;
};

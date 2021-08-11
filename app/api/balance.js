import server from "./server";

const endPoint = "/balance";

const getBalance = async (accountNo) => {
  const { data } = await server.post(endPoint, { accountNo });
  return data;
};

export default { getBalance };

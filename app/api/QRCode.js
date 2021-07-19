import server from "./server";

const endPoint = "/get_qr";

const getQR = async (accountNo) => {
  const { data } = await server.post(endPoint, { accountNo });
  return data;
};

export default { getQR };

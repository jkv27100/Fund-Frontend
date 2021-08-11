import server from "./server";

const endPoint = "/transact/send";

const sendETH = async (s, r, v) => {
  const { data } = await server.post(endPoint, {
    sendEthAddy: s,
    recEthAddy: r,
    val: v,
  });
  return data;
};

export default { sendETH };

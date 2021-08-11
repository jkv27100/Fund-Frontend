import server from "./server";

const endPoint = "/notification/get-noti";

const getNotifications = async (user_id) => {
  const { data } = await server.post(endPoint, { user_id });
  return data;
};

export default { getNotifications };

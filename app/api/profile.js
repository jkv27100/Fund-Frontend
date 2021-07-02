import server from "./server";

const endPoint = "/upload/get_image";

const getImage = async (user_id) => {
  const { data } = await server.post(endPoint, { user_id });
  return data;
};

export default { getImage };

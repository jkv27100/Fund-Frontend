import server from "./server";

const endPoint = "/location";

const getLocationName = async (lat, long) => {
  const cords = {
    lat,
    long,
  };
  const { data } = await server.post(endPoint, cords);
  return data;
};

export default { getLocationName };

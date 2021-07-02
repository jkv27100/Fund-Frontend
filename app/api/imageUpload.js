import server from "./server";

const endPoint = "/upload";

const upload = async (data) => {
  const result = await server.post(endPoint, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
  return result;
};

export default { upload };

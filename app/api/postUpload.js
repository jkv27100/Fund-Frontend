import server from "./server";

const endPoint = "/posts/add_post";

const uploadPost = async (data) => {
  const result = await server.post(endPoint, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });

  return result;
};

export default { uploadPost };

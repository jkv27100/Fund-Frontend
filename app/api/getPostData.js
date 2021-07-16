import server from "./server";

const endPoint = "/posts/get_post";
const postIdEndPoint = "/posts/get_postById";

const getApprovedPosts = () => {
  const result = server.get(endPoint);
  return result;
};

const getAllPostById = (user_id) => {
  const result = server.post(endPoint, { user_id });
  return result;
};

const getPostById = async (_id) => {
  const { data } = await server.post(postIdEndPoint, { _id });
  return data;
};

export default { getAllPostById, getApprovedPosts, getPostById };

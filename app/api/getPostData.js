import server from "./server";

const endPoint = "/posts/get_post";

const getApprovedPosts = () => {
  const result = server.get(endPoint);
  return result;
};

const getAllPostById = (user_id) => {
  const result = server.post(endPoint, { user_id });
  return result;
};

export default { getAllPostById, getApprovedPosts };

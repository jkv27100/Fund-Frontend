import server from "./server";

const endPoint = "/posts/get_post";

// const getApprovedPosts = () => {
//   const result = server.get(endPoint);
//   return result;
// };

const getAllPostById = (id) => {
  const result = server.post(endPoint, id);
  return result;
};

export default { getAllPostById };

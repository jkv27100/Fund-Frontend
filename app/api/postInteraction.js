import server from "./server";

const addBookMarkEndPoint = "/post_interactions/add_bookmark";
const removeBookMarkEndPoint = "/post_interactions/remove_bookmark";

const addToBookmark = async (user_id, postId) => {
  const { data } = await server.post(addBookMarkEndPoint, { user_id, postId });

  return data;
};

const removeBookmark = async (user_id, postId) => {
  const { data } = await server.post(removeBookMarkEndPoint, {
    user_id,
    postId,
  });
  return data;
};

export default { addToBookmark, removeBookmark };

import server from "./server";

const addBookMarkEndPoint = "/post_interactions/add_bookmark";
const removeBookMarkEndPoint = "/post_interactions/remove_bookmark";
const getBookmarkEndPoint = "/post_interactions/getBookmarked";

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

const getBookmarked = async (user_id) => {
  const { data } = await server.post(getBookmarkEndPoint, { user_id });
  return data;
};

export default { addToBookmark, removeBookmark, getBookmarked };

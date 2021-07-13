import server from "./server";

const endPoint = "/add_comment";

const addComment = async (comment) => {
  const { data } = await server.post(endPoint, { comment });
  return data;
};

export default { addComment };

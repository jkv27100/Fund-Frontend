import server from "./server";

const charityEndPoint = "/verify_charity";

const sendCharityMail = async (formData) => {
  const result = await server.post(charityEndPoint, formData, {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
  return result;
};

export default { sendCharityMail };

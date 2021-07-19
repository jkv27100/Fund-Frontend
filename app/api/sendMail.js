import server from "./server";

const charityEndPoint = "/verify_charity";
const kickstarterEndPoint = "/mail/get_file";

const sendCharityMail = async (formData) => {
  const result = await server.post(charityEndPoint, formData, {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
  return result;
};

const sendKickStarterMail = async (formData) => {
  const result = await server.post(kickstarterEndPoint, formData, {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
  return null;
};

export default { sendCharityMail, sendKickStarterMail };

import { create } from "apisauce";

const apiServer = create({
  baseURL: "http://192.168.29.73:3030/api",
});

export default apiServer;

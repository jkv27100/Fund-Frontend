import { create } from "apisauce";

const apiServer = create({
  baseURL: "http://192.168.1.9:3030/api",
});

export default apiServer;

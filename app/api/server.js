import { create } from "apisauce";

const apiServer = create({
  baseURL: "http://192.168.24.227:3030/api",
});

export default apiServer;

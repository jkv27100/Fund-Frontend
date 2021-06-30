import { create } from "apisauce";

const apiServer = create({
  baseURL: "http://192.168.43.227:3030/api",
});

export default apiServer;

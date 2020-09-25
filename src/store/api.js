import Axios from "axios";

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "https://concretedigitalserver.herokuapp.com/";

let Api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true,
});
export const api = Api;

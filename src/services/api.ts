import axios from "axios";

const api = axios.create({
  baseURL: "http://yanlyra.dev/",
});

export default api;

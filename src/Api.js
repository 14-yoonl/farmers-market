import axios from "axios";

const SERVER = "http://172.30.1.22:8000";

const http = axios.create({
  baseURL: SERVER,
  timeout: 10000,
});

export const getProductList = () => {
  return http.get("/products");
};

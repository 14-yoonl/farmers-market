import axios from "axios";

const SERVER = "http://172.30.1.52:8000";

const http = axios.create({
  baseURL: SERVER,
  timeout: 10000,
});

export const getProductList = () => {
  return http.get("/products");
};

export const postCartItem = (token, data) => {
  console.log(token, data);
  return http.post(
    "/orders/carts",
    {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    },
    { data }
  );
};

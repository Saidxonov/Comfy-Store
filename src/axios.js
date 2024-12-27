import axios from "axios";

export const backend = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api/products/",
});

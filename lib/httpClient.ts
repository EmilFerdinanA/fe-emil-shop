import axios from "axios";

import { store } from "@/store";
import { selectToken } from "@/store/authSelector";

export const httpClient = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  timeout: 1000,
});

httpClient.interceptors.request.use(
  async function (config) {
    const token = selectToken(store.getState());
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

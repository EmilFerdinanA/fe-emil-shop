import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  timeout: 1000,
});

httpClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

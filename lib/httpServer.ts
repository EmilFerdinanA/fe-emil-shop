import axios from "axios";
import { cookies } from "next/headers";

export const httpServer = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  timeout: 1000,
});

httpServer.interceptors.request.use(
  async function (config) {
    const cookie = await cookies();
    const raw = cookie.get("persist%3Aauth")?.value;

    let parseCookie;
    if (raw) parseCookie = JSON.parse(raw);

    const token = JSON.parse(parseCookie.token);
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

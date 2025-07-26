import { httpClient } from "@/lib/axios";

export const getListUser = async () => {
  const response = await httpClient.get("user");
  return response;
};

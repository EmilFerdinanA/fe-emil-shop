import { httpClient } from "@/lib/httpClient";
import { IUserDAO } from "./dao";
import { IResponse } from "@/types/dao";

export const getListUser = async (): Promise<IResponse<IUserDAO[]>> => {
  const response = await httpClient.get("user");
  return response.data;
};

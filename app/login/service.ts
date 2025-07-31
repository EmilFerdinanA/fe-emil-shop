import { httpClient } from "@/lib/httpClient";
import { ILoginDTO } from "./dto";
import { ILoginDAO } from "./dao";
import { IResponse } from "@/types/dao";

export const login = async (
  payload: ILoginDTO
): Promise<IResponse<ILoginDAO>> => {
  const response = await httpClient.post("auth/sign-in", payload);
  return response.data;
};

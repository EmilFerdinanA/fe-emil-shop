import { httpClient } from "@/lib/axios";
import { ILoginDTO } from "./dto";
import { ILoginDAO } from "./dao";

export const login = async (data: ILoginDTO): Promise<ILoginDAO> => {
  const response = await httpClient.post("auth/sign-in", data);
  return response.data;
};

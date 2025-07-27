import { httpClient } from "@/lib/httpClient";
import { IResponse } from "@/types/dao";
import { QueryFunctionContext } from "@tanstack/react-query";
import { IRoleDAO } from "./dao";

export const getListRole = async ({
  queryKey,
}: QueryFunctionContext): Promise<IResponse<IRoleDAO[]>> => {
  const [, name] = queryKey;

  const response = await httpClient.get("role", {
    params: {
      name,
    },
  });
  return response.data;
};

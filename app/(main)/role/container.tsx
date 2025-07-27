import { AppTable } from "@/components/app-table";
import { IResponse } from "@/types/dao";
import React from "react";
import { IRoleDAO } from "./dao";
import { columns } from "./column";

interface IProps {
  initialData: IResponse<IRoleDAO[]>;
}

const Container: React.FC<IProps> = async ({ initialData }) => {
  return <AppTable columns={columns} data={initialData.data} />;
};

export default Container;

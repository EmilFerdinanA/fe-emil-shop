"use client";

import { AppTable } from "@/components/app-table";
import { IResponse } from "@/types/dao";
import React from "react";
import { IRoleDAO } from "./dao";
import { columns } from "./column";
import { Input } from "@/components/ui/input";

interface IProps {
  initialData: IResponse<IRoleDAO[]>;
}

const Container: React.FC<IProps> = ({ initialData }) => {
  console.log(initialData);
  return (
    <>
      <div className="flex items-center py-4 -mb-4">
        <Input
          placeholder="Filter names..."
          onChange={(event) => console.log(event, "event")}
          className="max-w-sm"
        />
      </div>
      <AppTable
        columns={columns}
        data={initialData.data}
        totalData={initialData.pagination.total}
      />
    </>
  );
};

export default Container;

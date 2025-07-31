"use client";

import React from "react";
import { AppTable } from "@/components/app-table";
import { columns } from "./column";
import { Input } from "@/components/ui/input";
import { IResponse } from "@/types/dao";
import { IUserDAO } from "./dao";
import { useQuery } from "@tanstack/react-query";
import { getListUser } from "./service";
import { DialogDemo } from "./form-create";

interface IProps {
  initialData: IResponse<IUserDAO[]>;
}

const Container: React.FC<IProps> = ({ initialData }) => {
  const { data } = useQuery({
    queryKey: ["Get list user"],
    queryFn: getListUser,
    initialData: initialData,
  });

  return (
    <>
      <div className="flex items-center py-4 -mb-4">
        <Input
          placeholder="Filter emails..."
          onChange={(event) => console.log(event, "event")}
          className="max-w-sm"
        />

        <DialogDemo />
      </div>
      <AppTable
        data={data.data}
        columns={columns}
        totalData={data.pagination.total}
      />
    </>
  );
};

export default Container;

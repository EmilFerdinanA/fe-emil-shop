"use client";

import { AppTable } from "@/components/app-table";
import { columns } from "./column";
import { Input } from "@/components/ui/input";
import { IResponse } from "@/types/dao";
import { IUserDAO } from "./dao";
import React from "react";
import { Button } from "@/components/ui/button";
// import { ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { getListUser } from "./service";
import { Plus } from "lucide-react";
import { DialogDemo } from "./form-create";

interface IProps {
  initialData: IResponse<IUserDAO[]>;
}

// Example Dropdown
// const dummyColumns = [
//   { id: "username", canHide: true, isVisible: true },
//   { id: "email", canHide: true, isVisible: true },
//   { id: "role", canHide: true, isVisible: true },
//   { id: "actions", canHide: false, isVisible: true },
// ];
{
  /* <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" className="ml-auto">
      Columns <ChevronDown />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    {dummyColumns
      .filter((column) => column.canHide)
      .map((column) => {
        return (
          <DropdownMenuCheckboxItem
            key={column.id}
            className="capitalize"
            checked={column.isVisible}
            onCheckedChange={(value) => {
              console.log(`Toggled ${column.id} to`, value);
            }}
          >
            {column.id}
          </DropdownMenuCheckboxItem>
        );
      })}
  </DropdownMenuContent>
</DropdownMenu>; */
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
      <AppTable data={data.data} columns={columns} />
    </>
  );
};

export default Container;

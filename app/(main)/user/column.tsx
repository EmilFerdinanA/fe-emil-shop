"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Eye, PencilLine, Trash2 } from "lucide-react";
import { IUserDAO } from "./dao";

export const columns: ColumnDef<IUserDAO>[] = [
  {
    id: "no",
    header: () => <div className="w-8">No</div>,
    cell: ({ row }) => <div className="w-8">{row.index + 1}</div>,
  },
  {
    accessorKey: "username",
    header: () => <div className="w-24">Username</div>,
    cell: ({ row }) => (
      <div className="w-24 capitalize">{row.getValue("username")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: () => <div className="w-52">Email</div>,
    cell: ({ row }) => (
      <div className="w-52 lowercase">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "role",
    header: () => <div className="w-44">Role</div>,
    cell: ({ row }) => {
      const roleName = row.original.role?.name || "-";
      return <div className="w-44 font-medium">{roleName}</div>;
    },
  },
  {
    id: "actions",
    header: () => <div className="w-20 text-center">Actions</div>,
    cell: () => {
      return (
        <div className="w-20">
          <div className="flex gap-2 items-center justify-center">
            <Eye size={17} />
            <PencilLine size={17} />
            <Trash2 size={17} />
          </div>
        </div>
      );
    },
  },
];

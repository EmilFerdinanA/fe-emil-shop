"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Eye, PencilLine, Trash2 } from "lucide-react";
import { IRoleDAO } from "./dao";

export const columns: ColumnDef<IRoleDAO>[] = [
  {
    id: "no",
    header: () => <div className="w-8">No</div>,
    cell: ({ row }) => <div className="w-8">{row.index + 1}</div>,
  },
  {
    accessorKey: "name",
    header: () => <div className="w-24">Name</div>,
    cell: ({ row }) => (
      <div className="w-24 capitalize">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "permissions",
    header: () => <div className="flex-1">Permissions</div>,
    cell: ({ row }) => {
      return (
        <div className="flex-1 lowercase flex gap-2">
          {(row.getValue("permissions") as string[]).map((e, index) => (
            <div key={index} className="text-sm border p-1 rounded bg-gray-100">
              {e}
            </div>
          ))}
        </div>
      );
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

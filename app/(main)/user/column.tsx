"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Eye, PencilLine, Trash2 } from "lucide-react";
import { Payment } from "./dao";

export const columns: ColumnDef<Payment>[] = [
  {
    id: "no",
    header: () => <div className="w-8">No</div>,
    cell: ({ row }) => <div className="w-8">{row.index + 1}</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className="w-24">Status</div>,
    cell: ({ row }) => (
      <div className="w-24 capitalize">{row.getValue("status")}</div>
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
    accessorKey: "amount",
    header: () => <div className="w-16">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="w-16 font-medium">{formatted}</div>;
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

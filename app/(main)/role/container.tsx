"use client";

import React, { useState } from "react";
import { AppTable } from "@/components/app-table";
import { IResponse } from "@/types/dao";
import { IRoleDAO } from "./dao";
import { columns } from "./column";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { getListRole } from "./service";
import { useDebounce } from "use-debounce";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface IProps {
  initialData: IResponse<IRoleDAO[]>;
}

const Container: React.FC<IProps> = ({ initialData }) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 500);
  const router = useRouter();
  const pathname = usePathname();

  const { data } = useQuery({
    queryKey: ["Get list role", debouncedQuery],
    queryFn: getListRole,
    initialData: initialData,
  });

  return (
    <>
      <div className="flex items-center justify-between py-4 -mb-4">
        <Input
          value={query}
          placeholder="Filter names..."
          onChange={(event) => setQuery(event.target.value)}
          className="max-w-sm"
        />
        <Button
          onClick={() => router.push(`${pathname}/create`)}
          variant="outline"
        >
          {" "}
          Create <Plus />
        </Button>
      </div>
      <AppTable
        columns={columns}
        data={data?.data ?? []}
        totalData={data?.pagination.total ?? 0}
      />
    </>
  );
};

export default Container;

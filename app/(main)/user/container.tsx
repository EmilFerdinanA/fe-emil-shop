import { AppTable } from "@/components/app-table";
import { columns } from "./column";
import { data } from "./data";
import { httpClient } from "@/lib/axios";

const Container = async () => {
  const response = await httpClient("user");

  console.log(response.data, "response");

  return <AppTable data={data} columns={columns} />;
};

export default Container;

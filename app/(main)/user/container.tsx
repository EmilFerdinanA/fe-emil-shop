import { AppTable } from "@/components/app-table";
import { columns } from "./column";
import { httpServer } from "@/lib/httpServer";

const Container = async () => {
  const { data } = await httpServer("user");
  return <AppTable data={data.data} columns={columns} />;
};

export default Container;

import { DataTable } from "../../payments/data-table";
import { columns } from "../../payments/columns";
import { getData } from "../../payments/page";

export default async function Page() {
  const data = await getData();
  return <DataTable columns={columns} data={data} />;
}

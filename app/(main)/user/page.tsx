import { httpServer } from "@/lib/httpServer";
import Container from "./container";

export default async function page() {
  const { data } = await httpServer.get("user");
  return <Container initialData={data} />;
}

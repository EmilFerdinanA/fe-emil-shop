import { httpServer } from "@/lib/httpServer";
import Container from "./container";

export default async function page() {
  const { data } = await httpServer("user");
  return <Container data={data} />;
}

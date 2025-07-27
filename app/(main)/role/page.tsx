import React from "react";
import Container from "./container";
import { httpServer } from "@/lib/httpServer";

export default async function page() {
  const { data } = await httpServer.get("role");
  return <Container initialData={data} />;
}

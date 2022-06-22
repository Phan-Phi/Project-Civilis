import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function FooterCivilis() {
  const router = useRouter();
  console.log("routerrouter", router.pathname);
  return <Box>FooterCivilis</Box>;
}

import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";

export default function Title({ title }) {
  const router = useRouter();
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "45vw",
        margin: "0 auto",
        textAlign: "center",
        marginBottom: "2rem",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontFamily: theme.fontName.bellico, fontWeight: 400 }}
      >
        {title}
      </Typography>
      <Typography variant="h6" sx={{ letterSpacing: "2px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sit
        unde vitae deleniti! sit unde vitae deleniti!
      </Typography>
    </Box>
  );
}

import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import useMedia from "../../hooks/useMedia";

export default function Title({ title }) {
  const { isSmUp, isSmDown, isMdUp, isMmDown } = useMedia();
  const router = useRouter();
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: isMmDown ? (isSmDown ? "70vw" : "80vw") : "70vw",
        margin: "0 auto",
        textAlign: "center",
        marginBottom: isSmDown ? "1rem" : "2rem",
      }}
    >
      <Typography
        variant={isSmDown ? "h4" : "h2"}
        sx={{
          fontFamily: theme.fontName.bellico,
          fontWeight: 400,
          color:
            router.pathname == "/du-hoc" ? theme.palette.primary.main : "black",
          [theme.breakpoints.down("sm")]: {
            color: theme.palette.primary.light,
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant={isSmDown ? "body2" : "h6"}
        sx={{ letterSpacing: "1px" }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sit
        unde vitae deleniti! sit unde vitae deleniti!
      </Typography>
    </Box>
  );
}

import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function ButtonHome(props) {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "10rem",
        backgroundColor: "white",
        boxShadow: "rgba(44, 114, 180, 0.8) 0px 5px 15px",
        padding: "10px 40px",
      }}
    >
      <Typography
        sx={{
          color:
            props.color == "blue"
              ? theme.palette.primary.main
              : theme.palette.primary.light,
          marginRight: "13px",
          fontFamily: theme.fontName.aguda,
          fontWeight: 900,
          fontSize: "2.5rem",
          letterSpacing: 4,
        }}
      >
        DU HỌC
      </Typography>
      <PlayCircleIcon
        sx={{
          color:
            props.color == "blue"
              ? theme.palette.primary.main
              : theme.palette.primary.light,
          fontSize: "3rem",
        }}
      />
    </Button>
  );
}

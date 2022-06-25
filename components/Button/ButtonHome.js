import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import useMedia from "../../hooks/useMedia";

export default function ButtonHome(props) {
  const { isMdUp, isSmDown } = useMedia();

  const theme = useTheme();
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "10rem",
        backgroundColor: "white",
        boxShadow: "rgba(44, 114, 180, 0.8) 0px 5px 15px",
        padding: isSmDown ? "10px 35px" : "10px 40px",
      }}
    >
      <Typography
        variant={isSmDown ? "h4" : "h3"}
        sx={{
          color:
            props.color == "blue"
              ? theme.palette.primary.main
              : theme.palette.primary.light,
          marginRight: "13px",
          fontFamily: theme.fontName.aguda,
          fontWeight: 900,
          paddingBottom: "5px",
          letterSpacing: 4,
        }}
      >
        {props.name}
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

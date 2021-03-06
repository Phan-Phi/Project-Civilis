import React from "react";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { Button, Typography, useTheme } from "@mui/material";
import useMedia from "../../hooks/useMedia";

export default function ButtonGradient(props) {
  const { isSmUp, isSmDown, isMdUp, isMdDown } = useMedia();
  const theme = useTheme();
  if (props.color) {
    return (
      <Button
        variant="contained"
        sx={{
          width: isMdDown ? (isSmDown ? "68%" : "100%") : "70%",
          height: "2.6rem",
          backgroundColor:
            props.color == "green"
              ? theme.palette.primary.light
              : theme.palette.primary.main,
          borderRadius: "3rem 0 0 3rem",
          paddingX: "2rem",
          "& .MuiSvgIcon-root": {
            transform: "rotate(90deg)",
            fontSize: "3.1rem",
            position: "absolute",
            right: "-28px",
          },
        }}
      >
        <Typography
          sx={{
            color: theme.palette.common.white,
            fontFamily: theme.fontName.aguda,
            fontWeight: 900,
            fontSize: isMdDown ? (isSmDown ? "0.8rem " : "1rem") : "1.2rem",
          }}
        >
          {props.name}
        </Typography>

        <AirplanemodeActiveIcon />
      </Button>
    );
  } else {
    return (
      <Button
        variant="contained"
        sx={{
          height: "2.6rem",
          background:
            "linear-gradient(90deg, rgba(185,234,94,0.7) 5%, rgba(92,198,102,0.7) 29%, rgba(0,240,233,0.7) 62%, rgba(0,152,255,0.7) 100%)",
          borderRadius: "3rem 0 0 3rem",
          paddingX: "2rem",
          "& .MuiSvgIcon-root": {
            transform: "rotate(90deg)",
            fontSize: "3.1rem",
            position: "absolute",
            right: "-28px",
            transition: "all 0.5s",
          },
        }}
      >
        <Typography
          sx={{
            color: theme.palette.common.white,
            fontFamily: theme.fontName.aguda,
            fontWeight: 900,
            fontSize: isSmDown ? "0.8rem " : "1.2rem",
          }}
        >
          {props.name}
        </Typography>

        <AirplanemodeActiveIcon />
      </Button>
    );
  }
}

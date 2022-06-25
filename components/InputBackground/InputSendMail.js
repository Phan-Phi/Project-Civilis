import { Input, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import useMedia from "../../hooks/useMedia";

export default function InputSendMail({ placeholder }) {
  const { isSmDown, isMdUp } = useMedia();
  const router = useRouter();
  const theme = useTheme();
  return (
    <Input
      className={router.pathname == "/du-hoc" ? "borderWhite" : "borderBlack"}
      fullWidth
      width="20%"
      placeholder={placeholder}
      sx={{
        marginBottom: isSmDown ? "0.8rem" : "1.2rem",

        "& input": {
          fontFamily: theme.fontName.aguda,
          fontSize: isSmDown ? "0.5rem !important" : "0.7rem !important",
          opacity: 1,
        },
        "&:before": {
          borderBottom:
            router.pathname == "/du-hoc"
              ? "1px solid white"
              : "1px solid black",
        },
        "& ::placeholder": {
          color:
            router.pathname == "/du-hoc"
              ? "white !important"
              : theme.palette.common.black,

          opacity: 1,
          [theme.breakpoints.down("sm")]: {
            color:
              router.pathname == "/du-hoc"
                ? theme.palette.common.white
                : theme.palette.common.black,
          },
        },
      }}
    />
  );
}

import { Input, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import useMedia from "../../hooks/useMedia";

export default function InputTextArea({ placeholder }) {
  const { isSmDown, isMdUp } = useMedia();
  const router = useRouter();

  const theme = useTheme();
  return (
    <Input
      className="ádasdadadsdasdasdasdasd"
      fullWidth
      placeholder={placeholder}
      id="standard-multiline-static"
      label="Multiline"
      multiline
      rows={isSmDown ? 3 : 5}
      variant="standard"
      sx={{
        marginBottom: "1.2rem",
        // "& :hover:before": {
        //   borderBottom: "1px solid red",
        // },
        "& textarea ": {
          fontFamily: theme.fontName.aguda,
          fontSize: isSmDown ? "0.5rem" : "0.7rem",
          opacity: 1,
        },
        "& textarea:hover:before ": {
          borderBottom: "1px solid red",
        },
        "&:before": {
          borderBottom:
            router.pathname == "/du-hoc"
              ? "1px solid white"
              : "1px solid black",
        },
        "& ::placeholder ": {
          fontSize: isSmDown ? "0.5rem" : "0.7rem",
          color:
            router.pathname == "/du-hoc"
              ? "white !important"
              : theme.palette.common.black,

          fontFamily: theme.fontName.aguda,
          opacity: 1,
        },
      }}
    />
  );
}

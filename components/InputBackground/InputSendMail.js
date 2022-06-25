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
      fullWidth
      width="20%"
      placeholder={placeholder}
      sx={{
        marginBottom: "1.2rem",

        "& input": {
          fontFamily: theme.fontName.aguda,
          fontSize: isSmDown ? "0.5rem" : "0.7rem",
          opacity: 1,
        },
        "& ::placeholder": {
          color: "black",
          opacity: 1,
          [theme.breakpoints.down("sm")]: {
            color:
              router.pathname == "/du-hoc"
                ? theme.palette.common.white
                : theme.palette.common.white,
          },
        },
      }}
    />
  );
}

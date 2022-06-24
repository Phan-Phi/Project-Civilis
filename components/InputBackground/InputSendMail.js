import { Input, useTheme } from "@mui/material";
import React from "react";
import useMedia from "../../hooks/useMedia";

export default function InputSendMail({ placeholder }) {
  const { isSmDown, isMdUp } = useMedia();
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
        },
      }}
    />
  );
}

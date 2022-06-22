import { Input, useTheme } from "@mui/material";
import React from "react";

export default function InputSendMail({ placeholder }) {
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
          fontSize: "0.7rem",
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

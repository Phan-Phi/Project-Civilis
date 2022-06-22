import { Input, useTheme } from "@mui/material";
import React from "react";

export default function InputTextArea({ placeholder }) {
  const theme = useTheme();
  return (
    <Input
      fullWidth
      placeholder={placeholder}
      id="standard-multiline-static"
      label="Multiline"
      multiline
      rows={5}
      variant="standard"
      sx={{
        marginBottom: "1.2rem",
        "& input": {
          fontFamily: theme.fontName.aguda,
          fontSize: "0.7rem",
          opacity: 1,
        },
        "& ::placeholder ": {
          color: "black",
          fontFamily: theme.fontName.aguda,
          opacity: 1,
        },
      }}
    />
  );
}

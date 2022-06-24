import { Input, useTheme } from "@mui/material";
import React from "react";
import useMedia from "../../hooks/useMedia";

export default function InputTextArea({ placeholder }) {
  const { isSmDown, isMdUp } = useMedia();
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
          opacity: 1,
        },
        "& ::placeholder ": {
          fontSize: isSmDown ? "0.5rem" : "0.7rem",
          color: "black",
          fontFamily: theme.fontName.aguda,
          opacity: 1,
        },
      }}
    />
  );
}

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  useTheme,
} from "@mui/material";
import React, { Fragment } from "react";

export default function InputBackground(label, ...props) {
  const theme = useTheme();
  return (
    <FormControl fullWidth variant="standard" sx={{ position: "inherit" }}>
      <InputLabel
        shrink
        htmlFor="bootstrap-input"
        sx={{ position: "inherit", color: "white" }}
      >
        {label.label}
      </InputLabel>
      <OutlinedInput
        id="bootstrap-input"
        sx={{
          fontSize: "1rem",
          backgroundColor: theme.palette.common.white,
          "& input": {
            padding: "8.5px 8px",
          },
        }}
      />
    </FormControl>
  );
}

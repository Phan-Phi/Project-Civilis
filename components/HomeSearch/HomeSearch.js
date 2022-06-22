import { Box, Button, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { theme } from "tailwindcss/stubs/defaultConfig.stub";
import ButtonGradient from "../Button/ButtonGradient";
import InputBackground from "../InputBackground/InputBackground";

export default function HomeSearch() {
  return (
    <Box
      sx={{
        // height: "10vh",
        opacity: 0.8,
        background:
          "linear-gradient(90deg, rgba(185,234,94,1) 5%, rgba(92,198,102,1) 29%, rgba(0,240,233,1) 62%, rgba(0,152,255,1) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" spacing={8} paddingY={4} alignItems="flex-end">
          <InputBackground label="ĐIỂM KHỞI HÀNH" />
          <InputBackground label="ĐIỂM ĐẾN" />
          <InputBackground label="THỜI GIAN" />
          <InputBackground label="GIÁ TOUR" />
          <ButtonGradient name="TÌM KIẾM" color="green" />
        </Stack>
      </Container>
    </Box>
  );
}

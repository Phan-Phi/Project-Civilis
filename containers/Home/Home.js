import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import ButtonHome from "../../components/Button/ButtonHome";
import Link from "../../components/Link";

export default function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url('/img/BG-home.jpg')",
        backgroundSize: "100vw 100vh",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "70vw",
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box>
          <Link href="/du-hoc" sx={{ textDecoration: "none" }}>
            <ButtonHome name="DU HỌC" color="blue" />
          </Link>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.common.white }}
          paddingY={5}
        >
          BẠN MUỐN CIVILIS ĐỒNG HÀNH CÙNG BẠN ĐẾN ĐÂU?
        </Typography>
        <Box>
          <Link href="/du-lich" sx={{ textDecoration: "none" }}>
            <ButtonHome name="DU LỊCH" color="green" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import ButtonGradient from "../../../components/Button/ButtonGradient";
import { Image } from "../../../HOC";

const arrayTour = [
  { title: "Tour", subTitle: "Trong Nước" },
  { title: "Tour", subTitle: "Ngoài Nước" },
  { title: "Tour", subTitle: "Tự Túc" },
  { title: "Visa", subTitle: "Dịch Vụ" },
];

export default function HomeBanner() {
  const theme = useTheme();
  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <Image
        {...{
          src: "/img/Banner-1920-x-1080.jpg",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ButtonGradient name="KHÁM PHÁ NGAY" />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Stack direction="row" spacing={0.5} sx={{ width: "100%" }}>
          {arrayTour.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  width: "33.3%",
                  backgroundColor: "white",
                  padding: "15px",
                  textAlign: "center",
                  "&:first-child": {
                    borderRadius: "10rem 0 0 0",
                  },
                  "&:last-child": {
                    borderRadius: "0 10rem 0 0",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    lineHeight: "inherit",
                    fontWeight: 500,
                    fontFamily: theme.fontName.bellico,
                    color: theme.palette.primary.main,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    lineHeight: "inherit",
                    fontFamily: theme.fontName.aguda,
                    color: theme.palette.primary.light,
                  }}
                >
                  {item.subTitle}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}

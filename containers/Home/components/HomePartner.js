import { Stack, Typography, useTheme } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Image } from "../../../HOC";
import useMedia from "../../../hooks/useMedia";

const arrayPartner = [
  "/img/doitac-06.jpg",
  "/img/doitac-06.jpg",
  "/img/doitac-06.jpg",
  "/img/doitac-06.jpg",
  "/img/doitac-06.jpg",
];

export default function HomePartner() {
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  const theme = useTheme();
  return (
    <Box paddingY={5}>
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          [theme.breakpoints.down("sm")]: {
            width: "90vw",
          },
        }}
      >
        <Typography
          variant={isSmDown ? "body1_bold" : "h3"}
          sx={{
            textAlign: "center",
            letterSpacing: "10px",
            marginBottom: "1.5rem",
            [theme.breakpoints.down("sm")]: {
              letterSpacing: 4,
              fontWeight: 900,
            },
          }}
        >
          ĐỐI TÁC CỦA CIVILIS
        </Typography>
        <Stack direction="row" spacing={2}>
          {arrayPartner.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{ width: "100%", height: isSmDown ? "10vh" : "18vh" }}
              >
                <Image
                  {...{
                    src: item,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}

import { Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Image } from "../../../HOC";

const arrayPartner = [
  "/img/doitac-06.jpg",
  "/img/doitac-06.jpg",
  "/img/doitac-06.jpg",
  "/img/doitac-06.jpg",
  "/img/doitac-06.jpg",
];

export default function HomePartner() {
  return (
    <Box paddingY={5}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            letterSpacing: "10px",
            marginBottom: "1.5rem",
          }}
        >
          ĐỐI TÁC CỦA CIVILIS
        </Typography>
        <Stack direction="row" spacing={0}>
          {arrayPartner.map((item, index) => {
            return (
              <Box key={index} sx={{ width: "100%", height: "18vh" }}>
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

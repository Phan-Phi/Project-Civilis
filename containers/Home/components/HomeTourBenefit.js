import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Image } from "../../../HOC";
import StarIcon from "@mui/icons-material/Star";
import Title from "../../../components/Title/Title";
import ButtonGradient from "../../../components/Button/ButtonGradient";

const arrayCardTour = ["Tour Bán Chạy", "Tour Khuyến Mãi", "Tour Đặc Biệt"];

export default function HomeTourBenefit() {
  const theme = useTheme();
  return (
    <Box sx={{ paddingY: "2.5rem" }}>
      <Title title="We have the best choice" />

      <Container maxWidth="lg">
        <Grid container columnSpacing={9}>
          {arrayCardTour.map((item, index) => {
            return (
              <Grid item md={4} key={index} sx={{}}>
                <Box
                  sx={{
                    backgroundColor: "#5cc666",
                    padding: "10px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: theme.palette.common.white,
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "50vh",
                    position: "relative",
                    transition: "all 0.5s",
                    "&:hover .contentHover": {
                      opacity: 1,
                    },
                    "&:hover .overley": {
                      opacity: 0.4,
                    },
                  }}
                >
                  <Image
                    {...{
                      src: "/img/feedback-05.jpg",
                      width: "100%",
                      height: "100%",
                      objectFit: "container",
                    }}
                  />

                  <Box
                    className="overley"
                    sx={{
                      backgroundColor: "black",
                      opacity: 0,
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      width: "100%",
                    }}
                  ></Box>

                  <Box
                    className="contentHover"
                    sx={{
                      opacity: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      padding: "55px",
                      color: theme.palette.common.white,
                      transition: "ease 0.6s",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.common.white,
                        letterSpacing: 2,
                      }}
                    >
                      KOREAN TOUR
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.common.white,
                        letterSpacing: 1,
                      }}
                    >
                      Tóm tắt Tour
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.common.white,
                        letterSpacing: 1,
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis nulla quo doloribus sit, a reiciendis voluptatem
                      voluptas, esse cupiditate distinctio quia optio ex!
                    </Typography>
                    <Stack direction="row" justifyContent="center" marginY={2}>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </Stack>
                    <ButtonGradient name="TOUR FULL" />
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

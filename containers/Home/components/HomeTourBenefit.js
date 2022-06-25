import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Image } from "../../../HOC";
import StarIcon from "@mui/icons-material/Star";
import Title from "../../../components/Title/Title";
import ButtonGradient from "../../../components/Button/ButtonGradient";
import useMedia from "../../../hooks/useMedia";

const arrayCardTour = ["Tour Bán Chạy", "Tour Khuyến Mãi", "Tour Đặc Biệt"];

export default function HomeTourBenefit() {
  const { isSmUp, isSmDown, isMdUp, isMdDown } = useMedia();
  const theme = useTheme();

  return (
    <Box sx={{ paddingY: "2.5rem" }}>
      <Title title="We have the best choice" />

      <Container maxWidth="lg">
        <Grid
          container
          columnSpacing={isSmDown ? 0 : 9}
          sx={{
            width: "100%",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              margin: 0,
            },
            [theme.breakpoints.down("md")]: {
              margin: "0",
            },
          }}
        >
          {arrayCardTour.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                md={4}
                key={index}
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    width: "100%",
                    marginBottom: "80px",
                  },
                  [theme.breakpoints.down("md")]: {
                    padding: "0 !important",
                    marginBottom: "3rem",
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#5cc666",
                    padding: "10px",
                  }}
                >
                  <Typography
                    variant={isSmDown ? "h2" : "h4"}
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
                    [theme.breakpoints.down("md")]: {
                      height: "70vh",
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
                      padding: isSmDown ? "55px 40px" : "55px",
                      color: theme.palette.common.white,
                      transition: "ease 0.6s",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Typography
                      variant={isSmDown ? "h4" : "body1"}
                      sx={{
                        color: theme.palette.common.white,
                        letterSpacing: 2,
                        [theme.breakpoints.down("md")]: {
                          fontSize: "3rem",
                          marginBottom: "1rem",
                        },
                      }}
                    >
                      KOREAN TOUR
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.common.white,
                        letterSpacing: 1,
                      }}
                    >
                      Tóm tắt Tour
                    </Typography>
                    <Typography
                      variant={isSmDown ? "body1" : "body2"}
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

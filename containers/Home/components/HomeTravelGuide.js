import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { Image } from "../../../HOC";
import ArrowSlick from "../../../components/ArrowIcon/ArrowLeft";
import { useRouter } from "next/router";

const slickFeedBack = [
  "/img/feedback-02.jpg",
  "/img/feedback-03.jpg",
  "/img/feedback-04.jpg",
  "/img/feedback-02.jpg",
  "/img/feedback-03.jpg",
];

export default function HomeTravelGuide() {
  const router = useRouter();
  const theme = useTheme();

  const NextArrow = ({ onClick }) => {
    return (
      <Box
        className="arrow next"
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          left: "-5%",
          transform: "translateY(-50%) ",
        }}
      >
        <ArrowSlick sx={{ fontSize: "4rem" }} />
      </Box>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <Box
        className="arrow prev"
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          right: "-5%",
          transform: "translateY(-50%) rotate(180deg)",
        }}
      >
        <ArrowSlick sx={{ fontSize: "4rem" }} />
      </Box>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box
      id="cam-nang-hanquoc"
      sx={{
        height: "90vh",
        backgroundImage: "url('/img/Banner-1920-x-1080.jpg')",
        backgroundSize: "cover",
        padding: "3rem",
        position: "relative",
      }}
    >
      <Box
        className="HomeTravelGuide"
        sx={{
          opacity: "0.7",

          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      ></Box>
      <Box
        sx={{
          textAlign: "center",
          padding: "1rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            letterSpacing: "10px",
            marginBottom: "1.5rem",
          }}
        >
          {router.pathname == "/du-lich"
            ? "CẨM NANG DU LỊCH"
            : "CẨM NANG DU HỌC"}
        </Typography>

        <Box
          sx={{
            "& .slick-list": {
              zIndex: 2,
            },
          }}
        >
          <Slider
            className="ádasdadasdasdasdasd"
            {...settings}
            style={{
              width: "80vw",
              margin: "0 auto",
              position: "relative",
            }}
          >
            {slickFeedBack.map((item, index) => {
              return (
                <Box sx={{ height: "60vh" }} key={index} paddingX={2}>
                  {/* <Image
                    {...{
                      src: item,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  /> */}
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/nl_7mDomX3E"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}

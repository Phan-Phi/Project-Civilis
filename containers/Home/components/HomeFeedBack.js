import { Box, SvgIcon, Typography, useTheme } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { Image } from "../../../HOC";
import ArrowSlick from "../../../components/ArrowIcon/ArrowLeft";

const slickFeedBack = [
  "/img/feedback-02.jpg",
  "/img/feedback-03.jpg",
  "/img/feedback-04.jpg",
  "/img/feedback-02.jpg",
  "/img/feedback-03.jpg",
];

export default function HomeFeedBack() {
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
    <Box paddingY={5}>
      <Box
        sx={{
          width: "45vw",
          margin: "0 auto",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontFamily: theme.fontName.bellico, fontWeight: 400 }}
        >
          Khách hàng nói gì về chúng tôi
        </Typography>
        <Typography variant="h6" sx={{ letterSpacing: "2px" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          sit unde vitae deleniti!
        </Typography>
      </Box>

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
              <Box sx={{ height: "60vh" }} key={index}>
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
        </Slider>
      </Box>
    </Box>
  );
}

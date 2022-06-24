import { Box, SvgIcon, Container, useTheme } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { Image } from "../../../HOC";
import ArrowSlick from "../../../components/ArrowIcon/ArrowLeft";
import Title from "../../../components/Title/Title";
import { useRouter } from "next/router";
import useMedia from "../../../hooks/useMedia";

const slickFeedBack = [
  "/img/feedback-02.jpg",
  "/img/feedback-03.jpg",
  "/img/feedback-04.jpg",
  "/img/feedback-02.jpg",
  "/img/feedback-03.jpg",
];

export default function HomeFeedBack() {
  const { isSmUp, isSmDown, isMdUp, isMdDown } = useMedia();
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
    slidesToShow: isMdDown ? (isSmDown ? 1 : 2) : 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Container
      maxWidth="lg"
      paddingY={5}
      sx={{
        [theme.breakpoints.down("sm")]: {
          paddingTop: "25px",
          paddingBottom: "25px",
        },
      }}
    >
      <Title
        title={
          router.pathname == "/du-hoc"
            ? "Học viên của Civilis"
            : "Khách hàng nói gì về chúng tôi"
        }
      />

      <Box
        sx={{
          "& .slick-list": {
            zIndex: 2,
          },
          "& .slick-list": {
            [theme.breakpoints.down("sm")]: {
              width: "85%",
              margin: "0 auto",
            },
            [theme.breakpoints.down("md")]: {
              width: "85%",
              margin: "0 auto",
            },
          },
        }}
      >
        <Slider
          {...settings}
          // isMdDown ? { ...settings } : { ...settings }
          style={{
            width: isSmDown ? "100%" : "80vw",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {slickFeedBack.map((item, index) => {
            return (
              <Box sx={{ height: "60vh" }} key={index} className="asdadasdasd">
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
    </Container>
  );
}

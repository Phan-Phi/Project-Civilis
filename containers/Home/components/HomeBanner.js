import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import ButtonGradient from "../../../components/Button/ButtonGradient";
import { Image } from "../../../HOC";
import useMedia from "../../../hooks/useMedia";

const arrayTour = [
  { title: "Tour", subTitle: "Trong Nước" },
  { title: "Tour", subTitle: "Ngoài Nước" },
  { title: "Tour", subTitle: "Tự Túc" },
  { title: "Visa", subTitle: "Dịch Vụ" },
];
const arrayStudyAbroad = [
  {
    title: "Miễn phí",
    subTitle: "100%",
    text: "Khoá học tiếng Hàn và kí túc xá tại VN",
  },
  {
    title: "Tỷ lệ đậu Visa",
    subTitle: "100%",
    text: "Khi thực hiện đúng lộ trình Civilis",
  },
  {
    title: "Minh bạch",
    subTitle: "100%",
    text: "Chi phí,lộ trình du học, thời gian rõ ràng",
  },
  {
    title: "Đồng hành",
    subTitle: "100%",
    text: "Quá trình học tập và làm việc tại Hàn Quốc",
  },
];

export default function HomeBanner() {
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  const router = useRouter();
  const theme = useTheme();

  const renderTourTravel = () => {
    return arrayTour.map((item, index) => {
      return (
        <Box
          key={index}
          sx={{
            width: "33.3%",
            backgroundColor: "white",
            padding: isSmDown ? "8px" : "15px",
            textAlign: "center",
            "&:first-child": {
              borderRadius: "10rem 0 0 0",
              [theme.breakpoints.down("sm")]: {
                borderRadius: "4rem 0 0 0",
              },
            },
            "&:last-child": {
              borderRadius: "0 10rem 0 0",
              [theme.breakpoints.down("sm")]: {
                borderRadius: "0 4rem 0 0",
              },
            },
          }}
        >
          <Typography
            variant="h4"
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
            variant={isSmDown ? "hairline2" : "h5"}
            sx={{
              fontWeight: 700,
              lineHeight: "inherit",
              fontFamily: theme.fontName.aguda,
              color: theme.palette.primary.light,
              [theme.breakpoints.down("sm")]: {
                display: "block",
                lineHeight: "inherit",
              },
            }}
          >
            {item.subTitle}
          </Typography>
        </Box>
      );
    });
  };

  const renderStudyAbroad = () => {
    return arrayStudyAbroad.map((item, index) => {
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
          <Box sx={{ width: "43%", margin: "0 auto" }}>
            <Typography
              variant="h5"
              sx={{
                textAlign: "left",
                lineHeight: "inherit",
                fontWeight: 500,
                fontFamily: theme.fontName.bellico,
                color: theme.palette.primary.main,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                textAlign: "left",
                fontWeight: 900,
                lineHeight: "inherit",
                fontFamily: theme.fontName.aguda,
                color: theme.palette.primary.light,
              }}
            >
              {item.subTitle}
            </Typography>
          </Box>
          <Typography
            variant="caption2"
            sx={{
              // textAlign: "center",
              lineHeight: "inherit",
            }}
          >
            {item.text}
          </Typography>
        </Box>
      );
    });
  };

  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <Image
        {...{
          src: isSmDown
            ? router.pathname == "/du-lich"
              ? "/img/P-banner-mobile.jpg"
              : "/img/P-Banner-mobile-duhoc.png"
            : router.pathname == "/du-lich"
            ? "/img/Banner-1920-x-1080.jpg"
            : "/img/Banner-1920-x-1080.png",
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
        <ButtonGradient
          name={
            router.pathname == "/du-lich" ? "KHÁM PHÁ NGAY" : "ĐĂNG KÝ DU HỌC"
          }
        />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          [theme.breakpoints.down("sm")]: {
            padding: 0,
          },
        }}
      >
        <Stack
          direction="row"
          spacing={isSmDown ? 0.2 : 0.5}
          sx={{ width: "100%" }}
        >
          {router.pathname == "/du-hoc"
            ? renderStudyAbroad()
            : renderTourTravel()}
        </Stack>
      </Container>
    </Box>
  );
}

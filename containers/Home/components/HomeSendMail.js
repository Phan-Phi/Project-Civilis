import {
  Box,
  Stack,
  Typography,
  useTheme,
  styled,
  Divider as MuiDivider,
  Grid,
} from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import ButtonGradient from "../../../components/Button/ButtonGradient";
import InputSendMail from "../../../components/InputBackground/InputSendMail";
import InputTextArea from "../../../components/InputBackground/InputTextArea";
import { Image } from "../../../HOC";
import useMedia from "../../../hooks/useMedia";

const arrayIconMXH = [
  "/img/iconPNG/icon-02.png",
  "/img/iconPNG/icon-03.png",
  "/img/iconPNG/icon-04.png",
  "/img/iconPNG/icon-05.png",
];

export default function HomeSendMail() {
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box
      sx={{
        // height: isSmDown ? "90vh" : "90vh",
        backgroundImage: "url('/img/imgimg.jpeg')",
        backgroundSize: "cover",
        padding: "2rem",
      }}
    >
      <Container maxWidth="lg" sx={{ height: "100%", textAlign: "center" }}>
        <Typography
          variant={isSmDown ? "body1_bold" : "h3"}
          sx={{
            display: "none",
            color: theme.palette.common.white,
            textAlign: "center",
            letterSpacing: "10px",
            marginBottom: "1.5rem",
            [theme.breakpoints.down("sm")]: {
              letterSpacing: 4,
              fontWeight: 900,
              display: "block",
            },
          }}
        >
          SOCIAL MEDIA
        </Typography>
        <Stack
          direction={isSmDown ? "column" : "row"}
          spacing={2}
          sx={{ height: isSmDown ? "95%" : "100%" }}
        >
          <Box
            sx={{
              width: isSmDown ? "100%" : "50%",
              // height: isSmDown ? "8vh" : "20vh",s
              padding: isSmDown ? 0 : "7rem",
              [theme.breakpoints.down("sm")]: {
                height: "10vh",
              },
            }}
          >
            <Grid container sx={{ height: "100%" }} spacing={isSmDown ? 2 : 7}>
              {arrayIconMXH.map((item, index) => {
                return (
                  <Grid
                    item
                    md={6}
                    sm={6}
                    xs={3}
                    key={index}
                    sx={{ width: "50%", height: isSmDown ? "100%" : "50%" }}
                  >
                    <Image
                      {...{
                        src: item,
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          <Box
            sx={{
              width: isSmDown ? "100%" : "50%",
              textAlign: "center",
              position: "relative",
              [theme.breakpoints.down("sm")]: {
                // height: "75%",
              },
            }}
          >
            {/* <Box
              className="colorSendMail"
              sx={{
                opacity: "0.7",
                width: "100%",
                height: "100%",
              }}
            ></Box> */}

            <Box
              className="colorSendMail"
              sx={{
                padding: isSmDown ? "3rem 2rem" : "3rem",
                width: "100%",
                // opacity: "0.7",
                zIndex: 2,
                // position: "absolute",
                // top: 0,
              }}
            >
              <Typography
                variant={isSmDown ? "body1" : "h4"}
                sx={{
                  fontFamily: theme.fontName.aguda,
                  marginBottom: isSmDown ? "1rem" : "2rem",
                  textAlign: "left",
                  color:
                    router.pathname == "/du-hoc"
                      ? theme.palette.common.white
                      : theme.palette.common.black,
                  [theme.breakpoints.down("sm")]: {
                    color:
                      router.pathname == "/du-hoc"
                        ? theme.palette.common.white
                        : theme.palette.common.white,
                  },
                }}
              >
                H???P TH?? CIVILIS
              </Typography>
              <Stack direction="row" sx={{ width: "100%" }} spacing={4}>
                <Box sx={{ width: "30%" }}>
                  <InputSendMail placeholder="B???n t??n g???" />
                </Box>
                <Box sx={{ width: "70%" }}>
                  <InputSendMail placeholder="Cho m??nh xin gmail ???????c kh??ng?" />
                </Box>
              </Stack>
              <InputSendMail placeholder="B???n mu???n g???i th?? n??y ?????n ai?" />
              <InputTextArea placeholder="Vi???t g?? ????" />

              <Divider />
              <ButtonGradient
                name="G???I ?????N CIVILIS"
                color={isSmDown ? "green" : "blue"}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

const Divider = styled(MuiDivider)(({ theme }) => {
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  return {
    marginBottom: isSmDown ? 0 : 30,
    marginTop: isSmDown ? 10 : 30,
    display: "block",
    border: "0 solid red",
  };
});

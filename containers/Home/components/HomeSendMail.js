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

  return (
    <Box
      sx={{
        height: "90vh",
        backgroundImage: "url('/img/imgimg.jpeg')",
        backgroundSize: "cover",
        padding: "3rem",
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
          spacing={5}
          sx={{ height: isSmDown ? "95%" : "100%" }}
        >
          <Box
            sx={{
              width: isSmDown ? "100%" : "50%",
              height: isSmDown ? "15%" : "100%",
              padding: isSmDown ? 0 : "7rem",
            }}
          >
            <Grid
              container
              sx={{ height: "100%" }}
              columnSpacing={isSmDown ? 4 : 5}
            >
              {arrayIconMXH.map((item, index) => {
                return (
                  <Grid
                    item
                    md={6}
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
                height: "85%",
              },
            }}
          >
            <Box
              className="colorSendMail"
              sx={{
                opacity: "0.7",

                width: "100%",
                height: "100%",
              }}
            ></Box>

            <Box
              sx={{
                padding: isSmDown ? "4rem 2rem" : "3rem",
                width: "100%",
                zIndex: 2,
                position: "absolute",
                top: 0,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: theme.fontName.aguda,
                  marginBottom: "2rem",
                  textAlign: "left",
                }}
              >
                HỘP THƯ CIVILIS
              </Typography>
              <Stack direction="row" sx={{ width: "100%" }} spacing={4}>
                <Box sx={{ width: "30%" }}>
                  <InputSendMail placeholder="Bạn tên gì?" />
                </Box>
                <Box sx={{ width: "70%" }}>
                  <InputSendMail placeholder="Cho mình xin gmail được không?" />
                </Box>
              </Stack>
              <InputSendMail placeholder="Bạn muốn gửi thư này đến ai?" />
              <InputTextArea placeholder="Viết gì đó" />

              <Divider />
              <ButtonGradient
                name="GỬI ĐẾN CIVILIS"
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
  return {
    marginBottom: 30,
    marginTop: 30,
    display: "block",
  };
});

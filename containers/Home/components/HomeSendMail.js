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

const arrayIconMXH = [
  "/img/iconMXH-02.jpg",
  "/img/iconMXH-03.jpg",
  "/img/iconMXH-04.jpg",
  "/img/iconMXH-05.jpg",
];

export default function HomeSendMail() {
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
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Stack
          direction="row"
          spacing={5}
          sx={{ height: "100%" }}
          className="plplplplplpl"
        >
          <Box sx={{ width: "50%", height: "100%", padding: "7rem" }}>
            <Grid container sx={{ height: "100%" }} spacing={5}>
              {arrayIconMXH.map((item, index) => {
                return (
                  <Grid
                    item
                    md={6}
                    key={index}
                    sx={{ width: "50%", height: "50%" }}
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
              width: "50%",
              textAlign: "center",
              //   padding: "4rem 2.5rem",
              position: "relative",
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
                padding: "3rem",
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
              <ButtonGradient name="GỬI ĐẾN CIVILIS" color="blue" />
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

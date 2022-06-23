import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import React, { Fragment } from "react";
import HomeIcon from "@mui/icons-material/Home";

import { NAVBARTRAVEL, NAVBARSTUDY } from "../../constants";
import Link from "../Link";
import { Image } from "../../HOC";
import { useRouter } from "next/router";
import { useWindowScroll } from "react-use";

export default function HeaderMenu() {
  const { y } = useWindowScroll();
  const theme = useTheme();
  const router = useRouter();
  const renderHeaderStudyAbroad = () => {
    return NAVBARSTUDY.map((item, index) => {
      return (
        <Link key={index} href={item.link} sx={{ textDecoration: "none" }}>
          <Typography variant="h5" sx={{ color: "white" }}>
            {item.name}
          </Typography>
        </Link>
      );
    });
  };

  const renderHeaderTravel = () => {
    return NAVBARTRAVEL.map((item, index) => {
      return (
        <Link key={index} href={item.link} sx={{ textDecoration: "none" }}>
          <Typography variant="h5" sx={{ color: "white" }}>
            {item.name}
          </Typography>
        </Link>
      );
    });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 5,
        top: "0",
        display: router.pathname == "/" ? "none" : "block",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#0873b9",
          width: "100vw",
          height: "5vh",
          display: router.pathname == "/du-hoc" ? "none" : "block",
        }}
      >
        <Container maxWidth="xl" sx={{ height: "100%" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            spacing={4}
            sx={{ height: "100%" }}
          >
            <Typography variant="h6" sx={{ color: "white" }}>
              Liên hệ
            </Typography>
            <Typography variant="h6" sx={{ color: "white" }}>
              Đăng nhập
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Box
        sx={{
          width: "100vw",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          background:
            y > 65
              ? "linear-gradient(90deg, rgba(185,234,94,1) 5%, rgba(92,198,102,1) 29%, rgba(0,240,233,1) 62%, rgba(0,152,255,1) 100%)"
              : "linear-gradient(90deg, rgba(185,234,94,0.6) 5%, rgba(92,198,102,0.6) 29%, rgba(0,240,233,0.6) 62%, rgba(0,152,255,0.6) 100%)",
        }}
      >
        <Container maxWidth="xl">
          <Stack direction="row" justifyContent="space-between" paddingY={2}>
            {/* icon and logo  */}
            <Stack direction="row" spacing={2}>
              <Link href="/">
                <HomeIcon sx={{ fontSize: "2.2rem", color: "white" }} />
              </Link>

              <Box width="14rem">
                <Link
                  href={router.pathname == "/du-hoc" ? "/du-hoc" : "/du-lich"}
                >
                  <Image
                    {...{
                      src: "/img/logo-png.png",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </Box>
            </Stack>

            {/* menu header  */}
            <Stack direction="row" alignItems="center" spacing={3}>
              {router.pathname == "/du-hoc"
                ? renderHeaderStudyAbroad()
                : renderHeaderTravel()}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

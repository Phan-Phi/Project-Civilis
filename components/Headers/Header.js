import { useWindowScroll, useToggle } from "react-use";
import { useEffect, useState, Fragment, useMemo, useCallback } from "react";
import HomeIcon from "@mui/icons-material/Home";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { useRouter } from "next/router";

import {
  AppBar,
  Box,
  Typography,
  Button,
  useTheme,
  Stack,
} from "@mui/material";
import Fade from "@mui/material/Fade";

// import {
//   usePopupState,
//   bindToggle,
//   bindPopper,
// } from "material-ui-popup-state/hooks";

import LanguageIcon from "@mui/icons-material/Language";

import Link from "../Link";
import ModalMenu from "./ModalMenu";
import Container from "../Container";
import HamburgerIcon from "../HamburgerIcon";

import { NAVBAR } from "../../constants";
import { NAVBARTRAVEL, NAVBARSTUDY } from "../../constants";

import { Image } from "../../HOC";
import useMedia from "../../hooks/useMedia";

const Header = ({}) => {
  const theme = useTheme();
  const router = useRouter();
  //   const { messages } = useIntl();

  //   const popupState = usePopupState({
  //     variant: "popper",
  //     popupId: "languagesPopper",
  //   });

  const [isToggle, setIsToggle] = useToggle(false);

  const { isMdUp, isSmDown } = useMedia();
  const { y } = useWindowScroll();
  console.log("yyyyy", y);
  const [animationState, setAnimationState] = useState(false);

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

  const HeaderPC = () => {
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
              <Stack direction="row" alignItems="center" spacing={1}>
                <Link href="/" sx={{ height: "90%" }}>
                  <HomeIcon sx={{ fontSize: "2.2rem", color: "white" }} />
                </Link>

                <Box width="15rem" height="100%">
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
  };

  useEffect(() => {
    // popupState.close();

    if (y > 50 && !animationState) {
      setAnimationState(true);
    }

    if (y < 50 && animationState) {
      setAnimationState(false);
    }
  }, [y, animationState]);

  useEffect(() => {
    if (isMdUp) {
      setIsToggle(false);
    }
  }, [isMdUp]);

  const NavbarMemo = useMemo(() => {
    //ở chế độ màn hình sẽ chuyển sang layout mobile
    const TopNav = (
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box sx={{ width: "35%", height: "100%" }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Link href="/" sx={{ paddingTop: "5px", height: "90%" }}>
              <HomeIcon sx={{ fontSize: "2.2rem", color: "white" }} />
            </Link>

            <Box
              width="15rem"
              height="100%"
              sx={{
                "& .MuiBox-root": {
                  [theme.breakpoints.down("sm")]: {
                    width: "43vw",
                  },
                },
              }}
            >
              <Link
                href={router.pathname == "/du-hoc" ? "/du-hoc" : "/du-lich"}
              >
                <Image
                  {...{
                    src: "/img/logo-png.png",
                    width: "100%",
                    height: "5vh",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </Box>
          </Stack>
        </Box>
        <MenuRoundedIcon sx={{ color: "white" }} />
        {/* <HamburgerIcon
          // onClick={() => {
          //   setIsToggle(!isToggle);
          // }}
          className={isToggle && "open"}
        /> */}
      </Stack>
    );
    return (
      <Fragment>
        <Container
          sx={{
            zIndex: 10,
            position: "fixed",
            top: 0,
            left: 0,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            background:
              y > 65
                ? "linear-gradient(90deg, rgba(185,234,94,1) 5%, rgba(92,198,102,1) 29%, rgba(0,240,233,1) 62%, rgba(0,152,255,1) 100%)"
                : "linear-gradient(90deg, rgba(185,234,94,0.6) 5%, rgba(92,198,102,0.6) 29%, rgba(0,240,233,0.6) 62%, rgba(0,152,255,0.6) 100%)",
          }}
        >
          {TopNav}
        </Container>

        {/* <Fade
          in={animationState}
          mountOnEnter
          unmountOnExit
          timeout={{
            enter: 300,
            exit: 150,
          }}
        >
          <AppBar
            sx={{
              position: "fixed",
              backgroundColor: theme.palette.common.white,
              paddingX: "32px",
            }}
          >
            {TopNav}
          </AppBar>
        </Fade> */}

        {/* <ModalMenu open={isToggle} toggle={setIsToggle}>
          <Container>
            {TopNav}

            <Box sx={{ marginTop: "8rem" }}>
              {NAVBAR.map((el, index) => {
                return (
                  <Link
                    key={index}
                    href={el.link}
                    sx={{ textDecoration: "none", marginBottom: "2rem" }}
                  >
                    <Typography
                      variant="button2"
                      sx={{
                        lineHeight: "2rem",
                        color: theme.palette.common.natural2,
                        display: "block",
                        my: 2,
                      }}
                      onClick={() => {
                        setIsToggle(false);
                      }}
                    >
                      {el.name}
                    </Typography>
                  </Link>
                );
              })}
            </Box>

            <Button sx={{ marginTop: "6rem" }}>
              <Typography variant="button2">TRỞ THÀNH ĐỐI TÁC</Typography>
            </Button>

            <Stack
              direction="row"
              spacing={3}
              sx={{ height: "5vh", marginTop: "2.5rem" }}
            >
              <Image
                src="/img/image 3.png"
                width="100%"
                height="100%"
                objectFit="contain"
              />
              <Image
                src="/img/image 4 (1).png"
                width="100%"
                height="100%"
                objectFit="contain"
              />
            </Stack>
          </Container>
        </ModalMenu> */}
      </Fragment>
    );
  }, [isMdUp, animationState, isToggle, y]);

  return (
    <Box
      sx={{
        // background: "white",
        width: "100vw",
        boxShadow: " 0px 2px 20px 0 rgba(0, 0, 0, 0.3)",
        zIndex: 10,
      }}
    >
      {isMdUp ? HeaderPC() : NavbarMemo}
    </Box>
  );
};
export default Header;

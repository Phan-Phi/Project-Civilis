import {
  Box,
  Stack,
  Typography,
  useTheme,
  styled,
  Container,
} from "@mui/material";
import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "../Link";
import useMedia from "../../hooks/useMedia";
import FooterMobileTravel from "./FooterMobileTravel";

const arrayAdress = [
  {
    name: "VĂN PHÒNG ĐẠI DIỆN TẠI HÀ NỘI",
    address:
      "Biệt thự 6 - 96 Nguyễn Huy Tưởng, P. Thanh Xuân Trung, Q.Thanh Xuân",
    phone: "028 888 888 88",
  },
  {
    name: "VĂN PHÒNG ĐẠI DIỆN TẠI HỒ CHÍ MINH",
    address:
      "Biệt thự 6 - 96 Nguyễn Huy Tưởng, P. Thanh Xuân Trung, Q.Thanh Xuân",
    phone: "028 888 888 88",
  },
  {
    name: "VĂN PHÒNG ĐẠI DIỆN TẠI ĐÀ LẠT",
    address:
      "Biệt thự 6 - 96 Nguyễn Huy Tưởng, P. Thanh Xuân Trung, Q.Thanh Xuân",
    phone: "028 888 888 88",
  },
];

const Footer = () => {
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  const theme = useTheme();
  const router = useRouter();

  const renderAddress = () => {
    return arrayAdress.map((item, index) => {
      return (
        <Box key={index} sx={{ marginBottom: "10px" }}>
          <Content variant="caption1">{item.name}</Content>
          <Content variant="caption1">{item.address}</Content>
          <Content variant="caption1">{item.phone}</Content>
        </Box>
      );
    });
  };

  if (router.pathname == "/du-lich") {
    return (
      <Fragment>
        {isSmDown ? (
          <FooterMobileTravel />
        ) : (
          <Box
            sx={{
              backgroundColor: "#0873b9",
              width: "100vw",
              display: router.pathname == "/" ? "none" : "block",
            }}
            paddingY={4}
          >
            <Container maxWidth="lg">
              <Box sx={{ marginBottom: "10px" }}>
                <Typography
                  variant="h5"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  CÔNG TY TNHH CIVILIS
                </Typography>
              </Box>

              <Stack direction="row" spacing={10}>
                <Box sx={{ width: "50%" }}>
                  <Box sx={{ marginBottom: "10px" }}>
                    <Content variant="caption1">
                      Người đại diện: NGUYỄN TIẾN ĐẠT
                    </Content>
                    <Content variant="caption1">
                      Giấy phép kinh doanh Lữ Hành Quốc Tế
                      79-361/2014/TCDL-GPLHQT Số ĐKKD 0311400064 do Sở KHĐT
                      Tp.HCM cấp ngày 08/12/2011
                    </Content>
                    <Content variant="caption1">Hotline: 0989 633 678</Content>
                    <Content variant="caption1">
                      Email: info@toptentravel.com.vn
                    </Content>
                  </Box>
                  <Box>
                    <Content variant="caption1">
                      VĂN PHÒNG ĐẠI DIỆN HÀ NỘI
                    </Content>
                    <Content variant="caption1">
                      Biệt thự 6 - 96 Nguyễn Huy Tưởng, P. Thanh Xuân Trung, Q.
                      Thanh Xuân
                    </Content>
                    <Content variant="caption1">
                      Hotline: 028 888 888 88{" "}
                    </Content>
                  </Box>
                </Box>

                <Box sx={{ width: "50%" }}>
                  <Box sx={{ marginBottom: "10px" }}>
                    <Content variant="caption1">
                      VĂN PHÒNG ĐẠI DIỆN HÀ NỘI
                    </Content>
                    <Content variant="caption1">
                      Biệt thự 6 - 96 Nguyễn Huy Tưởng, P. Thanh Xuân Trung, Q.
                      Thanh Xuân, Hà Nội
                    </Content>
                    <Content variant="caption1">
                      Hotline: 028 888 888 88{" "}
                    </Content>
                  </Box>
                  <Box sx={{ marginBottom: "10px" }}>
                    <Content variant="caption1">
                      VĂN PHÒNG ĐẠI DIỆN HÀ NỘI
                    </Content>
                    <Content variant="caption1">
                      Biệt thự 6 - 96 Nguyễn Huy Tưởng, P. Thanh Xuân Trung, Q.
                      Thanh Xuân, Hà Nội
                    </Content>
                    <Content variant="caption1">
                      Hotline: 028 888 888 88{" "}
                    </Content>
                  </Box>

                  <Stack direction="row" spacing={5}>
                    <Link href="/">
                      <Content
                        variant="h5"
                        sx={{ borderBottom: "1px solid white" }}
                      >
                        ĐIỀU KHOẢN SỬ DỤNG
                      </Content>
                    </Link>
                    <Link href="/">
                      <Content
                        variant="h5"
                        sx={{ borderBottom: "1px solid white" }}
                      >
                        CHÍNH SÁCH BẢO MẬT
                      </Content>
                    </Link>
                  </Stack>
                </Box>
              </Stack>
            </Container>
          </Box>
        )}
      </Fragment>
    );
  } else if (router.pathname == "/du-hoc") {
    return (
      <Box
        sx={{
          backgroundColor: "#0873b9",
          width: "100vw",
          display: router.pathname == "/" ? "none" : "block",
        }}
        paddingY={4}
      >
        <Container maxWidth="lg">
          <Stack direction="row" spacing={10}>
            <Box sx={{ width: "50%" }}>
              <Box sx={{ marginBottom: "10px" }}>
                <Title variant="h4" sx={{ marginBottom: "10px" }}>
                  CÔNG TY TNHH CIVILIS
                </Title>
                <Content variant="caption1">
                  Đại diện pháp lý: NGUYỄN TIẾN ĐẠT
                </Content>
                <Content variant="caption1">
                  Giấy phép kinh doanh số: 0314993126 (Cấp bởi Sở Kế Hoạch và
                  Đầu Tư Tp.HCM)
                </Content>
                <Content variant="caption1">
                  Giấy phép tư vấn du học số: 2270/GDĐT-TC (Cấp bởi Bộ Giáo Dục
                  và Đào Tạo)
                </Content>
                <Content variant="caption1">Hotline: 0989 633 678</Content>
                <Content variant="caption1">
                  Email: info@toptentravel.com.vn
                </Content>
              </Box>
            </Box>

            <Box sx={{ width: "50%" }}>{renderAddress()}</Box>
          </Stack>
        </Container>
      </Box>
    );
  } else if (router.pathname == "/") {
    return null;
  }
};
export default Footer;

const Title = styled(Typography)(({ theme }) => {
  return {
    lineHeight: "1.2rem",
    display: "block",
    fontWeight: "800",
    color: "white",
  };
});

const Content = styled(Typography)(({ theme }) => {
  return {
    lineHeight: "1.5rem",
    display: "block",
    fontWeight: "200",
    color: "white",
  };
});

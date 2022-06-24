import {
  Box,
  Container,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Link from "../Link";

export default function FooterMobileTravel() {
  const router = useRouter();
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "#0873b9",
        width: "100vw",
        display: router.pathname == "/" ? "none" : "block",
      }}
      paddingY={4}
    >
      <Container
        maxWidth="lg"
        sx={{ paddingX: "30px !important" }}
        className="asdasdadad"
      >
        <Stack direction="column" spacing={10}>
          <Box>
            <Box sx={{ marginBottom: "10px" }}>
              <Typography
                variant="h5"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                CÔNG TY TNHH CIVILIS
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
              <Content variant="caption1">
                Người đại diện: NGUYỄN TIẾN ĐẠT
              </Content>
              <Content variant="caption1">
                Giấy phép kinh doanh Lữ Hành Quốc Tế 79-361/2014/TCDL-GPLHQT Số
                ĐKKD 0311400064 do Sở KHĐT Tp.HCM cấp ngày 08/12/2011
              </Content>
              <Content variant="caption1">Hotline: 0989 633 678</Content>
              <Content variant="caption1">
                Email: info@toptentravel.com.vn
              </Content>
            </Box>
          </Box>

          <Stack direction="row" sx={{ marginTop: "1rem !important" }}>
            <Box sx={{ width: "50%" }}>
              <Box sx={{ marginBottom: "15px" }}>
                <Content variant="caption1">
                  VĂN PHÒNG ĐẠI DIỆN TẠI HÀ NỘI
                </Content>
                <Content variant="caption1">
                  Biệt thự 6 - 96 Nguyễn Huy Tưởng, P. Thanh Xuân Trung, Q.
                  Thanh Xuân
                </Content>
                <Content variant="caption1">
                  028 888 888 88 - 0909 000 000
                </Content>
              </Box>
              <Box>
                <Content variant="caption1">
                  VĂN PHÒNG ĐẠI DIỆN TẠI HỒ CHÍ MINH
                </Content>
                <Content variant="caption1">
                  44 Dặng Dung, Phường Tân Định, Quận 1
                </Content>
                <Content variant="caption1">
                  028 888 888 88 - 0909 000 000
                </Content>
              </Box>
            </Box>

            <Box>
              <Box sx={{ marginBottom: "15px" }}>
                <Content variant="caption1">VĂN PHÒNG ĐẠI DIỆN HÀ NỘI</Content>
                <Content variant="caption1">56 Đào Duy Từ,Phường 9</Content>
                <Content variant="caption1">Hotline: 028 888 888 88 </Content>
              </Box>
              <Link href="/">
                <Content
                  variant="body2"
                  sx={{ borderBottom: "1px solid white" }}
                >
                  ĐIỀU KHOẢN SỬ DỤNG
                </Content>
              </Link>
              <Link href="/">
                <Content
                  variant="body2"
                  sx={{ borderBottom: "1px solid white" }}
                >
                  CHÍNH SÁCH BẢO MẬT
                </Content>
              </Link>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

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

import { Box, Stack, Typography, useTheme, styled } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Link from "../Link";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: "#0873b9", width: "100vw" }} paddingY={4}>
      <Container maxWidth="lg">
        <Box sx={{ marginBottom: "10px" }}>
          <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
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
                Giấy phép kinh doanh Lữ Hành Quốc Tế 79-361/2014/TCDL-GPLHQT Số
                ĐKKD 0311400064 do Sở KHĐT Tp.HCM cấp ngày 08/12/2011
              </Content>
              <Content variant="caption1">Hotline: 0989 633 678</Content>
              <Content variant="caption1">
                Email: info@toptentravel.com.vn
              </Content>
            </Box>
            <Box>
              <Content variant="caption1">VĂN PHÒNG ĐẠI DIỆN HÀ NỘI</Content>
              <Content variant="caption1">
                Biệt thự 6 - 96 Nguyễn Huy Tưởng, P. Thanh Xuân Trung, Q. Thanh
                Xuân
              </Content>
              <Content variant="caption1">Hotline: 028 888 888 88 </Content>
            </Box>
          </Box>

          <Box sx={{ width: "50%" }}>
            <Box sx={{ marginBottom: "10px" }}>
              <Content variant="caption1">VĂN PHÒNG ĐẠI DIỆN HÀ NỘI</Content>
              <Content variant="caption1">
                Biệt thự 6 - 96 Nguyễn Huy Tưởng, P. Thanh Xuân Trung, Q. Thanh
                Xuân, Hà Nội
              </Content>
              <Content variant="caption1">Hotline: 028 888 888 88 </Content>
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
              <Content variant="caption1">VĂN PHÒNG ĐẠI DIỆN HÀ NỘI</Content>
              <Content variant="caption1">
                Biệt thự 6 - 96 Nguyễn Huy Tưởng, P. Thanh Xuân Trung, Q. Thanh
                Xuân, Hà Nội
              </Content>
              <Content variant="caption1">Hotline: 028 888 888 88 </Content>
            </Box>

            <Stack direction="row" spacing={5}>
              <Link href="/">
                <Content variant="h5" sx={{ borderBottom: "1px solid white" }}>
                  ĐIỀU KHOẢN SỬ DỤNG
                </Content>
              </Link>
              <Link href="/">
                <Content variant="h5" sx={{ borderBottom: "1px solid white" }}>
                  CHÍNH SÁCH BẢO MẬT
                </Content>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

const Content = styled(Typography)(({ theme }) => {
  return {
    lineHeight: "1.2rem",
    display: "block",
    fontWeight: "400",
    color: "white",
  };
});

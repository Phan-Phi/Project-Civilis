import { Box } from "@mui/material";

import { SettingConfig, GlobalConfig } from "../../context";
import Footer from "../Footer/Footer";
import Header from "../Headers/Header";
import HeaderMenu from "../Headers/HeaderMenu";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "100%",
        minWidth: "100%",
        minHeight: "100vh",
      }}
    >
      <SettingConfig>
        <GlobalConfig>
          <Header />
          <Box
            sx={{
              flexGrow: 1,
              width: "100%",
            }}
          >
            {children}
          </Box>
          <Footer />
        </GlobalConfig>
      </SettingConfig>
    </Box>
  );
};

export default Layout;

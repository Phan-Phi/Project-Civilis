import { Box } from "@mui/material";
import React from "react";
import HomeBanner from "./components/HomeBanner";
import HomeFeedBack from "./components/HomeFeedBack";
import HomePartner from "./components/HomePartner";
import HomeSendMail from "./components/HomeSendMail";
import HomeStudyBenefit from "./components/HomeStudyBenefit";
import HomeTravelGuide from "./components/HomeTravelGuide";
import InforStudyAbroad from "./components/InforStudyAbroad";

export default function HomeStyduAbroad() {
  return (
    <Box>
      <HomeBanner />
      <InforStudyAbroad />
      <HomeStudyBenefit />
      <HomeTravelGuide />
      <HomeFeedBack />
      <HomeSendMail />
      <HomePartner />
    </Box>
  );
}

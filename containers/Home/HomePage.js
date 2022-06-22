import { Fragment } from "react";

import HomeBanner from "./components/HomeBanner";
import HomeFeedBack from "./components/HomeFeedBack";
import HomeTourBenefit from "./components/HomeTourBenefit";
import HomeTravelGuide from "./components/HomeTravelGuide";
import HomePartner from "./components/HomePartner";
import HomeSearch from "../../components/HomeSearch/HomeSearch";
import HomeSendMail from "./components/HomeSendMail";

const HomePage = ({ initData, ...props }) => {
  // const [] = initData;

  return (
    <Fragment>
      <HomeBanner />
      <HomeSearch />
      <HomeTourBenefit />
      <HomeTravelGuide />
      <HomeFeedBack />
      <HomeSendMail />
      <HomePartner />
    </Fragment>
  );
};

export default HomePage;

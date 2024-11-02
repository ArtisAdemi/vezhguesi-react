import React, { useState } from "react";
import LandingNavbar from "../components/landingpage/LandingNavbar";

import LandingIntroduction from "../components/landingpage/LandingIntroduction";
import LandingSource from "../components/landingpage/LandingSource";
import LandingAbout from "../components/landingpage/LandingAbout";
import LandingCTA from "../components/landingpage/LandingCTA";
import LandingMission from "../components/landingpage/LandingMission";
//import LandingPricing from "../components/landingpage/LandingPricing";
import LandingFooter from "../components/landingpage/LandingFooter";
import Landinghero from "../components/landingpage/LandingHero";

const LandingPage: React.FC = () => {
  const [] = useState(false);

  return (
    <div className="">
      <LandingNavbar />
      <Landinghero />
      <LandingIntroduction />
      <LandingSource />
      <LandingAbout />

      <LandingMission />
      <LandingCTA />
      {/* <LandingPricing /> */}
      <LandingFooter />
    </div>
  );
};

export default LandingPage;

import React, { useState } from "react";
import LandingNavbar from "../landingpage/LandingNavbar";

import LandingIntroduction from "../landingpage/LandingIntroduction";
import LandingSource from "../landingpage/LandingSource";
import LandingAbout from "../landingpage/LandingAbout";
import LandingCTA from "../landingpage/LandingCTA";
import LandingMission from "../landingpage/LandingMission";
import LandingPricing from "../landingpage/LandingPricing";
import LandingFooter from "../landingpage/LandingFooter";
import Landinghero from "../landingpage/LandingHero";

const LandingPage: React.FC = () => {
  const [] = useState(false);

  return (
    <div>
      <LandingNavbar />
      <Landinghero />
      <LandingIntroduction />
      <LandingSource />
      <LandingAbout />

      <LandingMission />
      <LandingCTA />
      <LandingPricing />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;

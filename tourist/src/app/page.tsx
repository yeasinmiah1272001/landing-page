import Choose from "@/components/Choose";
import Explore from "@/components/Explore";
import Phones from "@/components/Phones";
import PopularPlace from "@/components/PopularPlace";
import TourBanner from "@/components/TourBanner";
import TouristAgency from "@/components/TouristAgency";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <TouristAgency />
      <Choose />
      <PopularPlace />
      <Explore />
      <Phones />
      <TourBanner />
    </div>
  );
};

export default Homepage;

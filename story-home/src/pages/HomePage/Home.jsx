import React from "react";
import Banner from "./Banner/Banner";
import FeaturedServicePart from "./FeaturedServices/FeaturedServicePart";
import EstimatePart from "./EstimatePart/EstimatePart";
import REviewPart from "./ReviewPart/REviewPart";
import BrandingPart from "./BrandingPart/BrandingPart";
import ProjectPart from "./ProjectPart/ProjectPart";
import StatsPart from "./StatsPart/StatsPart";
import ArticalPart from "./ArticlePart/ArticalPart";
import LastPart from "./LastPart/LastPart";

const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedServicePart />
      <EstimatePart />
      <REviewPart />
      <BrandingPart />
      <ProjectPart />
      <StatsPart />
      <ArticalPart />
      <LastPart />
    </>
  );
};

export default Home;

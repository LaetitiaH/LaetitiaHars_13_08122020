import React from "react";
import HomeFeature from "./HomeFeature";
import "./index.scss";
import { homeFeaturesList } from "../../utils/texts/texts";

const HomeFeatures: React.FC = () => (
  <section className="features">
    <h2 className="sr-only">Features</h2>
    {homeFeaturesList.map((homeFeature) => (
      <HomeFeature
        key={homeFeature.title}
        logo={homeFeature.logo}
        title={homeFeature.title}
        description={homeFeature.description}
      ></HomeFeature>
    ))}
  </section>
);

export default HomeFeatures;

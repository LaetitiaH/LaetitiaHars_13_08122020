import React from "react";
import "./index.scss";

export interface Feature {
  logo: string;
  title: string;
  description: string;
}

const HomeFeature: React.FC<Feature> = ({ logo, title, description }) => (
  <div className="feature-item">
    <img src={logo} alt="Chat Icon" className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p>{description}</p>
  </div>
);

export default HomeFeature;

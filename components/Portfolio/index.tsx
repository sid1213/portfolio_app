import React from "react";

import "./index.scss";

import PortfolioTab from "../portfolioTab";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <PortfolioTab title="Portfolio" url="/data/portfolio.json" length={12} />
    </section>
  );
};

export default Portfolio;

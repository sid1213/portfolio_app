import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.scss";
import Image from "next/image";
import getPortfolio from "@/api/getPortfolio";
import Link from "next/link";
import PortfolioTab from "../portfolioTab";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <PortfolioTab
        isButtonVisible={true}
        title="Portfolio"
        url="http://localhost:3000/data/portfolio.json"
        viewMoreUrl="http://localhost:3000/portfolio"
        length={12}
      />
    </section>
  );
};

export default Portfolio;

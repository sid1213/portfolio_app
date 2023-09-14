import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.scss";
import Image from "next/image";

const imagesData = [
  {
    imgCategory: "Art",
    imgUrl: "rishab_about.png",
  },
  {
    imgCategory: "laat",
    imgUrl: "rishab_about.png",
  },
  {
    imgCategory: "heart",
    imgUrl: "rishab_about.png",
  },
  {
    imgCategory: "PORTFOLIO",
    imgUrl: "rishab_about.png",
  },
  {
    imgCategory: "ALL",
    imgUrl: "abc.png",
  },
  {
    imgCategory: "ALL",
    imgUrl: "bcd.png",
  },
  {
    imgCategory: "PORTFOLIO",
    imgUrl: "rishab_about.png",
  },
  {
    imgCategory: "UI/UX",
    imgUrl: "abc.png",
  },
  {
    imgCategory: "UI/UX",
    imgUrl: "abc.png",
  },
  {
    imgCategory: "ALL",
    imgUrl: "abc.png",
  },
  {
    imgCategory: "ALL",
    imgUrl: "abc.png",
  },
  {
    imgCategory: "ALL",
    imgUrl: "abc.png",
  },
  {
    imgCategory: "ALL",
    imgUrl: "abc.png",
  },
  {
    imgCategory: "ALL",
    imgUrl: "abc.png",
  },
  {
    imgCategory: "ALL",
    imgUrl: "abc.png",
  },
  {
    imgCategory: "ALL",
    imgUrl: "abc.png",
  },
  {
    imgCategory: "ALL",
    imgUrl: "abc.png",
  },
  {
    imgCategory: "ALL",
    imgUrl: "abc.png",
  },
];

const tabs = [...new Set(imagesData.map((item) => item.imgCategory))];

const items: TabsProps["items"] = tabs.map((category) => {
  const filter = imagesData.filter((item) => item.imgCategory === category);
  const tabData: React.JSX.Element[] = [];
  filter.some((url, index) => {
    if (index === 13) {
      return true;
    }
    tabData.push(
      <div key={url.imgCategory + index}>
        <Image
          src={"/" + url.imgUrl}
          width={400}
          height={400}
          alt={url.imgUrl.split(".")[1]}
          objectFit="contain"
        />
      </div>
    );
  });

  return {
    key: category,
    label: category,
    children: (
      <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {tabData}
      </div>
    ),
  };
});

const Portfolio = () => {
  return (
    <section>
      <div className=" sm:p-5 w-full text-center">
        <h1>Portfolio</h1>
        <div className="mt-10">
          <Tabs
            defaultActiveKey={items[0].key}
            items={items}
            tabPosition="top"
            className="tabs"
          />
        </div>
        <div className="mt-5">
          <button className="bg-[#FC5454] px-5 py-3 text-white font-semibold rounded-xl">
            View more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

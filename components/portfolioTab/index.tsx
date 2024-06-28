import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.scss";
import Image from "next/image";

import Link from "next/link";

interface PropType {
  url: string;
  title: string;
  length: number | "ALL";
}
const data = [
  {
    imgCategory: "EdgeCX",
    imgUrl: "dashcx-web.svg",
    url: "https://app.dashcx.com",
  },
  {
    imgCategory: "EdgeCX",
    imgUrl: "dashcx-mobile.svg",
    url: "https://play.google.com/store/apps/details?id=com.whatcx.app&hl=en&gl=US",
  },

  {
    imgCategory: "EdgeCX",
    imgUrl: "dashcx-management-portal.svg",
    url: "https://managementstaging.whatcx.com/",
  },
  {
    imgCategory: "EdgeCX",
    imgUrl: "dashcx-website.svg",
    url: "https://www.dashcx.com/",
  },
  {
    imgCategory: "Cobold Digital",
    imgUrl: "home-llc.svg",
    url: "https://home.llc/",
  },
  {
    imgCategory: "Cobold Digital",
    imgUrl: "clat-possible.svg",
    url: "https://www.clatpossible.com",
  },
  {
    imgCategory: "Cobold Digital",
    imgUrl: "motwane.svg",
    url: "https://motwane.com/",
  },

  {
    imgCategory: "Personal",
    imgUrl: "instaride.svg",
    url: "https://instaride-sid1213.vercel.app/",
  },
  {
    imgCategory: "Personal",
    imgUrl: "mycommerce.svg",
    url: "https://myecomers.vercel.app/",
  },
  {
    imgCategory: "Personal",
    imgUrl: "rode-clone.svg",
    url: "https://dashing-trifle-a24a74.netlify.app/",
  },
  {
    imgCategory: "Personal",
    imgUrl: "shopify-website-clone.svg",
    url: "https://genuine-beijinho-67e99a.netlify.app/",
  },
  {
    imgCategory: "Personal",
    imgUrl: "mario.svg",
    url: "https://density-assesment-delta.vercel.app/",
  },
];

const PortfolioTab: React.FC<PropType> = async ({ url, title, length }) => {
  const getImageData = () => {
    const imagesData = data;
    const tabs = [...new Set(imagesData.map((item) => item.imgCategory))];

    const items: TabsProps["items"] = tabs.map((category) => {
      const filter = imagesData.filter((item) => item.imgCategory === category);
      const tabData: React.JSX.Element[] = [];
      filter.some((url, index) => {
        if (length !== "ALL")
          if (index >= length) {
            return true;
          }
        tabData.push(
          <Link
            key={url.imgCategory + index}
            href={url.url ? url.url : "#"}
            target="_blank"
            className="relative img-blur"
          >
            <Image
              src={"/" + url.imgUrl}
              width={400}
              height={400}
              alt={url.imgUrl.split(".")[1]}
              objectFit="contain"
            />
            <div className="link absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white z-10 text-lg font-extrabold">
              View
            </div>
          </Link>
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
    return items;
  };
  const items = await getImageData();

  return (
    <div className="mt-10 sm:mt-0 sm:p-5 w-full text-center">
      <h1>{title}</h1>
      <div className="mt-5 sm:mt-10">
        <Tabs
          defaultActiveKey={items[0].key}
          items={items}
          tabPosition="top"
          className="tabs"
        />
      </div>
    </div>
  );
};

export default PortfolioTab;

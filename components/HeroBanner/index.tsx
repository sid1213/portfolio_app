"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./index.scss";
import Link from "next/link";
const HeroBanner = () => {
  return (
    <section className="h-fit" id="heroBanner">
      <div
        className={` gap-y-8 sm:gap-2 flex w-full flex-col sm:flex-row justify-between items-center profile transition`}
      >
        <div className="sm:w-1/2 order-2 sm:order-1 ">
          <h1 className="animation-heading ">
            Hello!! <br /> I am Siddharth <br /> I am passionate <br /> about
            <br />
            <TypeAnimation
              sequence={[
                "Frontend Development",
                2 * 1000,
                "Product Development",
                2 * 1000,
                "APP Development",
                2 * 1000,
                "UI Development",
                2 * 1000,
              ]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
              cursor={false}
              preRenderFirstString={true}
              className="xl:whitespace-nowrap"
            />
            <span>&nbsp;</span>
          </h1>
          <p className="mt-6">Currently Working at @DashCX</p>
        </div>
        <div className="sm:w-1/2 order-1 sm:order-2  sm:m-0 mt-10 relative ">
          <div className="relative w-fit ml-auto ">
            <Image
              src="/siddharth.jpeg"
              width={400}
              height={400}
              alt="Profile-image"
              objectFit="contain"
            />
            <div className="absolute ball  w-28 h-28 flex justify-center items-center rounded-full right-0 sm:right-1/2 bottom-0 translate-x-[20%] sm:translate-x-1/2 sm:translate-y-1/2 translate-y-[20%] font-light leading-5 text-white text-xl">
              <Link
                href={"/siddharthsoni.pdf"}
                download
                target="_blank"
                className="text-white "
              >
                Click <br /> here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

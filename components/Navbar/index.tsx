import React, { Dispatch, SetStateAction, useState } from "react";
import "./index.scss";
import Image from "next/image";
import { Drawer } from "antd";
import Link from "next/link";
interface PropTyp {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<PropTyp> = ({ isDark, setIsDark }) => {
  const handleSetDarkMode: any = () => {
    setIsDark(isDark ? false : true);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className=" max-h-28 container fixed w-screen mx-auto p-5  z-10 navbar top-0">
      <div className="flex w-full justify-between items-center">
        <Logo />
        <div>
          <ul className=" hidden lg:block space-x-10">
            <li>
              <Link href="#heroBanner">Home</Link>
            </li>
            <li>
              <Link href="#about">About me</Link>
            </li>
            <li>
              <Link href="#portfolio">Work</Link>
            </li>

            <li>
              <Link href="#getInTouch">Get in Touch</Link>
            </li>
            <li>
              <button
                className={`${
                  !isDark ? "bg-black" : "bg-[#F26A21]"
                }  flex gap-5 p-2 rounded-full justify-between items-center relative`}
                onClick={handleSetDarkMode}
              >
                <div className={`${!isDark && "opacity-0"}`}>
                  <Image
                    src="/moon.svg"
                    alt="logo"
                    width={15}
                    height={15}
                    objectFit="contain"
                  />
                </div>
                <div className={`${isDark && "opacity-0"}`}>
                  <Image
                    src="/sun.svg"
                    alt="logo"
                    width={20}
                    height={20}
                    objectFit="contain"
                  />
                </div>
                <div
                  className={`w-[21px] mx-2 rounded-full h-[21px] bg-white absolute transition left-0 ${
                    isDark ? "translate-x-[140%]" : "translate-x-0"
                  } `}
                ></div>
              </button>
            </li>
          </ul>
          <div className="lg:hidden" onClick={showDrawer}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_331_1168)">
                <path
                  d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"
                  fill={isDark ? "white" : "black"}
                />
              </g>
              <defs>
                <clipPath id="clip0_331_1168">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <Drawer
          placement="right"
          open={open}
          onClose={onClose}
          className="z-10 bg-red-100 drawer"
          style={{ background: !isDark ? "#fff4ea" : "black" }}
        >
          <ul className="  gap-3 flex flex-col">
            <li onClick={onClose}>
              <Link href="#heroBanner">Home</Link>
            </li>
            <li onClick={onClose}>
              <Link href="#about">About me</Link>
            </li>
            <li onClick={onClose}>
              <Link href="#portfolio">Work</Link>
            </li>

            <li onClick={onClose}>
              <Link href="#getInTouch">Get in Touch</Link>
            </li>
            <li>
              <button
                className={`${
                  !isDark ? "bg-black" : "bg-[#F26A21]"
                }  flex gap-5 p-2 rounded-full justify-between items-center relative`}
                onClick={handleSetDarkMode}
              >
                <div className={`${!isDark && "opacity-0"}`}>
                  <Image
                    src="/moon.svg"
                    alt="logo"
                    width={15}
                    height={15}
                    objectFit="contain"
                  />
                </div>
                <div className={`${isDark && "opacity-0"}`}>
                  <Image
                    src="/sun.svg"
                    alt="logo"
                    width={20}
                    height={20}
                    objectFit="contain"
                  />
                </div>
                <div
                  className={`w-[21px] mx-2 rounded-full h-[21px] bg-white absolute transition left-0 ${
                    isDark ? "translate-x-[140%]" : "translate-x-0"
                  } `}
                ></div>
              </button>
            </li>
          </ul>
        </Drawer>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="logo-parent">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5V17H8.5C3.80558 17 0 13.1944 0 8.5Z"
          fill="#DE31C2"
        />
        <path
          d="M0 19H10C13.866 19 17 22.134 17 26V36H7C3.13401 36 0 32.866 0 29V19Z"
          fill="#FF9534"
        />
        <path
          d="M19 0H29C32.866 0 36 3.13401 36 7V17H26C22.134 17 19 13.866 19 10V0Z"
          fill="#FC5454"
        />
        <path
          d="M36 27.5C36 32.1944 32.1944 36 27.5 36C22.8056 36 19 32.1944 19 27.5V19H27.5C32.1944 19 36 22.8056 36 27.5Z"
          fill="url(#paint0_linear_122_20)"
          fill-opacity="0.7"
        />
        <defs>
          <linearGradient
            id="paint0_linear_122_20"
            x1="27.5"
            y1="36"
            x2="27.5"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7C42F6" />
            <stop offset="1" stop-color="#0964EC" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Navbar;

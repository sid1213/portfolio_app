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
    <nav className=" max-h-28 container fixed w-full mx-auto p-5  z-10 navbar">
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
              <Link href="#designs"> Design shops</Link>
            </li>
            <li>
              <Link href="#skills">Resume</Link>
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
              <g clip-path="url(#clip0_331_1168)">
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
              <Link href="#designs"> Design shops</Link>
            </li>
            <li onClick={onClose}>
              <Link href="#skills">Resume</Link>
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
        width="125"
        height="36"
        viewBox="0 0 125 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M53.6113 19.583L50.406 14.9786H46.8684V19.583H43.022V3.05429H50.2161C51.6881 3.05429 52.9623 3.29828 54.0387 3.78627C55.1308 4.27427 55.9698 4.9669 56.5554 5.86417C57.1411 6.76145 57.4339 7.82401 57.4339 9.05186C57.4339 10.2797 57.1331 11.3423 56.5317 12.2395C55.946 13.1211 55.1071 13.798 54.0149 14.2702L57.7425 19.583H53.6113ZM53.5401 9.05186C53.5401 8.1231 53.2393 7.41473 52.6379 6.92673C52.0364 6.423 51.1579 6.17113 50.0024 6.17113H46.8684V11.9326H50.0024C51.1579 11.9326 52.0364 11.6807 52.6379 11.177C53.2393 10.6732 53.5401 9.96487 53.5401 9.05186Z"
          fill="white"
          className="logo transition"
        />
        <path
          d="M60.2201 6.87951H63.924V19.583H60.2201V6.87951ZM62.0721 5.10857C61.3914 5.10857 60.8374 4.9118 60.4101 4.51826C59.9827 4.12472 59.769 3.63673 59.769 3.05429C59.769 2.47185 59.9827 1.98385 60.4101 1.59031C60.8374 1.19677 61.3914 1 62.0721 1C62.7527 1 63.3067 1.1889 63.7341 1.5667C64.1614 1.9445 64.3751 2.41675 64.3751 2.98345C64.3751 3.59737 64.1614 4.10898 63.7341 4.51826C63.3067 4.9118 62.7527 5.10857 62.0721 5.10857Z"
          fill="white"
          className="logo transition"
        />
        <path
          d="M71.6589 19.7719C70.5984 19.7719 69.5617 19.646 68.5486 19.3941C67.5356 19.1265 66.7284 18.7959 66.1269 18.4024L67.3615 15.7578C67.9313 16.1199 68.6199 16.419 69.4271 16.6551C70.2344 16.8755 71.0258 16.9857 71.8014 16.9857C73.3684 16.9857 74.1519 16.6 74.1519 15.8286C74.1519 15.4666 73.9382 15.2068 73.5109 15.0494C73.0835 14.892 72.4266 14.7582 71.5402 14.648C70.4955 14.4906 69.6329 14.3096 68.9523 14.1049C68.2716 13.9003 67.6781 13.5382 67.1716 13.0188C66.6809 12.4993 66.4355 11.7594 66.4355 10.7992C66.4355 9.99636 66.6651 9.28798 67.1241 8.67406C67.5989 8.04439 68.2796 7.5564 69.166 7.21008C70.0682 6.86377 71.1287 6.69061 72.3475 6.69061C73.2497 6.69061 74.144 6.79293 75.0304 6.99757C75.9326 7.18647 76.6766 7.45408 77.2622 7.8004L76.0276 10.4214C74.9038 9.79171 73.6771 9.47688 72.3475 9.47688C71.5561 9.47688 70.9625 9.58707 70.5668 9.80746C70.1711 10.0278 69.9732 10.3112 69.9732 10.6575C69.9732 11.051 70.1869 11.3265 70.6143 11.4839C71.0416 11.6414 71.7223 11.7909 72.6561 11.9326C73.7008 12.1057 74.5556 12.2946 75.2203 12.4993C75.8851 12.6882 76.4629 13.0424 76.9536 13.5618C77.4443 14.0813 77.6896 14.8054 77.6896 15.7342C77.6896 16.5213 77.4522 17.2218 76.9773 17.8357C76.5025 18.4496 75.806 18.9297 74.8879 19.2761C73.9857 19.6066 72.9094 19.7719 71.6589 19.7719Z"
          fill="white"
          className="logo transition"
        />
        <path
          d="M87.7387 6.69061C89.3216 6.69061 90.5957 7.16286 91.5613 8.10736C92.5427 9.05186 93.0333 10.4529 93.0333 12.3104V19.583H89.3295V12.8771C89.3295 11.8696 89.1079 11.1219 88.6647 10.6339C88.2215 10.1302 87.5804 9.87829 86.7415 9.87829C85.8076 9.87829 85.0637 10.1695 84.5097 10.752C83.9557 11.3187 83.6787 12.1687 83.6787 13.3021V19.583H79.9748V2.06256H83.6787V8.20181C84.1694 7.71382 84.763 7.34389 85.4594 7.09202C86.1559 6.82441 86.9156 6.69061 87.7387 6.69061Z"
          fill="white"
          className="logo transition"
        />
        <path
          d="M101.543 6.69061C103.521 6.69061 105.041 7.16286 106.101 8.10736C107.162 9.03612 107.692 10.445 107.692 12.334V19.583H104.226V18.001C103.529 19.1816 102.231 19.7719 100.332 19.7719C99.3506 19.7719 98.4959 19.6066 97.7678 19.2761C97.0555 18.9455 96.5094 18.489 96.1295 17.9065C95.7497 17.3241 95.5597 16.6629 95.5597 15.9231C95.5597 14.7425 96.0029 13.8137 96.8893 13.1368C97.7915 12.4599 99.1765 12.1215 101.044 12.1215H103.988C103.988 11.3187 103.743 10.7047 103.252 10.2797C102.762 9.83894 102.026 9.61856 101.044 9.61856C100.364 9.61856 99.6909 9.72875 99.0261 9.94913C98.3772 10.1538 97.8232 10.4371 97.3642 10.7992L96.0346 8.22542C96.731 7.73743 97.562 7.35963 98.5276 7.09202C99.5089 6.82441 100.514 6.69061 101.543 6.69061ZM101.258 17.2926C101.891 17.2926 102.453 17.1509 102.944 16.8676C103.434 16.5685 103.783 16.1356 103.988 15.5689V14.2702H101.448C99.9284 14.2702 99.1686 14.7661 99.1686 15.7578C99.1686 16.2301 99.3506 16.6079 99.7147 16.8912C100.095 17.1588 100.609 17.2926 101.258 17.2926Z"
          fill="white"
          className="logo transition"
        />
        <path
          d="M118.595 6.69061C119.782 6.69061 120.858 6.96609 121.824 7.51705C122.805 8.05226 123.573 8.81573 124.127 9.80746C124.681 10.7834 124.958 11.9247 124.958 13.2313C124.958 14.5378 124.681 15.687 124.127 16.6787C123.573 17.6547 122.805 18.4181 121.824 18.9691C120.858 19.5043 119.782 19.7719 118.595 19.7719C116.838 19.7719 115.5 19.221 114.582 18.1191V19.583H111.044V2.06256H114.748V8.22542C115.682 7.20221 116.964 6.69061 118.595 6.69061ZM117.954 16.7495C118.903 16.7495 119.679 16.4347 120.28 15.805C120.898 15.1596 121.206 14.3017 121.206 13.2313C121.206 12.1608 120.898 11.3108 120.28 10.6811C119.679 10.0357 118.903 9.71301 117.954 9.71301C117.004 9.71301 116.22 10.0357 115.603 10.6811C115.002 11.3108 114.701 12.1608 114.701 13.2313C114.701 14.3017 115.002 15.1596 115.603 15.805C116.22 16.4347 117.004 16.7495 117.954 16.7495Z"
          fill="white"
          className="logo transition"
        />
        <path
          d="M57.578 22.0211L52.1884 34.7246H48.3659L43 22.0211H46.8226L50.3602 30.6633L54.0166 22.0211H57.578Z"
          fill="white"
          className="logo transition"
        />
        <path
          d="M71.254 28.4201C71.254 28.4673 71.2303 28.7979 71.1828 29.4118H61.5195C61.6936 30.1989 62.1052 30.8207 62.7541 31.2772C63.4031 31.7337 64.2104 31.962 65.1759 31.962C65.8407 31.962 66.4264 31.8675 66.9329 31.6786C67.4552 31.474 67.938 31.1591 68.3812 30.7341L70.3518 32.8592C69.1489 34.2288 67.3919 34.9135 65.0809 34.9135C63.6405 34.9135 62.3663 34.638 61.2584 34.0871C60.1504 33.5204 59.2956 32.7412 58.6941 31.7494C58.0927 30.7577 57.7919 29.6322 57.7919 28.3729C57.7919 27.1293 58.0847 26.0116 58.6704 25.0199C59.2719 24.0124 60.087 23.2332 61.1159 22.6822C62.1606 22.1156 63.324 21.8322 64.6061 21.8322C65.8565 21.8322 66.9883 22.0998 68.0013 22.635C69.0143 23.1702 69.8057 23.9416 70.3756 24.949C70.9612 25.9408 71.254 27.0978 71.254 28.4201ZM64.6298 24.6185C63.7909 24.6185 63.0865 24.8546 62.5167 25.3268C61.9469 25.7991 61.5987 26.4445 61.472 27.2631H67.7639C67.6372 26.4602 67.289 25.8227 66.7192 25.3505C66.1494 24.8625 65.4529 24.6185 64.6298 24.6185Z"
          fill="white"
          className="logo transition"
        />
        <path
          d="M77.2576 23.6976C77.7008 23.0837 78.2944 22.6193 79.0383 22.3044C79.7981 21.9896 80.6687 21.8322 81.65 21.8322V25.2324C81.2385 25.2009 80.9615 25.1852 80.819 25.1852C79.7585 25.1852 78.9275 25.4843 78.326 26.0824C77.7246 26.6649 77.4238 27.5464 77.4238 28.727V34.7246H73.7199V22.0211H77.2576V23.6976Z"
          fill="white"
          className="logo transition"
        />
        <path
          d="M100.211 21.8322C101.81 21.8322 103.076 22.3044 104.01 23.2489C104.96 24.1777 105.434 25.5787 105.434 27.452V34.7246H101.731V28.0187C101.731 27.0112 101.517 26.2635 101.09 25.7755C100.678 25.2718 100.084 25.0199 99.3089 25.0199C98.4383 25.0199 97.7498 25.3032 97.2432 25.8699C96.7367 26.4209 96.4835 27.2473 96.4835 28.3492V34.7246H92.7796V28.0187C92.7796 26.0195 91.9724 25.0199 90.3579 25.0199C89.5031 25.0199 88.8225 25.3032 88.316 25.8699C87.8095 26.4209 87.5562 27.2473 87.5562 28.3492V34.7246H83.8523V22.0211H87.39V23.4851C87.8649 22.9499 88.4426 22.5406 89.1232 22.2572C89.8197 21.9739 90.5795 21.8322 91.4025 21.8322C92.3048 21.8322 93.1199 22.0132 93.848 22.3753C94.5761 22.7216 95.1618 23.2332 95.605 23.9101C96.1273 23.2489 96.7842 22.7373 97.5756 22.3753C98.3829 22.0132 99.2614 21.8322 100.211 21.8322Z"
          fill="white"
          className="logo transition"
        />
        <path
          d="M113.907 21.8322C115.885 21.8322 117.405 22.3044 118.465 23.2489C119.526 24.1777 120.056 25.5866 120.056 27.4756V34.7246H116.59V33.1426C115.893 34.3232 114.595 34.9135 112.696 34.9135C111.714 34.9135 110.86 34.7482 110.131 34.4177C109.419 34.0871 108.873 33.6306 108.493 33.0481C108.113 32.4657 107.923 31.8045 107.923 31.0647C107.923 29.8841 108.367 28.9553 109.253 28.2784C110.155 27.6015 111.54 27.2631 113.408 27.2631H116.352C116.352 26.4602 116.107 25.8463 115.616 25.4213C115.125 24.9805 114.389 24.7601 113.408 24.7601C112.727 24.7601 112.055 24.8703 111.39 25.0907C110.741 25.2954 110.187 25.5787 109.728 25.9408L108.398 23.367C109.095 22.879 109.926 22.5012 110.891 22.2336C111.873 21.966 112.878 21.8322 113.907 21.8322ZM113.622 32.4342C114.255 32.4342 114.817 32.2925 115.307 32.0092C115.798 31.7101 116.146 31.2772 116.352 30.7105V29.4118H113.812C112.292 29.4118 111.532 29.9077 111.532 30.8994C111.532 31.3716 111.714 31.7494 112.078 32.0328C112.458 32.3004 112.973 32.4342 113.622 32.4342Z"
          fill="white"
          className="logo transition"
        />
        <path
          d="M0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5L17 17L8.5 17C3.80558 17 0 13.1944 0 8.5Z"
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
          d="M36 27.5C36 32.1944 32.1944 36 27.5 36C22.8056 36 19 32.1944 19 27.5L19 19L27.5 19C32.1944 19 36 22.8056 36 27.5Z"
          fill="url(#paint0_linear_1575_545)"
          fill-opacity="0.7"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1575_545"
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

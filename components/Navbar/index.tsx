import React from "react";
import "./index.scss";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className=" max-h-28 container fixed w-full mx-auto p-5 py-3 z-10 navbar">
      <div className="flex w-full justify-between items-center">
        <div>
          <Image
            src="/loo.svg"
            alt="logo"
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
        <div>
          <ul className=" hidden lg:block space-x-10">
            <li>Home</li>
            <li>About me</li>
            <li>Work</li>
            <li>Design shops</li>
            <li>Resume</li>
            <li>Get in Touch</li>
          </ul>
          <div className="lg:hidden">
            <Image
              src="/bars.svg"
              alt="logo"
              width={30}
              height={30}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

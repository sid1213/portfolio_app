import React from "react";
import "./index.scss";
const Footer = () => {
  return (
    <footer className="my-10 mb-20">
      <div className=" p-5 flex items-center flex-col gap-4">
        <div>
          <h1>Get in touch</h1>
        </div>
        <div className="bg-green w-full flex flex-col lg:flex-row space-y-10 justify-between mt-10">
          <ul className="flex flex-col space-y-10">
            <li>
              <p>Follow</p>
              <p className="font-normal">soni28siddh@gmail.com</p>
            </li>
            <li>
              <p>Email</p>
              <p className="link space-x-5 hidden ">
                <a href="">linkedin</a>
                <a href="">Instagram</a>
                <a href="">Youtube</a>
                <a href="">Dribbble</a>
                <a href="">Behance</a>
                <a href="">Artstation</a>
              </p>
            </li>
          </ul>
          <ul className="flex flex-col space-y-10 lg:text-right">
            <li>
              <p>Say hi</p>
              <p className="font-normal">I&apos;m based in New Delhi,India.</p>
            </li>
            <li>
              <p>Copyright © </p>
              <p className="font-normal">
                © 2022. All Rights Reserved to Rishab Verma
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

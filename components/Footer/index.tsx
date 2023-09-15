import React from "react";
import "./index.scss";
const Footer = () => {
  return (
    <footer className=" sm:my-10 mb-5" id="getInTouch">
      <div className=" p-5 flex items-center flex-col gap-4">
        <div>
          <h1>Get in touch</h1>
        </div>
        <div className="footer-links w-full mt-10 grid grid-cols-1 sm:grid-cols-2   gap-4 sm:gap-y-10">
          <div className="details">
            <h3 className="font-bold">Email</h3>
            <p>soni28siddh@gmail.com</p>
          </div>
          <div className="details">
            <h3 className="font-bold">Artstation</h3>
            <p>I&apos;m based in New Delhi,India.</p>
          </div>
          <div className="details">
            <h3 className="font-bold">Follow</h3>
            <ul className="space-x-3 link">
              <li>
                <a href="" target="_blank">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Youtube
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Dribbble
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Behance
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Artstation
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Behance
                </a>
              </li>
            </ul>
          </div>
          <div className="details">
            <h3 className="font-bold">Copyright © </h3>
            <p>© 2022. All Rights Reserved to Rishab Verma</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

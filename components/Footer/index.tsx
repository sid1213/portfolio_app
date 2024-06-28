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
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=soni28siddh@gmail.com"
              target="_blank"
            >
              soni28siddh@gmail.com
            </a>
          </div>
          <div className="details">
            <h3 className="font-bold">Artstation</h3>
            <p>I&apos;m based in Bhopal,India.</p>
          </div>
          <div className="details">
            <h3 className="font-bold">Follow</h3>
            <ul className="space-x-3 link">
              <li>
                <a
                  href="https://www.linkedin.com/in/siddharth28032001/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://github.com/sid1213" target="_blank">
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/siddharth_sam_/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com/1213siddhu" target="_blank">
                  X
                </a>
              </li>
            </ul>
          </div>
          <div className="details">
            <h3 className="font-bold">Copyright © </h3>
            <p>© 2024. All Rights Reserved to Siddharth Soni</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

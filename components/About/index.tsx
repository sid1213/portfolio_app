import Image from "next/image";
import React from "react";
import "./index.scss";
const About = () => {
  return (
    <section id="about">
      <div className="  about  gap-y-10 sm:gap-20 h-fit flex w-full flex-col sm:flex-row justify-between  items-start sm:items-center p-7 sm:p-0">
        <div className=" lg:w-1/3 h-fit sm:m-0 sm:max-h-[550px] overflow-hidden ">
          <Image
            src="/rishab_about.png"
            width={400}
            height={400}
            alt="profile-image"
            objectFit="contain"
          />
        </div>
        <div className="sm:w-2/3 sm:min-h-[550px] about-content flex justify-center items-center flex-col sm:p-5 sm:order-1 sm:bg-[#FFEBD9] ">
          <div className="sm:w-3/4">
            <h1 className="animation-heading ">Rishab Verma</h1>
            <p className="mt-6">
              I have experience in website design, branding, art, and graphic
              and UI/UX design. I&apos;ve collaborated with brands and agencies
              to develop their visual identities for use across a variety of
              social media channels, in addition to producing product websites,
              illustrations, and logos for numerous companies. I enjoy
              traveling, drawing, sketching, and going on adventures. I also
              enjoy solving problems in design. I enjoy learning something new
              every day.
              <br />
              <br />
              <span className="font-semibold">
                — Based in the New Delhi, India.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

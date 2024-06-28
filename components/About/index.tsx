import Image from "next/image";
import React from "react";
import "./index.scss";
const About = () => {
  return (
    <section id="about">
      <div className="  about  gap-y-10 sm:gap-20 h-fit flex w-full flex-col sm:flex-row justify-between  items-start sm:items-center p-7 sm:p-0">
        <div className=" lg:w-1/3 h-fit sm:m-0 sm:max-h-[550px] overflow-hidden ">
          <Image
            src="/siddharth-about.jpeg"
            width={400}
            height={400}
            alt="profile-image"
            objectFit="contain"
          />
        </div>
        <div className="sm:w-2/3 sm:min-h-[550px] about-content flex justify-center items-center flex-col sm:p-5 sm:order-1 sm:bg-[#FFEBD9] ">
          <div className="sm:w-3/4">
            <h1 className="animation-heading ">Siddharth Soni</h1>
            <p className="mt-6">
              With expertise in frontend and UI development, I specialize in
              creating intuitive digital experiences. Experienced in projects
              like DashCX Web/Mobile Apps and Management Portal, focusing on
              real-time communication and business data presentation. Proficient
              in{" "}
              <b>
                JavaScript, TypeScript, React, React Native, and CSS frameworks
                like Sass and Tailwind CSS. Passionate about problem-solving and
                continuous learning, I thrive on challenges that push the
                boundaries of design and technology.
              </b>
              <br />
              <br />
              <span className="font-semibold">
                — Based in the Bhopal, India.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

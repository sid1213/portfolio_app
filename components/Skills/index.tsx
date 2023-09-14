import React from "react";
import { Carousel } from "antd";
import "./index.scss";
import Image from "next/image";

const skills = [
  { title: "Design Skills", imgUrl: "/skill-3.png" },
  { title: "T’ shape Design", imgUrl: "/skill-2.png" },
  { title: "Design Tools ", imgUrl: "/skill-1.png" },
];

const Skills = () => {
  return (
    <section>
      <div className="p-5 w-full text-center">
        <Carousel
          arrows
          prevArrow={<div></div>}
          nextArrow={<div></div>}
          className="sid h-fit  bg-white p-10 flex justify-center items-center"
        >
          {skills.map((skill) => (
            <div key={skill.title} className="space-y-10">
              <h2>{skill.title}</h2>
              <div className="w-[80%] mx-auto ">
                <Image
                  src={skill.imgUrl}
                  width={1000}
                  height={400}
                  alt={skill.title}
                  objectFit="contain"
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import { Carousel } from "antd";
import "./index.scss";
const Skills = () => {
  return (
    <section>
      <div className="p-5 w-full text-center">
        <Carousel
          autoplay
          arrows
          prevArrow={<div></div>}
          nextArrow={<div></div>}
          className="sid min-h-[80vh] bg-white p-5 flex justify-center items-center"
        >
          <div>
            <h2>Design Skills</h2>
          </div>
          <div>
            <h2>2</h2>
          </div>
          <div>
            <h2>3</h2>
          </div>
          <div>
            <h2>4</h2>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;

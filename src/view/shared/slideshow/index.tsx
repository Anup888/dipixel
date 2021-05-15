import React from "react";
//@ts-ignore

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Project1 from "assets/images/home/project1.png";
import Project2 from "assets/images/home/project2.png";
import Project3 from "assets/images/home/project3.png";

export const Slideshow = (props: any) => {
  const images = [Project1, Project2, Project3];
  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={1000}
      infinite={true}
      disableDotsControls={true}
      disableButtonsControls={true}
    >
      {images?.map((item: any, index: any) => (
        <div key={index} className="each-slide">
          <img src={item} className="sliderimg" alt="imgslide" />
        </div>
      ))}
    </AliceCarousel>
  );
};

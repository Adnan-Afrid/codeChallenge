import React from "react";
import "../assets/Hero.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../assets/homeImage1.png";
import image2 from "../assets/homeImage2.jpg";
import image3 from "../assets/homeImage3.png";
const Hero = () => {
  const slideImages = [
    {
      url: image3,
    },
    {
      url: image2,
    },
    {
      url: image1,
    },
  ];
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <img src={slideImage.url} alt="Loading"/>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Hero;
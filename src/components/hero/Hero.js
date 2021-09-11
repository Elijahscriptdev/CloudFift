import React from "react";
import Header from "../header/Header";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero__wrapper">
      <Header />
      <div className='hero__container'></div>
    </div>
  );
};

export default Hero;

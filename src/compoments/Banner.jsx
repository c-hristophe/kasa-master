import React from "react";
import '../styles/Banner.css';

const Banner = ({ image, text }) => {
  return (
    <div className="banner">
      <img src={image} alt="banner" className="banner__img" />
      
      {text ? <h1 className="banner__img__text">{text}</h1> : null}
    </div>
  );
};

export default Banner;
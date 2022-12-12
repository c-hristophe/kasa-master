import React from "react";
import { useState } from "react";
import arrowLeft from "../images/arrowLeft.svg";
import arrowRight from "../images/arrowRight.svg";
import '../styles/Slider.css'

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={index === current}
          >
            {index === current && (
            <img src={picture} alt="image" className="slider__picture" />
            )}
          </div>
        );
      })}
      
      {length > 1 ? (
        <>
          <div className="slider__previous" onClick={prevSlide}>
            <img src={arrowLeft} alt="previous" className="slider__previous-icon" />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img src={arrowRight} alt="next" className="slider__next-icon" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Slider;
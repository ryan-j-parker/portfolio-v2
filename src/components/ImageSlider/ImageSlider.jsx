import React from 'react';
import { useState } from 'react';
import './ImageSlider.css';

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider">
      <div className="leftArrow" onClick={goToPrevious}>
        &#123;
      </div>
      <div className="rightArrow" onClick={goToNext}>
        &#125;
      </div>
      <div style={slideStyles} className="slides"></div>
      <div className="dotContainer">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="dots" onClick={() => goToSlide(slideIndex)}>&#9679;</div>
        ))}
      </div>
    </div>
  );
}

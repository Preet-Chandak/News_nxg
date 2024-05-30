"use client"
import React, { useRef } from 'react';

const Carousel = () => {
  const carouselRef = useRef(null);

  const goToSlide = (slideIndex) => {
    carouselRef.current.scrollTo({
      left: slideIndex * carouselRef.current.offsetWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div className="carousel w-full" ref={carouselRef}>
      <div className="carousel-item relative w-full">
        <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={() => goToSlide(3)} className="btn btn-circle">❮</button> 
          <button onClick={() => goToSlide(1)} className="btn btn-circle">❯</button>
        </div>
      </div> 
      <div className="carousel-item relative w-full">
        <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={() => goToSlide(0)} className="btn btn-circle">❮</button> 
          <button onClick={() => goToSlide(2)} className="btn btn-circle">❯</button>
        </div>
      </div> 
      <div className="carousel-item relative w-full">
        <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={() => goToSlide(1)} className="btn btn-circle">❮</button> 
          <button onClick={() => goToSlide(3)} className="btn btn-circle">❯</button>
        </div>
      </div> 
      <div className="carousel-item relative w-full">
        <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={() => goToSlide(2)} className="btn btn-circle">❮</button> 
          <button onClick={() => goToSlide(0)} className="btn btn-circle">❯</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

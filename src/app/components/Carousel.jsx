"use client";
import React, { useRef } from 'react';

const Carousel = () => {
  const carouselRef = useRef(null);

  const goToSlide = (slideIndex) => {
    carouselRef.current.scrollTo({
      left: slideIndex * carouselRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const slides = [
    {
      image: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
      title: "Breaking News: Major Event Unfolds",
      description: "A significant event has just taken place. Read more to find out the details."
    },
    {
      image: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
      title: "Market Update: Stocks on the Rise",
      description: "The stock market is experiencing a surge. Here's what you need to know."
    },
    {
      image: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
      title: "Technology Advances: New Innovations",
      description: "Discover the latest advancements in technology that are shaping the future."
    },
    {
      image: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
      title: "Health Alert: Important Updates",
      description: "Stay informed about the latest health news and updates."
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="carousel flex w-full overflow-x-scroll snap-x snap-mandatory" ref={carouselRef}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item relative w-full flex-none snap-center">
            <img src={slide.image} className="w-full h-64 lg:h-96 object-cover" alt={slide.title} />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-2">{slide.title}</h2>
              <p className="text-white mb-4">{slide.description}</p>
              <button className="self-start btn btn-primary">Read More</button>
            </div>
            <div className="absolute inset-0 flex justify-between items-center p-4">
              <button onClick={() => goToSlide(index === 0 ? slides.length - 1 : index - 1)} className="btn btn-circle btn-primary">❮</button>
              <button onClick={() => goToSlide(index === slides.length - 1 ? 0 : index + 1)} className="btn btn-circle btn-primary">❯</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

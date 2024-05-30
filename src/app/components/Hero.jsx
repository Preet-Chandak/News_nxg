import React from 'react';

const Hero = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/01/lucknow_1-770x433.jpeg?fit=770%2C433&ssl=1)' }}>
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-6xl font-extrabold">Welcome to Nxg Ventures</h1>
          <p className="mb-5 text-xl font-light">Discover new opportunities and insights. Join us in exploring the world of business and innovation.</p>
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url('/assets/images/banner.png')`,
      }}
    >
      <div className="hero-content">
        <h1>Discover the World of Stones</h1>
        <p>Explore premium stones like marble, granite, and slate for your projects.</p>
        <a href="#products" className="cta-button">
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

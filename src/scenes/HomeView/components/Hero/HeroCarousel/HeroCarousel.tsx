import React from 'react';

/**
 * Stateless component representing the hero carousel in the hero section of the homepage.
 */
const HeroCarousel: React.FC = () => {
  return (
    <div className="hero-carousel" data-test="HeroCarouselComponent">
      <h1 className="hero-carousel__heading" data-test="Heading">
        Innovative Strategy<br />World Class Delivery
      </h1>
      <h2 className="hero-carousel__subheading" data-test="Subheading">
        Acceleration your business transformation and Cloud journey.
      </h2>
      <div className="carousel-progress" data-test="Progress">
        <span className="carousel-progress__circle carousel-progress__circle--active" data-test="ProgressCircle" />
        <span className="carousel-progress__circle" data-test="ProgressCircle" />
        <span className="carousel-progress__circle" data-test="ProgressCircle" />
      </div>
    </div>
  );
};

export default HeroCarousel;

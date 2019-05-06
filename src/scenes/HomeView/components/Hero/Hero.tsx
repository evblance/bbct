import React from 'react';
import heroImg from '../../../../assets/images/decorative/innovation-petals.png';
import HeroCarousel from './HeroCarousel/HeroCarousel';

/**
 * Stateless component representing the homepage hero.
 */
const Hero: React.FC = () => {
  return (
    <div className="hero" data-test="HeroComponent">
      <header className="hero__header">
        <HeroCarousel />
        <img className="hero__img" src={heroImg} alt="decorative background" data-test="HeroImg" />
      </header>
      <svg
        className="hero__wedge"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <polygon points="100,100 0,100 0,0" />
      </svg>
    </div>
  );
};

export default Hero;

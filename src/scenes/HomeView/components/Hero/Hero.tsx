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
    </div>
  );
};

export default Hero;

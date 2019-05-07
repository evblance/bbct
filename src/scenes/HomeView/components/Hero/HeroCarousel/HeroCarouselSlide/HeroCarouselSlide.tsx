import React from 'react';

// TODO: Add props for heading and subheading to make truly modular.
export interface IProps {
  active: boolean;
}

export const HERO_CAROUSEL_HEADING_CLASS = 'hero-carousel-slide__heading';
export const HERO_CAROUSEL_SUBHEADING_CLASS = 'hero-carousel-slide__subheading';
export const HERO_CAROUSEL_ACTIVE_CLASS = 'shown';

/**
 * Stateless component representing a single hero carousel slide in the hero section of the homepage.
 */
const HeroCarouselSlide: React.FC<IProps> = ({ active }: IProps) => {
    return (
      active ?
      <div className="hero-carousel-slide" data-test="HeroCarouselSlideComponent">
        <h1
          className={
            active ?
            `${HERO_CAROUSEL_HEADING_CLASS} ${HERO_CAROUSEL_ACTIVE_CLASS}` :
            `${HERO_CAROUSEL_HEADING_CLASS}`
          }
          data-test="Heading">
          Innovative Strategy<br />World Class Delivery
        </h1>
        <h2
          className={
            active ?
            `${HERO_CAROUSEL_SUBHEADING_CLASS} ${HERO_CAROUSEL_ACTIVE_CLASS}` :
            `${HERO_CAROUSEL_SUBHEADING_CLASS}`
          }
          data-test="Subheading">
          Accelerating your business transformation and Cloud journey.
        </h2>
      </div> :
      null
    );
};

export default HeroCarouselSlide;

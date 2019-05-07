import React from 'react';

export interface IProps {
  activeIndex: number;
  numSlides: number;
  onProgressClick: (index: number) => void;
}

export const CAROUSEL_PROGRESS_DEFAULT_CLASS: string = 'carousel-progress__circle';
export const CAROUSEL_PROGRESS_ACTIVE_CLASS: string = 'carousel-progress__circle--active';

/**
 * Stateless component representing a the hero carousel progress indicator
 * in the hero section of the homepage.
 */
const HeroCarouselProgress: React.FC<IProps> = ({ activeIndex, numSlides, onProgressClick }: IProps) => {

  const renderProgressCircles = (): JSX.Element[] => {
    const circles: JSX.Element[] = [];
    for (let i = 0; i < numSlides; i++) {
      circles.push(
        <span
          key={i}
          className={
            i === activeIndex ?
            `${CAROUSEL_PROGRESS_DEFAULT_CLASS} ${CAROUSEL_PROGRESS_ACTIVE_CLASS}` :
            `${CAROUSEL_PROGRESS_DEFAULT_CLASS}`
          }
          data-test="ProgressCircle"
          onClick={() => onProgressClick(i)}
        />,
      );
    }
    return circles;
  };

  return (
    <div className="carousel-progress" data-test="Progress">
      {renderProgressCircles()}
    </div>
  );
};

export default HeroCarouselProgress;

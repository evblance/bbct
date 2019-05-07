import React, { Component } from 'react';
import HeroCarouselProgress from './HeroCarouselProgress/HeroCarouselProgress';
import HeroCarouselSlide from './HeroCarouselSlide/HeroCarouselSlide';

enum ESwipeDirection {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  INVALID = 'INVALID,',
}

export interface IProps {}

export interface IState {
  currentSlideIndex: number;
}

/**
 * Component representing the hero carousel in the hero section of the homepage.
 */
class HeroCarousel extends Component<IProps, IState> {

  private readonly NEXT_SLIDE_DELAY: number = 3000;
  private readonly NUM_SLIDES: number = 3;

  private sliderIntervalId?: any;
  private sliderResetTimeoutId?: any;

  // We track touch start and end horizontal axis ordinate values for swipe logic
  private startTouchX?: number;
  private lastTouchX?: number;

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentSlideIndex: 0,
    };
    this.clearTimers = this.clearTimers.bind(this);
    this.handleProgressClick = this.handleProgressClick.bind(this);
    this.getSwipeDirection = this.getSwipeDirection.bind(this);
    this.resetSliderLoop = this.resetSliderLoop.bind(this);
    this.setNextSlideIndex = this.setNextSlideIndex.bind(this);
    this.startSliderLoop = this.startSliderLoop.bind(this);
    this.handleCarouselSwipe = this.handleCarouselSwipe.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.updateCurrentSlide = this.updateCurrentSlide.bind(this);
  }

  /**
   * Clears all active timers.
   */
  public clearTimers(): void {
    if (this.sliderIntervalId) {
      clearInterval(this.sliderIntervalId);
    }
    if (this.sliderResetTimeoutId) {
      clearTimeout(this.sliderResetTimeoutId);
    }
  }

  /**
   * Updates the current slide index on the component state to trigger a re-render
   * with the new slide.
   * @param {number} index The index of the slide to show.
   */
  public updateCurrentSlide(index: number): void {
    if (this.state.currentSlideIndex !== index) {
      this.setState({ currentSlideIndex: index });
    }
  }

  /**
   * Manually updates the current slide of the carousel to the selected.
   * @param {number} index The index of the slide that was clicked.
   */
  public handleProgressClick(index: number): void {
    this.updateCurrentSlide(index);
    this.resetSliderLoop();
  }

  /**
   * Reinitialises the carousel slide loop to allow an additional delay
   * when the user manually selected a slide.
   */
  public resetSliderLoop(): void {
    this.clearTimers();
    this.sliderResetTimeoutId = setTimeout(this.startSliderLoop, this.NEXT_SLIDE_DELAY);
  }

  /**
   * Sets the next slide index clockwise on the state to trigger the next slide show.
   */
  public setNextSlideIndex(): void {
    const currentSlideIndex = this.state.currentSlideIndex;
    this.updateCurrentSlide((currentSlideIndex + 1) % this.NUM_SLIDES);
  }

  /**
   * Handler for triggering carousel slide-swiping logic at the end of a touch event on the carousel.
   */
  public handleTouchEnd(): void {
    if (this.startTouchX && this.lastTouchX) {
      const swipeDirection = this.getSwipeDirection(this.startTouchX, this.lastTouchX);
      this.handleCarouselSwipe(swipeDirection);
    }
  }

  /**
   * Registers the x ordinate value of the touch start position on the carousel.
   * @param {any} event The user interface touch event on the carousel.
   */
  public handleTouchStart(event: any): void {
    const touchX: number = event.touches[0].clientX;
    this.startTouchX = touchX;
  }

  /**
   * Registers the x ordinate value of the last touch position on the carousel.
   * @param {any} event The user interface touch event on the carousel.
   */
  public handleTouchMove(event: any): void {
    const touchX: number = event.touches[0].clientX;
    this.lastTouchX = touchX;
  }

  /**
   * Manually updates the current slide of the carousel based on the user's horizontal swipe direction.
   * @param {ESwipeDirection} swipeDirection The horizontal swipe direction that was registered on the carousel.
   */
  public handleCarouselSwipe(swipeDirection: ESwipeDirection) {
    const currentSlideIndex = this.state.currentSlideIndex;
    if (swipeDirection === ESwipeDirection.LEFT) {
      // Trick to get correct modulo with negative number to allow looping anti-clockwise
      const nextSlideIndex = ((((currentSlideIndex - 1) % this.NUM_SLIDES) + this.NUM_SLIDES) % this.NUM_SLIDES);
      this.updateCurrentSlide(nextSlideIndex);
    } else if (swipeDirection === ESwipeDirection.RIGHT) {
      this.updateCurrentSlide((currentSlideIndex + 1) % this.NUM_SLIDES);
    }
    this.resetSliderLoop();
  }

  /**
   * Determines the horizontal direction of swipe based on the start and end x ordinates.
   * @param {number} startX The x coordinate where the swipe is considered to have started.
   * @param {number} endX The x coordinate where the swipe is considered to have ended.
   */
  public getSwipeDirection(startX: number, endX: number): ESwipeDirection {
    if (startX - endX < 0) {
      return ESwipeDirection.LEFT;
    } else if (startX - endX > 0) {
      return ESwipeDirection.RIGHT;
    }
    return ESwipeDirection.INVALID;
  }

  /**
   * Starts the carousel slide-looping interval.
   */
  public startSliderLoop(): void {
    this.sliderIntervalId = setInterval(this.setNextSlideIndex, this.NEXT_SLIDE_DELAY);
  }

  public componentDidMount(): void {
    this.startSliderLoop();
  }

  public componentWillUnmount(): void {
    this.clearTimers();
  }

  public render(): JSX.Element {
    return (
      <div
        className="hero-carousel"
        onTouchEnd={this.handleTouchEnd}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        data-test="HeroCarouselComponent">
        <HeroCarouselSlide active={this.state.currentSlideIndex === 0} />
        <HeroCarouselSlide active={this.state.currentSlideIndex === 1} />
        <HeroCarouselSlide active={this.state.currentSlideIndex === 2} />
        <HeroCarouselProgress
          activeIndex={this.state.currentSlideIndex}
          numSlides={this.NUM_SLIDES}
          onProgressClick={this.handleProgressClick}
        />
      </div>
    );
  }

}

export default HeroCarousel;

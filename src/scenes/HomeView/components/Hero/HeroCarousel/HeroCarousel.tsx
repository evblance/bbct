import React, { Component } from 'react';
import HeroCarouselProgress from './HeroCarouselProgress/HeroCarouselProgress';
import HeroCarouselSlide from './HeroCarouselSlide/HeroCarouselSlide';

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

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentSlideIndex: 0,
    };
    this.clearTimers = this.clearTimers.bind(this);
    this.handleProgressClick = this.handleProgressClick.bind(this);
    this.resetSliderLoop = this.resetSliderLoop.bind(this);
    this.setNextSlideIndex = this.setNextSlideIndex.bind(this);
    this.startSliderLoop = this.startSliderLoop.bind(this);
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
   * Updates the current slide of the carousel to the selected.
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
   * Sets the next slide index clockwise on the state to trigger next slide show.
   */
  public setNextSlideIndex(): void {
    const currentSlideIndex = this.state.currentSlideIndex;
    this.setState({ currentSlideIndex: (currentSlideIndex + 1) % this.NUM_SLIDES });
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
      <div className="hero-carousel" data-test="HeroCarouselComponent">
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

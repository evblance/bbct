import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import HeroCarousel from './HeroCarousel';
import HeroCarouselProgress from './HeroCarouselProgress/HeroCarouselProgress';
import HeroCarouselSlide from './HeroCarouselSlide/HeroCarouselSlide';

describe(`HeroCarousel component`, () => {

  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<HeroCarousel />);
  });

  it(`should render without errors`, () => {
    const wrapper = component.find(`[data-test="HeroCarouselComponent"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  it(`has at least one slide`, () => {
    const wrapper = component.find(HeroCarouselSlide);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBeGreaterThanOrEqual(1);
  });

  it(`has a progress indicator`, () => {
    const wrapper = component.find(HeroCarouselProgress);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

});

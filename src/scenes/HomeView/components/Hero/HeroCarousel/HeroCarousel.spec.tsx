import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import HeroCarousel from './HeroCarousel';

const CAROUSEL_PROGRESS_ACTIVE_CLASSNAME = 'carousel-progress__circle--active';

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

  it(`has a heading`, () => {
    const wrapper = component.find(`[data-test="Heading"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  it(`has a subheading`, () => {
    const wrapper = component.find(`[data-test="Subheading"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  describe(`progress indicator`, () => {

    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = component.find(`[data-test="Progress"]`);
    });

    it(`should exist`, () => {
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
    });

    it(`has 3 progress circles`, () => {
      const circles = wrapper.find(`[data-test="ProgressCircle"]`);
      expect(circles).toBeDefined();
      expect(circles.length).toBe(3);
    });

    it(`has exactly one progress circle active by default`, () => {
      const activeCircle = wrapper.find(`[data-test="ProgressCircle"]`).find(`.${CAROUSEL_PROGRESS_ACTIVE_CLASSNAME}`);
      expect(activeCircle).toBeDefined();
      expect(activeCircle.length).toBe(1);
    });

  });

});

import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import HeroCarouselSlide, { IProps } from './HeroCarouselSlide';

describe(`HeroCarouselSlide component`, () => {

  const props: IProps = {
    active: true,
  };
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<HeroCarouselSlide {...props} />);
  });

  it(`should render without errors`, () => {
    const wrapper = component.find(`[data-test="HeroCarouselSlideComponent"]`);
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

  describe(`when inactive`, () => {

    const props: IProps = {
      active: false,
    };
    let component: ShallowWrapper;
    beforeEach(() => {
      component = shallow(<HeroCarouselSlide {...props} />);
    });

    it(`should not render`, () => {
      const wrapper = component.find(`[data-test="HeroCarouselSlideComponent"]`);
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(0);
    });

  });

});

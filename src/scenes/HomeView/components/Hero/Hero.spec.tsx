import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Hero from './Hero';
import HeroCarousel from './HeroCarousel/HeroCarousel';

describe(`Hero component`, () => {

  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<Hero />);
  });

  it(`should render without errors`, () => {
    const wrapper = component.find(`[data-test="HeroComponent"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  it(`should contain the hero carousel`, () => {
    const wrapper = component.find(HeroCarousel);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  it(`should contain its decorative graphic`, () => {
    const wrapper = component.find(`[data-test="HeroImg"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

});

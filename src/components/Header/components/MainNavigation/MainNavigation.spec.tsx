import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import MainNavigation from './MainNavigation';
import MainNavItem from './MainNavItem/MainNavItem';

describe(`MainNavigation component`, () => {

  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<MainNavigation />);
  });

  it(`should render without errors`, () => {
    const wrapper = component.find(`[data-test="MainNavigationComponent"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  it(`should contain 6 main navigation items`, () => {
    const wrapper = component.find(MainNavItem);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(6);
  });

  it(`has a mobile menu toggling container`, () => {
    const wrapper = component.find(`[data-test="MobileToggle"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  it(`has a mobile menu hamburger`, () => {
    const wrapper = component.find(`[data-test="Hamburger"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

});

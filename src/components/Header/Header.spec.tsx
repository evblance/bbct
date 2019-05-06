import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import MainNavigation from './components/MainNavigation/MainNavigation';
import Header from './Header';

describe(`Header component`, () => {

  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<Header />);
  });

  it(`should render without errors`, () => {
    const wrapper = component.find(`[data-test="HeaderComponent"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  it(`should contain the main site navigation`, () => {
    const wrapper = component.find(MainNavigation);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

});

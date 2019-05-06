import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Footer from './Footer';

describe(`Footer component`, () => {

  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<Footer />);
  });

  it(`should render without errors`, () => {
    const wrapper = component.find(`[data-test="FooterComponent"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

});

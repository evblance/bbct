import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import ServiceCTA from './ServiceCTA/ServiceCTA';
import Services from './Services';

describe(`ServiceCTA component`, () => {

  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<Services />);
  });

  it(`should render without errors`, () => {
    const wrapper = component.find(`[data-test="ServicesComponent"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  it(`should contain at exactly three ServiceCTA components`, () => {
    const wrapper = component.find(ServiceCTA);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(3);
  });

});

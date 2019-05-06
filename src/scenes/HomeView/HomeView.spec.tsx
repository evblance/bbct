import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Services from './components/Services/Services';
import HomeView from './HomeView';

describe(`HomeView scene`, () => {

  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<HomeView />);
  });

  it(`should render without errors`, () => {
    const wrapper = component.find(`[data-test="HomeViewComponent"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  it(`should contain the Services component`, () => {
    const wrapper = component.find(Services);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

});

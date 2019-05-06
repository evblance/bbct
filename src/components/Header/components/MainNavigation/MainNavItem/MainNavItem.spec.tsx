import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Link } from 'react-router-dom';
import MainNavItem, { IProps } from './MainNavItem';

describe(`MainNavItem component`, () => {

  const props: IProps = {
    name: 'Home',
    linkTarget: '/',
  };
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<MainNavItem {...props} />);
  });

  it(`should render without errors`, () => {
    const wrapper = component.find(`[data-test="MainNavItemComponent"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  it(`should contain a Link component`, () => {
    const wrapper = component.find(Link);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  it(`Link component should have the routing target that was passed in props`, () => {
    const wrapper = component.find(Link);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    const target = wrapper.prop('to');
    expect(target).toBeDefined();
    expect(target).toBe(props.linkTarget);
  });

});

import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import ServiceCTA, { IProps } from './ServiceCTA';

describe(`ServiceCTA component`, () => {

  const props: IProps = {
    icon: '',
    heading: '',
    text: '',
    linkTarget: '',
  };
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<ServiceCTA {...props} />);
  });

  it(`should render without errors`, () => {
    const wrapper = component.find(`[data-test="ServiceCTAComponent"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  it(`should render an icon`, () => {
    const wrapper = component.find(`[data-test="Icon"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  describe(`heading`, () => {

    it(`should exist`, () => {
      const wrapper = component.find(`[data-test="Heading"]`);
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
    });

    it(`should show the correct heading that was passed in props`, () => {
      const props: IProps = {
        icon: '',
        heading: 'MyHeading',
        text: '',
        linkTarget: '',
      };
      const component: ShallowWrapper = shallow(<ServiceCTA {...props} />);
      const wrapper = component.find(`[data-test="Heading"]`);
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
      expect(wrapper.text()).toBe(props.heading);
    });

  });

  describe(`text`, () => {

    it(`should exist`, () => {
      const wrapper = component.find(`[data-test="Text"]`);
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
    });

    it(`should have the correct text that was passed in props`, () => {
      const props: IProps = {
        icon: '',
        heading: '',
        text: 'MyText',
        linkTarget: '',
      };
      const component: ShallowWrapper = shallow(<ServiceCTA {...props} />);
      const wrapper = component.find(`[data-test="Text"]`);
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
      expect(wrapper.text()).toBe(props.text);
    });

  });

  describe(`link`, () => {

    it(`should exist`, () => {
      const wrapper = component.find(`[data-test="Link"]`);
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
    });

    it(`should have the Link target value that was passed in props`, () => {
      const props: IProps = {
        icon: '',
        heading: '',
        text: '',
        linkTarget: '/service',
      };
      const component: ShallowWrapper = shallow(<ServiceCTA {...props} />);
      const wrapper = component.find(`[data-test="Link"]`);
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
      expect(wrapper.prop('to')).toBe(props.linkTarget);
    });

  });

});

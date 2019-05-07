import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import HeroCarouselProgress, { CAROUSEL_PROGRESS_ACTIVE_CLASS, IProps } from './HeroCarouselProgress';

describe(`HeroCarouselProgress component`, () => {

  const onProgressClick = jest.fn();
  const props: IProps = {
    activeIndex: 0,
    numSlides: 3,
    onProgressClick,
  };
  let component: ShallowWrapper;
  beforeEach(() => {
    onProgressClick.mockClear();
    component = shallow(<HeroCarouselProgress {...props} />);
  });

  it(`should render without errors`, () => {
    const wrapper = component.find(`[data-test="Progress"]`);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  it(`has 3 progress circles`, () => {
    const circles = component.find(`[data-test="ProgressCircle"]`);
    expect(circles).toBeDefined();
    expect(circles.length).toBe(3);
  });

  it(`has exactly one progress circle active by default`, () => {
    const circles: ShallowWrapper = component.find(`[data-test="ProgressCircle"]`);
    let count = 0;
    circles.forEach((circle) => circle.hasClass(CAROUSEL_PROGRESS_ACTIVE_CLASS) ? count++ : null);
    expect(count).toBe(1);
  });

  it(`has the first progress circle active by default`, () => {
    const circles = component.find(`[data-test="ProgressCircle"]`);
    const firstCircle = circles.first();
    expect(firstCircle).toBeDefined();
    expect(firstCircle.hasClass(CAROUSEL_PROGRESS_ACTIVE_CLASS)).toBeDefined();
    expect(firstCircle.hasClass(CAROUSEL_PROGRESS_ACTIVE_CLASS)).toBe(true);
  });

  it(`onProgressClick prop function gets called once when a progress circle is clicked`, () => {
    const circles = component.find(`[data-test="ProgressCircle"]`);
    circles.first().simulate('click');
    expect(onProgressClick).toBeDefined();
    expect(onProgressClick).toBeCalledTimes(1);
  });

});

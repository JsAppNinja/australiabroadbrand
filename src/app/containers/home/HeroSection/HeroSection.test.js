import React from 'react';
import { shallow, mount, render } from '../../../../enzyme.js';

import HeroSection from './HeroSection.js';

describe('HeroSection tests', () => {
  it('renders hero-cards__item', () => {
    const wrapper = shallow(<HeroSection />);

    expect(wrapper.find('.hero')).toBeDefined();
    expect(wrapper.find('.hero-cards')).toBeDefined();
    expect(wrapper.find('.hero-cards__item')).toHaveLength(3);
  });

  it('should be selectable by class "hero"', function() {
    expect(shallow(<HeroSection />).is('.hero')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<HeroSection />).find('.hero').length).toBe(1);
  });
});

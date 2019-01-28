import React from 'react';
import { shallow, mount, render } from '../../../../enzyme.js';

import HeroSection from './HeroSection.js';

describe('HeroSection tests', () => {
  const tree = shallow(<HeroSection />);

  it('should render Hero section', () => {
    expect(tree).toMatchSnapshot();
  });
  it('should be selectable by class "moving-hero-wrapper"', function() {
    expect(shallow(<HeroSection />).is('.moving-hero-wrapper')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<HeroSection />).find('.moving-hero').length).toBe(1);
  });
});

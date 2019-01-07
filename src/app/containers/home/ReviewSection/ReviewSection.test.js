import React from 'react';
import { shallow, mount, render } from '../../../../enzyme.js';

import ReviewSection from './ReviewSection.js';

describe('ReviewSection tests', () => {
  it('renders ReviewItems', () => {
    const wrapper = shallow(<ReviewSection />);

    expect(wrapper.find('.review-section')).toBeDefined();
    expect(wrapper.find('.review-section__content')).toBeDefined();
    expect(wrapper.find('.review-cards__item')).toBeDefined();
    expect(wrapper.find('.review-cards__item')).toHaveLength(3);
  });

  it('should be selectable by class "review-section"', function() {
    expect(shallow(<ReviewSection />).is('.review-section')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<ReviewSection />).find('.review-section').length).toBe(1);
  });
});

import React from 'react';
import { shallow, mount, render } from '../../../../enzyme.js';

import BenefitSection from './BenefitSection.js';

describe('BenefitSection tests', () => {
  it('renders benefit-list-items', () => {
    const wrapper = shallow(<BenefitSection />);

    expect(wrapper.find('.benefit')).toBeDefined();
    expect(wrapper.find('.benefit-content')).toBeDefined();
    expect(wrapper.find('.benefit-section__title')).toBeDefined();
    expect(wrapper.find('.items')).toHaveLength(3);
  });

  it('should be selectable by class "benefit"', function() {
    expect(shallow(<BenefitSection />).is('.benefit')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<BenefitSection />).find('.benefit').length).toBe(1);
  });
});

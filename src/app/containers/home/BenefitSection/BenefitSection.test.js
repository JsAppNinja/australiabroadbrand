import React from 'react';
import { shallow, mount, render } from 'enzyme';

import BenefitSection from './BenefitSection.js';
import Benefit from 'components/Benefit';

describe('BenefitSection tests', () => {
  it('renders benefit-list-items', () => {
    const wrapper = shallow(<BenefitSection />);

    expect(wrapper.find('.benefit')).toBeDefined();
    expect(wrapper.find('.benefit-content')).toBeDefined();
    expect(wrapper.find('.benefit-section__title')).toBeDefined();
    expect(wrapper.find('.items')).toHaveLength(3);
  });
});

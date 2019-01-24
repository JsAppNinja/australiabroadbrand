import React from 'react';
import { shallow, mount, render } from '../../../enzyme.js';

import Footer from './Footer.js';

describe('Footer tests', () => {
  it('renders footer__first-section_item', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('.footer')).toBeDefined();
    expect(wrapper.find('.footer__first-section')).toBeDefined();
    expect(wrapper.find('.footer__first-section_item')).toHaveLength(4);
  });

  it('renders footer__help-section', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('.footer__help-section__right-content')).toBeDefined();
    expect(
      wrapper.find('.footer__help-section__right-content__content')
    ).toHaveLength(3);
  });

  it('renders footer__contact-section', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('.footer__contact-section__right')).toBeDefined();
    expect(wrapper.find('.footer__contact-section__favicon')).toHaveLength(5);
  });

  it('should be selectable by class "footer"', function() {
    expect(shallow(<Footer />).is('.footer')).toBe(true);
  });
});

import React from 'react';
import { shallow, mount, render } from '../../../../enzyme.js';

import Header from './Header.js';

describe('Header tests', () => {
  it('renders header-left__menu__item', () => {
    const wrapper = shallow(<Header current={'/'} />);

    expect(wrapper.find('.headerBar')).toBeDefined();
    expect(wrapper.find('.header-left__menu')).toBeDefined();
    expect(wrapper.find('.header-left__menu__item')).toHaveLength(4);
  });

  it('should be selectable by class "headerBar"', function() {
    expect(shallow(<Header current={'/'} />).is('.headerBar')).toBe(true);
  });
});

import React from 'react';
import { shallow, mount } from '../../../../enzyme.js';

import AboutWhy from './AboutWhy.js';

describe('AboutWhy tests', () => {
  it('should be selectable by class "about__why"', function() {
    expect(shallow(<AboutWhy />).is('.about__why')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<AboutWhy />).find('.about__why').length).toBe(1);
  });
});

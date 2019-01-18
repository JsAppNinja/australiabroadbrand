import React from 'react';
import { shallow, mount } from '../../../../enzyme.js';

import AboutHello from './AboutHello.js';

describe('AboutHello tests', () => {
  it('should be selectable by class "about__hello"', function() {
    expect(shallow(<AboutHello />).is('.about__hello')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<AboutHello />).find('.about__hello').length).toBe(1);
  });
});

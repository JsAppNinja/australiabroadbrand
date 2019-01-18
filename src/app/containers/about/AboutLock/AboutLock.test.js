import React from 'react';
import { shallow, mount } from '../../../../enzyme.js';

import AboutLock from './AboutLock.js';

describe('AboutLock tests', () => {
  it('should be selectable by class "about__lock"', function() {
    expect(shallow(<AboutLock />).is('.about__lock')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<AboutLock />).find('.about__lock').length).toBe(1);
  });
});

import React from 'react';
import { shallow, mount } from '../../../../enzyme.js';

import Install from './Install.js';

describe('Install tests', () => {
  it('should be selectable by class "nbn-install-main"', function() {
    expect(shallow(<Install />).is('.nbn-install-main')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Install />).find('.nbn-install-main').length).toBe(1);
  });
});

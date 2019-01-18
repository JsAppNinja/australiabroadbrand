import React from 'react';
import { shallow, mount } from '../../../../enzyme.js';

import Pick from './Pick.js';

describe('Install tests', () => {
  it('should be selectable by class "nbn-pick"', function() {
    expect(shallow(<Pick />).is('.nbn-pick')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Pick />).find('.nbn-pick').length).toBe(1);
  });
});

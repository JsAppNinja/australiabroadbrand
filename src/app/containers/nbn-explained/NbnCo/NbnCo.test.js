import React from 'react';
import { shallow, mount } from '../../../../enzyme.js';

import NbnCo from './NbnCo.js';

describe('Install tests', () => {
  it('should be selectable by class ".nbn-co"', function() {
    expect(shallow(<NbnCo />).is('.nbn-co')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<NbnCo />).find('.nbn-co').length).toBe(1);
  });
});

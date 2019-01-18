import React from 'react';
import { shallow, mount } from '../../../../enzyme.js';

import NbnConcept from './NbnConcept.js';

describe('Install tests', () => {
  it('should be selectable by class "nbnconcept"', function() {
    expect(shallow(<NbnConcept />).is('.nbnconcept')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<NbnConcept />).find('.nbnconcept').length).toBe(1);
  });
});

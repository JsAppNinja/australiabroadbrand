import React from 'react';
import { shallow, mount } from '../../../../enzyme.js';

import Sharelove from './Sharelove.js';

describe('Sharelove tests', () => {
  it('should be selectable by class "sharelove"', function() {
    expect(shallow(<Sharelove />).is('.sharelove')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Sharelove />).find('.sharelove').length).toBe(1);
  });
});

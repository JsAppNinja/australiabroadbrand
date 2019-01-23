import React from 'react';
import { shallow, mount } from '../../../../enzyme.js';

import Payback from './Payback.js';

describe('Payback tests', () => {
  it('should be selectable by class "payback"', function() {
    expect(shallow(<Payback />).is('.payback')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Payback />).find('.payback').length).toBe(1);
  });
});

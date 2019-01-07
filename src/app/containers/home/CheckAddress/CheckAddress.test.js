import React from 'react';
import { shallow, mount, render } from '../../../../enzyme.js';

import CheckAddress from './CheckAddress';

describe('CheckAddress tests', () => {
  it('should be selectable by class "check-address"', function() {
    expect(shallow(<CheckAddress />).is('.check-address')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<CheckAddress />).find('.check-address').length).toBe(1);
  });
});

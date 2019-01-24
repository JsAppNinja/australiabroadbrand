import React from 'react';
import { shallow, mount } from '../../../../enzyme.js';

import Startshare from './Startshare.js';

describe('Startshare tests', () => {
  it('should be selectable by class "startshare"', function() {
    expect(shallow(<Startshare />).is('.startshare')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Startshare />).find('.startshare').length).toBe(1);
  });
});

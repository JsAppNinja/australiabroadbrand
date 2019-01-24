import React from 'react';
import { shallow, mount } from '../../../../enzyme.js';

import Whyshare from './Whyshare.js';

describe('Whyshare tests', () => {
  it('should be selectable by class "whyshare"', function() {
    expect(shallow(<Whyshare />).is('.whyshare')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Whyshare />).find('.whyshare').length).toBe(1);
  });
});

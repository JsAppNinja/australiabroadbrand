import React from 'react';
import { shallow, mount } from '../../../../enzyme.js';

import NbnHelp from './NbnHelp.js';

describe('Install tests', () => {
  it('should be selectable by class "nbn-help"', function() {
    expect(shallow(<NbnHelp />).is('.nbn-help')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<NbnHelp />).find('.nbn-help').length).toBe(1);
  });
});

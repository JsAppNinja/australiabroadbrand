import React from 'react';
import { shallow, mount } from '../../../../enzyme.js';

import ReadyInstall from './ReadyInstall.js';

describe('ReadyInstall tests', () => {
  it('should be selectable by class "nbn-ready"', function() {
    expect(shallow(<ReadyInstall />).is('.nbn-ready')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<ReadyInstall />).find('.nbn-ready').length).toBe(1);
  });
});

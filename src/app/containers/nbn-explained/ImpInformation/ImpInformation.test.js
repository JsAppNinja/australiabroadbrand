import React from 'react';
import { shallow, mount, render } from '../../../../enzyme.js';

import ImpInformation from './ImpInformation.js';

describe('ImpInformation tests', () => {
  it('should be selectable by class "imp-information"', function() {
    expect(shallow(<ImpInformation />).is('.imp-information')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<ImpInformation />).find('.imp-information').length).toBe(1);
  });
});

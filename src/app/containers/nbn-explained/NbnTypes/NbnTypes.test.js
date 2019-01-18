import React from 'react';
import { shallow, mount } from '../../../../enzyme.js';

import NbnTypes from './NbnTypes.js';
import { MemoryRouter } from 'react-router-dom';

describe('NbnTypes tests', () => {
  it('should be selectable by class "nbn_types"', function() {
    expect(shallow(<NbnTypes />).is('.nbn_types')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(
      mount(
        <MemoryRouter>
          <NbnTypes />
        </MemoryRouter>
      ).find('.nbn_types').length
    ).toBe(1);
  });
});

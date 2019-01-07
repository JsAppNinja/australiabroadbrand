import React from 'react';
import { shallow, mount, render } from '../../../../enzyme.js';

import EasyConnection from './EasyConnection.js';

describe('EasyConnection tests', () => {
  it('renders section-description', () => {
    const wrapper = shallow(<EasyConnection />);

    expect(wrapper.find('.easy-connection__section')).toBeDefined();
    expect(wrapper.find('.easy-connection')).toBeDefined();
    expect(wrapper.find('.section-description')).toBeDefined();
    expect(wrapper.find('.description-curveline')).toBeDefined();
    expect(wrapper.find('.section-description')).toHaveLength(4);
  });

  it('should be selectable by class "easy-connection__section"', function() {
    expect(shallow(<EasyConnection />).is('.easy-connection__section')).toBe(
      true
    );
  });

  it('should mount in a full DOM', function() {
    expect(
      mount(<EasyConnection />).find('.easy-connection__section').length
    ).toBe(1);
  });
});

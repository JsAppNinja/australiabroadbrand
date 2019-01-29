import React from 'react';
import { shallow, mount } from '../../../../enzyme.js';

import EasyConnection from './EasyConnection.js';

describe('EasyConnection tests', () => {
  const tree = shallow(<EasyConnection />);

  it('should render easy connection section', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should mount in a full DOM', function() {
    expect(
      mount(<EasyConnection />).find('.easy-connection__section').length
    ).toBe(1);
  });
});

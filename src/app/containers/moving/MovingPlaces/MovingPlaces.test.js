import React from 'react';
import { shallow, mount } from 'enzyme';

import MovingPlaces from './MovingPlaces.js';

describe('MovingPlaces tests', () => {
  const tree = shallow(<MovingPlaces />);
  it('should render moving places section', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should mount in a full DOM', function() {
    expect(mount(<MovingPlaces />).find('.moving-places').length).toBe(1);
  });
});

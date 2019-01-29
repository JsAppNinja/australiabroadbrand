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
    const treeMounted = mount(<MovingPlaces />);
    const dropdownItemIdx = Math.floor(Math.random() * 5);
    const btn = treeMounted.find('.dropdown__button').at(dropdownItemIdx);
    btn.simulate('click');
    expect(treeMounted.state().openedDropdownIdx).toBe(dropdownItemIdx);
  });
});

import React from 'react';
import { shallow, mount } from 'enzyme';

import Dropdown from './Dropdown.js';

import Data from '../Data';

describe('Dropdown tests', () => {
  const tree = shallow(<Dropdown data={Data[0]} />);

  it('should render dropdown section', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should mount in a full DOM', () => {
    expect(mount(<Dropdown data={Data[0]} />).find('.dropdown').length).toBe(1);
  });

  it('should handle click on dropdown title', () => {
    const btn = tree.find('.dropdown__button');
    btn.simulate('click');
    expect(tree.state().isOpened).toEqual(true);
  });
});

import React from 'react';
import { shallow, mount } from 'enzyme';

import Dropdown from './Dropdown.js';

import Data from '../Data';

const defaultProps = {
  openedDropdownIdx: null,
  expandDropdown: jest.fn(),
  data: {
    item: Data[0],
  },
};

describe('Dropdown tests', () => {
  const tree = shallow(<Dropdown {...defaultProps} />);
  const spyOnExpandDropdown = jest.spyOn(defaultProps, 'expandDropdown');
  it('should render dropdown section', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should mount in a full DOM', () => {
    expect(mount(<Dropdown {...defaultProps} />).find('.dropdown').length).toBe(
      1
    );
  });

  it('should handle click on dropdown title', () => {
    const btn = tree.find('.dropdown__button');
    btn.simulate('click');
    expect(spyOnExpandDropdown).toHaveBeenCalled();
  });
});

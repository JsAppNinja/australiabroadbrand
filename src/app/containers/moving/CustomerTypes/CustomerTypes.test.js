import React from 'react';
import { shallow, mount, request } from 'enzyme';

import app from '../../../app';
import CustomerTypes from './CustomerTypes';

const defaultProps = {
  toggleSteps: jest.fn(),
  activeType: null,
};

describe('Customer Types', () => {
  const tree = shallow(<CustomerTypes {...defaultProps} />);
  const instance = tree.instance();
  const spyOnToggleSteps = jest.spyOn(defaultProps, 'toggleSteps');
  instance.forceUpdate();

  it('should render customer types section', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should handle click on new customer', () => {
    const btn = tree.find('.customers__card.new-customer');
    btn.simulate('click');
    expect(spyOnToggleSteps).toHaveBeenCalled();
  });

  it('should handle click on existing customer', () => {
    const btn = tree.find('.customers__card.existing-customer');
    btn.simulate('click');
    expect(spyOnToggleSteps).toHaveBeenCalled();
  });

  it('should mount', () => {
    expect(
      mount(<CustomerTypes {...defaultProps} />).find('.customers')
    ).toHaveLength(1);
  });
});

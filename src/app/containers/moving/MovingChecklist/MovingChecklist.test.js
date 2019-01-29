import React from 'react';
import { shallow, mount } from 'enzyme';

import MovingChecklist from './MovingChecklist.js';

describe('MovingChecklist tests', () => {
  const tree = shallow(<MovingChecklist />);
  const spyOnToggleSteps = jest.spyOn(tree.instance(), 'expandCard');
  it('should render moving checklist section', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should handle click on checklist', () => {
    const btnOrange = tree.find(
      '.checklist-section__card_orange .checklist-section__card__footer'
    );
    const btnGreen = tree.find(
      '.checklist-section__card_green .checklist-section__card__footer'
    );

    btnOrange.simulate('click', 'Orange');
    expect(spyOnToggleSteps).toHaveBeenCalled();
    expect(tree.state().isOrangeExpanded).toEqual(true);
    btnGreen.simulate('click', 'Green');
    expect(spyOnToggleSteps).toHaveBeenCalled();
    expect(tree.state().isGreenExpanded).toEqual(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<MovingChecklist />).find('.checklist-section').length).toBe(
      1
    );
  });
});

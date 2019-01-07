import React from 'react';
import { shallow, mount, render } from '../../../../enzyme.js';

import NavigationBar from './NavigationBar.js';

describe('NavigationBar tests', () => {
  it('renders benefit-list-items', () => {
    const items = [
      {
        to: '/nbn-plans',
        text: 'NBN Plans',
      },
      {
        to: '/nbn-explained',
        text: 'NBN Explained',
      },
      {
        to: '/moving-nbn',
        text: 'Moving',
      },
    ];
    const wrapper = shallow(<NavigationBar items={items} isViewable={true} />);

    expect(wrapper.find('.navbar')).toBeDefined();
    expect(wrapper.find('.navbar_item')).toHaveLength(3);
  });

  it('should be selectable by class "navbar"', function() {
    const items = [
      {
        to: '/nbn-plans',
        text: 'NBN Plans',
      },
      {
        to: '/nbn-explained',
        text: 'NBN Explained',
      },
      {
        to: '/moving-nbn',
        text: 'Moving',
      },
    ];
    expect(
      shallow(<NavigationBar items={items} isViewable={true} />).is('.navbar')
    ).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<NavigationBar />).find('.navbar').length).toBe(0);
  });
});

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import UserLadder from './index';

describe('<UserLadder />', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<UserLadder />);
    expect(wrapper).to.be.ok;
  });

  it('renders with style className', () => {
    const wrapper = shallow(<UserLadder />);
    expect(wrapper.find('.user-ladder-wrapper').exists()).to.equal(true);
  });

});

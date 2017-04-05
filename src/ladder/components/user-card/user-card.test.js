import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import UserCard from './index';

describe('<UserCard />', () => {

  const person = { id: 1, name: 'bob', score: 10 };

  it('accepts props of a person object', () => {
    const wrapper = shallow(<UserCard person={person} />);
    expect(wrapper.instance().props.person).to.deep.equal(person);
  });

  it('renders a users name and score set of p tags', () => {
    const wrapper = shallow(<UserCard person={person} />);
    expect(wrapper.find('p')).to.have.length(2);
  });

  it('renders the component with styling', () => {
    const wrapper = shallow(<UserCard person={person} />);
    expect(wrapper.find('.person-wrapper')).to.have.length(1);
  });
});

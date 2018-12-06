import React from 'react';
import { shallow } from 'enzyme';
import { Home, Signup } from '../index';

it('it shows <Signup /> ', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find(Signup).length).toEqual(1);
});

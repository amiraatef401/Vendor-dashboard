import React from 'react';
import { shallow } from 'enzyme';
import * as axios from 'axios';
import { ForgetPassword } from '../index';

jest.mock('axios');
describe('ForgetPassword Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<ForgetPassword />).find('form').exists()).toBe(true);
  });
  it('renders a email input', () => {
    expect(shallow(<ForgetPassword />).find('#email').length).toEqual(1);
  });
  describe('Email input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow(<ForgetPassword />);
      wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'blah@gmail.com' } });
      expect(wrapper.state('email')).toEqual('blah@gmail.com');
    });
  });
  it('good response', () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: 'We have just sent you an email to reset your password.' }));
  });
  it('bad response', () => {
    axios.get.mockImplementation(() => Promise.reject(new Error('entter your mail correctly')));
  });
});

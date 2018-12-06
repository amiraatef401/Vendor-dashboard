import React from 'react';
import { shallow } from 'enzyme';
import * as axios from 'axios';
import { Login } from '../index';

jest.mock('axios');
describe('Login Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Login />).find('form').exists()).toBe(true);
  });
  it('renders a email input', () => {
    expect(shallow(<Login />).find('#email').length).toEqual(1);
  });
  it('renders a password input', () => {
    expect(shallow(<Login />).find('#password').length).toEqual(1);
  });

  describe('Email input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow(<Login />);
      wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'blah@gmail.com' } });
      expect(wrapper.state('email')).toEqual('blah@gmail.com');
    });
  });

  describe('Password input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow(<Login />);
      wrapper.find('#password').simulate('change', { target: { name: 'password', value: 'cats' } });
      expect(wrapper.state('password')).toEqual('cats');
    });
  });
  it('good response', () => {
    axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: {} }));
  });
  it('bad response', () => {
    axios.get.mockImplementation(() => Promise.reject(new Error('Wrong mail and password')));
  });
});

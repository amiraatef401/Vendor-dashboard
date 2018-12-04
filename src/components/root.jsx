import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PropTypes from 'prop-types';
import reducers from '../reducers/index';

const Root = (props) => {
  const { children } = props;

  return (
    <Provider store={createStore(reducers, {})}>
      {children}
    </Provider>
  );
};
export default Root;
Root.propTypes = {
  children: PropTypes.element.isRequired,
};

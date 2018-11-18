import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootreducer from './store/index';
// import Routes from './Routes';
import Home from './components/Home';
// import Login from './components/Login';
// import Foregetpass from './components/Forgetpassword';
// import Setpass from './components/setpass';

const store = createStore(rootreducer);

export default class App extends Component {
  componentDidMount() {
    return true;
  }

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    // <Provider store={store}>
    //   <Routes />
    // </Provider>
    );
  }
}

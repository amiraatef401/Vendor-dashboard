import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootreducer from './store/index';
import Home from './components/Home';
import Login from './components/Login';
import Foregetpass from './components/Forgetpassword';
import Setpass from './components/setpass';

const store = createStore(rootreducer);

const history = createHistory();

const Routes = (
  <Provider store={store}>

    <Router history={history}>
      <Switch>
        <div>
          <Route exact path="/" component={<Home />} /* onEnter={onEnterPrivatePage} */ />
          <Route path="/Login" component={<Login />} />
          <Route path="/Foregetpass" component={<Foregetpass />} />
          <Route path="/Setpass" component={<Setpass />} />
        </div>
      </Switch>
    </Router>
  </Provider>

);
export default Routes;

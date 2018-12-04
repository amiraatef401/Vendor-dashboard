import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {
  ForgetPassword, Login, ResetPassword,
} from './index';
import CommonIntroUI from './commonBackgroundHead';

const history = createHistory();
export default class App extends Component {
  componentDidMount() {
    return true;
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <div>
              <Route exact path="/" component={CommonIntroUI} /* onEnter={onEnterPrivatePage} */ />
              <Route path="/login" component={Login} />
              <Route path="/forget-password" component={ForgetPassword} />
              <Route path="/reset-password" component={ResetPassword} />
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

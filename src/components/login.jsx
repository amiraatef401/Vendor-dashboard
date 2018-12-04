import React from 'react';
import { NavLink } from 'react-router-dom';
import request from 'request';
// import axios from 'axios';
import { CommonIntroUI } from './index';
import '../Styles/introScreens/login.css';
import '../Styles/introScreens/commonIUiIntro.css';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleInputChangePassword = this.handleInputChangePassword.bind(this);
    this.handleInputChangeEmail = this.handleInputChangeEmail.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  submitData(e) {
    e.preventDefault();
    const { email, password } = this.state;
    // const userData = {
    //   email,
    //   password,
    //   connection: 'Username-Password-Authentication',
    //   client_id: 'VP5v0Yfp90l4covB3rk5BKzdagBoSiCp',

    // };
    const LoginUserData = {
      grant_type: 'password',
      username: email,
      password,
      audience: 'https://auth00-react.auth0.com/api/v2/',
      client_id: 'VP5v0Yfp90l4covB3rk5BKzdagBoSiCp',
      client_secret: '_zWWJZjxJtXlJNDJrEhrPoDi9wo5hzJxm-zqA0PHfw_jxVll0V_YldGMqRsZDfVh',
      connection: 'Username-Password-Authentication',
    };

    const options = {
      method: 'POST',
      url: 'https://auth00-react.auth0.com/oauth/token',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(LoginUserData),
    };
    request(options, (error, response, body) => {
      if (error) throw new Error(error);
      console.log(body);
    });

    // axios.post('https://auth00-react.auth0.com/dbconnections/signup', userData)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch(error => console.log(error));
  }

  handleInputChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleInputChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <CommonIntroUI />
        <div className="introForm">
          <div className="loginFormHeader">Back to Business!</div>
          <form>
            <input id="email" onChange={this.handleInputChangeEmail} name="email" type="email" value={email} className="emailInputLogin" placeholder="Fekry@bosta.co" />
            <input id="password" onChange={this.handleInputChangePassword} name="password" type="password" className="passwordInputLogin" value={password} placeholder="Password" />
            <NavLink to="/forget-password" className="navLink">Forgot my password</NavLink>
            <button onClick={this.submitData} className="signInBtn" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    );
  }
}

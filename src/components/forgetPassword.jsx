import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/introScreens/commonIUiIntro.css';
import '../Styles/introScreens/forgetPassword.css';
import Axios from 'axios';
import { CommonIntroUI } from './index';
import lefrArrow from './img/left.png';

export default class ForgetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
    this.handleInputChangeEmail = this.handleInputChangeEmail.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }

  handleInputChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  submitEmail(e) {
    e.preventDefault();

    const { email } = this.state;
    const userData = {
      client_id: 'VP5v0Yfp90l4covB3rk5BKzdagBoSiCp',
      email,
      connection: 'Username-Password-Authentication',
    };
    Axios.post('https://auth00-react.auth0.com/dbconnections/change_password', userData)
      .then((res) => {
        console.log(res);
      }).catch(error => console.log(error));
  }

  render() {
    const { email } = this.state;
    return (
      <div>

        <CommonIntroUI />
        <div className="introForm">
          <div className="forgetPasswordHeader">
            <div className="displayRow">

              <NavLink to="/login">
                <img src={lefrArrow} alt="pending" className="leftArrow" />
              </NavLink>
              <span>Reset my Password</span>
            </div>
          </div>
          <form>
            <div className="content">
              {'Please enter your email address, And we will send you a reset link to in an email'}
            </div>
            <input className="emailVerification" id="email" onChange={this.handleInputChangeEmail} name="email" type="email" value={email} placeholder="Fekry@bosta.co" />
            <button className="signInBtn" onClick={this.submitEmail} type="submit">
              {'Submit'}
            </button>
          </form>
        </div>
      </div>

    );
  }
}

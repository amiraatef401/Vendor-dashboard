import React from 'react';
import { Icon } from 'antd';
import classes from './styles.css';
import logo from './img/logo.jpg';
import SignUp from './Signup';

export default function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.headHome}>
        <div>
          <img src={logo} alt="pending" />
        </div>
        <div className={classes.headWords}>
          <div>
            &nbsp;&nbsp;&nbsp;Uses
          </div>
          <div>
            Pricing
          </div>
          <div>
            Sucssess  Story
          </div>
          <div>
            Track My Shipment
          </div>
          <div>
            <span style={{ color: 'rgb(239, 155, 15)' }} role="img" aria-label="zap-emoji">
              ⚡
            </span>
            Mohamed
          </div>

          <button className={classes.signInBtn} type="submit">
            Sign In
          </button>
        </div>
      </div>

      <div className={classes.Content}>
        <div className={classes.contentP1}>

          How Great Is
          <br />
          The Strength Of
          <br />
          Your Belief!
        </div>
        <SignUp />
      </div>
      <div>
        <div className={classes.divPhone}> Contact Sales</div>
        <div className={classes.divPhoneNumberIcon}><Icon type="phone" /></div>
        <div className={classes.Number}>201068440487</div>
      </div>
    </div>
  );
}

import React from 'react';
import { Icon } from 'antd';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import classes from './styles.css';
import logo from './img/logo.jpg';
import SignUp from './SignUpForm';

export default function Home() {
  return (
    <MuiThemeProvider>
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
          <Button style={{ background: '#d7262c' }} variant="outlined" className={classes.signInBtn}>
          Sign In
          </Button>
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
        <div className={classes.contentp2}>
          <SignUp />
        </div>

      </div>
      <div>
        <div className={classes.divPhone}> Contact Sales</div>
        <div className={classes.divPhoneNumberIcon}><Icon type="phone" /></div>
        <div className={classes.Number}>201068440487</div>
      </div>
    </MuiThemeProvider>
  );
}

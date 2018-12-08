import React from 'react';
import '../styles/homeScreens/today.css';
import todayFront from './img/todayFront.png';
import homebg from './img/homebg.png';
import { SideMenu } from './index';

const Today = () => (
  <SideMenu>
    <img
      src={homebg}
      style={{
        width: '100%',
        height: '100%',
      }}
      alt="pendding"
    />
    <img src={todayFront} className="frontImage" alt="wait" />
    <div className="newRequest">Create Your First Request</div>

  </SideMenu>
);
export default Today;

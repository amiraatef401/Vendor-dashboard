import React, { Component } from 'react';
import '../styles/homeScreens/hometoday.css';
import { Today } from './index';

export default class SideMenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todayClicked: true,
      numOfRequests: 0,
    };
  }

  render() {
    const { todayClicked, numOfRequests } = this.state;
    return (
      <div>
        <div className="sideMenuInitial">
xxxxxxxxxxxxxxxx
        </div>
        <div className="homeHeaderInitial">
xxxxxxxxxxxxxxxxx

        </div>
        <div>
          {
          todayClicked && numOfRequests && <Today />
        }
        </div>
      </div>
    );
  }
}

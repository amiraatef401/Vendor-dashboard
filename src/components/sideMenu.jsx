
import React, { Component } from 'react';
import '../styles/homeScreens/commonUiHomeScreens.css';
import PropTypes from 'prop-types';

import leftArrow from './img/doubleleft.png';
import logo from './img/logo.jpg';
import day from './img/day.png';
import navigator from './img/nav.png';
import delivery from './img/Delivery.png';
import returns from './img/returns.png';
import dollar from './img/dollar.png';
import inventory from './img/inventory.png';
import reports from './img/reports.png';
import settings from './img/settings.png';

export default class SideMenue extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <div className="sideMenuInitial">
          <div className="divBusiness">
            <div className="businessName">Jumia</div>
          </div>
          <img src={day} alt="pendding" className="sideBarImg" />
          <div className="sideBarRoute Today">Today</div>
          <div className="sideBarRoute pickupImg ">Pickups</div>
          <div className="sideBarRoute deliveryImg ">Deliveries</div>
          <div className="sideBarRoute returnsImg">Returns</div>
          <div className="sideBarRoute codImg">CODs</div>
          <div className="sideBarRoute billImg">Billing</div>
          <div className="sideBarRoute inventoryImg">Inventory Management</div>
          <div className="sideBarRoute reportsImg">Reports & Analytics</div>
          <div className="sideBarRoute suppliesImg">Bosta Supplies</div>
          <div className="sideBarRoute settingsImg">Settings</div>
          <div className="line" />
          <div className="line secondLine" />
          <img src={navigator} alt="pendding" className="sideBarImg pickupImg" />
          <img src={delivery} alt="pendding" className="sideBarImg deliveryImg" />
          <img src={returns} alt="pendding" className="sideBarImg returnsImg" />
          <img src={dollar} alt="pendding" className="sideBarImg codImg" />
          <img src={dollar} alt="pendding" className="sideBarImg billImg" />
          <img src={inventory} alt="pendding" className="sideBarImg inventoryImg" />
          <img src={reports} alt="pendding" className="sideBarImg reportsImg" />
          <img src={logo} alt="pendding" className="sideBarImg suppliesImg" />
          <img src={settings} alt="pendding" className="sideBarImg settingsImg" />
        </div>
        <div className="homeHeaderInitial">
          <img src={leftArrow} alt="pending" className="collapseArrow" />
          <button type="submit" className="newDeliveryBtn">+ New Delivery</button>
          <img src={logo} alt="pending" className="logoHome" />

        </div>
        <div className="contaningContent">
          {children}
        </div>

      </div>
    );
  }
}
SideMenue.propTypes = {
  children: PropTypes.element.isRequired,
};

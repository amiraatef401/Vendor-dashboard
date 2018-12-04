import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/introScreens/commonIUiIntro.css';
import logo from './img/logo.jpg';

function CommonIntroUi(props) {
  const { children } = props;
  return (
    <div>
      <div className="backGroundUp" />

      <div className="logo">
        <img src={logo} alt="pending" />
      </div>
      <div className="backGroundDown" />
      <div className="introWrapper">
        {children}
      </div>
    </div>
  );
}
export default CommonIntroUi;
CommonIntroUi.propTypes = {
  children: PropTypes.element.isRequired,
};

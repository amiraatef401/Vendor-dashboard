import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import logo from './img/logo.jpg';
import { Signup } from './index';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <div>
            <div>
              <img src={logo} alt="pending" />
            </div>
            <div>
              <div>
       Uses
              </div>
              <div>
            Pricing
              </div>
              <div>
              success   Story
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
              <Button
                onClick={() => {
                  history.replace('/login');
                }}
                style={{ background: '#d7262c', color: 'white' }}
                variant="outlined"
                size="large"

              >
          Sign In
              </Button>
            </div>
          </div>

          <div>
            <div>

          How Great Is
              <br />
          The Strength Of
              <br />
          Your Belief!
              <div>
                <div> Contact Sales</div>
                <div style={{ fontSize: '30px', fontWeight: 'bold' }}><Icon type="phone" /></div>
                <div>201068440487</div>
              </div>
            </div>
            <div>
              <Signup />
            </div>
          </div>

        </div>

      </MuiThemeProvider>
    );
  }
}

export default Home;
Home.propTypes = {
  history: PropTypes.func,
};
Home.defaultProps = {
  history: () => {},
};

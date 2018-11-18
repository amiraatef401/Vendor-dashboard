import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import { NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import logo from './img/logo.jpg';
import classes from './styles.css';

const validate = (values) => {
  const errors = {};
  const requiredFields = ['email'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
const renderTextField = ({
  input, label, meta: { touched, error }, ...custom
}) => (
  <TextField
    hintText={label}
    errorText={touched && error}
    {...input}
    {...custom}
    underlineStyle={{ display: 'none' }}
  />
);
class Resetpassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={classes.login}>
        <img src={logo} alt="pending" />
        <br />
        <br />
        <br />
        <MuiThemeProvider>
          <Card style={{ width: '35%' }}>
            <CardContent>
              <form onSubmit={handleSubmit} className={classes.Forgetpass}>
                <div className={classes.hDSignup}>
                  <div style={{ color: 'gray', fontWeight: 'bold', fontSize: '20px' }}> &lt;&nbsp;&nbsp; </div>
                  {'Reset my Password'}
                </div>
                <p style={{ fontSize: '14px' }}>
                  {'Please enter your email address, And we will send you a reset link to in an email'}
                </p>
                <div className={classes.inpt}>
                  <Field name="email" component={renderTextField} label="Email" />
                </div>
                <br />
                <div>
                  <Button size="large" style={{ background: '#d7262c', color: 'white' }} variant="outlined">Submit</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </MuiThemeProvider>
      </div>

    );
  }
}
Resetpassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
renderTextField.propTypes = {
  input: PropTypes.shape.isRequired,

};
export default reduxForm({
  form: 'ResetpasswordForm',
  validate,
})(Resetpassword);

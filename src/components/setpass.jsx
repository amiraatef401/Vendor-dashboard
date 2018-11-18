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
  const requiredFields = ['password,matchedPassword'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.password === values.matchedPassword) {
    errors.email = 'passwords not matched';
  }
  return errors;
};
const renderTextField = ({
  input, label, meta: { touched, error }, ...custom
}) => (
  <TextField
    type="password"
    hintText={label}
    errorText={touched && error}
    {...input}
    {...custom}
    underlineStyle={{ display: 'none' }}
  />
);
class Setpassword extends React.Component {
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
              <form onSubmit={handleSubmit} className={classes.login}>
                <div className={classes.hDSignup}>
                  {'Set your new password'}
                </div>
                <div className={classes.inpt}>
                  <Field name="password" component={renderTextField} label="password" />
                </div>
                <div className={[classes.inpt, { backgroundColor: '#9b9b9b' }]}>
                  <Field name="matchedPassword" component={renderTextField} label="Verify New Password" />
                </div>
                <br />
                <div>
                  <Button size="large" style={{ background: '#d7262c', color: 'white' }} variant="outlined">Log in</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </MuiThemeProvider>
      </div>

    );
  }
}
Setpassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
renderTextField.propTypes = {
  input: PropTypes.shape.isRequired,

};
export default reduxForm({
  form: 'SetpasswordForm',
  validate,
})(Setpassword);

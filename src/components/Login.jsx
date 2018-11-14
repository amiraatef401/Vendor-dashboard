import React from 'react';
import { Field, reduxForm } from 'redux-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Center from 'react-center';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import logo from './img/logo.jpg';
import classes from './styles.css';

const validate = (values) => {
  const errors = {};
  const requiredFields = ['firstName', 'lastName', 'email', 'favoriteColor', 'notes'];
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
    style={{ width: '100%' }}
    hintText={label}
    errorText={touched && error}
    {...input}
    {...custom}
    underlineStyle
    disableUnderline
  />
);

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={classes.login}>

        <MuiThemeProvider>
          <Center>
            <div>
              <img src={logo} alt="pending" />
            </div>
            <Card style={{ marginTop: '10%', width: '40%' }}>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div>
                    <Field name="businesName" component={renderTextField} label="Business Name" />
                  </div>
                  <br />
                  <div>
                    <Field name="email" component={renderTextField} label="Email" />
                  </div>
                  <div>
                    <Button style={{ background: '#d7262c' }} variant="outlined">Sign In</Button>
                  </div>
                </form>
              </CardContent>
            </Card>

          </Center>

        </MuiThemeProvider>
      </div>

    );
  }
}
LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
renderTextField.propTypes = {
  input: PropTypes.shape.isRequired,

};
export default reduxForm({
  form: 'LoginForm',
  validate,
})(LoginForm);

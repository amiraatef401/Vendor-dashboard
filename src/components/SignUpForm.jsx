import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import Button from '@material-ui/core/Button';
import MenuItem from 'material-ui/MenuItem';
import InputRange from 'react-input-range';
// import { Slider } from 'material-ui-slider';
import classes from './styles.css';
import 'react-input-range/lib/css/index.css';

const validate = (values) => {
  const errors = {};
  const requiredFields = ['firstName', 'lastName', 'email', 'favoriteColor', 'notes'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
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

  />
);

const renderSelectField = ({
  input, label, meta: { touched, error }, children, ...custom
}) => (
  <SelectField
    floatingLabelStyle={{ color: 'black' }}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    {...custom}

  >
    {children}

  </SelectField>
);

// const SignUpForm = (props) =>
class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 2, max: 10 },
    };
  }

  sliderValue(value) {
    console.log(value);
    this.setState({ value });
  }

  // sliderValueSTR(value) { `${value}cm`; }

  render() {
    const { handleSubmit } = this.props;
    const { value } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <span className={classes.hDSignup}>Let’s Start Together!</span>
        </div>
        <div className={classes.inpt}>
          <Field name="businesName" component={renderTextField} label="Business Name" />
        </div>
        {/* <div>
        <Field name="lastName" component={renderTextField} label="Last Name" />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div> */}
        <div className={classes.dpdList}>
          <Field name="favoriteColor" component={renderSelectField} label="Favorite Color">
            <MenuItem value="ff0000" primaryText="Red" />
            <MenuItem value="00ff00" primaryText="Green" />
            <MenuItem value="0000ff" primaryText="Blue" />
          </Field>
        </div>
        <br />
        <div>
          <span>
            <span className={classes.businessScale}>Business Scale</span>
            <span className={classes.perDay}>• Shipments per day</span>
          </span>
        </div>
        {/* <div>
          <Slider
            onChange={() => this.sliderValue(value3)}
            min={0}
            max={100}
            defaultValue={[10, 50]}
            range
            color="#d7262c"
            value={value3}
          />
        </div> */}
        <br />

        <div>
          <InputRange
            value={value}
            onChange={_value => this.sliderValue(_value)}
            formatLabel={_value => `${_value} daily`}
          />
        </div>
        <br />
        <br />

        <div className={classes.btns}>
          <Button disabled variant="extendedFab" aria-label="Delete" className={classes.signInBtn}>Business</Button>
          <Button variant="extendedFab" aria-label="Delete" className={classes.signInBtn}>Individual</Button>
        </div>
        <br />
        <div className={classes.inpt}>
          <Field name="ContactName" component={renderTextField} label="Contact Name" />
        </div>
        <br />
        <div className={classes.inpt}>
          <Field name="Contact Phone" component={renderTextField} label="Contact Phone" />
        </div>
        <div>
          <Button style={{ background: '#d7262c' }} variant="outlined">Sign Up</Button>
        </div>
      </form>
    );
  }
}
SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
renderTextField.propTypes = {
  input: PropTypes.shape.isRequired,

};
export default reduxForm({
  form: 'SignUpForm',
  validate,
})(SignUpForm);

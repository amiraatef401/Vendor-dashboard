import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import Button from '@material-ui/core/Button';
import MenuItem from 'material-ui/MenuItem';
import InputRange from '../../lib/react-input-range';
import classes from './styles.css';
import 'react-input-range/lib/css/index.css';

const validate = (values) => {
  const errors = {};
  const requiredFields = ['businesName', 'businessCategory', 'contactName', 'contactPhone'];
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
    underlineStyle={{ display: 'none' }}
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

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 0, max: 100 },
      businessShow: true,
      individualShow: false,
    };
  }

  sliderValue(value) {
    this.setState({ value });
  }

  render() {
    const { handleSubmit } = this.props;
    const { value, businessShow, individualShow } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <span className={classes.hDSignup}>Let’s Start Together!</span>
        </div>
        <br />
        <div className={classes.inpt}>
          <Field name="businesName" component={renderTextField} label="Business Name" />
        </div>
        <div className={classes.dpdList}>
          <Field name="businessCategory" component={renderSelectField} label="Business Category">
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
        <br />

        <div>
          <InputRange
            maxValue={100}
            minValue={0}
            step={1}
            value={value}
            onChange={_value => this.sliderValue(_value)}
            formatLabel={_value => `${_value} Daily`}
          />
        </div>
        <br />
        <br />

        <div className={classes.btns}>
          <Button
            disabled={businessShow}
            size="large"
            onClick={() => {
              this.setState({ businessShow: individualShow, individualShow: businessShow });
            }}
            variant="extendedFab"
            className={classes.signInBtn}
          >
            {'Business'}
          </Button>
          <Button
            disabled={individualShow}
            onClick={() => {
              this.setState({ businessShow: individualShow, individualShow: businessShow });
            }}
            size="large"
            variant="extendedFab"
            className={classes.signInBtn}
          >
            {'Individual'}
          </Button>
        </div>
        <br />
        <div className={classes.inpt}>
          <Field name="contactName" component={renderTextField} label="Contact Name" />
        </div>
        <br />
        <div className={classes.inpt}>
          <Field name="contactPhone" component={renderTextField} label="Contact Phone" />
        </div>
        <br />
        <div>
          <Button size="large" style={{ background: '#d7262c', color: 'white' }} variant="outlined">Sign Up</Button>
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

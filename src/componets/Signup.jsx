import React from 'react';
import { Select, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import classes from './styles.css';

const FormItem = Form.Item;
const { Option } = Select;
class SignUpForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className={classes.signUpForm}>
        <Form onSubmit={this.handleSubmit}>
          <span className={classes.hDSignup}>Let’s Start Together!</span>

          <FormItem>
            {getFieldDecorator('Business Name', {
              rules: [{ required: true, message: 'Please input your Business Name!' }],
            })(
              <Input placeholder="Business Name" />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('Business Category',
              { rules: [{ required: true, message: 'Please input your Business Category!' }] })(
                <Select defaultValue="Username" style={{ width: 120 }}>
                  <Option value="Usernamejack">Jack</Option>
                  <Option value="Usernamelucy">Lucy</Option>
                  <Option value="Usernamedisabled">Disabled</Option>
                  <Option value="UsernameYiminghe">yiminghe</Option>
                </Select>,
            )}
          </FormItem>

        </Form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  form: PropTypes.shape.isRequired,
};
const SignUp = Form.create()(SignUpForm);

export default SignUp;

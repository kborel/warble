import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

class SignupForm extends Component {
  render() {
    return (
      <form style={{display: 'block'}}>
        <Input type='text' placeholder='Full name'/>
        <Input type='text' placeholder='Email'/>
        <Input type='password' placeholder='Password'/>
        <Button type='submit' value='Sign Up'/>
      </form>
    );
  }
}

export default SignupForm;
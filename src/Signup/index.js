import React, { Component } from 'react';
import Layout from './Layout';
import Header from './Header';
import SignupForm from './SignupForm';

class Signup extends Component {
  render() {
    return (
      <Layout>
        <Header>Join Warble today.</Header>
        <SignupForm />
      </Layout>
    );
  }
}

export default Signup;
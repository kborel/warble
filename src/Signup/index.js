import React, { Component } from 'react';
import Layout from './Layout';
import Header from './Header';
import SignupForm from './SignupForm';
import Nav from './Nav';

class Signup extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Layout>
          <Header>Join Warble today.</Header>
          <SignupForm />
        </Layout>
      </div>
    );
  }
}

export default Signup;
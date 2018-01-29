import React from 'react';
import Layout from './Layout';
import Header from './Header';
import SignupForm from './SignupForm';

const Signup = () => (
  <div>
    <Layout>
      <Header>Join Warble today.</Header>
      <SignupForm />
    </Layout>
  </div>
);

export default Signup;

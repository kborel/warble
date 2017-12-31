import React from 'react';
import Layout from './Layout';
import Timeline from '../Timeline';
import TweetboxContainer from '../../Containers/TweetboxContainer';

const Home = () => (
  <Layout key="main">
    <TweetboxContainer />
    <Timeline />
  </Layout>
);

export default Home;

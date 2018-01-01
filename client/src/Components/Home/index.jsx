import React from 'react';
import Layout from './Layout';
import TimelineContainer from '../../Containers/TimelineContainer';
import TweetboxContainer from '../../Containers/TweetboxContainer';

const Home = () => (
  <Layout key="main">
    <TweetboxContainer />
    <TimelineContainer />
  </Layout>
);

export default Home;

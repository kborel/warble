import React from 'react';
import Container from '../Container';
import TimelineContainer from '../../Containers/TimelineContainer';
import TweetboxContainer from '../../Containers/TweetboxContainer';

const Home = () => (
  <Container width="600px">
    <TweetboxContainer />
    <TimelineContainer />
  </Container>
);

export default Home;

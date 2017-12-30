import React from 'react';
import HomeLayout from './HomeLayout';
import Nav from './Nav';
import Timeline from './Timeline';
import ProfileCard from './ProfileCard';
import Trends from './Trends';
import WhoToFollow from './WhoToFollow';

const Home = () => (
  <React.Fragment>
    {/* <Nav key='nav' /> */}
    <HomeLayout key="main">
      <Timeline />
      {/* <ProfileCard />
        <Trends />
      <WhoToFollow /> */}
    </HomeLayout>
  </React.Fragment>
);

export default Home;

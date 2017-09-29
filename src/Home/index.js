import React, { Component } from 'react';
import HomeLayout from './HomeLayout';
import Nav from './Nav';
import Timeline from './Timeline';
import ProfileCard from './ProfileCard';
import Trends from './Trends';
import WhoToFollow from './WhoToFollow';

class Home extends Component {
  render() {
    return [
        <Nav key='nav' />,
        <HomeLayout key='main'>
          <Timeline />
          <ProfileCard />
          <Trends />
          <WhoToFollow />
        </HomeLayout>
    ];
  }
}

export default Home;
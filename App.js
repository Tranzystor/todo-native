

import React, { Component } from 'react';
import LandingPage from './landingPage'
import { createStackNavigator } from 'react-navigation';
import NewTaskPage from './newTaskPage';

const RootStack = createStackNavigator(
  {
    Home: LandingPage,
    NewTaskPage: NewTaskPage
  },
  {
    initialRouteName: 'NewTaskPage'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './screens/HomeScreen';
import OtherScreen from './screens/OtherScreen';

const RootStack = createStackNavigator(
  {
    // Here is the routing
    Home: HomeScreen,
    Other: OtherScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
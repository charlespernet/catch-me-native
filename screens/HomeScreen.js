import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import LinesList from '../components/LinesList'

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>TODO: Recherche</Text>
        <LinesList navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
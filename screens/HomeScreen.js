import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import LinesList from '../components/LinesList';
import Search from '../components/Search';

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Search />
        <LinesList navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
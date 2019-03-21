import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import LinesList from '../components/LinesList'

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Recherche</Text>
        <LinesList />
        <Button
          title="Go to Other"
          onPress={() => this.props.navigation.navigate('Other')}
        />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
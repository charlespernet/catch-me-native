import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import LinesList from '../components/LinesList'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Choisir une ligne',
    };  

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Recherche</Text>
        <LinesList />
        <Button
          title="Go to Other"
          onPress={() => this.props.navigation.navigate('Other')}
        />
      </View>
    );
  }
}

export default HomeScreen;
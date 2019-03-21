import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import LinesList from '../components/LinesList'

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{backgroundColor: '#F2F2F2', padding: 15}} >
          <View style={{backgroundColor: 'white', padding: 15, borderRadius: 50}} >
            <Text>TODO: Recherche</Text>
          </View>
        </View>
        <LinesList navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
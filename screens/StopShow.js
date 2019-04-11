import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { stops } from '../data/stops';

class StopShow extends Component {
  // This will be removed once we call API
  state = stops.find(stop => stop.id === this.props.navigation.getParam('stopId'))

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{
          flex: 1, alignItems: "center", justifyContent: "center", color: 'gray'
        }}>
          <Ionicons name="ios-bookmark" size={32} color="gray" />
          <Text style={{ color: 'gray' }}>PROCHAIN PASSAGE</Text>
          <Text style={{ fontSize: 100 }}>
            00:00
        </Text>
          <Text style={{ color: 'gray' }}>{this.state.name}</Text>
        </View>
        <View style={{ borderTopWidth: 1, borderTopColor: 'gray', padding: 20, marginBottom: 10 }}>
          <Text style={{ color: 'gray', fontSize: 18, marginBottom: 10 }}>PASSAGES SUIVANTS</Text>
          <Text style={{ fontSize: 16 }}>14 min</Text>
          <Text style={{ fontSize: 16 }}>14 min</Text>
        </View>
      </View>
    );
  }
}

export default StopShow;
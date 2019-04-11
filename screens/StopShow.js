import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class StopShow extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{
          flex: 1, alignItems: "center", justifyContent: "center", color: 'gray'
        }}>
          <Ionicons name="ios-bookmark" size={32} color="gray" />
          <Text style={{ color: 'gray' }}>PROCHAIN PASSAGE</Text>
          <Text style={{ color: 'gray', fontSize: 100 }}>
            00:00
        </Text>
          <Text style={{ color: 'gray' }}>NOM DE L'ARRET</Text>
        </View>
        <View style={{ borderTopWidth: 1 }}>
          <Text style={{ color: 'gray' }}>PASSAGES SUIVANTS</Text>
          <Text>14 min</Text>
          <Text>14 min</Text>
          <Text>14 min</Text>
        </View>
      </View>
    );
  }
}

export default StopShow;
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import Search from '../components/Search';

class LineShow extends Component {
  _onPress = (stopId) => {
    this.props.navigation.navigate('StopShow', { stopId: stopId })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Search />
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Button
            onPress={() => this._onPress(1)}
            title="Direction 1"
          />
          <Button
            onPress={() => this._onPress(2)}
            title="Direction 2"
          />
        </View>
      </View>
    );
  }
}

export default LineShow;
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import Search from '../components/Search';

class LineShow extends Component {
  onPress = () => {
    this.props.navigation.navigate('StopShow')
  }

  render() {
    const lineId = this.props.navigation.getParam('lineId');
    return (
      <View style={{ flex: 1 }}>
        <Search />
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Button
            onPress={this.onPress}
            title="Direction 1"
          />
          <Button
            onPress={this.onPress}
            title="Direction 2"
          />
        </View>
      </View>
    );
  }
}

export default LineShow;
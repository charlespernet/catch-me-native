import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import Search from '../components/Search';

class LineShow extends Component {
  render() {
    const lineId = this.props.navigation.getParam('lineId');
    return (
      <View style={{ flex: 1 }}>
        <Search />
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>{`Vue de la ligne ${lineId}`}</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}

export default LineShow;
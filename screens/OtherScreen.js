import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class OtherScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Other Screen</Text>
        <Button
          title="Go to Other"
          onPress={() => this.props.navigation.navigate('Other')}
        />
      </View>
    );
  }
}
  
export default OtherScreen;
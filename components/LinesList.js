import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// This tends to be replaced by an API Call
import {lines} from '../data/lines';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 20,
    fontSize: 18,
  },
  separator: {
    height: 1,
    backgroundColor: "#CED0CE",
  }
})

class LinesList extends Component {
  // Same Remark as Above
  // This tends to be replaced by an API Call
  // State will be fully removed once redux set
  state = lines

  _onPress = (item) => {
    this.props.navigation.navigate('LineShow', {lineId: item.name})
  }

  _renderLine = ({ item }) => {
    return (
      <Text 
        style={styles.item} 
        onPress={()=> this._onPress(item)} 
      >
        {item.name}
      </Text>
    )
  }

  _renderSeparator = () => <View style={styles.separator} />

  _keyExtractor = (_item, index) => `transport#${index + 1}`;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.lines}
          renderItem={this._renderLine}
          ItemSeparatorComponent={this._renderSeparator}
          keyExtractor={this._keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default LinesList;
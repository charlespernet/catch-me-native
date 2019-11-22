import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// This tends to be replaced by an API Call
import { lines } from '../data/lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lineContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center'
  },
  itemText: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  itemIcon: {
    borderRadius: 50,
    justifyContent: 'center',
    height: 50,
    width: 50,
    alignItems: 'center',
  },
  itemIconText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
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
    this.props.navigation.navigate('LineShow', { lineId: item.name })
  }

  _renderLine = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this._onPress(item)} activeOpacity={0.8} style={styles.lineContainer}>
        <View style={{ flex: 1 }} >
          <View style={[styles.itemIcon, { backgroundColor: item.color }]}>
            <Text style={styles.itemIconText}>{item.code}</Text>
          </View>
        </View>
        <View style={{ flex: 6 }}>
          <Text style={styles.itemText}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity >
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
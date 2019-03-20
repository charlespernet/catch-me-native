import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

class LinesList extends Component {
  state = {
    lines: [
      {name: 'Tram A', key: 'ta'},
      {name: 'Tram B', key: 'tb'},
      {name: 'Tram C', key: 'tc'},
      {name: 'Lianes 1', key: 'l1'},
      {name: 'Lianes 2', key: 'l2'},
      {name: 'Lianes 3', key: 'l3'},
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.lines}
          renderItem={({item}) => <Text ke={item.key}  style={styles.item}>{item.name}</Text>}
        />
      </View>
    );
  }
}

export default LinesList;
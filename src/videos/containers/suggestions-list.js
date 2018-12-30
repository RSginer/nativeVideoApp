import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';

class SuggestionsList extends Component {
  render() {
    const list = [
      {
        title: 'Ruben',
        key: '1'
      },
      {
        title: 'Soler',
        key: '2'
      }
    ]
    return (
      <FlatList
        data={list}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    )
  }
}

export default SuggestionsList;

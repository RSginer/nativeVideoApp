import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';

import Layout from '../components/suggestions-list-layout';

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
      <Layout title="Recomendado para ti">
        <FlatList
          data={list}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </Layout>
    )
  }
}

export default SuggestionsList;

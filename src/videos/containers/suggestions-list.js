import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';

import Layout from '../components/suggestions-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';

class SuggestionsList extends Component {

  renderEmpty = () => <Empty text="No hay sugerencias" />

  itemSeparator = () => <Separator />

  render() {
    const list = [
      {
        title: 'Avengers',
        key: '1'
      },
      {
        title: 'Pokemon',
        key: '2'
      }
    ]
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          data={list}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </Layout>
    )
  }
}

export default SuggestionsList;

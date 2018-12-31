import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';

import Layout from '../components/suggestions-list-layout';
import Empty from '../components/empty';
import Separator from '../../sections/components/vertical-separator';
import Suggestion from '../components/suggestion';
class SuggestionsList extends Component {

  renderEmpty = () => <Empty text="No hay sugerencias" />

  itemSeparator = () => <Separator />

  renderItem = ({ item }) => <Suggestion {...item} />

  keyExtractor = (item) => item.id.toString();

  render() {
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          data={this.props.list}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

export default SuggestionsList;

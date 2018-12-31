import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Suggestion from '../components/suggestion';
import Layout from '../components/category-list-layout';
class CategoryList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />

  itemSeparator = () => <Separator />

  renderItem = ({ item }) => <Suggestion {...item} />

  keyExtractor = (item) => item.id.toString();

  render() {
    return (
      <Layout title="Categorías">
        <FlatList
          horizontal
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

export default CategoryList;

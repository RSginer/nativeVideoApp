import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import Layout from '../components/category-list-layout';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  debugger
}
class CategoryList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />

  itemSeparator = () => <Separator />

  renderItem = ({ item }) => <Category {...item} />

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

export default connect(mapStateToProps)(CategoryList);

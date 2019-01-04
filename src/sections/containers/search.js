import React, { Component } from 'react';

import {
  TextInput,
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

import { connect } from 'react-redux';

import API from '../../utils/api';

class Search extends Component {

  state = {
    text: '',
    list: [
      { title: 'hola', key: '1' }
    ]
  }

  renderItem = ({ item }) => <Text>{item.title}</Text>;


  handleSubmit = async () => {
    const movies = await API.searchMovies(this.state.text);

    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movies[0],
      }
    });
  }

  handleChangeText = (text) => {
    this.setState({
      text
    })
  }

  render() {
    return (
      <View>
        <View>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            autoCorrect={false}
            autoCapitalize="none"
            onSubmitEditing={this.handleSubmit}
            onChangeText={this.handleChangeText}
            placeholder="Busca tu video" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea'
  }
})

export default connect(null)(Search);

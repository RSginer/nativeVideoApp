/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/screens/components/header';
import SuggestionsList from './src/videos/containers/suggestions-list';
import API from './src/utils/api';
import CategoryList from './src/videos/containers/category-list';
import Player from './src/player/containers/player';
type Props = {};
export default class App extends Component<Props> {

  state = {
    suggestionsList: []
  }

  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();

    this.setState({
      suggestionsList: movies,
      categoryList: categories
    })
  }

  render() {
    return (
      <Home>
        <Header />
        <Player />
        <Text>Buscador</Text>
        <CategoryList list={this.state.categoryList} />
        <SuggestionsList list={this.state.suggestionsList} />
      </Home>
    );
  }
}

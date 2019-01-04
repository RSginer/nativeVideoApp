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
  View,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  Image
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/screens/components/header';
import SuggestionsList from './src/videos/containers/suggestions-list';
import API from './src/utils/api';
import CategoryList from './src/videos/containers/category-list';
import Player from './src/player/containers/player';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './Store';

type Props = {};
export default class App extends Component<Props> {

  state = {}

  async componentDidMount() {
    const suggestionList = await API.getSuggestion(10);

    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    });

    const categoryList = await API.getMovies();

    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            <SafeAreaView>
              <View style={styles.loadingContainer}>
                <ActivityIndicator color="#70B124" />
                <Image style={styles.imageLoader} source={require('./assets/logo.png')} />
              </View>
            </SafeAreaView>
          }
          persistor={persistor}>
          <Home>
            <Header />
            <Player />
            <CategoryList />
            <SuggestionsList />
          </Home>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    height: '88.3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLoader: {
    marginTop: 30
  }
})

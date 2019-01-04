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

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './Store';

import AppLayout from './src/AppLayout';

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            <SafeAreaView>
              <View style={styles.loadingContainer}>
                <Image style={styles.imageLoader} source={require('./assets/logo.png')} />
                <ActivityIndicator color="#70B124" />
              </View>
            </SafeAreaView>
          }
          persistor={persistor}>
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLoader: {
    marginBottom: 30,

  }
})

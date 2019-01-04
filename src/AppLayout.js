import React, { Component } from 'react';

import { connect } from 'react-redux';

import Home from './screens/containers/home';
import Header from './screens/components/header';
import SuggestionsList from './videos/containers/suggestions-list';
import API from './utils/api';
import CategoryList from './videos/containers/category-list';

import Movie from './screens/containers/movie';
import Search from './sections/containers/search';

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie
  }
}

class AppLayout extends Component {


  state = {}

  async componentDidMount() {
    const suggestionList = await API.getSuggestion(10);

    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    });

    const categoryList = await API.getMovies();

    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    });
  }

  render() {
    if (this.props.selectedMovie) {
      return <Movie />
    }

    return (
      <Home>
        <Header />
        <Search />
        <CategoryList />
        <SuggestionsList />
      </Home>
    )
  }
}

export default connect(mapStateToProps)(AppLayout);

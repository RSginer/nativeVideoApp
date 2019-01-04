import React, { Component } from 'react';

import MovieLayout from '../components/movie';
import Player from '../../player/containers/player';

import Header from '../components/header';
import Close from '../../sections/components/close';

import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie
  }
}

class Movie extends Component {

  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null
      }
    })
  }

  render() {
    return (
      <MovieLayout>
        <Header>
          <Close onPress={this.closeVideo} />
        </Header>
        <Player />
      </MovieLayout>
    )
  }
}

export default connect(mapStateToProps)(Movie);

import React, { Component } from 'react';

import MovieLayout from '../components/movie';
import Player from '../../player/containers/player';

import Header from '../components/header';
import Close from '../../sections/components/close';

import { connect } from 'react-redux';
import Details from '../../videos/components/details';

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie
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
        <Details {...this.props.movie} />
      </MovieLayout>
    )
  }
}

export default connect(mapStateToProps)(Movie);

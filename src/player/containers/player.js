import React, { Component } from 'react';

import {
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import Video from 'react-native-video';
import Layout from '../components/player-layout';

class Player extends Component {

  state = {
    loading: true,
  }

  onBuffer = ({ isBuffering }) => {
    this.setState({ loading: isBuffering })
  }

  onLoad = () => {
    this.setState({ loading: false })
  }

  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            paused={true}
            source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' }}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
          />
        }
        loader={
          <ActivityIndicator color='#70B124' />}
      >
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})

export default Player;

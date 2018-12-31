import React, { Component } from 'react';

import {
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import Video from 'react-native-video';
import Layout from '../components/player-layout';
import PlayPause from '../components/play-pause';
import ControlLayout from '../components/control-layout';
class Player extends Component {

  state = {
    loading: true,
    paused: false
  }

  onBuffer = ({ isBuffering }) => {
    this.setState({ loading: isBuffering })
  }

  onLoad = () => {
    this.setState({ loading: false })
  }

  playPause = () => {
    this.setState({
      paused: !this.state.paused
    })
  }

  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            paused={this.state.paused}
            source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' }}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
          />
        }
        loader={
          <ActivityIndicator color='#70B124' />
        }
        controls={
          <ControlLayout>
            <PlayPause paused={this.state.paused} onPress={this.playPause} />
            <Text>Progress bar</Text>
            <Text>Time left</Text>
            <Text>Full screen</Text>
          </ControlLayout>
        }
      />
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

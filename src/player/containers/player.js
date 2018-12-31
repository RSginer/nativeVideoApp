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
import ProgressBar from '../components/progress-bar';
import FullScreen from '../components/fullscreen';

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

  onFullScreen = () => {
    this.player.presentFullscreenPlayer();
  }

  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            ref={(ref) => {
              this.player = ref
            }}
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
            <ProgressBar />
            <FullScreen onFullScreen={this.onFullScreen} />
            <Text>0 /</Text>
            <Text>0</Text>
          </ ControlLayout>
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

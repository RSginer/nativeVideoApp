import React, { Component } from 'react';

import moment from 'moment';

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
    paused: false,
    videoDuration: 0,
    currentTime: 0
  }

  onBuffer = ({ isBuffering }) => {
    this.setState({ loading: isBuffering })
  }

  onLoad = (payload) => {
    this.setState({ loading: false, videoDuration: payload.duration })
  }

  playPause = () => {
    this.setState({
      paused: !this.state.paused
    })
  }

  onFullScreen = () => {
    this.player.presentFullscreenPlayer();
  }

  onProgress = (payload) => {
    this.setState({
      currentTime: payload.currentTime
    })
  }

  onChangeFinished = payload => {
    this.player.seek(payload)
    this.setState({ paused: false, loading: false })
  }

  onChangeStarted = payload => {
    this.setState({ paused: true, loading: true })
  }
  render() {
    let currentTime = moment(this.state.currentTime * 1000).format('mm:ss')
    let totalTime = moment(this.state.videoDuration * 1000).format('mm:ss')

    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            ref={(ref) => {
              this.player = ref
            }}
            onProgress={this.onProgress}
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
            <ProgressBar onChangeFinished={this.onChangeFinished} onChangeStarted={this.onChangeStarted} progress={this.state.currentTime} videoDuration={this.state.videoDuration} />
            <Text style={styles.progressTime}>{currentTime} / {totalTime}</Text>
            <FullScreen onFullScreen={this.onFullScreen} />
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
  },
  progressTime: {
    color: 'white',
    fontSize: 10,
    marginLeft: 5
  }
})

export default Player;

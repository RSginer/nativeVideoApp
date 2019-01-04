import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from 'react-native-slider';
function ProgressBar(props) {
  return (
    <View style={styles.progress}>
      <Slider
        maximumValue={props.videoDuration}
        minimumValue={0}
        onSlidingStart={props.onChangeStarted}
        onSlidingComplete={props.onChangeFinished}
        style={styles.slider}
        value={props.progress}
        step={0.01}
        trackStyle={styles.trackStyle}
        thumbStyle={styles.thumbStyle}
        maximumTrackTintColor="rgba(255, 255, 255, .40)"
        minimumTrackTintColor='#98ca3f'
        thumbTintColor='white'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  progress: {
    width: '56%',
  },
  thumbStyle: {
    width: 4,
    height: 30,
    borderRadius: 0,
    backgroundColor: 'white',
  },
  trackStyle: {
    height: 30,
    borderRadius: 0
  }
})

export default ProgressBar;
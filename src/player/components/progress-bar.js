import React from 'react';
import { View, StyleSheet, Slider } from 'react-native';

function ProgressBar(props) {
  return (
    <View style={styles.progress}>
      <Slider
        maximumValue={props.videoDuration}
        minimumValue={0}
        onValueChange={props.onChangeStarted}
        onSlidingComplete={props.onChangeFinished}
        style={styles.slider}
        value={props.progress}
        step={0.01}
        maximumTrackTintColor="rgba(255, 255, 255, .40)"
        minimumTrackTintColor='#98ca3f'
        thumbTintColor='white'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  progress: {
    width: '65%',
  },
  slider: {
  }
})

export default ProgressBar;
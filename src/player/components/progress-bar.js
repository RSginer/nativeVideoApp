import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from 'react-native-slider';
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
        trackImage={require('../../../assets/logo.png')}
        step={0.01}
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
    width: '65%',
  },
  thumbStyle: {
    width: 10,
    height: 10,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35,
  }
})

export default ProgressBar;
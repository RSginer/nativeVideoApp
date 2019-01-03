import React from 'react';

import {
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

function PlayPause(props) {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor="rgba(255,255,255,.3)"
      style={styles.container}
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5
      }}
    >
      {
        props.paused ? <Icon size={20} color="#98ca3f" name={
          Platform.OS === 'ios' ? 'ios-play' : 'md-play'
        } /> : <Icon size={20} color="#98ca3f" name={
          Platform.OS === 'ios' ? 'ios-pause' : 'md-pause'} />
      }
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderRadius: 4,
    borderColor: 'white',
  }
})

export default PlayPause;

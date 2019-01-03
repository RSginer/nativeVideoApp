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
        left: 10,
        top: 10,
        bottom: 10,
        right: 10
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
    paddingHorizontal: 7,
    height: 25,
    marginRight: 8,
    marginVertical: 5,
    borderRadius: 4,
    borderColor: 'white',
  }
})

export default PlayPause;

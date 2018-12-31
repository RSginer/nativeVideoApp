import React from 'react';

import {
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

function PlayPause(props) {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor="red"
      style={styles.container}
    >
      {
        props.paused ? <Text style={styles.buttom}>Play</Text> : <Text style={styles.buttom}>Pause</Text>
      }
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray'
  }
})

export default PlayPause;

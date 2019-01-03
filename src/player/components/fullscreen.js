import React from 'react';

import {
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

function FullScreen(props) {
  return (
    <TouchableHighlight
      onPress={props.onFullScreen}
      underlayColor="rgba(255,255,255,.3)"
      style={styles.container}
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5
      }}
    >
      <Icon color="#7FB15F" name="md-expand" size={20}></Icon>
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
    borderRadius: 10,
    borderColor: 'white',
  }
})

export default FullScreen;

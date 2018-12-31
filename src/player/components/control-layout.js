import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

function ControlLayout(props) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,.3)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center'
  }
});

export default ControlLayout;

import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  WebView,
  ScrollView
} from 'react-native';

// https://www.youtube.com/embed/0LHxvxdRnYc

const makeHTML = (id) => {
  return (`
  <style>
    .video {
      position: relative;
      padding-bottom: 56.25%;
    }
    iframe {
      position: absolute;
      left: 0;
      top: 0:
      right: 0;
      bottom: 0;
    }
  </style>
  <div class="video">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${id}" 
    frameborder="0" 
    allow="accelerometer; 
    autoplay; 
    encrypted-media; 
    gyroscope; 
    picture-in-picture" 
    allowfullscreen></iframe>
  </div>

  `)
}

function Details(props) {
  return (
    <View>
      <View style={styles.top}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <ScrollView style={styles.bottom}>
        <View style={styles.details}>
          <Image style={styles.cover} source={{ uri: props.medium_cover_image }} />
          <Text style={styles.description}>{props.description_full}</Text>
        </View>
        <View style={styles.trailer}>
          <WebView source={{ html: makeHTML(props.yt_trailer_code) }} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  trailer: {
    height: 200
  },
  details: {
    flexDirection: "row",
    marginBottom: 20
  },
  cover: {
    width: 125,
    height: 190
  },
  title: {
    color: "#44546b",
    fontSize: 18,
    fontWeight: "bold"
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
    padding: 20,
    backgroundColor: "white"
  },
  bottom: {
    padding: 20,
  },
  description: {
    fontSize: 15,
    textAlign: 'justify',
    lineHeight: 22.5,
    color: "#4c4c4c",
    marginLeft: 10,
    flex: 1
  }
})

export default Details;

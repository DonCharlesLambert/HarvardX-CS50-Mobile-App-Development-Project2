import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class Movie extends React.Component {
  style = StyleSheet.create({
    container: {
      width: '80%',
      aspectRatio: 4 / 1,
      margin: '1.5%',
      backgroundColor: '#ffffff',
      color: 'black',
      padding: 5,
      borderRadius: '15%',
      alignItems: 'center',
    },
    view: {
      flexDirection: 'row',
    },
    info: {
      marginLeft: '5%',
      flex: 1,
    },
    movieImage: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: '2%',
    },
    title: {
      fontWeight: 'bold',
    },
    text: {
      fontSize: 12,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: '50%',
    },
  });

  constructor() {
    super();
  }

  render() {
    return (
      <TouchableHighlight style={this.style.container}>
        <View style={this.style.view}>
          <View style={this.style.movieImage}>
            <Image
              style={this.style.image}
              source={{ uri: this.props.image }}
            />
          </View>
          <View style={this.style.info}>
            <Text style={this.style.title}>{this.props.movie}</Text>
            <Text style={this.style.text}>{this.props.description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

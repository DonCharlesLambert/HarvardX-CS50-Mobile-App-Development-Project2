import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  styles = StyleSheet.create({
    container: {
      backgroundColor: '#575b72',
      flex: 1,
    },
    poster: {
      position: 'absolute',
      top: '20%',
      left: '10%',
      height: '50%',
      aspectRatio: 1 / 2,
      borderRadius: '15%',
    },
    upperBG: {
      height: '50%',
      backgroundColor: '#fff',
    },
    info: {
      position: 'absolute',
      top: '72.5%',
      color: 'white',
      width: '100%',
      paddingLeft: '5%',
      paddingRight: '5%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoText: {
      color: 'white',
    },
    infoTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
    watch: {
      top: '67.5%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
    },
    button: {
      width: '40%',
      backgroundColor: 'white',
      height: 40,
      borderRadius: '15%',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      marginTop: 0,
    },
  });

  state = {
    movieData: {},
  };

  componentDidMount() {
    this.getData(this.props.route.params.movie);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.route.params.movie !== this.props.route.params.movie) {
      this.getData(this.props.route.params.movie);
    }
  }

  getData = async (movieTitle) => {
    let title = await movieTitle;
    let movieData = await this.props.route.params.getFunction(title);
    this.setState({ movieData: movieData });
  };

  render() {
    console.log(this.state.movieData);
    return (
      <View style={this.styles.container}>
        <View style={this.styles.upperBG}>
          <Image
            source={{
              uri:
                'https://www.avforums.com/styles/avf/editorial/block//8ed9e4b8b068397d72dda895c6bc5bc5_3x3.jpg',
            }}
            style={{ height: '100%', width: '100%' }}
          />
        </View>
        <Image
          source={{ uri: this.state.movieData.Poster }}
          style={this.styles.poster}
        />
        <View style={{ position: 'absolute', left: '52.5%', top: '52.5%' }}>
          <Text style={{ color: 'white', fontStyle: 'italic' }}>
            {this.state.movieData.Year}
            {'\n'}
            {this.state.movieData.Rated}
            {'\n'}
            {this.state.movieData.Runtime}
            {'\n'}
          </Text>
        </View>
        <View style={this.styles.info}>
          <Text style={this.styles.infoTitle}>
            {this.state.movieData.Title}
          </Text>
          <Text style={this.styles.infoText}>{this.state.movieData.Plot}</Text>
        </View>
        <View style={this.styles.watch}>
          <TouchableHighlight style={this.styles.button}>
            <Text style={{ fontWeight: 'bold', color: 'black' }}> Watch </Text>
          </TouchableHighlight>
          <TouchableHighlight style={this.styles.button}>
            <Text style={{ fontWeight: 'bold', color: 'black' }}> Read </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

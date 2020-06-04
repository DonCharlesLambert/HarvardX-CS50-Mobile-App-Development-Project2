import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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
      width: 150,
      borderRadius: '15%',
    },
    upperBG: {
      height: '50%',
      backgroundColor: '#fff',
    },
    info: {
      position: 'absolute',
      top: '75%',
      color: 'white',
      width: '100%',
      paddingLeft: '5%',
      paddingRight: '5%',
      alignItems: 'center',
    }
  });

  state = {
    movieData: {},
  };

  componentDidMount() {
    this.getData(this.props.route.params.movie);
  }

  getData = async (movieTitle) => {
    let title = await movieTitle;
    let movieData = await this.props.route.params.getFunction(title);
    this.setState({ movieData: movieData });
  };

  render() {
    return (
      <View style={this.styles.container}>
        <View style={this.styles.upperBG}>
          <Image source={{
            uri:
              'https://www.avforums.com/styles/avf/editorial/block//8ed9e4b8b068397d72dda895c6bc5bc5_3x3.jpg'
          }}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <Image
          source={{ uri: this.state.movieData.Poster }}
          style={this.styles.poster}
        />
        <View style={this.styles.info}>
          <Text>{this.state.movieData.Plot}</Text>
        </View>
      </View>
    );
  }
}

import React from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView, FlatList, Image, Text, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants'
import Movie from './movie'

export default class MovieList extends React.Component{
  constructor(props){
    super(props)
  }

  style = StyleSheet.create({
    container:{
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      textAlign: "center",
      alignItems: "center",
      backgroundColor: "#575b72",
    },
    scroll:{
      width: "100%",
      textAlign: "center",
      alignItems: "center",
    }
  })

  state = {
    movieData: "my money blue",
  }

  createMovieComponents(movieObject){
    return(
        <Movie
            movie={movieObject.item.Title}
            description={movieObject.item.Year}
            image={movieObject.item.Poster}
        />
      )
  }

  componentDidMount(){
    this.getData()
  }

  getData = async () => {
    let movieData = await this.props.route.params.movieData
    //movieData = await movieData.map((object, i) => object.key = i.toString())
    await this.setState({movieData: movieData}, console.log(this.state.movieData))
  }

  render(){
    return(
        <View style={this.style.container}>
          <FlatList
            data={this.state.movieData}
            renderItem={(movieObject) => this.createMovieComponents(movieObject)}
            contentContainerStyle={this.style.scroll}
            />
        </View>
    )
  }
}
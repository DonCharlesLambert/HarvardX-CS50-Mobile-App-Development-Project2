import React from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView, FlatList, Image, Text, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants'
import {search} from './mockData'

// Colour Theme
// #575b72
// white
// 827397
// d8b9c3

export default function App() {
  return (
      <MovieList/>
  );
}

class MovieList extends React.Component{
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

  createMovieComponents(movieObject){
    return(
        <Movie
            movie={movieObject.item.Title}
            description={movieObject.item.Year}
            image={movieObject.item.Poster}
        />
      )
  }

  addKeys(movieObjects){
    movieObjects.map((object, i) => object.key = i.toString())
  }

  render(){
    this.addKeys(search.Search)
    return(
        <View style={this.style.container}>
          <FlatList
            data={search.Search}
            renderItem={(movieObject) => this.createMovieComponents(movieObject)}
            contentContainerStyle={this.style.scroll}
            />
        </View>
    )
  }
}

class Movie extends React.Component{
  style=StyleSheet.create({
    container:{
      width: "80%",
      aspectRatio: 4/1,
      margin: "1.5%",
      backgroundColor: "#69c7ad",
      borderColor: "#d8b9c3",
      padding: 5,
    },
    view:{
      flexDirection: "row",
    },
    info:{
      marginLeft: "5%",
      flex: 1,
    },
    movieImage:{
      justifyContent: "center"
    },
    text:{
      fontSize: 12,
      color: "white",
    },
    image:{
      width: 50,
      height: 50,
      borderWidth: 2,
      borderColor: "#4cabb1",
    }
  })

  constructor() {
    super();
  }

  render(){
    return(
       <TouchableHighlight style={this.style.container}>
         <View style={this.style.view}>
           <View style={this.style.movieImage}>
             <Image style={this.style.image} source={{uri: this.props.image}}/>
           </View>
           <View style={this.style.info}>
             <Text style={this.style.text}>{this.props.movie}</Text>
             <Text style={this.style.text}>{this.props.description}</Text>
           </View>
         </View>
       </TouchableHighlight>
    )
  }
}

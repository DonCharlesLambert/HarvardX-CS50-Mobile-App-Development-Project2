import React from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import Constants from 'expo-constants'
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Button, Text, Avatar, Card } from 'react-native-ui-kitten'
import {search} from './mockData'

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <MovieList/>
    </ApplicationProvider>
  );
}

class MovieList extends React.Component{
  style = StyleSheet.create({
    container:{
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      textAlign: "center",
      alignItems: "center",
      backgroundColor: "#363062",
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
        <Layout style={this.style.container}>
          <FlatList
            data={search.Search}
            renderItem={(movieObject) => this.createMovieComponents(movieObject)}
            contentContainerStyle={this.style.scroll}
            />
        </Layout>
    )
  }
}

class Movie extends React.Component{
  style=StyleSheet.create({
    container:{
      width: "80%",
      aspectRatio: 4/1,
      alignContent: "center",
      justifyContent: "center",
      margin: "1%",
      backgroundColor: "#827397",
      borderColor: "#d8b9c3",
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
      color: "#d8b9c3",
    }
  })

  constructor() {
    super();
  }

  render(){
    return(
       <Card style={this.style.container}>
         <View style={this.style.view}>
           <View style={this.style.movieImage}>
             <Avatar size="large" source={{uri: this.props.image}}/>
           </View>
           <View style={this.style.info}>
             <Text style={this.style.text}>{this.props.movie}</Text>
             <Text style={this.style.text}>{this.props.description}</Text>
           </View>
         </View>
       </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

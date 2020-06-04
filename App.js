import 'react-native-gesture-handler';
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
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieList from './components/movieList';
import Movie from './components/movie';
import { searchMovies, getMovie } from './scripts/movieData';

// Colour Theme
// #575b72
// white
// 827397
// d8b9c3

const tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen
          name="Finder"
          component={MovieList}
          initialParams={{ movieData: searchMovies('Spider-Man'), searchFunction: searchMovies }}
        />
        <tab.Screen
          name="View"
          component={Movie}
          initialParams={{
            movie: 'Spider-Man',
            getFunction: getMovie,
          }}
        />
        <tab.Screen name="Settings" />
      </tab.Navigator>
    </NavigationContainer>
  );
}

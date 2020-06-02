import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView, FlatList, Image, Text, TouchableHighlight } from 'react-native'
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MovieList from './components/movieList'
import { searchMovies } from './scripts/movieData'

// Colour Theme
// #575b72
// white
// 827397
// d8b9c3

const tab = createBottomTabNavigator()
export default function App() {
  return (
      <NavigationContainer>
        <tab.Navigator>
          <tab.Screen name="Finder" component={MovieList} initialParams={{movieData: searchMovies("Spider-Man")}}/>
          <tab.Screen name="View"/>
          <tab.Screen name="Settings"/>
        </tab.Navigator>
      </NavigationContainer>
  );
}
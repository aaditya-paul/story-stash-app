import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Write from './write'
import { Ionicons, Feather } from '@expo/vector-icons';
import Read from './read';

var tab = createBottomTabNavigator({
  write:{
    screen:Write,
    navigationOptions:{
      tabBarLabel:"WRITE STORIES",
      tabBarIcon:({tintColor})=>(
        <Ionicons name="pencil-outline" size={24} color={tintColor} />      
        )
      }
    },
    
    read:{
      screen:Read,
      navigationOptions:{
        tabBarLabel:"READ STORIES",
        tabBarIcon:({tintColor})=>(
        <Feather name="book-open" size={24} color={tintColor} />
    )
    }
  },
},
{
  initialRouteName:"write",
  tabBarOptions:{
    activeTintColor:"yellow",
    inactiveTintColor:"#6CCC9C",
    style:{height:70,padding:10,backgroundColor:"#120D5B"}
  }
}
)

const App = createAppContainer(tab)

export default class BottomTab extends React.Component {

    render(){

        return (
            <App />
        );

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

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTab from './sources/bottomTabNavigator';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import Read from './sources/read';
import Login from './sources/login';
import SignUp from './sources/signUp';
import Loading from './sources/loading';

var switchNav = createSwitchNavigator({
  loading:Loading,
  login:Login,
  signUp:SignUp,
  bottomTab:BottomTab,
})

var A = createAppContainer(switchNav)

export default class App extends React.Component{
  render(){

    return (
       <A />
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
})

import React, { useState, useEffect,Component} from 'react';
import { Button, Image, View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import db from "../config"

var uidV = ""
var uids = ""

export default class Loading extends Component  {

constructor(){
  super();
  this.state={
    uidD:"",
  }
}
  
componentDidMount(){
    this.checkIfUserLoggedIn()
    // console.log(this.state.Sno)
}

checkIfUserLoggedIn = async() => {
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          uids = user.uid
          uids.toString()
            module.exports = uids
          this.props.navigation.navigate("bottomTab")

        }else{
            this.props.navigation.navigate("login")
        }
    })
}

render(){

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:"#35485f"}}>
     <ActivityIndicator size="large" color="red" />

    </View>
  );
}
}


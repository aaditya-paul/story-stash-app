import {View,TouchableOpacity,Text,StyleSheet,ActivityIndicator,TextInput,Image,Dimensions,ScrollView,Alert} from 'react-native';
import React,{Component} from 'react';
import firebase from 'firebase';
import db from "../config"
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const {width,height} = Dimensions.get("window")

export default class LogOut extends React.Component {


    logOut = () => {
        firebase.auth().signOut()
    }

    render(){
  
      return (
          <View style={{alignSelf:'center',justifyContent:'center'}}>
              <TouchableOpacity  style={{textAlign:'center',margin:10}} onPress={()=>{Alert.alert("CONFIRM LOGOUT","ARE YOU SURE FOR LOOGING OUT ?",[{text:"Yes",onPress:()=>{this.logOut()}},{text:"No"}])}}><Text><AntDesign  name="logout" size={40} color="white" /></Text></TouchableOpacity>
          </View>

      )
  
    }
  
  }


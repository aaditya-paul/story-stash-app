import {View,TouchableOpacity,Text,StyleSheet,ActivityIndicator,TextInput,Image,Dimensions,ScrollView,Alert,Clipboard, ToastAndroid} from 'react-native';
import React,{Component} from 'react';
import firebase from 'firebase';
import db from "../config"
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const {width,height} = Dimensions.get("window")

export default class ShowUID extends React.Component {


    show=()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                var uid = user.uid
                var uidS = uid.toString()
                Alert.alert("USER IDENTIFICATION DETAIL",`YOUR UID IS : 
                ` + uid,[{text:"OK, THANKS"},{text:"COPY TO CLIPBOARD",onPress:()=>{Clipboard.setString(uidS);ToastAndroid.show("COPIED TO CLIPBOARD !",ToastAndroid.SHORT)}}])
            }
        })
    }

    render(){
  
      return (
          <View style={{alignSelf:'center',justifyContent:'center'}}>
              <TouchableOpacity  style={{textAlign:'center',margin:10}} onPress={()=>{this.show()}} ><Text><FontAwesome name="eye" size={40} color="white" /></Text></TouchableOpacity>
          </View>

      )
  
    }
  
  }


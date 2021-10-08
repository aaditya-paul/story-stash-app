import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,ScrollView,KeyboardAvoidingView,FlatList,ToastAndroid } from 'react-native';
import {Header} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import LogOut from './logOut';
import ShowUID from './showUid';
import config from '../config';
import db from '../config'

export default class Write extends React.Component{

  constructor(){
    super()
    this.state={
      title:"",
      author:"",
      story:"",
    }
  }

  buttonOnPress=()=>{

    if(this.state.author == "" && this.state.story == "" && this.state.title == ""){
      alert("FILL ALL THE FIELDS")
    }else{
      db.collection("Story").doc(this.state.title + " by " + this.state.author).set({"Author":this.state.author,"Title":this.state.title,"Story":this.state.story})
      ToastAndroid.show("SUBMITTED AND UPLOADED TO THE CLOUD",ToastAndroid.SHORT)
    }

  }

  render(){

    return (
      <View style={{height:"100%",backgroundColor:"#4e81ce"}}>
        {/* <ScrollView> */}
        <KeyboardAvoidingView   behavior = "padding" >
        <Header  rightComponent={<ShowUID/>} leftComponent={<LogOut/>} centerComponent={{text:"WRITE STORIES",style:{fontSize:25,fontWeight:"700",color:"white",padding:"5%",}}} backgroundColor="#120D5B" />
        <TextInput  onChangeText={(d)=>{this.setState({title:d})}} placeholder="ENTER THE TITLE OF YOUR STORY" placeholderTextColor="#4d4b77" style={{padding:"5%",marginTop:20,borderColor:"black",borderWidth:4,margin:"2%",borderRadius:15,backgroundColor:"#9391bf",color:"yellow",fontWeight:"bold",fontSize:20,shadowColor:"yellow",}} />
        <TextInput onChangeText={(d)=>{this.setState({author:d})}} placeholder="The Author of the story" placeholderTextColor="#4d4b77" style={{padding:"5%",marginTop:20,borderColor:"black",borderWidth:4,margin:"2%",borderRadius:15,backgroundColor:"#9391bf",color:"yellow",fontWeight:"bold",fontSize:20,shadowColor:"yellow",}} />
        <TextInput onChangeText={(d)=>{this.setState({story:d})}} multiline={true} placeholder="WRITE YOUR IMAGINATION HERE !" placeholderTextColor="#4d4b77" style={{textAlign:'left',marginBottom:25,padding:"5%",marginTop:20,borderColor:"black",borderWidth:4,margin:"2%",borderRadius:15,backgroundColor:"#9391bf",color:"yellow",fontWeight:"bold",fontSize:20,shadowColor:"yellow",maxHeight:350,minHeight:150}}  />
        <TouchableOpacity onPress={this.buttonOnPress} style={{borderWidth:3,borderColor:"#9E2929",backgroundColor:"orange",padding:15,borderRadius:45,width:"55%",alignItems:'center',alignSelf:'center'}}><Ionicons style={{fontWeight:"bold"}} name="cloud-upload-outline"  size={40} color="green" /></TouchableOpacity>
        </KeyboardAvoidingView>
        {/* </ScrollView> */}
      </View>
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

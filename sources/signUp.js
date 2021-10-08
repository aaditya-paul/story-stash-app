import {View,TouchableOpacity,Text,StyleSheet,ActivityIndicator,TextInput,Image,Dimensions,ScrollView} from 'react-native';
import React,{Component} from 'react';
import firebase from 'firebase';
import db from "../config"

const {width,height} = Dimensions.get("window")

export default class SignUp extends React.Component {

    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            errors:""
        }
    }

    signUp = () => {
        const {email,password} = this.state

        firebase.auth().createUserWithEmailAndPassword(email,password).then(async()=>{
            this.props.navigation.navigate("bottomTab")
        }).catch((e)=>{
            this.setState({errors:"Authentication Failed:" + e})
          })
    }

    render(){
  
      return (
          <View style = {styles.container}>
              <ScrollView>
                  
              <Image source={require("../assets/assets/searchingbook.png")}  style={{width:width-250,height:width-250,margin:50,alignSelf:'center',marginTop:width/10,marginBottom:30}} />
              <TextInput  keyboardType="email-address" onChangeText={(value)=>{this.setState({email:value})}} style={{color:"lime",backgroundColor:"#4CC1BE",margin:"10%",borderRadius:20,padding:20,marginTop:"2%",fontWeight:'bold',fontSize:20}} placeholder="EMAIL" />
              <TextInput  keyboardType="visible-password" keyboardAppearance="light" onChangeText={(value)=>{this.setState({password:value})}} style={{color:"lime",backgroundColor:"#4CC1BE",margin:"10%",borderRadius:20,padding:20,marginTop:"2%",fontWeight:'bold',fontSize:20,marginBottom:"10%"}} placeholder="PASSWORD" />
              <TouchableOpacity style={{alignSelf:'center',backgroundColor:"#FFC0CB",padding:"5%",paddingLeft:"17%",paddingRight:"17%",borderRadius:50,borderColor:"#c66172",borderWidth:5}} onPress = {this.signUp}><Text style={{fontWeight:'bold',color:"maroon",fontSize:20}}>SIGN UP</Text></TouchableOpacity>
              <TouchableOpacity style={{marginTop:10,alignSelf:'center',padding:5,paddingLeft:100,paddingRight:100}} onPress = {()=>{this.props.navigation.navigate("login")}}><Text style={{fontWeight:'bold',color:"maroon",fontSize:20}}>LOGIN</Text></TouchableOpacity>
              <Text style={styles.error}>{this.state.errors}</Text>
              
              </ScrollView>
          </View>

      )
  
    }
  
  }
  
  const styles = StyleSheet.create({
    container: {
        backgroundColor:"#f2d47b",
        height:"100%"

    },
    error:{
        color:"red",
        fontWeight:"bold",
        fontSize:10,
        textAlign:'center',
        marginTop:15
      },
  });
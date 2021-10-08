import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,ScrollView,KeyboardAvoidingView,FlatList,ToastAndroid } from 'react-native';
import {Header,SearchBar} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import LogOut from './logOut';
import ShowUID from './showUid';
import config from '../config';
import db from '../config'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default class Read extends React.Component{

  constructor(){
    super();
    this.state={
      searchText:"",
      lastVisibleResult:null,
      allResults:[]
    }
  }

  componentDidMount = async() => {
    const query = await db.collection("Story").limit(10).get()
    query.docs.map(doc=>{
      this.setState({lastVisibleResult:doc})
    })
  }

  fetchMoreStories = async() =>{
    const query = await db.collection("Story").startAfter(this.state.lastVisibleResult).limit(10).get()
      query.docs.map((doc)=>{
        this.setState({lastVisibleResult:doc,allResults:[...this.state.allResults,doc.data()]})
      })
  }
  

  render(){

    return (
      <View style={{height:"100%",backgroundColor:"#4e81ce"}}>
        <Header  rightComponent={<ShowUID/>} leftComponent={<LogOut/>} centerComponent={{text:"WRITE STORIES",style:{fontSize:25,fontWeight:"700",color:"white",padding:"5%",}}} backgroundColor="#120D5B" />
        <SearchBar  round={true} placeholder="Search Here ..." onChangeText={(text)=>{this.setState({searchText:text})}} value={this.state.searchText} />
        <FlatList 
        data={DATA}
        renderItem = {(item)=>(
          <View>
            <Text>
            {"TITLE : " + item.title}
            </Text>
          </View>
        )}

        keyExtractor={(item,index)=>index.toString()}
        // onEndReached={this.fetchMoreStories()}
        // onEndReachedThreshold={1}
        />
        <StatusBar style="auto" />
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

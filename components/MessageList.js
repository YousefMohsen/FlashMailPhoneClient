import React from 'react';
import { ScrollView, StyleSheet, Text, FlatList, View, Button, TextInput, Platform, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import {Header }  from 'native-base';
import RequestHandler from '../data/RequestHandler'
import Colors from '../styles/Colors'
import MessageItem from './MessageItem'

export default class MessageList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        messageList: [],
        refreshing: false
    
    }

    this.handleRefresh = this.handleRefresh.bind(this);
    
}

  componentDidMount() {
      this.setState({messageList: this.props.messageList})
  }
  handleRefresh(){
    this.setState({refreshing: true},
    async ()=>{
    let messageList = await this.props.onRefresh();   
    this.setState({refreshing: false, messageList: messageList})})
  
  }
  

  render() {


    return (
      <View style={styles.container}>
       
      <Header>
      <Text style={styles.header}>Inbox</Text>
      </Header>
      <FlatList
      data={this.state.messageList}
      renderItem={({item}) => <MessageItem message={item} onPress={this.props.onItemPress} />}
      keyExtractor={(item, index)=>index}
      style={{flex:1}}
      refreshing={this.state.refreshing}
      onRefresh={this.handleRefresh}
    />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    

  },
  textFieldShort: {
    borderBottomWidth: 1,
    borderColor: Colors.secondaryColor,
    padding: 5,
    marginBottom: 2,
    color: Colors.secondaryColor,
    fontSize: 18,
    width: '80%'



  },
  header: {
    fontSize: 18,
    color: Colors.secondaryColor,
    paddingTop:20

    
    
  },

  btnWrapper:{
    marginRight:40,
    marginLeft:40,
    marginTop:30,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor: Colors.secondaryColor,
    borderRadius:10,
    borderWidth: 1,
    width: '70%'
    
  }
 




});


/*
      <TaskList/>
*/
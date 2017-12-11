import React from 'react';
import { ScrollView, StyleSheet, FlatList, View, Button, Text, TextInput, Platform, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
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
      this.setState({messageList: this.props.mesgList})
  }
  handleRefresh(){
    this.setState({refreshing: true},
    async ()=>{
    await this.props.updateList();   
    this.setState({refreshing: false})})
  
  }
  

  render() {


    return (
      <View style={styles.container}>
       

      <FlatList
      data={this.state.messageList}
      renderItem={({item}) => <MessageItem message={item} onPress={this.props.onItemPress} />}
      keyExtractor={(item, index)=>index}
     // refreshing={this.state.refreshing}
      //onRefresh={this.handleRefresh}
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
    padding: 2,
    paddingTop: 20
    

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
  loginButton: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',

    
    
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
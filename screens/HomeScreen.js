import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { WebBrowser } from 'expo';
import Colors from '../styles/Colors'
import MessageContent from '../components/MessageContent'
import MessageList from '../components/MessageList'
import RequestHandler from '../data/RequestHandler'

/**
 * One of four screens. 
 * Used in the MaintabNavigator.js
 */
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      currentMessage: null,
    }

    this.setCurrentMessage = this.setCurrentMessage.bind(this);
    this.resetCurrentMessage = this.resetCurrentMessage.bind(this);
    this.reFetch = this.reFetch.bind(this);

  }


  /**
   * gets user object from cache and fetches messages for that user from the server
   * updates state when result is ready
   */
 async componentDidMount(){
  let user = JSON.parse( await AsyncStorage.getItem('@UserStore:info'));
  let  messageList = await  RequestHandler.fetchMessages(user.mail,0)//TODO: set timeStamp
  this.setState({messageList: messageList})
  }

  /**
   * Refetches messageList.
   * 
   */
  reFetch = async () => {
    let user = JSON.parse( await AsyncStorage.getItem('@UserStore:info'));
    let  messageList = await  RequestHandler.fetchMessages(user.mail,0);//TODO: set timeStamp
    return messageList;
  }
  
  /**
   * updates message object ins state
   * @param {Message} message - message object
   */
  setCurrentMessage(message) {
    this.setState({
      currentMessage: message
    })
  }

/**
 * Sets message object to null in state
 * Called when user tabs back button inside MessageContent.js 
 */
  resetCurrentMessage() {
    this.setState({
      currentMessage: null
    })
  }

  render() {
    if(this.state.currentMessage){
    return (
        <MessageContent message={this.state.currentMessage} goBack={this.resetCurrentMessage} />
    ); 
    }

    if(this.state.messageList.length>0){
      return (
          <MessageList messageList={this.state.messageList} onItemPress={this.setCurrentMessage} onRefresh={this.reFetch}/>
      );
      }

      return (
        <View style={styles.container}>
        <ActivityIndicator size='large'/>
        </View>
  
      );
      
 
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center', 
    alignItems: 'center' 
  },

});




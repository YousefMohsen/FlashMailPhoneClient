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
    this._updateList = this._updateList.bind(this);

  }

 async componentDidMount(){

  let user = JSON.parse( await AsyncStorage.getItem('@UserStore:info'));
  let  messageList = await  RequestHandler.fetchMessages(user.mail,0)//TODO: set timeStamp
  this.setState({messageList: messageList})
  }

  _updateList = async () => {
    console.log("on refresh")
    let user = JSON.parse( await AsyncStorage.getItem('@UserStore:info'));
    let  messageList = await  RequestHandler.fetchMessages(user.mail,0);//TODO: set timeStamp
    return messageList;
  }
  setCurrentMessage(message) {

    this.setState({
      currentMessage: message
    })

  }

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
          <MessageList messageList={this.state.messageList} onItemPress={this.setCurrentMessage} onRefresh={this._updateList}/>
  
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




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
      isLoading: false,
      error: null
    }

    this.setCurrentMessage = this.setCurrentMessage.bind(this);
    this.resetCurrentMessage = this.resetCurrentMessage.bind(this);
    this._updateList = this._updateList.bind(this);

  }

 async componentDidMount(){

  const user = JSON.parse( await AsyncStorage.getItem('@UserStore:info'));
  const messageList = await  RequestHandler.fetchMessages(user.mail,0)//TODO: set timeStamp
  this.setState({messageList})
  }

  _updateList = async () => {
    console.log("in refetch")
    return await this.props.allTasksQuery.refetch();
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
          <MessageList mesgList={this.state.messageList} onItemPress={this.setCurrentMessage}/>
  
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



const mesgList = require('./deleteME.json')
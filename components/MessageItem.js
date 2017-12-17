import React from 'react';
import { ScrollView, StyleSheet, View, Button, TextInput, Platform, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import RequestHandler from '../data/RequestHandler'
import Colors from '../styles/Colors'
import { Container, Header, Content, List, ListItem, Item, Left, Body, Right, Thumbnail, Text } from 'native-base';
import Moment from 'moment';


/**
 * UI component that shows some af the message content. 
 * Used in the FlatList inside MessageList.js
 */

export default class MessageItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  /**
   * saves a message object in the state of the HomeScreen
   * @param {Message } message - Message object that the user tabbed
   */
  handlePress(message) {
    this.props.onPress(message)
  }


  /**
   * Formats an date object to a human readable format
   * @param {Date} date 
   */
  formatDate(date) {
    return Moment(date).format('Do MMMM YYYY') + '\n'
  }



  render() {
    let message = this.props.message;
    return (
      <View style={styles.container} >

        <ListItem avatar onPress={() => this.handlePress(message)} >
          <Left>
            <Thumbnail source={{ uri: message.sender.imgUrl }} />
          </Left>
          <Body>
            <Text>{message.sender.name}</Text>
            <Text note numberOfLines={3}>{message.msg}</Text>
          </Body>
          <Right>
            <Text note>{this.formatDate(message.dateSent)}</Text>
          </Right>
        </ListItem>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    paddingTop: 15
  },
  listItem: {
    backgroundColor: 'white',
    flex: 1,
    marginBottom: 2,
    padding: 2,
    paddingTop: 5,
    paddingBottom: 5



  },





});

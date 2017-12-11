import React from 'react';
import { ScrollView, StyleSheet, View, Button, TextInput, Platform, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import RequestHandler from '../data/RequestHandler'
import Colors from '../styles/Colors'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class MessageItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {


    }

  }

  handlePress(message){
    
    console.log("taskitem.handlePRess()",message)
      this.props.onPress(message)
    }
    

    formatDate(date){
        return  date.slice(3,10)+"  "+date.slice(11,16);
    }
    sliceMessage(message){
        return message.slice(0,35)+"..."
    }


  render() {
      let message = this.props.message;
    return (
       <View style={styles.container} >

          <ListItem avatar style={styles.listItem}  onPress={()=>this.handlePress(message)}>
            <Left>
              <Thumbnail source={{ uri: message.sender.imgUrl }} />
            </Left>
            <Body>
              <Text>{message.sender.name}</Text>
              <Text note numberOfLines={2}>{this.sliceMessage(message.msg)}</Text>
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
    justifyContent: 'center', 
    alignItems: 'center' 

  },
  listItem: {

    width: '100%'



  },





});


/*
      <TaskList/>
*/
import React from 'react';
import { View, Dimensions, AsyncStorage, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

import RequestHandler from '../data/RequestHandler'
import Colors from '../styles/Colors'

export default class MessageContent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {


    }

  }

  componentDidMount() {
  }

  formatDate(date){
    return  date.slice(3,10)+"  "+date.slice(11,16);
}



  render() {
let message = this.props.message;
console.log("from message content",message)

    return (
     
      <Container >
      <Header>
      <Left>
      <Button iconLeft light onPress={()=>this.props.goBack()}>
      <Icon name='arrow-back' />
      <Text>Back</Text>

    </Button>
    </Left>
      </Header>
      <Content >
        <Card >
   
          <CardItem  >
            <Body >
            <Text style={styles.title}>{message.title}</Text>
              <Text style={styles.messageContent}>
                 {message.msg}
              </Text>
             
            </Body>
          </CardItem>

          <CardItem>
          <Left>
            <Thumbnail source={{uri: message.sender.imgUrl}} />
            <Body>
              <Text >{message.sender.name}</Text>
              
              <Text note>{this.formatDate(message.dateSent)}</Text>
    
            </Body>
          </Left>
        </CardItem>

        </Card>
      </Content>
    </Container>         
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,

  },
  messageContent: {
    padding: 5,
    paddingBottom:2,
    color: Colors.secondaryColor,
    fontSize: 18,
    

  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 25,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderColor: Colors.primaryColor,
    color: Colors.focusedColor,
    
    
  },






});



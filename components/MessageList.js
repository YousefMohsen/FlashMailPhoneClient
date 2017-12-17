import React from 'react';
import { ScrollView, StyleSheet, Text, FlatList, View, Button, TextInput, Platform, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import { Container, Title, Header, Content, List, Body } from 'native-base';
import RequestHandler from '../data/RequestHandler'
import Colors from '../styles/Colors'
import MessageItem from './MessageItem'


/**
 * UI component that shows a list of all recived messages
 * Used in HomeScreen.js
 */
export default class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      refreshing: false
    }

    this.handleRefresh = this.handleRefresh.bind(this);

  }

  /**
   * Set messageList recived from parent component in state
   */
  componentDidMount() {
    this.setState({ messageList: this.props.messageList })
  }
  /**
   * Called when user pulls the FlatList down
   * calls refetchs method from parent component and updates state with the new data
   */
  handleRefresh = async () => {
    this.setState({ refreshing: true })
    let messageList = await this.props.onRefresh();

    this.setState({ refreshing: false, messageList: messageList })

  }


  render() {


    return (
      <View style={styles.container}>
        <Header style={{ backgroundColor: Colors.grey, paddingBottom: 20 }}>

          <Body>
            <Title style={styles.header}>Inbox</Title>
          </Body>
        </Header>
        <FlatList
          data={this.state.messageList}
          renderItem={({ item }) => <MessageItem message={item} onPress={this.props.onItemPress} />}
          keyExtractor={(item, index) => index}
          style={{ flex: 1 }}
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
    backgroundColor: 'white',
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
    fontSize: 25,
    color: Colors.secondaryColor,
    paddingTop: 20,



  },

  btnWrapper: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 10,
    borderWidth: 1,
    width: '70%'

  }





});



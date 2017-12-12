import React from 'react';
import { ScrollView, StyleSheet, View, TextInput, Platform, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import { Container, Header, Content, Button, Icon ,Text } from 'native-base';

import { ExpoLinksView } from '@expo/samples';
import RequestHandler from '../data/RequestHandler'
import Colors from '../styles/Colors'

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      mail: "thiago@mail.dk",

    }
    this._saveUserInfoLocally = this._saveUserInfoLocally.bind(this);
    this._handleSignIn = this._handleSignIn.bind(this);
  }

  componentDidMount() {
   // setTimeout(this._handleSignIn, 1000)//TODO: deleteME
  }

  _handleMailChange(input) {


    this.setState({ mail: input });

  }

  _handleSignIn = async() =>{
 
 const  mail  = this.state.mail;
 try{
    let user = await  RequestHandler.handleSignIn(mail);
    this._saveUserInfoLocally(user);
//show content if server comunication is made succefully
    if(user){this.props.showAppContent();} 
    else{throw error;}
    console.log("user",user)
    
 }catch(er){
     alert("Wrong email")
console.log(er)

 }


  }


  _saveUserInfoLocally = async (user) => {
    await AsyncStorage.setItem('@UserStore:info', JSON.stringify(user));

  }



  render() {
    return (
      <View style={styles.container}>



        <TextInput //mail
          onChangeText={this._handleMailChange.bind(this)}
          placeholder="Indtast din email"
          value={this.state.mail}
          style={styles.textFieldShort} />

          <View style={styles.btnWrapper} >
          
          <Button iconLeft full style={{backgroundColor:Colors.secondaryColor}} onPress={this._handleSignIn}>
          <Icon name='log-out' />
          <Text>Log in</Text>
        </Button>
        </View>
        

     

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: Colors.secondaryColor,
    width: '70%'
    
  }
 




});


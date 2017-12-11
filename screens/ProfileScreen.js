import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ScrollView, StyleSheet, View, Button, Text, TextInput, Platform, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import Colors from '../styles/Colors'

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    header: null
  };


  constructor(props){
    super(props);
    this.state ={
      userDetails:{},
    }
    this._getUserDetails = this._getUserDetails.bind(this);
    
    }
    componentDidMount(){
      this._getUserDetails();
      
    }  


    _getUserDetails= async()=>  {
    user = JSON.parse( await AsyncStorage.getItem('@UserStore:info'));
    this.setState({userDetails:user})

  }

  render() {
    let userDetails = this.state.userDetails;
    if(userDetails){
      return(
        <View style={styles.container}>
        <Text>{userDetails.name}</Text>
        </View>
      )
    }
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.primaryColor,
  },

});

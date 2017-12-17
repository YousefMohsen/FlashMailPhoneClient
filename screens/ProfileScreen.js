import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ScrollView, StyleSheet, View, Button, Text, TextInput, Platform, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import Colors from '../styles/Colors'
import StudentInfo from '../components/StudentInfo'

/**
 * One of four screens. 
 * Used in the MaintabNavigator.js
 */
export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    header: null
  };


  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
    }
    this._getUserDetails = this._getUserDetails.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }
  componentDidMount() {
    this._getUserDetails();
  }

  /**
   * retrives user onject from cache and saves it in state
   */
  _getUserDetails = async () => {
    user = JSON.parse(await AsyncStorage.getItem('@UserStore:info'));
    this.setState({ userDetails: user })

  }
  /**
   * Handles sign out
   * Clears cache and navigates to LoginScreen.js
   */
  handleSignOut() {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }


  render() {
    let userDetails = this.state.userDetails;
    if (userDetails) {
      return (
        <View style={styles.container}>
          <StudentInfo user={userDetails} handleSignOut={this.handleSignOut} />
        </View>
      )
    }
    this.handleSignOut();// if no user found => sign out
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },

});

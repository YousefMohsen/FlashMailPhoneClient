import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button } from 'react-native';
import LoginForm from '../components/LoginForm';
import { ExpoLinksView } from '@expo/samples';

/**
 * 
 * One of four screens. 
 * Used in the MaintabNavigator.js
 */
export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }
    this.showAppContent = this.showAppContent.bind(this)
    this.showLoading = this.showLoading.bind(this);
  }
  /**
   * updates isLoadin in state
   */
  showLoading() {
    let newValue = !this.state.isLoading;
    this.setState({ isLoading: newValue })
  }
  /**
   * Navigates to maintaabnavigator, where HomeScreen.js is the index screen
   */
  showAppContent() {
    this.props.navigation.navigate('Main');
  }
  render() {
    return (
      <View style={styles.container}>
        <LoginForm showAppContent={this.showAppContent} showLoading={this.showLoading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});

import React from 'react';
import { ScrollView, StyleSheet, View,Text, Button } from 'react-native';
import LoginForm from '../components/LoginForm';
import { ExpoLinksView } from '@expo/samples';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };

  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
    }


    this.showAppContent = this.showAppContent.bind(this)
    this.showLoading = this.showLoading.bind(this);
  }


  showLoading(){
    let newValue = !this.state.isLoading;
  this.setState({isLoading: newValue})
  }
  showAppContent(){
    console.log("in show app content")
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

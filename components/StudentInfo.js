import React from 'react';
import { ScrollView, StyleSheet, View, TextInput, Platform, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import RequestHandler from '../data/RequestHandler'
import Colors from '../styles/Colors'
import { Container, Header, Content, Button, List, ListItem, Left, Body, Right, Thumbnail, Text, Item, Input, Icon  } from 'native-base';

export default class StudentInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {


    }
    this.handleSignOut = this.handleSignOut.bind(this)

  }

  handleSignOut(){
    
      this.props.handleSignOut()
    }
    

    renderTeamList(teams){
        let result = ""
        if(teams){
            let result = ""
            teams.map((team)=>{
            result += team.name+" "

            })
            return result
            
        }


    }



  render() {
      let user = this.props.user;
    
    return (
        <View style={styles.container}>
        <Container>
        <Header>
        <Text style={styles.header}>Profile</Text>
        </Header>
        <Content>
        <Item style={styles.thumbnailWrapper}>
        <Thumbnail large source={{uri: user.imgUrl}} />
        </Item>
          <Item>
            <Icon active name='person' />
            <Input value={user.name} disabled={true}/>
          </Item>
          <Item>
          <Icon active name='mail' />
          
            <Input value={user.mail} disabled={true}/>
          </Item>

            <Item>
            <Icon   active name='people' />
            
              <Input value={"Teams: " +  this.renderTeamList(user.teams)}disabled={true}/>              
            </Item>
           
            
            <Button iconLeft full style={{backgroundColor:Colors.focusedColor}} onPress={this.handleSignOut}>
            <Icon name='log-out' />
            <Text>Log out</Text>
          </Button>
          
          </Content>
      </Container>
      
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
      thumbnailWrapper: {
      paddingLeft: '10%',
      paddingRight: '10%',
    justifyContent:'center',
     alignItems:'center',
     flex:1,
     marginBottom: 20,
     marginTop: 20,
     paddingBottom: 3,

  },

  header: {
    fontSize: 18,
    color: Colors.secondaryColor,
    paddingTop:20,

    
    
  },

  logOutButton: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',

    
    
  },

  btnWrapper:{
    marginRight:40,
    marginLeft:40,
    marginTop:30,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor: Colors.secondaryColor,
    borderRadius:10,
    borderWidth: 1,
    width: '70%'
    
  }



});


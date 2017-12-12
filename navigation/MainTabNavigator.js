import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Colors from '../styles/Colors'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default TabNavigator(
  {
    Inbox: {
      screen: HomeScreen,
    },
 
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Inbox':
            iconName = 'md-chatboxes';
            break;
          case 'Profile':
            iconName = 'md-person';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.focusedColor : 'grey'}
            
          />
        );
      },
      tabBarOptions : {
        
       
      style: {
        backgroundColor: '#EFEFEF',
        paddingBottom: 2,
        activeBackgroundColor: "#EFEFEF",
        inactiveBackgroundColor: '#EFEFEF',
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: "green",
        showIcon: true,
      }
    }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    
  }
);

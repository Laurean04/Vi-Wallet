import React, {Component} from 'react'
import {
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Platform, 
  Image
   } from 'react-native'

import MainNavigator from './navigation/MainNavigator'
import TabNavigation from './navigation/TabNavigation'


export default class App extends Component {
  render() {
    return (
     
      <MainNavigator/>
     
    );
  }
}


const styles=StyleSheet.create({
    welcome:{
      fontSize:20,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color:'blue',
      backgroundColor: 'pink',
    },
});